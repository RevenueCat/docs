sub init()
  ' Initialize the SDK
  Purchases().configure({
      "apiKey": "roku_XXXXX",
      "userId": "my_user_id" ' optional, will use an anonymous user id if not provided
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
      ' Then call purchasePackage with the one selected by the user
      purchasePackage(offerings.current().annual)
    end if
  end sub)
end sub

' Call purchasePackage when the user decides to initiate a purchase
sub purchasePackage(package)
  Purchases().purchase({ package: package }, sub(result, error)
    if error = invalid
      print "Purchase successful"
      print result.transaction
      print result.subscriber
    end if
  end sub)
end sub