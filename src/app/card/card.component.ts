import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  cards = [
    {title : 'Outdoors' , section : 'SHOP' , image : 'joli-papier.jpg' , description : ' Shop Outdoors' },
    {title : 'Indoors' , section : 'shop' , image : 'plantes-cactus.jpg' , description : 'Shop Indoors'},
];
  constructor() { }

  ngOnInit() {
  }

}
