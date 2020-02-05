import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable ({
  providedIn: 'root'
})
export class ProduitService {

  constructor(private http: HttpClient) { }

  ListeProduit() {
    return  [
      {description: 'test' , nom : 'ffff', prix : '500' , image: 'f-p-1.jpg'},
      {description: 'test' , nom : 'gdsg', prix : '610' , image: 'f-p-2.jpg'},
      {description: 'test' , nom : 'sdf', prix : '456' , image: 'f-p-3.jpg'},
      {description: 'test' , nom : 'ffdsfgff', prix : '654' , image: 'f-p-4.jpg'},
      {description: 'test' , nom : 'fdfb', prix : '679' , image: 'f-p-5.jpg'},
      {description: 'test' , nom : 'fffvbgfxv ff', prix : '214' , image: 'f-p-1.jpg'},
      {description: 'test' , nom : 'ytey', prix : '745' , image: 'f-p-2.jpg'},
      {description: 'test' , nom : 'azrfg', prix : '887' , image: 'f-p-3.jpg'},
      {description: 'test' , nom : 'hjk', prix : '975' , image: 'f-p-4.jpg'},
      {description: 'test' , nom : 'aflj', prix : '865' , image: 'f-p-5.jpg'},
      {description: 'test' , nom : 'dfvgb', prix : '312' , image: 'f-p-1.jpg'},
      {description: 'test' , nom : 'fpoou', prix : '633' , image: 'f-p-2.jpg'},
      {description: 'test' , nom : 'wxcvv', prix : '122' , image: 'f-p-3.jpg'},
  ];
  }

  ListCollection() {
    return  [
      {nom : 'ffff', prix : '500' , image: 'f-p-1.jpg'},
      {nom : 'gdsg', prix : '610' , image: 'f-p-2.jpg'},
      {nom : 'sdf', prix : '456' , image: 'f-p-3.jpg'},
      {nom : 'ffdsfgff', prix : '654' , image: 'f-p-4.jpg'},
      {nom : 'fdfb', prix : '679' , image: 'f-p-5.jpg'},
      {nom : 'fffvbgfxv ff', prix : '214' , image: 'f-p-1.jpg'},
      {nom : 'ytey', prix : '745' , image: 'f-p-2.jpg'},
      {nom : 'azrfg', prix : '887' , image: 'f-p-3.jpg'},
      {nom : 'hjk', prix : '975' , image: 'f-p-4.jpg'},
      {nom : 'aflj', prix : '865' , image: 'f-p-5.jpg'},
      {nom : 'dfvgb', prix : '312' , image: 'f-p-1.jpg'},
      {nom : 'fpoou', prix : '633' , image: 'f-p-2.jpg'},
      {nom : 'wxcvv', prix : '122' , image: 'f-p-3.jpg'},
  ];
  }

}
