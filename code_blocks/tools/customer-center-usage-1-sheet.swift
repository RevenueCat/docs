import RevenueCatUI
...

var body: some View {
    Group {
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
    }
    .foregroundColor(.white)
    .sheet(isPresented: $isCustomerCenterPresented) {
        CustomerCenterView()
    }
}