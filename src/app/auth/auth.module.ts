import { NgModule } from '@angular/core';
import { AuthRoutingModule } from './auth-routing.module';
import { RegisterComponent } from './register/register.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports:
    [
      AuthRoutingModule,
      SharedModule
    ],
  declarations: [RegisterComponent]
})

export class AuthModule {
}
