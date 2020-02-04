import { Injectable } from '@angular/core';
import { Property } from '../classes/property';

@Injectable({
  providedIn: 'root'
})
export class ListingService {
  propertyList: Property[];

  getPropertyList() {
    this.propertyList = [
      {
        imgUrl: 'http://demo.lion-coders.com/html/sarchholm-real-estate-template/images/property/property_1.jpg',
        dealer: {
          dealerName: 'Tony Stark',
          avatarUrl: 'http://demo.lion-coders.com/html/sarchholm-real-estate-template/images/agents/agent_min_1.jpg'
        },
        photos: [],
        features: {
          forRent: false,
          forSale: true,
          featured: true,
          new: false
        },
        propertyName: 'Villa on Hartford',
        location: '2854 Meadow View Drive, Hartford, USA',
        information: {
          bedrooms: 4,
          baths: 3,
          garages: 2,
          area: 2142
        },
        posted: 2,
        rating: 3.5,
        cost: 25000
      },
      {
        imgUrl: 'http://demo.lion-coders.com/html/sarchholm-real-estate-template/images/property/property_1.jpg',
        dealer: {
          dealerName: 'Tony Stark',
          avatarUrl: 'http://demo.lion-coders.com/html/sarchholm-real-estate-template/images/agents/agent_min_1.jpg'
        },
        photos: [],
        features: {
          forRent: false,
          forSale: true,
          featured: true,
          new: false
        },
        propertyName: 'Villa on Hartford',
        location: '2854 Meadow View Drive, Hartford, USA',
        information: {
          bedrooms: 4,
          baths: 3,
          garages: 2,
          area: 2142
        },
        posted: 2,
        rating: 3.5,
        cost: 25000
      },
      {
        imgUrl: 'http://demo.lion-coders.com/html/sarchholm-real-estate-template/images/property/property_1.jpg',
        dealer: {
          dealerName: 'Tony Stark',
          avatarUrl: 'http://demo.lion-coders.com/html/sarchholm-real-estate-template/images/agents/agent_min_1.jpg'
        },
        photos: [],
        features: {
          forRent: false,
          forSale: true,
          featured: true,
          new: false
        },
        propertyName: 'Villa on Hartford',
        location: '2854 Meadow View Drive, Hartford, USA',
        information: {
          bedrooms: 4,
          baths: 3,
          garages: 2,
          area: 2142
        },
        posted: 2,
        rating: 3.5,
        cost: 25000
      }
    ];

    return this.propertyList;
  }

  // constructor() { }
}
