' success: Will be true if the attributes were successfully synchronized
' error: Will be present if there was an error during the process
Purchases().setAttributes({ "my attribute": "my value" }, sub(success, error)
end sub)