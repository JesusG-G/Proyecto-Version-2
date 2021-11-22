import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuarioRoutingModule } from './usuario-routing.module';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../material/material.module';

//Compoenentes
import { HomeComponent } from './Pages/home/home.component';
import { LicenciadeActividadEconomicaComponent } from './Pages/Solicitudes/licenciade-actividad-economica/licenciade-actividad-economica.component';
import { LicenciadeExpendidodeBebidasAlcoholicasComponent } from './Pages/Solicitudes/licenciade-expendidode-bebidas-alcoholicas/licenciade-expendidode-bebidas-alcoholicas.component';
import { RenovacionLicenciaActividadesEconomicasLicoresComponent } from './Pages/Solicitudes/renovacion-licencia-actividades-economicas-licores/renovacion-licencia-actividades-economicas-licores.component';
import { EfectuarExtencionActividadEconomicaComponent } from './Pages/Solicitudes/efectuar-extencion-actividad-economica/efectuar-extencion-actividad-economica.component';
import { EfectuarReclasificacionActividadEconomicaComponent } from './Pages/Solicitudes/efectuar-reclasificacion-actividad-economica/efectuar-reclasificacion-actividad-economica.component';
import { LicenciaActividadesEconomicasTranseunteComponent } from './Pages/Solicitudes/licencia-actividades-economicas-transeunte/licencia-actividades-economicas-transeunte.component';
import { EfectuarRetiroLicenciaActividadesEconomicaComponent } from './Pages/Solicitudes/efectuar-retiro-licencia-actividades-economica/efectuar-retiro-licencia-actividades-economica.component';
import { TramitarConstanciaDomicilioFiscalComponent } from './Pages/Solicitudes/tramitar-constancia-domicilio-fiscal/tramitar-constancia-domicilio-fiscal.component';
import { EfectuarCambioDireccionActividadEconomicaComponent } from './Pages/Solicitudes/efectuar-cambio-direccion-actividad-economica/efectuar-cambio-direccion-actividad-economica.component';
import { OtorgarPermisoFuncionamientoComponent } from './Pages/Solicitudes/otorgar-permiso-funcionamiento/otorgar-permiso-funcionamiento.component';
import { SolicitarSolvenciaMunicipalComponent } from './Pages/Solicitudes/solicitar-solvencia-municipal/solicitar-solvencia-municipal.component';
import { BienvenidaComponent } from './Pages/bienvenida/bienvenida.component';





@NgModule({
  declarations: [
    HomeComponent,
    LicenciadeActividadEconomicaComponent,
    LicenciadeExpendidodeBebidasAlcoholicasComponent,
    RenovacionLicenciaActividadesEconomicasLicoresComponent,
    EfectuarExtencionActividadEconomicaComponent,
    EfectuarReclasificacionActividadEconomicaComponent,
    LicenciaActividadesEconomicasTranseunteComponent,
    EfectuarRetiroLicenciaActividadesEconomicaComponent,
    TramitarConstanciaDomicilioFiscalComponent,
    EfectuarCambioDireccionActividadEconomicaComponent,
    OtorgarPermisoFuncionamientoComponent,
    SolicitarSolvenciaMunicipalComponent,
    BienvenidaComponent
  ],
  imports: [
    CommonModule,
    UsuarioRoutingModule,
    SharedModule,
    MaterialModule
  ]
})
export class UsuarioModule { }
