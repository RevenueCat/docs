sub init()
  ' Initialize the SDK
  Purchases().configure({
      "apiKey": "roku_XXXXX",
  })
  ' Login the user
  Purchases().logIn(m.my_user_id, sub(subscriber, error)
      if error = invalid
        ' If my entitlement is not active, fetch offerings to show the paywall
        if subscriber.entitlements.my_entitlement.isActive = false
          fetchOfferings()
        end if
      end if
  end sub)
end sub

sub fetchOfferings()
  Purchases().getOfferings(sub(offerings, error)
    if error = invalid
      ' Use offerings to build your paywall UI.
      ' Then call purchaseProduct with the one selected by the user
      purchaseProduct(offerings.current.annual)
    end if
  end sub)
end sub

' Call purchaseProduct when the user decides to initiate a purchase
sub purchaseProduct(product)
  Purchases().purchase(product, sub(result, error)
    if error = invalid
      print "Purchase successful"
      print result.transaction
      print result.subscriber
    end if
  end sub)
end sub