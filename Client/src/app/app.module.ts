import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NgbAccordion, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './header/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import {  HttpClientModule } from '@angular/common/http';
import { AlertComponent } from './Shared/Components';
import { HomeComponent } from './home/home.component';
import { BodyComponent } from './home/freeCall/freeCall.component';
import { SalaahDoComponent } from './home/salaah-do/salaah-do.component';
import { ExpertsComponent } from './home/experts/experts.component';
import { ExpertComponent } from './expert/expert.component';
import { ProfileComponent } from './home/experts/profile/profile.component';
import { SearchComponent } from './home/search/search.component';
import { FormsModule } from '@angular/forms';
import { ChatsComponent } from './chats/chats.component';
import { ChatComponent } from './chat/chat.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    AlertComponent,
    HomeComponent,
    BodyComponent,
    SalaahDoComponent,
    ExpertsComponent,
    ExpertComponent,
    ProfileComponent,
    SearchComponent,
    ChatsComponent,
    ChatComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,

  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
