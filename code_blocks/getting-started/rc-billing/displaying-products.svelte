<script lang="ts">
  import type {
    Purchases,
    CustomerInfo,
    Offerings,
    PurchasesError,
  } from "@revenuecat/purchases-js";
  import { onMount } from "svelte";

  export let purchases: Purchases;
  export let userId: string;

  let offerings: Offerings | undefined;
  let customerInfo: CustomerInfo | undefined;
  onMount(async () => {
    offerings = await purchases?.getOfferings(userId);
    customerInfo = await purchases?.getCustomerInfo(userId);
  });
</script>

{#key customerInfo}
  {#if customerInfo && offerings}
    {#if Object.keys(customerInfo.entitlements.active).length > 0}
      <p>You are subscribed to the following entitlements:</p>
      <ul>
        {#each Object.entries(customerInfo.entitlements.active) as [key, value]}
          <li>{key}: {value.expirationDate}</li>
        {/each}
      </ul>
    {:else}
      <p>You are not subscribed!</p>
      <ul>
        {#each offerings.current?.availablePackages ?? [] as pkg}
          <li>
            {pkg.identifier}:
            {(pkg.rcBillingProduct.currentPrice?.amount ?? 0) / 100}
            {pkg.rcBillingProduct.currentPrice?.currency}
            / {pkg.rcBillingProduct.normalPeriodDuration}
            <button
              on:click={async () => {
                try {
                  customerInfo = (await purchases.purchasePackage(userId, pkg))
                    .customerInfo;
                } catch (e) {
                  if (e instanceof PurchasesError) {
                    window.alert(`Error performing purchase: ${e}`);
                  } else {
                    window.alert(`Unknown error: ${e}`);
                  }
                }
              }}
            >
              Buy!
            </button>
          </li>
        {/each}
      </ul>
    {/if}
  {/if}
{/key}
