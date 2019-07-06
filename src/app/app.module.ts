import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
//  NgRx
import { StoreModule } from '@ngrx/store';
//  Effect Module
import { EffectsModule } from '@ngrx/effects';
//  APP Reducers
import { appReducers } from './store/app.reducer';
//  Array efectos
import { effectsArr } from './store/effects/index';
//  Environment
import { environment } from '../environments/environment';
//  Dev Tools
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
//  Rutas
import { AppRoutingModule } from './app-routing.module';
//  Modulos personalizados
import { SharedModule } from './shared/shared.module';
import { UsuariosModule } from './usuarios/usuarios.module';
//  modulo peticiones http
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot( appReducers ),
    EffectsModule.forRoot( effectsArr ),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retiene los ultimos 25 estados
      logOnly: environment.production, // Restringir la extension al modo de solo registro
    }),
    SharedModule,
    UsuariosModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
