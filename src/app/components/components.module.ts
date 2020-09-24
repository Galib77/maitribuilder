import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { AmenitiesComponent } from './amenities/amenities.component';
import { FloorPlanComponent } from './floor-plan/floor-plan.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { FooterComponent } from './footer/footer.component';

import { FormsModule } from '@angular/forms';
import { ThanksComponent } from './thanks/thanks.component';


@NgModule({
  declarations: [
      NavbarComponent,
      AboutUsComponent,
      AmenitiesComponent, 
      FloorPlanComponent, 
      GalleryComponent, 
      ContactUsComponent, 
      FooterComponent, ThanksComponent
    ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    NavbarComponent,
    AboutUsComponent,
    AmenitiesComponent, 
    FloorPlanComponent, 
    GalleryComponent, 
    ContactUsComponent, 
    FooterComponent
  ]
})
export class ComponentsModule { }
