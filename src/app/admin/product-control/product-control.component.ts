import { ProductDataService } from './../../services/product-data.service';
import {Component, ViewChild} from '@angular/core';
import {MatTable} from '@angular/material/table';
import { Product } from 'src/app/products/product.model';




/**
 * @title Adding and removing data when using an array-based datasource.
 */
@Component({
  selector: 'app-product-control',
  styleUrls: ['product-control.component.scss'],
  templateUrl: 'product-control.component.html',
})
export class ProductControlComponent {
  displayedColumns: string[] = ['id', 'name', 'productType', 'price', 'quantity', 'oneOfOne', 'image','size', 'special', 'description'];
  dataSource$ = this.ProductData.products$;

  @ViewChild(MatTable) table?: MatTable<Product>;

  constructor(private ProductData: ProductDataService){

  }

  addProduct() {

  }

  removeData() {

  }
}
