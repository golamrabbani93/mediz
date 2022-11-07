// Import the functions you need from the SDKs you need
import {initializeApp} from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: 'AIzaSyC8wOyvsONiol71hxAmRrUkCmXL1SX_AlE',
	authDomain: 'mediz-clinic.firebaseapp.com',
	projectId: 'mediz-clinic',
	storageBucket: 'mediz-clinic.appspot.com',
	messagingSenderId: '553118800598',
	appId: '1:553118800598:web:b8c417345f954ca330c777',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
