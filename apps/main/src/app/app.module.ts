import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { UmdSharedModule, UmdModule } from '@wb-umd-test/umd';
import { WhiteboardModule } from '@wb-umd-test/whiteboard';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    UmdModule,
    UmdSharedModule.forRoot(),
    WhiteboardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {}