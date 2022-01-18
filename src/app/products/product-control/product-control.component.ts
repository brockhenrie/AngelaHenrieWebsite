import { Router } from '@angular/router';
import { ProductDataService } from '../../services/product-data.service';
import {Component, ViewChild} from '@angular/core';
import {MatTable} from '@angular/material/table';
import { Product } from 'src/app/products/product.model';
import { MatDialog } from '@angular/material/dialog';
import { EditProductComponent} from '../edit-product/edit-product.component';


export interface DialogData extends Product {
  product:Product,
  editMode:boolean
}

/**
 * @title Adding and removing data when using an array-based datasource.
 */
@Component({
  selector: 'app-product-control',
  styleUrls: ['product-control.component.scss'],
  templateUrl: 'product-control.component.html',
})
export class ProductControlComponent {
  displayedColumns: string[] = ['name', 'productType', 'quantity', 'image', 'edit'];
  dataSource$ = this.ProductData.products$;

  @ViewChild(MatTable) table?: MatTable<Product>;

  constructor(
    private ProductData: ProductDataService,
    private router: Router,
    public dialog: MatDialog){

  }


  openDialog(product:Product) {

    this.dialog.open(EditProductComponent, {
      data: {
        ...product,
         editMode: true
      },
    });
  }


  removeData() {

  }

  onEdit(id:string){
    this.router.navigate(['products','product', id, 'edit']);
  }

}
