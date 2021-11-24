import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html'
})
export class MenuComponent implements OnInit {
  links:string[]=['login','registro'];
  linkActivo:string=this.links[0];
  constructor() { }

  ngOnInit(): void {
  }

}
