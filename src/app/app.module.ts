import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CustomerComponent } from './customer/customer.component';
import {RouterModule, Routes} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { RailsComponent } from './rails/rails.component';
import { RouteComponent } from './route/route.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    RailsComponent,
    RouteComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(
      [
        {
          'path' : 'customer',
          'component' : CustomerComponent
        },
        {
          'path' : 'rails',
          'component' : RailsComponent
        }
      ]
    )

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
