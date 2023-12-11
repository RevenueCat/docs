@override
void initState() {
  super.initState();
  initPlatformState();
}

Future<void> initPlatformState() async {
  await Purchases.setDebugLogsEnabled(true);
  await Purchases.setup("public_sdk_key");
}