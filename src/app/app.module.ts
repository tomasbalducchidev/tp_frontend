import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MatSliderModule } from '@angular/material/slider';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { LoggedinComponent } from './components/loggedin/loggedin.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { NewmessagesComponent } from './components/newmessages/newmessages.component';
import { MessagesComponent } from './components/messages/messages.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    LoggedinComponent,
    RegisterComponent,
    HomeComponent,
    NewmessagesComponent,
    MessagesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSliderModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
