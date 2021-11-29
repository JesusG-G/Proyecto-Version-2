import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './Pages/home/home.component';
import { BienvenidaComponent } from './Pages/bienvenida/bienvenida.component';
import { EfectuarCambioDireccionActividadEconomicaComponent } from './Pages/Solicitudes/efectuar-cambio-direccion-actividad-economica/efectuar-cambio-direccion-actividad-economica.component';
import { EfectuarExtencionActividadEconomicaComponent } from './Pages/Solicitudes/efectuar-extencion-actividad-economica/efectuar-extencion-actividad-economica.component';
import { EfectuarReclasificacionActividadEconomicaComponent } from './Pages/Solicitudes/efectuar-reclasificacion-actividad-economica/efectuar-reclasificacion-actividad-economica.component';
import { EfectuarRetiroLicenciaActividadesEconomicaComponent } from './Pages/Solicitudes/efectuar-retiro-licencia-actividades-economica/efectuar-retiro-licencia-actividades-economica.component';
import { LicenciaActividadesEconomicasTranseunteComponent } from './Pages/Solicitudes/licencia-actividades-economicas-transeunte/licencia-actividades-economicas-transeunte.component';
import { LicenciadeActividadEconomicaComponent } from './Pages/Solicitudes/licenciade-actividad-economica/licenciade-actividad-economica.component';
import { OtorgarPermisoFuncionamientoComponent } from './Pages/Solicitudes/otorgar-permiso-funcionamiento/otorgar-permiso-funcionamiento.component';
import { RenovacionLicenciaActividadesEconomicasLicoresComponent } from './Pages/Solicitudes/renovacion-licencia-actividades-economicas-licores/renovacion-licencia-actividades-economicas-licores.component';
import { SolicitarSolvenciaMunicipalComponent } from './Pages/Solicitudes/solicitar-solvencia-municipal/solicitar-solvencia-municipal.component';
import { TramitarConstanciaDomicilioFiscalComponent } from './Pages/Solicitudes/tramitar-constancia-domicilio-fiscal/tramitar-constancia-domicilio-fiscal.component';


const routes:Routes=[
  {
    path:'',
    component:HomeComponent,
    children:[
      {
        path:'Inicio',
        component: BienvenidaComponent
      },
      {
        path:'CambioDireccionActividadEconomica',
        component: EfectuarCambioDireccionActividadEconomicaComponent
      },
      {
        path:'ExtencionActividadEconomica',
        component: EfectuarExtencionActividadEconomicaComponent
      },
      {
        path:'ReclasificacionActividadEconomica',
        component: EfectuarReclasificacionActividadEconomicaComponent
      },
      {
        path:'RetiroLicenciaActividadesEconomica',
        component:EfectuarRetiroLicenciaActividadesEconomicaComponent
      },
      {
        path:'LicenciaActividadesEconomicasTranseunte',
        component: LicenciaActividadesEconomicasTranseunteComponent
      },
      {
        path: 'LicenciaActividadEconomica',
        component:LicenciadeActividadEconomicaComponent
      },
      {
        path:'PermisoFuncionamiento',
        component:OtorgarPermisoFuncionamientoComponent
      },
      {
        path:'RenovacionLicenciaAELicores',
        component:RenovacionLicenciaActividadesEconomicasLicoresComponent
      },
      {
        path:'SolvenciaMunicipal',
        component:SolicitarSolvenciaMunicipalComponent
      },
      {
        path:'DomicilioFiscal',
        component:TramitarConstanciaDomicilioFiscalComponent
      },
      {
        path:'**',
        redirectTo: 'Inicio'
      }
    ]
  }
]

@NgModule({
  imports:[
    RouterModule.forChild(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class AdminRoutingModule { }
