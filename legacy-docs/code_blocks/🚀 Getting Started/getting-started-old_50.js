// subscribe to the window event onCustomerInfoUpdated to get any changes that happen in the customerInfo
window.addEventListener("onCustomerInfoUpdated", onCustomerInfoUpdated, false);

//...

onCustomerInfoUpdated: function(info) {
    // handle any changes to customerInfo
}