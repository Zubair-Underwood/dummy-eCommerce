import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPortalComponent } from './main-portal.component';
import { HomeComponent } from './main-component/home/home.component';
import { AboutComponent } from './main-component/about/about.component';
import { ContactComponent } from './main-component/contact/contact.component';
import { ProductDetailsComponent } from './main-component/product-details/product-details.component';

const routes: Routes = [
  {
    path: '', component: MainPortalComponent, children: [
      {
        path: '', component: HomeComponent,
      },
      {
        path: 'home', component: HomeComponent,
      },

      {
        path: 'about', component: AboutComponent,
      },

      {
        path: 'contact', component: ContactComponent,
      },

      {
        path: 'product-details/:id', component: ProductDetailsComponent,
      }
    ]
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainPortalRoutingModule { }
