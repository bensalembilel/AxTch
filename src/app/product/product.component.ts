import { Component, OnInit } from '@angular/core';
import {ProduitService} from '../service/produit.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  produit ;
  title = 'Popular';
  section = 'shop';

  constructor(private produitservice : ProduitService) { }

  ngOnInit() {
    this.produit = this.produitservice.ListeProduit();
  }
}
