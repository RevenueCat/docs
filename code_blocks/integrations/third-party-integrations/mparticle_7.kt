import com.mparticle.MParticle
import com.mparticle.identity.IdentityApiRequest
import com.revenuecat.purchases.Purchases

val request = IdentityApiRequest.withEmptyUser().also {
    it.userId = "my_app_user_id"
}

MParticle.getInstance()?.identity?.login(request)?.addSuccessListener { result ->
    val mPid = result.user.id
    Purchases.sharedInstance.attribution.collectDeviceIdentifiers()
    Purchases.sharedInstance.attribution.setMparticleID(mPid.toString())
}

