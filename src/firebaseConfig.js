import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyBcMWk2yZTB41a7myvLLzs4K40vt_URmyk',

  authDomain: 'cold-react-spacex.firebaseapp.com',

  projectId: 'cold-react-spacex',

  storageBucket: 'cold-react-spacex.appspot.com',

  messagingSenderId: '29574038705',

  appId: '1:29574038705:web:fbb272bbc3125e650f4e90',
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
