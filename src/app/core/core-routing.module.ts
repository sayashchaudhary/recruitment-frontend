import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BootstrapComponent } from '../bootstrap/bootstrap.component';
import { BootstrapGuard } from './guards/bootstrap.guard';

const appRoutes: Routes = [
  {
    path: '',
    component: BootstrapComponent,
    canActivate: [BootstrapGuard]
  },
  {
    path: 'register',
    loadChildren: '../auth/auth.module#AuthModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class CoreRoutingModule {
}
