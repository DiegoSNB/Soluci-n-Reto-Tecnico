import { EditarNombreComponent } from '../EditarNombre/editar.component';


import { EditarComponent } from '../AgregarDatos/editar.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {ResumenComponent} from '../resumen/resumen/resumen.component'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from 'src/app/shared/shared.module';
import {RouterModule} from '@angular/router';
import { AltaComponent } from '../alta/alta.component';



@NgModule({
  declarations: [ResumenComponent,AltaComponent,EditarComponent,EditarNombreComponent,
  ],
  imports: [CommonModule, NgbModule, DashboardRoutingModule,FormsModule, ReactiveFormsModule, SharedModule,RouterModule],
})

export class DashboardModule {}
