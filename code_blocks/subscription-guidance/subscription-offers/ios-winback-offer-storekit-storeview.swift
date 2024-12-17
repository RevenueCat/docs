StoreView.forOffering(
    offering,   // The offering you'd like to use
    icon: { product in
        // Return your custom icon view for each product
        Image(systemName: "dollarsign.circle")
            .resizable()
            .aspectRatio(contentMode: .fit)
            .frame(width: 50, height: 50)
            .padding()
    },
    placeholderIcon: {
        // Return a custom placeholder icon while loading
        ProgressView()
            .progressViewStyle(.circular)
    }
)