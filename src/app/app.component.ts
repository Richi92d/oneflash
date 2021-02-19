import { Component } from '@angular/core';
import firebase from 'firebase';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor() {
    const firebaseConfig = {
      apiKey: "AIzaSyCKcaP14A4QktQtYjjLpTLGUSfwlg_Gc1A",
      authDomain: "authentication-23ca2.firebaseapp.com",
      projectId: "authentication-23ca2",
      storageBucket: "authentication-23ca2.appspot.com",
      messagingSenderId: "196451137310",
      appId: "1:196451137310:web:1eab9076bffdde91ee7b0f"
    };
    firebase.initializeApp(firebaseConfig);
  }

}
