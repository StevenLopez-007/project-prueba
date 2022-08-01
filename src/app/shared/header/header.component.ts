import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: [
  ]
})
export class HeaderComponent implements OnInit {

  search:string = '';

  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {
  }

  updateSearch(){
    setTimeout(()=>{
      this.productsService.search$.next(this.search);
    },350);
  }

}
