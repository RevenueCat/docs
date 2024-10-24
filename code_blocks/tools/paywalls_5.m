
#import "ViewController.h"
@import RevenueCat;
@import RevenueCatUI;

@interface ViewController () <RCPaywallViewControllerDelegate>

@end

@implementation ViewController

- (void)viewDidLoad {
    [super viewDidLoad];
    // Do any additional setup after loading the view.
}

- (IBAction)showPaywallTapped:(id)sender {
    [RCPurchases.sharedPurchases offeringsWithCompletionHandler:^(RCOfferings * _Nullable offerings, NSError * _Nullable error) {
        if (error) {
            NSLog(@"Error fetching offerings: %@", error.localizedDescription);
            return;
        }

        RCOffering *offering = offerings.current;
        if (offering) {
            dispatch_async(dispatch_get_main_queue(), ^{
                NSLog(@"Current offering identifier: %@", offering.identifier);
                RCPaywallViewController *controller = [[RCPaywallViewController alloc] initWithOffering:offering
                                                                                     displayCloseButton:YES
                                                                                 shouldBlockTouchEvents:NO
                                                                                dismissRequestedHandler:^(RCPaywallViewController * _Nonnull controller) {
                    NSLog(@"dismiss request!");
                    [controller dismissViewControllerAnimated:YES completion:nil];
                }];
                controller.delegate = self;
                [self presentViewController:controller animated:YES completion:nil];
            });
        } else {
            NSLog(@"No current offering available");
        }
    }];
}

#pragma mark - PaywallViewControllerDelegate

- (void)paywallViewController:(RCPaywallViewController *)controller
didFinishPurchasingWithCustomerInfo:(RCCustomerInfo *)customerInfo {
    // Handle purchase completion here
}

@end
