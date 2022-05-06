import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRouting } from './app-routing.module';

import { AppComponent } from './app.component';
import { FetchComponent } from './firebase/fetch/fetch.component';

@NgModule({
  declarations: [
    AppComponent,
    FetchComponent
  ],
  imports: [
    BrowserModule,
    AppRouting
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
