import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FlagsComponent } from './flags/flags.component';
import { FooterComponent } from './footer/footer.component';
import { CountriesComponent } from './countries/countries.component';
import { ParentComponent } from './parent/parent.component';

@NgModule({
  declarations: [
    AppComponent,
    FlagsComponent,
    FooterComponent,
    CountriesComponent,
    ParentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
