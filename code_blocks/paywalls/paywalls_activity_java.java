@OptIn(markerClass = ExperimentalPreviewRevenueCatUIPurchasesAPI.class)
public class MainActivity extends AppCompatActivity implements PaywallResultHandler {
    private PaywallActivityLauncher launcher;
    private static final String requiredEntitlementIdentifier = "MY_ENTITLEMENT_ID";

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        launcher = new PaywallActivityLauncher(this, this);
    }

    private void launchPaywallActivity() {
        // This will launch the paywall only if the user doesn't have the given entitlement id active.
        launcher.launchIfNeeded(requiredEntitlementIdentifier);
        // or if you want to launch it without any conditions
        launcher.launch();
    }

    @Override
    public void onActivityResult(PaywallResult result) {
        // Handle result
    }
}