import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WhiteboardComponent } from './whiteboard/whiteboard.component';

@NgModule({
  imports: [CommonModule],
  declarations: [WhiteboardComponent],
  exports: [WhiteboardComponent]
})

export class WhiteboardModule {}
