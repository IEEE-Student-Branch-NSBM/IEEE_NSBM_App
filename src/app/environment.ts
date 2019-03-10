export const FirebaseConfig = {
    apiKey: "AIzaSyAfdBKZRSeWSGRWVpxzdCQRVBJ6uSDKO78",
    authDomain: "ieeensbmapp.firebaseapp.com",
    databaseURL: "https://ieeensbmapp.firebaseio.com",
    projectId: "ieeensbmapp",
    storageBucket: "ieeensbmapp.appspot.com",
    messagingSenderId: "596931442566"
  };

  export const snapshotToArray = snapshot => {
    let returnArr = [];

    snapshot.forEach(childSnapshot => {
        let item = childSnapshot.val();
        item.key = childSnapshot.key;
        returnArr.push(item);
    });

    return returnArr;
};