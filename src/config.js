import firebase from 'firebase';

console.log(process.env.REACT_APP_FB_API_KEY);

const config = {
    apiKey: process.env.REACT_APP_FB_API_KEY,
    authDomain: process.env.REACT_APP_FB_AUTH_DOM,
    databaseURL: process.env.REACT_APP_FB_DB_URL,
    projectId: process.env.REACT_APP_FB_PROJ_ID,
    storageBucket: process.env.REACT_APP_FB_STOR_BUCK,
    messagingSenderId: process.env.REACT_APP_FB_MS_ID,
    appId: process.env.REACT_APP_FB_APP_ID
};

firebase.initializeApp(config);
export default firebase;
