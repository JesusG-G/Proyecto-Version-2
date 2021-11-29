import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CRUDService } from '../../../Login-Registro/services/crud.service';

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

  
  constructor(private service:CRUDService, private router:Router) {
    this.service.cedulaInicioSesion;
   }

  ngOnInit(): void {
  }
  logout(){
    
    this.service.deleteToken();
    this.router.navigate(['auth']);
    //window.location.href=window.location.href;
  }
}

