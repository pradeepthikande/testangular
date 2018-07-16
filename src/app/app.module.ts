import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PlusComponent } from './plus/plus.component';
import { ProductComponent } from './product/product.component';


import { Routes, RouterModule} from '@angular/router';
import { FormComponent } from './form/form.component';

import {CalendarModule} from 'primeng/primeng';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
    
      { path: 'app', component: FormComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    PlusComponent,
    ProductComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    CalendarModule,
     FormsModule ,
    RouterModule.forRoot(routes)
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
