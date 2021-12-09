import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AdminRoutingModule } from './admin-routing.module';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

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
  ],
  imports: [
    CommonModule,
    MaterialModule,
    AdminRoutingModule,
    SharedModule,
    FlexLayoutModule,
    ReactiveFormsModule
  ]
})
export class AdminModule { }
