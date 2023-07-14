import { createApp } from 'vue'
import App from './App.vue'
import router from './router';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDwcFrI2gE2mmVfYa8r_QIOdIwzAt655sc",
  authDomain: "nasa-api-pages.firebaseapp.com",
  projectId: "nasa-api-pages",
  storageBucket: "nasa-api-pages.appspot.com",
  messagingSenderId: "966654888356",
  appId: "1:966654888356:web:09df2f050da75fa0235931"
};

// Initialize Firebase
initializeApp(firebaseConfig);

createApp(App).use(router).mount('#app')