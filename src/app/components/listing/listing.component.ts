import { Component, OnInit } from '@angular/core';

import { Property } from '../../classes/property';
import { ListingService } from '../../services/listing.service';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.scss']
})
export class ListingComponent implements OnInit {
  propertyList: Property[];

  constructor(private listingService: ListingService) { }

  ngOnInit() {
    this.propertyList = this.listingService.getPropertyList();
  }

}
