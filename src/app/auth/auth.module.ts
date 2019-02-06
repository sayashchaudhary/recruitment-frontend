import { NgModule } from '@angular/core';
import { AuthRoutingModule } from './auth-routing.module';
import { RegisterComponent } from './register/register.component';


@NgModule({
  imports: [
    AuthRoutingModule,

  ],
  declarations: [RegisterComponent]
})

export class AuthModule {
}
