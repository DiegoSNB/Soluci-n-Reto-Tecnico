import { EditarComponent } from './views/admin/components/AgregarDatos/editar.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './views/auth/auth.component';
import { CommonModule } from '@angular/common';
import { AuthGuard } from './shared/guard/auth.guard';



const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        redirectTo:"login",
        pathMatch:"full"
      },
      {
        path: 'login',
        component: AuthComponent,
      },
      {
        path: 'indicadores/agregarDatos/:id',
        component: EditarComponent,
        canActivate:[AuthGuard],
      },
      {
        path: 'admin',
        component: AdminLayoutComponent,
         canActivate:[AuthGuard],
        loadChildren: () =>
          import('./views/admin/admin.module').then((m) => m.AdminModule),
        }
    ],
  },
];


@NgModule({
  imports: [CommonModule,
    RouterModule.forRoot(routes, {
      anchorScrolling: 'enabled',
      preloadingStrategy: PreloadAllModules,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
