import { Component, OnInit } from '@angular/core';
import {ProduitService} from '../service/produit.service';


@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.css']
})
export class CollectionComponent implements OnInit {

  constructor(private produitservice: ProduitService) { }
  title = 'collection';
  section = 'Shop';
  prodcut_list: any[];
  ngOnInit() {
    this.prodcut_list = this.produitservice.ListCollection();
  }

}
