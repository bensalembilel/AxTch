import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
 list: any[] = [
   {id: 1 , img: '70-6.jpg', title : 'Malacca', description: 'Limied edition'},
   {id: 2 , img: '70-10.jpg', title : 'Highland', description: 'Our decoration'},
   {id: 3 , img: '70-11.jpg', title : 'New Dlhi', description: 'Our style'},
   {id: 4 , img: '70-8.jpg', title : 'Ladakh', description: 'Limied edition'},
   {id: 5 , img: '7-9.jpg', title : 'Nubra', description: 'Limied edition'},
];
  constructor() { }

  ngOnInit() {
  }

}
