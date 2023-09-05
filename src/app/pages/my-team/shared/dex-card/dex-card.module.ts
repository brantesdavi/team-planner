import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DexCardComponent } from './dex-card.component';



@NgModule({
  declarations: [
    DexCardComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    DexCardComponent
  ]
})
export class DexCardModule { }
