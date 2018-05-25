import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { OrderComponentComponent } from './order-component/order-component.component';
import { AppBoldDirective } from './app-bold.directive';
import { ImageComponent } from './image/image.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    OrderComponentComponent,
    AppBoldDirective,
    ImageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
