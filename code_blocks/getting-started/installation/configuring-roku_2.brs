sub init()
    Purchases().configure({
        "apiKey": "roku_XXXXX",
        "userId": "my_user_id" ' optional, will use an anonymous user id if not provided
    })
end sub
