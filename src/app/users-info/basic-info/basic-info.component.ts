import { Component, OnInit } from '@angular/core';
import {Http, Headers, Response} from '@angular/http';

@Component({
  selector: 'app-basic-info',
  templateUrl: './basic-info.component.html',
  styleUrls: ['./basic-info.component.css']
})
export class BasicInfoComponent implements OnInit {

  constructor(private http: Http) { }
  user_detalis = [];

  ngOnInit() {
    console.log('user_info');
    this.http.get('http://localhost:8000/info/user_detalis').subscribe(
      (res: Response) => {
        console.log(res);
        this.user_detalis =  res.json();
        console.log(this.user_detalis);
      });
  }

}

