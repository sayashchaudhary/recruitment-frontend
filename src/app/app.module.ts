import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule, MatFormFieldModule, MatInputModule, MatSelectModule } from '@angular/material';
import { appRootReducer } from './reducers';
import { RegisterComponent } from './components/register/register.component';
import { InstructionComponent } from './components/instruction/instruction.component';
import { BootstrapComponent } from './components/bootstrap/bootstrap.component';
import { BootstrapGuard } from './guards/bootstrap.guard';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavComponent } from './dashboard/nav/nav.component';


export const routes: Routes = [
  {
    path: '',
    component:BootstrapComponent,
    canActivate:[BootstrapGuard]
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path:'instruction',
    component:InstructionComponent
  },
  {
    path:'nav',
    component: NavComponent
  }
]


@NgModule({
  declarations: [
    AppComponent,
    BootstrapComponent,
    RegisterComponent,
    InstructionComponent,
    DashboardComponent,
    NavComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule,
    HttpClientModule,
    CommonModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    StoreModule.forRoot(appRootReducer),
    !environment.production ? StoreDevtoolsModule.instrument({ maxAge: 50 }) : [],
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
