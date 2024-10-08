import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { MakeupComponent } from './makeup/makeup.component';
import { HairstyleComponent } from './hairstyle/hairstyle.component';
import { ContactComponent } from './contact/contact.component';
import {FormsModule} from "@angular/forms";
import { AboutmeComponent } from './aboutme/aboutme.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { GalleryComponent } from './gallery/gallery.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    MakeupComponent,
    HairstyleComponent,
    ContactComponent,
    AboutmeComponent,
    FooterComponent,
    HeaderComponent,
    GalleryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
