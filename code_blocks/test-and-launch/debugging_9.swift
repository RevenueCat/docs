// To display the overlay in SwiftUI, add the `.debugRevenueCatOverlay()` to your view.

// This will display it automatically on app-launch:
ContentView()
    .debugRevenueCatOverlay()

// Alternatively, you can control when to present it:
@State private var debugOverlayVisible: Bool = false

var body: some View {
    Button {
        self.debugOverlayVisible = true
    } label: {
        Text("Display debug screen")
    }
    .debugRevenueCatOverlay(isPresented: self.$debugOverlayVisible)
}
