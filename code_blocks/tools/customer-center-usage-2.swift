VStack {
    Button {
        self.presentingCustomerCenter = true
    } label: {
        TemplateLabel(name: "Customer Center", icon: "person.fill")
    }
}
.presentCustomerCenter(isPresented: self.$presentingCustomerCenter) {
    self.presentingCustomerCenter = false
}