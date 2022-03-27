import { EditarNombreComponent } from '../EditarNombre/editar.component';

import { AltaComponent } from './../alta/alta.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {ResumenComponent} from '../resumen/resumen/resumen.component';

import { CommonModule } from '@angular/common';

const routes: Routes = [
  /*{
    path: '',
    component: DashboardComponent,
  },*/
  {
    path:'',
    component: ResumenComponent
  },
  {
    path:'indicadores/alta',
    component: AltaComponent
  },{
    path:'indicadores/editar/:id',
    component: EditarNombreComponent
  },
];

@NgModule({
  imports: [CommonModule,RouterModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})

export class DashboardRoutingModule {}
