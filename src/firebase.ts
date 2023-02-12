import { initializeApp } from 'firebase/app'; 
import { getDatabase } from  'firebase/database';
import { getAuth } from 'firebase/auth'


const firebaseConfig = {
    apiKey: "AIzaSyBvomVjtxtZwDNrHPWV_b6n4Rq9htvqRsA",
    authDomain: "swampy-sentiments-5e0b6.firebaseapp.com",
    databaseURL: "https://swampy-sentiments-5e0b6-default-rtdb.firebaseio.com",
    projectId: "swampy-sentiments-5e0b6",
    storageBucket: "swampy-sentiments-5e0b6.appspot.com",
    messagingSenderId: "56045351157",
    appId: "1:56045351157:web:3dce708a100fd0f85455bc",
    measurementId: "G-7K7TCC469L"
};


const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const auth = getAuth(app)

export { app, database, auth };