import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRouting } from './app-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { FetchComponent } from './firebase/fetch/fetch.component';
import { FormsModule } from '@angular/forms';
import { AuthInterceptorsService } from './services/auth-interceptors.service';

@NgModule({
  declarations: [
    AppComponent,
    FetchComponent
  ],
  imports: [
    BrowserModule,
    AppRouting,
    HttpClientModule,
    FormsModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS, 
    useClass: AuthInterceptorsService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
