import { Component, OnInit, Input } from '@angular/core';
import {ProduitService} from '../../../common/service/produit.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  produit ;
  @Input() title: string ;
  @Input() section: string ;
  @Input() reversPagination: string ;
  // @Input() paginationClass: string = 'my-pagination';

  constructor(private produitservice: ProduitService) { }

  ngOnInit() {
    this.produit = this.produitservice.ListeProduit();
  }
}
