import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
    `
     .container{
        margin: 10px;
     }
     .espaciado{
        margin-right: 15px;
     }
     `

  ]
})
export class HomeComponent implements OnInit {
  mostrar: boolean=false;

  
  constructor() { }

  ngOnInit(): void {
  }

}
