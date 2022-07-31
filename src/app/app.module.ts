import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserContactFormModule } from './components/user-contact-form/user-contact-form.module';
import { UserContactComponent } from './components/user-contact/user-contact.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, UserContactFormModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
