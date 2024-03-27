import { NgModule } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { MakeupComponent } from './makeup/makeup.component';
import { HairstyleComponent } from './hairstyle/hairstyle.component';
import { ContactComponent } from './contact/contact.component';
import { BrowserModule } from '@angular/platform-browser';
import { SlickCarouselModule } from 'ngx-slick-carousel';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    MakeupComponent,
    HairstyleComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SlickCarouselModule ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }



