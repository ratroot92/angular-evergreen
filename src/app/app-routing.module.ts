import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AppRoutes } from './shared/enums';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: AppRoutes.ModuleRoutes.AdminRoute,
    loadChildren: () => import('./admin/admin.module').then((m) => m.AdminModule),
  },
  { path: '**', redirectTo: '/' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
