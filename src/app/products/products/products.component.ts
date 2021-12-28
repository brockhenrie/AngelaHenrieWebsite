import { ProductDataService } from '../product-data.service';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Product } from '../product.model';
import { PageEvent } from '@angular/material/paginator';
import {  BehaviorSubject, combineLatest } from 'rxjs';
import { map, tap} from 'rxjs/operators';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductsComponent implements OnInit {
  pageTitle = 'Angela Henrie - Products';
  productTypes= [''];

  tabs = [
    {label:'Products', route: 'list'},
    {label:'Services', route:'list'},

  ];
  activeLinka = this.tabs[0].route;


  selectedProductType = "All";
  private typeSelectedSubject = new BehaviorSubject<string>(this.selectedProductType);

  typeSelectedAction$ = this.typeSelectedSubject.asObservable();



  productsFiltered$ = combineLatest(
    this.prodData.products$,
    this.typeSelectedAction$
  )
  .pipe(
    map(([products,typeSelected])=>
      products.filter( (product: Product) =>{
        if(typeSelected === 'All'){
          return product.productType
        }else{
         return product.productType ? product.productType === typeSelected : true
        }
      }
      )
    ),
    tap(res => {
      this.currentSize=res.length;
      this.filteredSize = this.currentSize;
      this.pageSlice = res;
    })
  );


  cachedProducts!: Product[];

  pageSlice!: Product[];

  activeLink = this.productTypes[0];
  currentSize!: number;
  filteredSize!: number;
  errorMessage?: string;



  constructor(private prodData: ProductDataService,
    private title:Title) {};

  ngOnInit(): void {
    this.title.setTitle(this.pageTitle);
    this.productTypes = this.prodData.getProductTypes();

  }











  onPageChange(event: PageEvent) {
    this.currentSize = event.pageSize;
    const startIndex = event.pageIndex * event.pageSize;
    let endIndex = startIndex + event.pageSize;
    if (endIndex > this.filteredSize) {
      endIndex = this.filteredSize;
    }
    this.pageSlice = this.pageSlice.slice(startIndex, endIndex);
  }

  onNav(route: string) {

    console.log(route)
    this.typeSelectedSubject.next(route);



  }


}
