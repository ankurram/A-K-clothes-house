import { Component, OnInit } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { HomeComponent } from '../home/home.component';
import {Router} from '@angular/router';
import { CookieService } from 'angular2-cookie/services/cookies.service';
import { INT_TYPE } from '@angular/compiler/src/output/output_ast';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth, AngularFireAuthProvider } from 'angularfire2/auth';
import * as firebase from 'firebase';

// tslint:disable-next-line:import-blacklist
import 'rxjs/Rx';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [AngularFireDatabase, AngularFireAuth]
})
export class LoginComponent implements OnInit {

  // tslint:disable-next-line:max-line-length
  constructor(private http: Http, private router: Router, private _cookieService: CookieService, private fb: AngularFireDatabase , private fbAuth: AngularFireAuth ) {
  }
  Error_line = 'please fillup the empty field';
  worng_user = 'plase enter the correct infornation';
  show_Msg = false;
  worrng_Msg = false;
  login_user = {};
  userDetalis: any ;
  loginUser  = function(olduser) {
    console.log(olduser);
    this.login_user = {
         user_email: olduser.email,
         user_password : olduser.pwd
    };
    // console.log('ankur', this.login_user);
    this.http.post('http://localhost:8000/info/login/', this.login_user).map(res => res.json()).subscribe(data => {
      console.log(data);
      if (data.value === 1) {
         this.show_Msg = true;
         this.worrng_Msg = false;
      } else if (data.value === 2) {
         this.worrng_Msg = true;
         this.show_Msg = false;

       } else {
          this._cookieService.put('key', data.name);
          window.location.href = '/';
       }
      // localStorage.setItem('cookie', data.name);
      // this.router.navigate(['/']);
  });
  };
  socialSignIn () {
       const  facebookAuth: any = this.fbAuth.auth.signInWithPopup (
           new firebase.auth.FacebookAuthProvider()
       );
       facebookAuth.then(resp => {
            console.log(resp.additionalUserInfo.profile);
            this.userDetalis = {
              email: resp.additionalUserInfo.profile.email,
              displayName: resp.additionalUserInfo.profile.name,
              photoUrl: resp.additionalUserInfo.profile.picture.data.url

            };
            console.log('there post method start', this.userDetalis);
            this.http.post('http://localhost:8000/info/store_social_info', this.userDetalis).map(res => res.json()).subscribe(data => {
              console.log(data);
              this._cookieService.put('key', data.name);
              window.location.href = '/';
          });
       });
  }
  loginGoogle () {
    const googleAuth: any = this.fbAuth.auth.signInWithPopup (
      new firebase.auth.GoogleAuthProvider( )
    );
      googleAuth.then(resp => {
          this.userDetalis = {
            email: resp.user.email,
            displayName: resp.user.displayName,
            photoUrl: resp.user.photoURL
          };
          console.log('there post method start', this.userDetalis);
          this.http.post('http://localhost:8000/info/store_social_info', this.userDetalis).map(res => res.json()).subscribe(data => {
            console.log(data);
            this._cookieService.put('key', data.name);
            window.location.href = '/';
        });
    });
  }
  ngOnInit() {
  }

}
