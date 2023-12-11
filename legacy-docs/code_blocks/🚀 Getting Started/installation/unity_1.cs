using System;
using System.Collections.Generic;
using UnityEngine;

public class PurchasesListener : Purchases.UpdatedCustomerInfoListener
{
    public override void CustomerInfoReceived(Purchases.CustomerInfo customerInfo)
    {
        // display new CustomerInfo
    }

    private void Start()
    {
        var purchases = GetComponent<Purchases>();
        purchases.SetDebugLogsEnabled(true);
        purchases.GetOfferings((offerings, error) =>
        {
            if (error != null)
            {
                // show error
            }
            else
            {
                // show offering
            }
        });
    }

    public void BeginPurchase(Purchases.Package package)
    {
        var purchases = GetComponent<Purchases>();
        purchases.PurchasePackage(package, (productIdentifier, customerInfo, userCancelled, error) =>
        {
            if (!userCancelled)
            {
                if (error != null)
                {
                    // show error
                }
                else
                {
                    // show updated Customer Info
                }
            }
            else
            {
                // user cancelled, don't show an error
            }
        });
    }

    void RestoreClicked()
    {
        var purchases = GetComponent<Purchases>();
        purchases.RestorePurchases((customerInfo, error) =>
        {
            if (error != null)
            {
                // show error
            }
            else
            {
                // show updated Customer Info
            }
        });
    }
}