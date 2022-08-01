import { Component, OnDestroy, OnInit } from '@angular/core';
import { finalize, Subscription } from 'rxjs';
import { ProductI } from './interfaces/product.interface';
import { ProductsService } from './services/products.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit,OnDestroy{

  loading:boolean = true;


  products:ProductI[]=[];

  search:string = '';

  subs:Subscription = new Subscription();

  constructor(private productsService: ProductsService){}

  ngOnInit(): void {
    this.getProducts();

    this.subs.add(
      this.productsService.search$.subscribe({
        next:((search:string)=>{
          if(search){
            this.search = search;
          }
        })
      })
    )
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

  getProducts(){
    this.loading = true;
    this.productsService.getProducts().pipe(
      finalize(()=>{
        this.loading = false;
      })
    ).subscribe({
      next:((products:ProductI[])=>{
        this.products = products;
      })
    })
  }
}
