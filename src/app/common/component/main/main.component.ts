import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
 list: any[] = [
   {id: 1 , img: '1.jpg', title : 'Malacca', description: ''},
   {id: 2 , img: '2.jpg', title : 'Cameron Highland', description: ''},
   {id: 3 , img: '3.jpg', title : 'New Delhi', description: ''},
   {id: 4 , img: '4.jpg', title : 'Ladakh', description: ''},
   {id: 5 , img: '6.jpg', title : 'Nubra Valley', description: ''},
];
  constructor() { }

  ngOnInit() {
  }

}
