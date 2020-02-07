import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  cards = [
    {title : 'Summer' , section : 'SHOP' , image : 'cc1.jpg' , description : ' Summer shopping outfits' },
    {title : 'Winter' , section : 'shop' , image : 'cc2.jpg' , description : ' Winter shopping outfits'},
];
  constructor() { }

  ngOnInit() {
  }

}
