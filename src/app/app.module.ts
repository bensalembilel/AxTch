import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import {ListeProduitsComponent} from './liste-produits/liste-produits.component';
import {PopinComponent} from './popin/popin.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';
import { ProductComponent } from './product/product.component';
import { CardComponent } from './card/card.component';
import { NewsletterComponent } from './newsletter/newsletter.component';
import { CollectionComponent } from './collection/collection.component';
import { PopUpComponent } from './pop-up/pop-up.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListeProduitsComponent,
    PopinComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    ProductComponent,
    CardComponent,
    NewsletterComponent,
    CollectionComponent,
    PopUpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }