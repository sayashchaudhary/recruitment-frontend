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
import {
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule,
  MatSnackBarModule,
  MatToolbarModule
} from '@angular/material';
import { appRootReducer } from './reducers';
import { RegisterComponent } from './components/register/register.component';
import { InstructionComponent } from './components/instruction/instruction.component';
import { BootstrapComponent } from './components/bootstrap/bootstrap.component';
import { BootstrapGuard } from './guards/bootstrap.guard';
import { NgxLoadingModule } from 'ngx-loading';
import { AnonymousAuthGuard } from './guards/anonymous-auth.guard';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { PanelComponent } from './components/dashboard/panel/panel.component';
import { QuestionsComponent } from './components/dashboard/questions/questions.component';
import { BootstrapAuthGuard } from './guards/bootstrap-auth.guard';
import { ThankyouComponent } from './components/thankyou/thankyou.component';
import { ThankyouGuard } from './guards/thank-you.guard';


export const routes: Routes = [
  {
    path: '',
    component: BootstrapComponent,
    canActivate: [BootstrapGuard]
  },
  {
    path: 'home',
    component: HomepageComponent,
    canActivate: [AnonymousAuthGuard]
  },
  {
    path: 'register',
    component: RegisterComponent,
    canActivate: [AnonymousAuthGuard]
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [AnonymousAuthGuard]
  },
  {
    path: 'instructions',
    component: InstructionComponent,
    canActivate: [ThankyouGuard, BootstrapAuthGuard]
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [ThankyouGuard, BootstrapAuthGuard]
  },
  {
    path: 'thankyou',
    component: ThankyouComponent,
  },
];


@NgModule({
  declarations: [
    AppComponent,
    BootstrapComponent,
    RegisterComponent,
    InstructionComponent,
    DashboardComponent,
    LoginComponent,
    HomepageComponent,
    PanelComponent,
    QuestionsComponent,
    ThankyouComponent
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
    MatSnackBarModule,
    MatToolbarModule,
    StoreModule.forRoot(appRootReducer),
    !environment.production ? StoreDevtoolsModule.instrument({ maxAge: 50 }) : [],
    NgxLoadingModule.forRoot({})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
