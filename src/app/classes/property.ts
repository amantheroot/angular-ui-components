export class Property {
  imgUrl: string;
  dealer: {
    dealerName: string,
    avatarUrl: string
  };
  features: {
    forRent: boolean;
    forSale: boolean;
    featured: boolean;
    new: boolean;
  };
  photos: string[];
  propertyName: string;
  location: string;
  information: {
    bedrooms: number;
    baths: number;
    garages: number;
    area: number;
  };
  posted: number;
  rating: number;
  cost: number;
}
