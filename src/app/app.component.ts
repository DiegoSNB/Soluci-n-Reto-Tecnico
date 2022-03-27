import { Component, HostListener  } from '@angular/core';
import { AuthService } from './core/services/admin/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private api: AuthService){

  }
  title = 'parquimetros-frontend-web';
  /*@HostListener('window:beforeunload', ['$event'])
beforeunloadHandler(event:any) {
    localStorage.clear();
    this.api.logueado = false;
}*/
}
