import { SidenavAdminComponent } from './components/sidenav-admin/sidenav-admin.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderAdminComponent } from './components/header-admin/header-admin.component';
import { FooterAdminComponent } from './components/footer-admin/footer-admin.component';
import { RouterModule } from '@angular/router';
import { PipesModule } from './pipes/pipes.module';
import { NgBootstrapModule } from './ng-bootstrap/ng-bootstrap.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    HeaderAdminComponent,
    FooterAdminComponent,
    SidenavAdminComponent,

  ],
  imports: [
    CommonModule,
    PipesModule,
    ReactiveFormsModule,
    RouterModule,


    NgBootstrapModule
  ],
  exports: [
    HeaderAdminComponent,
    FooterAdminComponent,
    SidenavAdminComponent,
    PipesModule,
    NgBootstrapModule,

  ]
})
export class SharedModule { }
