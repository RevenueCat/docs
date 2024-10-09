#import <UIKit/UIKit.h>
@import RevenueCat;
@import RevenueCatUI;

@interface ViewController : UIViewController <PaywallViewControllerDelegate>

@end

@implementation ViewController

- (IBAction)presentPaywall {
    PaywallViewController *controller = [[PaywallViewController alloc] init];
    controller.delegate = self;
    
    [self presentViewController:controller animated:YES completion:nil];
}

#pragma mark - PaywallViewControllerDelegate

- (void)paywallViewController:(PaywallViewController *)controller didFinishPurchasingWithCustomerInfo:(CustomerInfo *)customerInfo {
    // Handle purchase completion here
}

@end
