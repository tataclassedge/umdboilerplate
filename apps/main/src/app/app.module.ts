import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { UmdSharedModule, UmdModule } from '@wb-umd-test/umd';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    UmdModule,
    UmdSharedModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {}