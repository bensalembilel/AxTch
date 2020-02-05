import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {ListeProduitsComponent} from './liste-produits/liste-produits.component';


const routes: Routes = [
  {
    path: '',
    component : HomeComponent , children: [
      {path : 'listeProduits', component : ListeProduitsComponent},

    ]
  },
  { path: 'list', component: ListeProduitsComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
