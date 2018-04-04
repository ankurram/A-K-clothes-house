import { Component, OnInit } from '@angular/core';
import {Http, Headers, Response} from '@angular/http';


@Component({
  selector: 'app-all-moblie',
  templateUrl: './all-moblie.component.html',
  styleUrls: ['./all-moblie.component.css']
})
export class AllMoblieComponent implements OnInit {

  constructor (private http: Http) { }
       products = [];
     clickme() {
       console.log('ankur');
     }

  ngOnInit() {
      console.log('ankur ram ');
      this.http.get('http://localhost:8000/info/all_moblie').subscribe(
     (res: Response) => {
       console.log(res);
       this.products =  res.json();
       console.log(this.products);
     });

  }
}
