// Get the default device language
var lang = Locale.getDefault().language

// Use the default device language as your metadata key
var localizedCopy = offerings.current?.getMetadataString(lang, "Go premium!")

root.findViewById<TextView>(R.id.description).text = localizedCopy
