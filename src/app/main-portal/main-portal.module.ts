import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainPortalRoutingModule } from './main-portal-routing.module';
import { MainPortalComponent } from './main-portal.component';
import { HomeComponent } from './main-component/home/home.component';
import { HeaderComponent } from './main-component/header/header.component';
import { FooterComponent } from './main-component/footer/footer.component';
import { AboutComponent } from './main-component/about/about.component';
import { ContactComponent } from './main-component/contact/contact.component';
import { ProductDetailsComponent } from './main-component/product-details/product-details.component';


@NgModule({
  declarations: [
    MainPortalComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    ContactComponent,
    ProductDetailsComponent
  ],
  imports: [
    CommonModule,
    MainPortalRoutingModule
  ]
})
export class MainPortalModule { }
