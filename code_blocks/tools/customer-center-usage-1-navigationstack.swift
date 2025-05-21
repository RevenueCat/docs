import RevenueCatUI
...

var body: some View {
    NavigationStack {
        HomeView()
            .navigationTitle("Home")
            .navigationBarTitleDisplayMode(.inline)
            .toolbar {
                ToolbarItem(placement: .topBarLeading) {
                    Button {
                    } label: {
                        Image(systemName: "line.3.horizontal")
                    }
                }
                ToolbarItem(placement: .topBarTrailing) {
                    Button {
                        self.isCustomerCenterPresented = true
                    } label: {
                        Image(systemName: "person.crop.circle")
                    }
                }
            }
    }
    .navigationDestination(
        isPresented: isPresented
    ) {
        CustomerCenterView(
            usesNavigationStack: true,
            usesExistingNavigation: true,
            shouldShowCloseButton: false
        )
    }
    .foregroundColor(.white)
    .sheet(isPresented: $isCustomerCenterPresented) {
        CustomerCenterView()
    }
}