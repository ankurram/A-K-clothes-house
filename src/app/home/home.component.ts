import { Component, OnInit } from '@angular/core';
import { CookieService } from 'angular2-cookie/services/cookies.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public key = '';
  constructor(private _cookieService: CookieService) {

    console.log(this._cookieService.get('key'));

    this.key = this._cookieService.get('key');

    console.log(this.key);

  }

  ngOnInit() {
  }

}
