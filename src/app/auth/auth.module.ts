import { NgModule } from '@angular/core';
import { AuthRoutingModule } from './auth-routing.module';
import { RegisterComponent } from './register/register.component';
import { SharedModule } from '../shared/shared.module';
import { InstructionComponent } from './instruction/instruction.component';

@NgModule({
  imports:
    [
      AuthRoutingModule,
      SharedModule
    ],
  declarations: [RegisterComponent,InstructionComponent]
})

export class AuthModule {
}
