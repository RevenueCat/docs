' subscriber: The new user subscriber info
' error: Will be present if there was an error during the process
Purchases().logIn("my_user_id", sub(subscriber, error)
end sub)

' Calling logOut generates a new anonymous user
' subscriber: The new anonymous user subscriber info
' error: Will be present if there was an error during the process
Purchases().logOut(sub(subscriber, error)
end sub)