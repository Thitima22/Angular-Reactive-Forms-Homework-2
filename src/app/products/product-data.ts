import { InMemoryDbService } from 'angular-in-memory-web-api';

import { Product } from './product';

export class ProductData implements InMemoryDbService {
  createDb(): { products: Product[] } {
    const products: Product[] = [
      {
        id: 1,
        productName: 'Conan the movie',
        productCode: 'CTM-0002',
        productLocation: 'Esplanade Cineplex Ngamwongwan-Khae Rai',
        releaseDate: 'August 02, 2018',
        description: 'Zero the enforcer',
        price: 150,
        starRating: 3.1,
        imageUrl: 'assets/images/CTM-0002.png',
        tags: ['Cartoon', 'Detective', 'Yuzuru Tachikawa'],
        times: ['14:00', '19:00', '21:30'],
      },
      {
        id: 2,
        productName: 'Doraemon the movie',
        productCode: 'DTM-0023',
        productLocation: 'Major Cineplex Ratchayothin',
        releaseDate: 'January 23, 2021',
        description: 'Stand by me doraemon',
        price: 150,
        starRating: 3.7,
        imageUrl: 'assets/images/DTM-0023.png',
        tags: ['Cartoon', 'Drama', 'Tony Oliver', 'Ryuichi Yagi'],
        times: ['11:30', '16:30', '21:30'],
      },
      {
        id: 3,
        productName: 'Beauty and the Beast',
        productCode: 'BTB-0016',
        productLocation: 'Paragon Cineplex',
        releaseDate: 'March 16, 2017',
        description: 'The prince who became a monster',
        price: 250,
        starRating: 3.6,
        imageUrl: 'assets/images/BTB-0016.png',
        tags: ['Fantasy', 'Romantice', 'Bill Condon'],
        times: ['11:30', '14:00', '19:00', '21:30'],
      },
      {
        id: 4,
        productName: 'Mulan',
        productCode: 'MLA-0004',
        productLocation: 'Major Cineplex Pattaya',
        releaseDate: 'September 04, 2020',
        description: 'The girl who was the hope of the hua clan',
        price: 200,
        starRating: 2.9,
        imageUrl: 'assets/images/MLA-0004.png',
        tags: ['Action', 'Drama', 'Niki Caro'],
        times: ['12:00', '17:00', '22:00'],
      },
      {
        id: 5,
        productName: 'Fantastic beasts',
        productCode: 'FAW-0017',
        productLocation: 'Mega Cineplex',
        releaseDate: 'November 17, 2016',
        description: 'A new era in the world of magic',
        price: 250,
        starRating: 3.7,
        imageUrl: 'assets/images/FAW-0017.png',
        tags: ['Fantasy', 'Adventure', 'J.K Rowling'],
        times: ['11:30', '16:30'],
      },
    ];
    return { products };
  }
}
