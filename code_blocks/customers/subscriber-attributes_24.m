- (void)application:(UIApplication *)application 
didRegisterForRemoteNotificationsWithDeviceToken:(NSData *)deviceToken {
    [RCPurchases.sharedPurchases.attribution setPushToken:deviceToken];
}