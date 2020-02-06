import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  cards = [
    {title : 'Summer' , section : 'SHOP' , image : 'summer.jpg' , description : ' Summer shopping outfits' },
    {title : 'Winter' , section : 'shop' , image : 'winter.jpg' , description : ' Winter shopping outfits'},
];
  constructor() { }

  ngOnInit() {
  }

}
