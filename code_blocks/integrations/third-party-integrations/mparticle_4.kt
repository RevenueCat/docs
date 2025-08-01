import com.mparticle.MParticle
import com.mparticle.identity.IdentityApiRequest
import com.revenuecat.purchases.Purchases

MParticle.getInstance()?.identity?.logout()?.addSuccessListener {
    Purchases.sharedInstance.reset()
}

