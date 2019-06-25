import {Router, RouterModule, Routes} from '@angular/router';
// @ts-ignore
import { LoginComponent} from './components/login/login.component';
// @ts-ignore
import { RegisterComponent } from './components/register/register.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/login', pathMatch: 'full'
  },
  {
    path: 'Login',
    component: LoginComponent
  },
  {
    path: 'Register',
    component: RegisterComponent
  }
];


export const routermodule = RouterModule.forRoot(routes);
