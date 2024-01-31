// Changing the button color 
var backgroundColor = Color.parseColor(offering?.getMetadataString("button_color","#292929")

viewHolder.view.findViewById<CardView>(R.id.card_view).setCardBackgroundColor(backgroundColor))

// Changing the copy
var paywallCopy = offerings.current?.getMetadataString("description", "Go premium!")

root.findViewById<TextView>(R.id.description).text = paywallCopy
