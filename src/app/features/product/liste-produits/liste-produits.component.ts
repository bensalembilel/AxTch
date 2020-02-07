import { Component, OnInit } from '@angular/core';
import {ProduitService} from '../../../common/service/produit.service';
import {first} from 'rxjs/internal/operators';

@Component({
  selector: 'app-liste-produits',
  templateUrl: './liste-produits.component.html',
  styleUrls: ['./liste-produits.component.scss']
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
