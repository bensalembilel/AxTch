import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProductModule} from './features/product/product.module';
// import {ListeProduitsComponent} from './features/product/liste-produits/liste-produits.component';


const routes: Routes = [
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
