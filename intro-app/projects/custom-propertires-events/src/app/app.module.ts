import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MyCardComponent } from './my-card/my-card.component';
import { CompComComponent } from './comp-com/comp-com.component';
import { PrgComponent } from './comp-com/prg.component';
import { BtnComponent } from './comp-com/btn.component';

@NgModule({
  declarations: [
    AppComponent,
    MyCardComponent,
    CompComComponent,
    PrgComponent,
    BtnComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
