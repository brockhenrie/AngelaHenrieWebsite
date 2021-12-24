import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';


export interface Transaction {
  item: string;
  cost: number;
}


@Component({
  selector: 'app-shoppingcart',
  templateUrl: './shoppingcart.component.html',
  styleUrls: ['./shoppingcart.component.scss']
})
export class ShoppingcartComponent implements OnInit {

  pageTitle = 'Angela Henrie - Cart';


  constructor(private title:Title) { }

  ngOnInit(): void {
    this.title.setTitle(this.pageTitle);
  }

}
