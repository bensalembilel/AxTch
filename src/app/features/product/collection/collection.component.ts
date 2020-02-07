import { Component, OnInit } from '@angular/core';
import {ProduitService} from '../../../common/service/produit.service';


@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.scss']
})
export class CollectionComponent implements OnInit {

  constructor(private produitservice: ProduitService) { }
  p: number = 1;
  title = 'collection';
  section = 'Shop';
  prodcut_list : any[];
  ngOnInit() {
    this.prodcut_list = this.produitservice.ListCollection();
  }

}
