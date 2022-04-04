import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NgxImageCompressService} from 'ngx-image-compress';
import { ImageCompressComponent } from './views/image-compress/image-compress.component';
const routes: Routes = [
  {path : '', component : ImageCompressComponent},


];

@NgModule({
  declarations: [
    AppComponent,
    ImageCompressComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
      RouterModule.forChild(routes)

  ],
  exports: [RouterModule],
  providers: [NgxImageCompressService],
  bootstrap: [AppComponent]
})
export class AppModule { }
