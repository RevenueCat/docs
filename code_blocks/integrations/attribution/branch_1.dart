import 'package:flutter_branch_sdk/flutter_branch_sdk.dart';
import 'package:purchases_flutter/purchases_flutter.dart';

// login
FlutterBranchSdk.setIdentity('my_app_user_id');

// Optional: Use a different App User ID between Branch and RevenueCat
Purchases.setAttributes({'\$branchId': '<custom_branch_user_id>'});

// logout
FlutterBranchSdk.logout();
