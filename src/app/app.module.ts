import { NgModule } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { TextInputRegistrationComponent } from './components/text-input-registration/text-input-registration.component';
import { SignupComponent } from './pages/signup/signup.component';
import { PersonallyLogoComponent } from './components/personally-logo/personally-logo.component';
import { BlackButtonComponent } from './components/black-button/black-button.component';

@NgModule({
  declarations: [AppComponent, PageNotFoundComponent, TextInputRegistrationComponent, SignupComponent, PersonallyLogoComponent, BlackButtonComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [Title],
  bootstrap: [AppComponent],
})
export class AppModule {}
