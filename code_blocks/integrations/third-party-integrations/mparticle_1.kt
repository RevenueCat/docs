import com.mparticle.MParticle
import com.mparticle.MParticleOptions
import com.mparticle.identity.IdentityApiRequest
import com.revenuecat.purchases.Purchases

val identityRequest = IdentityApiRequest.withEmptyUser().also {
    it.userId = "my_app_user_id"
}

val options = MParticleOptions.builder(this)
    .credentials("API_KEY", "API_SECRET")
    .identity(identityRequest)
    .build()

MParticle.start(this, options)
Purchases.configure(this, "public_sdk_key", appUserID = "my_app_user_id")

