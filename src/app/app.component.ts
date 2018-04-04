import { Component } from '@angular/core';
import { CookieService } from 'angular2-cookie/services/cookies.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  public key = '';
  constructor(private _cookieService: CookieService) {

    console.log(this._cookieService.get('key'));

    this.key = this._cookieService.get('key');

    console.log(this.key);

  }
}
