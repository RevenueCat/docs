rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Replace 'your_customers_collection' with your actual customers collection name
    match /your_customers_collection/{uid} {
      allow read: if request.auth.uid == uid;
    }

    // Replace 'your_events_collection' with your actual events collection name
    match /your_events_collection/{id} {
      allow read: if request.auth.uid == resource.data.app_user_id;
    }
  }
}