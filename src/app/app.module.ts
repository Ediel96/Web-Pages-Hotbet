import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//rutas
import {APP_ROUTING} from './app.routes'

import { AppComponent } from './app.component';
import { NavarComponent } from './components/shared/navar/navar.component';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { EventComponent } from './components/event/event.component';
import { from } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent,
    NavarComponent,
    AboutComponent,
    HomeComponent,
    EventComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
