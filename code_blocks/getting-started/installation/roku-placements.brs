Purchases().getOfferings(sub(offerings, error)
  if error <> invalid
    print "There was an error fetching offerings
  else
    my_offering = offerings.currentOfferingForPlacement("my_placement")
  end if
end sub)