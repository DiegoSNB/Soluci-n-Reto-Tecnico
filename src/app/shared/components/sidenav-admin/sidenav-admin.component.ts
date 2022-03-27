import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/core/services/admin/auth.service';

@Component({
  selector: 'app-sidenav-admin',
  templateUrl: './sidenav-admin.component.html',
  styleUrls: ['./sidenav-admin.component.scss']
})
export class SidenavAdminComponent implements OnInit {

  constructor(private activerouter:ActivatedRoute, private api: AuthService, private router: Router) { }

  ngOnInit(): void {

  }

  cerrarSesion(){
    localStorage.clear();
    this.api.logueado=false
  }

}
