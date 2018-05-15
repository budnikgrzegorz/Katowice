import { Component, Renderer2, ElementRef, OnInit } from '@angular/core';


@Component({
  selector: 'app-academy',
  templateUrl: './academy.component.html',
  styleUrls: ['./academy.component.css']
})
export class AcademyComponent implements OnInit {

akademia: any;

  constructor(private el: ElementRef , private renderer: Renderer2) { }

  ngOnInit(): void {
    document.body.classList.add('bg-img');

  }

}
