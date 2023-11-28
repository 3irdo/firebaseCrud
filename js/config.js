
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-app.js";
  import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-firestore.js";
  
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyBKfYWr__jKgZaj0RXrF45_Z0Y7LM4eNes",
    authDomain: "stemok-e08bd.firebaseapp.com",
    projectId: "stemok-e08bd",
    storageBucket: "stemok-e08bd.appspot.com",
    messagingSenderId: "12254320412",
    appId: "1:12254320412:web:a5700d9378adf9b6f70cd9"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

 const db = getFirestore(app);

 export { db, collection, addDoc };

 export const saveTask = (title, description, imgUrl) => 
   addDoc(collection(db, "task"), { title, description, imgUrl });
  
