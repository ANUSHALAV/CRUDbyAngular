import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RagistrationComponent } from './MyComponent/ragistration/ragistration.component';
import { HeaderComponent } from './MyComponent/header/header.component';
import { AlldataComponent } from './MyComponent/alldata/alldata.component';
import { AboutComponent } from './MyComponent/about/about.component';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { UpdateComponent } from './MyComponent/update/update.component';

@NgModule({
  declarations: [
    AppComponent,
    RagistrationComponent,
    HeaderComponent,
    AlldataComponent,
    AboutComponent,
    UpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
