import { Pipe, PipeTransform } from '@angular/core';
import { ProductI } from '../interfaces/product.interface';

@Pipe({
  name: 'filterProduct'
})
export class FilterProductPipe implements PipeTransform {

  transform(products:ProductI[]=[],search:string=''): ProductI[] {
    if(products?.length==0 || !search){
      return products;
    }

    return products.filter(p=>p.title.toLocaleLowerCase().includes(search))
  }

}
