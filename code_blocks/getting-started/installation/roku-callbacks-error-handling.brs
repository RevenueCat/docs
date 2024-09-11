sub init()
  Purchases().logIn(my_user_id, sub(subscriber, error)
    if error <> invalid
      print "there was en error"
    else
      print subscriber
    end if
  end sub)

  ' To use a function as callback, pass its name as second parameter
  Purchases().logIn(my_user_id, "onSubscriberReceived")
end sub

sub onSubscriberReceived(e as object)
    data = e.GetData()
    if data.error <> invalid
      print "there was en error"
    else
      print data.result
    end if
end sub