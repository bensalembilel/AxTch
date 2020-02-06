import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {NgxPaginationModule} from 'ngx-pagination';

import { ProductComponent } from './product/product.component';
import { CardComponent } from './card/card.component';
import { CollectionComponent } from './collection/collection.component';
import { HomeComponent } from './home/home.component';
import { ListeProduitsComponent } from './liste-produits/liste-produits.component';
import { ProductRoutingModule } from './product-routing.module';

import { HeaderComponent } from '../../common/component/header/header.component';
import { FooterComponent } from '../../common/component/footer/footer.component';
import { MainComponent } from '../../common/component/main/main.component';
import { NewsletterComponent } from '../../common/component/newsletter/newsletter.component';
import { PopUpComponent } from '../../common/component/pop-up/pop-up.component';



@NgModule({
  declarations: [
    ProductComponent,
    CardComponent,
    CollectionComponent,
    HomeComponent,
    ListeProduitsComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    NewsletterComponent,
    PopUpComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgxPaginationModule,
    ProductRoutingModule,
    CommonModule
  ]
})
export class ProductModule { }
