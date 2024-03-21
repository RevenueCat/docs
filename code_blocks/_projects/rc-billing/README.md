# RC Billing docs code snippets
This folder contains the RC Billing code snippets for the docs in the file `rc-billing-doc-snippets.ts`. Each snippet is contained in a region that starts with `// MARK {identifier}` and ends with `// END`. Snippets are then extracted by passing a `region` parameter to the tab of the `RCCodeBlock` in the documentation, like this:

```
import rcBillingContent from "!!raw-loader!@site/code_blocks/_projects/rc-billing/rc-billing-doc-snippets.ts";

<RCCodeBlock tabs={[
    { type: 'ts', content: rcBillingContent, name: "Web (JS/TS)" , region: "Configuring SDK"},
]} />
```

## Testing code snippets
The above approach allows testing the code snippets. To test the code snippets, go into the folder and install the dependencies by using 
```
npm install
```

Please note: While RC Billing is not yet public, you will need to set a `NODE_AUTH_TOKEN`, see [here](https://github.com/RevenueCat/purchases-js?tab=readme-ov-file#installation), to install the `@revenuecat/purchases-js` package.

If there has been an update to the `purchases-js` package, you might have to run
```
npm install @revenuecat/purchases-js@latest
```

To run the tests, run the following command:
```
npm run test
```

### Known limitations
Right now, the tests mostly test the functionality of getting offerings and product details. The purchasing test only tests that the purchase method is called, it doesn't actually make a purchase – the problem here is that to do that we would need to use Puppeteer or something similar to create a browser environment. 

## Adding code snippets
When adding a new code snippet, please also add tests in the file `rc-billing-doc-snippets.test.ts`. You can have a look at the example tests to get inspiration.