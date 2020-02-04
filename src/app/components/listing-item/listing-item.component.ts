import { Component, OnInit, Input } from '@angular/core';

import { faHeart, faCalendarAlt, faStar as faStarReg } from '@fortawesome/free-regular-svg-icons';
import {
  faCamera,
  faArrowsAltH,
  faMapMarkerAlt,
  faBed,
  faArrowsAlt,
  faBath,
  faCar,
  faStar,
  faStarHalfAlt
} from '@fortawesome/free-solid-svg-icons';

import { Property } from '../../classes/property';

@Component({
  selector: 'app-listing-item',
  templateUrl: './listing-item.component.html',
  styleUrls: ['./listing-item.component.scss']
})
export class ListingItemComponent implements OnInit {
  @Input() property: Property;

  ratingList: number[];

  faCamera = faCamera;
  faHeart = faHeart;
  faArrowsAltH = faArrowsAltH;

  faMapMarkerAlt = faMapMarkerAlt;
  faBed = faBed;
  faArrowsAlt = faArrowsAlt;
  faBath = faBath;
  faCar = faCar;
  faCalendarAlt = faCalendarAlt;

  faStar = faStar;
  faStarHalfAlt = faStarHalfAlt;
  faStarReg = faStarReg;

  getRatingList() {
    const { rating } = this.property;

    const list = Array(5)
      .fill(1)
      .map((li, index) => {
        const num = index + 1;
        const diff = rating - num;
        if (diff >= 0) {
          return 1;
        } else if (diff > -1) {
          return 0.5;
        } else {
          return 0;
        }
      });

    return list;
  }

  constructor() {}

  ngOnInit() {
    this.ratingList = this.getRatingList();
  }
}
