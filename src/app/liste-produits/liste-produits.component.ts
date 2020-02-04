import { Component, OnInit } from '@angular/core';
import {ProduitService} from '../service/produit.service';
import {first} from 'rxjs/internal/operators';

@Component({
  selector: 'app-liste-produits',
  templateUrl: './liste-produits.component.html',
  styleUrls: ['./liste-produits.component.css']
})
export class ListeProduitsComponent implements OnInit {
  produit ;
  title = 'Popular';
  section = 'shop';

  constructor(private produitservice: ProduitService) { }

  ngOnInit() {
    this.produit = this.produitservice.ListeProduit();

  }

}
