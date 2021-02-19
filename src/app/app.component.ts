import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import firebase from 'firebase';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  language: string = 'en';

  constructor(private translate: TranslateService) {
    const firebaseConfig = {
      apiKey: "AIzaSyCKcaP14A4QktQtYjjLpTLGUSfwlg_Gc1A",
      authDomain: "authentication-23ca2.firebaseapp.com",
      projectId: "authentication-23ca2",
      storageBucket: "authentication-23ca2.appspot.com",
      messagingSenderId: "196451137310",
      appId: "1:196451137310:web:1eab9076bffdde91ee7b0f"
    };
    firebase.initializeApp(firebaseConfig);
    translate.setDefaultLang(this.language);
  }

  changeLanguage(): void {
    if (this.language === 'fr') {
      this.language = 'en';
    } else {
      this.translate.use('fr');
    }
    this.translate.use(this.language);
  }

}
