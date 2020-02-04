import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppComponent } from './app.component';
import { ListingItemComponent } from './components/listing-item/listing-item.component';
import { ListingComponent } from './components/listing/listing.component';

import { ListingService } from './services/listing.service';

@NgModule({
  declarations: [
    AppComponent,
    ListingItemComponent,
    ListingComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule
  ],
  providers: [ListingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
