import Purchases, { LOG_LEVEL } from 'cordova-plugin-purchases/www/plugin';

const Tab1: React.FC = () => {
  Purchases.setLogLevel(LOG_LEVEL.DEBUG); // Enable to get debug logs
  Purchases.purchases.configureWith({
    apiKey: "my_api_key",
    appUserID: "my_app_user_id"
  });
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>My App</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonButton onClick={purchasePackage}>Subscribe now</IonButton>
      </IonContent>
    </IonPage>
  );
};