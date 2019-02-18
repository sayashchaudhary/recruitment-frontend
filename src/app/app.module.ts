import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { RouterModule } from '@angular/router';
import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { rootReducer } from './root-reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule,
    CoreModule,
    SharedModule,
    HttpClientModule,
    StoreModule.forRoot(rootReducer),
    !environment.production ? StoreDevtoolsModule.instrument({maxAge: 50}) : [],
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
