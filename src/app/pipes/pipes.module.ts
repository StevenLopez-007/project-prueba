import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TruncatePipe } from './truncate.pipe';
import { FilterProductPipe } from './filter-product.pipe';



@NgModule({
  declarations: [
    TruncatePipe,
    FilterProductPipe
  ],
  imports: [
    CommonModule
  ],
  exports:[
    TruncatePipe,
    FilterProductPipe
  ]
})
export class PipesModule { }
