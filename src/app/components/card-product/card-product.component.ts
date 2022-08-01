import { Component, Input, OnInit } from '@angular/core';
import { ProductI } from '../../interfaces/product.interface';

@Component({
  selector: 'app-card-product',
  templateUrl: './card-product.component.html',
  styleUrls:['./card-product.component.css']
})
export class CardProductComponent implements OnInit {

  @Input() product!:ProductI;

  showMoreDescription:any=[];

  constructor() { }

  ngOnInit(): void {
  }

}
