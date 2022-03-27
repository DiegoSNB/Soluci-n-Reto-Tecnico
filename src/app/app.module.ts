import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from './views/auth/auth.component';
//import { JsonService } from './json.service';
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from './shared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AuthInterceptor } from './core/services/admin/auth.interceptor';
import { DatePipe } from '@angular/common';



@NgModule({
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    AuthComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModule,
    NgbModule
  ],
providers: [/*JsonService*/DatePipe,{
  provide : HTTP_INTERCEPTORS,
  useClass: AuthInterceptor,
  multi   : true,
}],
  bootstrap: [AppComponent]
})
export class AppModule { }
