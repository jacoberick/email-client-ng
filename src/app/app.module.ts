import { NgModule } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { TextInputRegistrationComponent } from './components/text-input-registration/text-input-registration.component';
import { SignupComponent } from './pages/signup/signup.component';
import { PersonallyLogoComponent } from './components/personally-logo/personally-logo.component';
import { BlackButtonComponent } from './components/black-button/black-button.component';
import { LoginComponent } from './pages/login/login.component';
import { TopBotLandingComponent } from './components/top-bot-landing/top-bot-landing.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { HeaderComponent } from './components/header/header.component';
import { InfoLandingComponent } from './components/info-landing/info-landing.component';
import { BroadcastsComponent } from './pages/broadcasts/broadcasts.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { PageHeaderComponent } from './components/page-header/page-header.component';
import { PeopleComponent } from './pages/people/people.component';
import { ResponsesComponent } from './pages/responses/responses.component';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    TextInputRegistrationComponent,
    SignupComponent,
    PersonallyLogoComponent,
    BlackButtonComponent,
    LoginComponent,
    TopBotLandingComponent,
    WelcomeComponent,
    HeaderComponent,
    InfoLandingComponent,
    BroadcastsComponent,
    SidebarComponent,
    PageHeaderComponent,
    PeopleComponent,
    ResponsesComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [Title],
  bootstrap: [AppComponent],
})
export class AppModule {}
