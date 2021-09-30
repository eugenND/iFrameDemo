import { BrowserModule } from '@angular/platform-browser';
import { APP_INITIALIZER, NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ModalModule } from 'ngx-bootstrap/modal';
import { KeycloakAngularModule, KeycloakService } from 'keycloak-angular';
import { initializeKeycloak } from './app.init';
import { AppRoutingModule } from './app-routing.module';
import { PubSpaceComponent } from './pub-space/pub-space.component';
import { PrivateSpaceComponent } from './private-space/private-space.component';

import { RouterModule } from '@angular/router';
import { ChangePasswortComponent } from './change-passwort/change-passwort.component';
import { SafePipe } from './pipes/safe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PubSpaceComponent,
    PrivateSpaceComponent,
    ChangePasswortComponent,
    SafePipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ModalModule.forRoot(),
    KeycloakAngularModule,
    AppRoutingModule,
    RouterModule
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: initializeKeycloak,
      multi: true,
      deps: [KeycloakService],
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
