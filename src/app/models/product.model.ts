export class Product {
  id: string;
  name: string;
  number: string;
  description: string;
  dailyHours: number;
  images: Array<Image>;
}

export class Image {
  url: string;
  name: string;
}
