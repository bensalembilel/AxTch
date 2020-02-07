import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable ({
  providedIn: 'root'
})
export class ProduitService {

  constructor(private http: HttpClient) { }

  ListeProduit() {
    return  [
      {description: 'Lights' , nom : 'Hurica Floor', prix : '500' , image: 'p-1.jpg'},
      {description: 'Twig' , nom : 'Dan Black', prix : '610' , image: 'p-2.jpg'},
      {description: 'Glitter' , nom : 'Eclipse 3', prix : '456' , image: 'p-3.jpg'},
      {description: 'Antique' , nom : 'Endon Rome', prix : '654' , image: 'p-4.jpg'},
      {description: 'Twig' , nom : 'Sphere 5', prix : '679' , image: 'p-5.jpg'},
      {description: 'Brass' , nom : 'Black Arc ff', prix : '214' , image: 'p-6.jpg'},
      {description: 'Lever' , nom : 'Seychelles', prix : '745' , image: 'p-7.jpg'},
      {description: 'Arm' , nom : 'Juba Cream', prix : '887' , image: 'p-8.jpg'},
      {description: 'Twig' , nom : 'Jodie', prix : '975' , image: 'p-9.jpg'},
      {description: 'Lights' , nom : 'Fuller', prix : '865' , image: 'p-10.jpg'},
      {description: 'Antique' , nom : 'Apollo', prix : '312' , image: 'p-1.jpg'},
      {description: 'Glitter' , nom : 'fpoou', prix : '633' , image: 'p-2.jpg'},
      {description: 'Twig' , nom : 'Silver ', prix : '122' , image: 'p-3.jpg'},
  ];
  }

  ListCollection() {
    return  [
      {nom : 'Antique Brass Leverr', prix : '500' , image: 'p-1.jpg'},
      {nom : 'Marble Glass Chrome', prix : '610' , image: 'p-2.jpg'},
      {nom : 'Jandia Wooden Tripod', prix : '456' , image: 'p-3.jpg'},
      {nom : 'Rose Lit Twig Lights', prix : '654' , image: 'p-4.jpg'},
      {nom : 'Manila Moroccan igTw', prix : '679' , image: 'p-5.jpg'},
      {nom : 'Bertie Sausage Dog', prix : '214' , image: 'p-6.jpg'},
      {nom : 'Grey Honey Saffron Elephant', prix : '745' , image: 'p-7.jpg'},
      {nom : 'Global Rustic Grey ', prix : '887' , image: 'p-8.jpg'},
      {nom : 'Wax Lyrical Egyptian', prix : '975' , image: 'p-9.jpg'},
      {nom : 'Hygge Soft Suede Multi Wick ', prix : '865' , image: 'p-10.jpg'},
  ];
  }

}
