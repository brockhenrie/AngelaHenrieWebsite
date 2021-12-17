import { Component, Input, OnInit } from '@angular/core';
import { Product } from './product.model';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {

 @Input() product: Product = {
    name: 'Special Dog',
    productType: 'necklace',
    imagePath: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
    price: 100.00,
    size: 10.5,
    oneOfOne: false,
    quantity: 1,
    description: `This is a description of the item`,
    instructions: '',
    special: false

  }

  constructor() { }

  ngOnInit(): void {
  }

}
