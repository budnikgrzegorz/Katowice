import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-senior',
  templateUrl: './senior.component.html',
  styleUrls: ['./senior.component.css']
})
export class SeniorComponent implements OnInit {

  senior: any = '/assets/imges/seniorzy.jpg';
seniorzy: any;
  constructor() { }

  ngOnInit() {
  }

}
