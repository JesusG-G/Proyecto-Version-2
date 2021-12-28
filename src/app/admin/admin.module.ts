import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AdminRoutingModule } from './admin-routing.module';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';

//Compoenentes
import { HomeComponent } from './Pages/home/home.component';

import { BienvenidaComponent } from './Pages/bienvenida/bienvenida.component';
import { SolicitudComponent } from './Pages/solicitud/solicitud.component';
import { LICAENUEComponent } from './Pages/Solicitudes/licaenue/licaenue.component';
import { LICAANUEComponent } from './Pages/Solicitudes/licaanue/licaanue.component';
import { RENLICAAComponent } from './Pages/Solicitudes/renlicaa/renlicaa.component';
import { RENLICAEComponent } from './Pages/Solicitudes/renlicae/renlicae.component';
import { EXTACTECComponent } from './Pages/Solicitudes/extactec/extactec.component';
import { RETACECOComponent } from './Pages/Solicitudes/retaceco/retaceco.component';
import { LICTRANSComponent } from './Pages/Solicitudes/lictrans/lictrans.component';
import { CAMBDIREComponent } from './Pages/Solicitudes/cambdire/cambdire.component';
import { COMDOMFIComponent } from './Pages/Solicitudes/comdomfi/comdomfi.component';
import { CAMBDENOComponent } from './Pages/Solicitudes/cambdeno/cambdeno.component';
import { SOLSOLVEComponent } from './Pages/Solicitudes/solsolve/solsolve.component';
import { LICORENUComponent } from './Pages/Solicitudes/licorenu/licorenu.component';
import { RENLICLIComponent } from './Pages/Solicitudes/renlicli/renlicli.component';
import { PERFUNLOTComponent } from './Pages/Solicitudes/perfunlot/perfunlot.component';

import { FormularioDatosComponent } from './Components/formulario-datos/formulario-datos.component';
import { ActividadAAAEComponent } from './Components/checkBoxs/actividad-aaae/actividad-aaae.component';
import { CambioDenominacionComponent } from './Components/checkBoxs/cambio-denominacion/cambio-denominacion.component';
import { CambioDireccionComponent } from './Components/checkBoxs/cambio-direccion/cambio-direccion.component';
import { DomicilioFiscalComponent } from './Components/checkBoxs/domicilio-fiscal/domicilio-fiscal.component';
import { ExtensionAEComponent } from './Components/checkBoxs/extension-ae/extension-ae.component';
import { LicenciaTranseunteComponent } from './Components/checkBoxs/licencia-transeunte/licencia-transeunte.component';
import { RenovacionLicAAComponent } from './Components/checkBoxs/renovacion-lic-aa/renovacion-lic-aa.component';
import { RenovacionLicAEComponent } from './Components/checkBoxs/renovacion-lic-ae/renovacion-lic-ae.component';
import { RetiroActividadEComponent } from './Components/checkBoxs/retiro-actividad-e/retiro-actividad-e.component';
import { FormularioSolvenciaMComponent } from './Components/formulario-solvencia-m/formulario-solvencia-m.component';
import { SolvenciamComponent } from './Components/checkBoxs/solvenciam/solvenciam.component';
import { LicenciaLicoresNuevaComponent } from './Components/checkBoxs/licencia-licores-nueva/licencia-licores-nueva.component';
import { FormularioLicorNuevaComponent } from './Components/formulario-licor-nueva/formulario-licor-nueva.component';
import { RenovacionliclicoComponent } from './Components/checkBoxs/renovacionliclico/renovacionliclico.component';
import { DocumentoComponent } from './Components/documentos/Licencia de Actividades Económicas Nueva/documento.component';
import { AgencialoteriaComponent } from './Components/checkBoxs/agencialoteria/agencialoteria.component';



@NgModule({
  declarations: [
    HomeComponent,
    BienvenidaComponent,
    SolicitudComponent,
    LICAENUEComponent,
    LICAANUEComponent,
    RENLICAAComponent,
    RENLICAEComponent,
    EXTACTECComponent,
    RETACECOComponent,
    LICTRANSComponent,
    CAMBDIREComponent,
    COMDOMFIComponent,
    CAMBDENOComponent,
    SOLSOLVEComponent,
    LICORENUComponent,
    RENLICLIComponent,
    PERFUNLOTComponent,
    FormularioDatosComponent,
    ActividadAAAEComponent,
    CambioDenominacionComponent,
    CambioDireccionComponent,
    DomicilioFiscalComponent,
    ExtensionAEComponent,
    LicenciaTranseunteComponent,
    RenovacionLicAAComponent,
    RenovacionLicAEComponent,
    RetiroActividadEComponent,
    FormularioSolvenciaMComponent,
    SolvenciamComponent,
    LicenciaLicoresNuevaComponent,
    FormularioLicorNuevaComponent,
    RenovacionliclicoComponent,
    DocumentoComponent,
    AgencialoteriaComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    AdminRoutingModule,
    SharedModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    HttpClientModule,
    SweetAlert2Module
  ]
})
export class AdminModule { }
