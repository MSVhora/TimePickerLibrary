import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { NgTimePickerComponent } from './ng-time-picker.component';

@NgModule({
  declarations: [NgTimePickerComponent],
  imports: [    
    CommonModule,
    FormsModule
  ],
  exports: [NgTimePickerComponent]
})
export class NgTimePickerModule { }