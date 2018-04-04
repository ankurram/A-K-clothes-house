import { Component, OnInit } from '@angular/core';
import {Http, Headers, Response} from '@angular/http';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-address-info',
  templateUrl: './address-info.component.html',
  styleUrls: ['./address-info.component.css']
})
export class AddressInfoComponent implements OnInit {

  constructor(private http: Http) {
  }
  public value = '';
  address_detalis = [];
  showForm = true;
  showAddress = false ;
  onSubmited(addressInfo) {
    // console.log('this is userinfo', address_info.value);
    console.log(addressInfo.value);
  }
  ngOnInit() {
    console.log('user_info');
    this.http.get('http://localhost:8000/info/address_detalis').subscribe(
      (res: Response) => {
        console.log('the boos');
        console.log(res);
        this.address_detalis =  res.json();
        console.log(this.address_detalis);
        if (this.address_detalis.length = 0) {
            this.showForm = false ;
        } else {
           console.log('this is address of user', this.address_detalis);
            this.showAddress = true;
          }
      });
  }

}
