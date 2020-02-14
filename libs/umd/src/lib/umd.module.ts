import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UmdContainerComponent } from './umd-container/umd-container.component';
import { UmdSharedModule } from './umd-loader/umd-shared-module.service';

@NgModule({
  imports: [CommonModule, UmdSharedModule.forChild()],
  exports: [UmdContainerComponent],
  declarations: [UmdContainerComponent]
})

export class UmdModule {}
