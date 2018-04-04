import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
import { CookieService } from 'angular2-cookie/services/cookies.service';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from 'angularfire2';




import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LoginComponent } from './login/login.component';
import { MoblieComponent } from './nest_route/moblie/moblie.component';
import { LaptopComponent } from './nest_route/laptop/laptop.component';
import { HeadPhoneComponent } from './nest_route/head-phone/head-phone.component';
import { AirCondtionComponent } from './nest_route/air-condtion/air-condtion.component';
import { AllMoblieComponent } from './nest_route/moblie_routing/all-moblie/all-moblie.component';
import { MiComponent } from './nest_route/moblie_routing/mi/mi.component';
import { NokiaComponent } from './nest_route/moblie_routing/nokia/nokia.component';
import { AllLaptopComponent } from './nest_route/laptop/laptop_routing/all-laptop/all-laptop.component';
import { DellComponent } from './nest_route/laptop/laptop_routing/dell/dell.component';
import { SonyComponent } from './nest_route/laptop/laptop_routing/sony/sony.component';
import { AllHeadComponent } from './nest_route/head-phone/head_phone_routing/all-head/all-head.component';
import { BossComponent } from './nest_route/head-phone/head_phone_routing/boss/boss.component';
import { LgComponent } from './nest_route/air-condtion/ac_routing/lg/lg.component';
import { AllAcComponent } from './nest_route/air-condtion/ac_routing/all-ac/all-ac.component';
import { LoardComponent } from './nest_route/air-condtion/ac_routing/loard/loard.component';
import { UsersInfoComponent } from './users-info/users-info.component';
import { BasicInfoComponent } from './users-info/basic-info/basic-info.component';
import { AddressInfoComponent } from './users-info/address-info/address-info.component';
import { ParoductInfoComponent } from './users-info/paroduct-info/paroduct-info.component';
import { PerivacyPolicyComponent } from './perivacy-policy/perivacy-policy.component';
import { SartComponent } from './nest_route/laptop/laptop_routing/sart/sart.component';


// this is facebook login start
// tslint:disable-next-line:prefer-const

const firebaseConfig = {
  apiKey: 'AIzaSyAtY57CxtQvfVFlsrzkblNLS1dmFa-CRQY',
  authDomain: 'ecommer-71741.firebaseapp.com',
  databaseURL: 'https://ecommer-71741.firebaseio.com',
  projectId: 'ecommer-71741',
  storageBucket: 'ecommer-71741.appspot.com',
  messagingSenderId: '358510743096'
};

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    SignUpComponent,
    LoginComponent,
    MoblieComponent,
    LaptopComponent,
    HeadPhoneComponent,
    AirCondtionComponent,
    AllMoblieComponent,
    MiComponent,
    NokiaComponent,
    AllLaptopComponent,
    DellComponent,
    SonyComponent,
    AllHeadComponent,
    BossComponent,
    LgComponent,
    AllAcComponent,
    LoardComponent,
    UsersInfoComponent,
    BasicInfoComponent,
    AddressInfoComponent,
    ParoductInfoComponent,
    PerivacyPolicyComponent,
    SartComponent,
  ],
  imports: [
    // SelfbitsAngularModule.initializeApp(APPCONFIG),
    // SocialLoginModule,
    AngularFireModule.initializeApp(firebaseConfig, 'angular-auth'),
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    HttpModule,
    RouterModule.forRoot([
          {
            path: '', component: HomeComponent,
            children: [
              {
                path: '', component: MoblieComponent,
                children: [
                  {path: '', component: AllMoblieComponent},
                  {path: 'kadai-suit', component: MiComponent},
                  {path: 'print_suit', component: NokiaComponent}
                ]
              },
              {
                path: 'pants_sart', component: LaptopComponent,
                children: [
                   {path: '', component: AllLaptopComponent },
                   {path: 'safari_suit', component: DellComponent },
                   {path: 'pants', component: SonyComponent },
                   {path: 'sart', component: SartComponent }
                ]
              },
              {
                path: 'bed_sheet', component: HeadPhoneComponent,
                children: [
                  {path: '', component: AllHeadComponent },
                  {path: 'duble_bed', component: BossComponent }
               ]
              },
              {
                path: 'towels', component: AirCondtionComponent,
                children: [
                  {path: '', component: AllAcComponent},
                  {path: 'small_towels', component: LgComponent},
                  {path: 'big_towels', component: LoardComponent}
                ]
              }
            ]
           },
          {path: 'about', component: AboutComponent},
          {path: 'login', component: LoginComponent },
          {path: 'signup', component: SignUpComponent },
          {path: 'privacy-policy', component: PerivacyPolicyComponent},
          {path: 'user_info', component: UsersInfoComponent,
          children: [
            {path: '' , component: BasicInfoComponent},
            { path: 'address', component: AddressInfoComponent},
            { path: 'product_info', component: ParoductInfoComponent}
          ]
        }
    ])
  ],
  providers: [ CookieService],
  bootstrap: [AppComponent]
})
export class AppModule {  }
