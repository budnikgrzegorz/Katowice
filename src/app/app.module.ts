import {HttpModule} from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { LogoComponent } from './logo/logo.component';
import { TitleComponent } from './title/title.component';
import { SeniorComponent } from './senior/senior.component';


@NgModule({
  declarations: [
    AppComponent,
    WelcomePageComponent,
    LogoComponent,
    TitleComponent,
    SeniorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
