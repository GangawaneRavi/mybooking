// import { FormBuilder } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatSelectModule, MatStepperModule, MatStepperIntl } from '@angular/material';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CarouselComponent } from './carousel/carousel.component';
import { BookingCardComponent } from './booking-card/booking-card.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ContactComponent } from './contact/contact.component';
import { StaffComponent } from './staff/staff.component';
import { ServicesComponent } from './services/services.component';
import { NavComponent } from './nav/nav.component';
import { BookNowComponent } from './book-now/book-now.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CarouselComponent,
    BookingCardComponent,
    HomeComponent,
    AboutComponent,
    GalleryComponent,
    ContactComponent,
    StaffComponent,
    ServicesComponent,
    NavComponent,
    BookNowComponent,
  ],
  imports: [
    BrowserModule,
    MDBBootstrapModule.forRoot(),
    NgbModule.forRoot(),





  ],
  schemas: [NO_ERRORS_SCHEMA],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}
