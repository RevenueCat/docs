// subscribe to the window event onPurchaserInfoUpdated to get any changes that happen in the purchaserInfo
window.addEventListener("onPurchaserInfoUpdated", onPurchaserInfoUpdated, false);

//...

onPurchaserInfoUpdated: function(info) {
    // handle any changes to purchaserInfo
}