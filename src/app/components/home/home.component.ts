import { Component } from '@angular/core';
import { ProductServiceService } from 'src/app/services/product-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  constructor(private productService: ProductServiceService) { }
  ngOnInit(): void {
    this.productService.productList().subscribe(product => {
      const transformedProducts = product.map(product => {
        return {
          type: String(product.type),
          img: String(product.img),
          name: String(product.name),
          rate: product.rate,
          id: product.id as number,
        };
      });
      this.popularFeatured.push(transformedProducts);
    });
  }
  popular_Id: number = 0;
  profile_Id = 0;
  dailyDealId = 1;
  dailyDeals = [
    [
      {
        img1: '../../../assets/Img/Category/img-5.jpg',
        img2: '../../../assets/Img/Category/img-5-1.jpg',
        img3: '../../../assets/Img/Category/img-7.jpg',
        type: 'Wheel Accessories',
        name: 'Brakes',
        rate: 1202,
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, debitis.',
        time: {
          d: 24,
          h: 20,
          m: 10,
          s: 30
        },
        stock: 92
      },
      {
        img1: '../../../assets/Img/Category/img-4.jpg',
        img2: '../../../assets/Img/Category/img-2.jpg',
        img3: '../../../assets/Img/Category/img-3.jpg',
        type: 'Engine Parts',
        name: 'Car Engine',
        rate: 241,
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, debitis.',
        time: {
          d: 40,
          h: 13,
          m: 10,
          s: 40
        },
        stock: 12
      },
    ],
    [
      {
        img1: '../../../assets/Img/Category/img-1.jpg',
        img2: '../../../assets/Img/Category/img-1-1.jpg',
        img3: '../../../assets/Img/Category/img-1-2.jpg',
        type: 'Wheel',
        name: 'Car Wheel',
        rate: 602,
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, debitis.',
        time: {
          d: 1,
          h: 2,
          m: 10,
          s: 20
        },
        stock: 2
      },
      {
        img1: '../../../assets/Img/Category/img-3.jpg',
        img2: '../../../assets/Img/Category/img-6.jpg',
        img3: '../../../assets/Img/Category/img-6-1.jpg',
        type: 'Car Parts',
        name: 'Body Parts',
        rate: 122,
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, debitis.',
        time: {
          d: 20,
          h: 23,
          m: 50,
          s: 10
        },
        stock: 112
      },
    ],
    [
      {
        img1: '../../../assets/Img/Category/img-2.jpg',
        img2: '../../../assets/Img/Category/img-2-1.jpg',
        img3: '../../../assets/Img/Category/img-2-2.jpg',
        type: 'Car Parts',
        name: 'Engine Filter',
        rate: 38,
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, debitis.',
        time: {
          d: 10,
          h: 12,
          m: 1,
          s: 2
        },
        stock: 12
      },
      {
        img1: '../../../assets/Img/Category/img-6.jpg',
        img2: '../../../assets/Img/Category/img-6-1.jpg',
        img3: '../../../assets/Img/Category/img-7.jpg',
        type: 'Car Inner Parts',
        name: 'Car Seat Cushion',
        rate: 890,
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, debitis.',
        time: {
          d: 0,
          h: 3,
          m: 5,
          s: 50
        },
        stock: 1
      },
    ],
  ];


  profiles = [
    {
      post: 'Mechanic',
      name: 'John Smith',
      img: '../../../assets/Img/Profile/img-1.jpg',
      text: `I was looking for a specific part for my car, a 2001 Honda Civic, and I couldn't find it anywhere else. I was about to give up when I found your website. You had the part I needed, and the price was great. I ordered the part, and it arrived the next day. I was so happy with your service, and I would definitely recommend you to anyone looking for auto parts.`
    },
    {
      post: 'Truck driver',
      name: 'Jane Doe',
      img: '../../../assets/Img/Profile/img-2.jpg',
      text: "I've been using your website for years, and I've always been happy with the service. You have a wide selection of parts for trucks, and the prices are always competitive. I've never had a problem with an order, and your customer service is excellent. I would definitely recommend your website to anyone looking for auto parts for trucks."
    },
    {
      post: 'Sales representative',
      name: 'Mary Jones',
      img: '../../../assets/Img/Profile/img-3.jpg',
      text: `I was in a bind when my car broke down, and I needed a part right away. I found your website, and I was able to order the part online. The part arrived the next day, and I was able to get my car fixed. I was so grateful for your quick and efficient service. I would definitely recommend your website to anyone in a similar situation.`
    },
  ]
  popularFeatured = [
    [
      {
        id: 1,
        type: 'Wheel',
        img: '../../../assets/Img/Category/img-1.jpg',
        name: 'Two Color Car Wheel',
        rate: 602,
      },
      {
        id: 2,
        type: 'Engine Accessories',
        img: '../../../assets/Img/Category/img-2.jpg',
        name: 'Alternator Engine Car',
        rate: 38,
      },
      {
        id: 3,
        type: 'Body Parts',
        img: '../../../assets/Img/Category/img-3.jpg',
        name: 'Car Body Parts',
        rate: 122,
      },
    ],
    [
      {
        id: 4,
        type: 'Repaired Parts',
        img: '../../../assets/Img/Category/img-4.jpg',
        name: 'Repaired Car Engine',
        rate: 241,
      },
      {
        id: 5,
        type: 'Brakes',
        img: '../../../assets/Img/Category/img-5.jpg',
        name: 'Brakes 1',
        rate: 1202,
      },
      {
        id: 6,
        type: 'Brakes',
        img: '../../../assets/Img/Category/img-5-1.jpg',
        name: 'Brakes 2',
        rate: 902,
      },
    ],
    [
      {
        id: 7,
        type: 'Car Parts',
        img: '../../../assets/Img/Category/img-6.jpg',
        name: 'Car Seat Cushion-1',
        rate: 890,
      },
      {
        id: 8,
        type: 'Car Parts',
        img: '../../../assets/Img/Category/img-6-1.jpg',
        name: 'Car Seat Cushion-2',
        rate: 900,
      },
      {
        id: 9,
        type: 'Car Parts',
        img: '../../../assets/Img/Category/img-7.jpg',
        name: 'Car Steering',
        rate: 122,
      },
    ],
  ];

  categories = [
    {
      img: '../../../assets/Img/Category/c-img-1.jpg',
      type: 'Electrical',
      name: ['Rickshaw', 'Scooter', 'Car', 'Truck']
    },
    {
      img: '../../../assets/Img/Category/c-img-2.jpg',
      type: 'Three Wheeler',
      name: ['Auto Mechanic', 'Battery', 'Car', 'Sheet']
    },
    {
      img: '../../../assets/Img/Category/c-img-3.jpg',
      type: 'Auto Mechanic',
      name: ['Alloy Wheel', 'Car Repair', 'Driving', 'Service']
    },
    {
      img: '../../../assets/Img/Category/c-img-4.jpg',
      type: 'Exterior',
      name: ['Bike', 'Oem Parts', 'Software', 'Stock']
    },
    {
      img: '../../../assets/Img/Category/c-img-5.jpg',
      type: 'Battery',
      name: ['Alloy Wheel', 'Body', 'Car', 'Steering']
    },
    {
      img: '../../../assets/Img/Category/c-img-6.jpg',
      type: 'Auto Repair',
      name: ['Car Repair', 'Design', 'Software', 'Brakes']
    },
  ]

  specialProducts = [
    {
      img: '../../../assets/Img/Category/img-6.jpg',
      type: 'Car Inner Parts',
      name: 'Car Seat Cushion',
      rate: 890
    },
    {
      img: '../../../assets/Img/Category/img-1.jpg',
      type: 'Wheel',
      name: 'Two Color Car Wheel',
      rate: 602
    },
    {
      img: '../../../assets/Img/Category/img-2.jpg',
      type: 'Engine Accessories',
      name: 'Alternator Engine Car',
      rate: 38
    },
  ]

  latestBlogCards = [
    {
      img: '../../../assets/Img/Latest Blog/img-1.jpg',
      title: 'The Drive: A blog for car enthusiasts of all stripes.',
      desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus, officia eos? Explicabo ratione nam eveniet fugit excepturi at quod id.',
      date: 13,
      month: 'DEC'
    },
    {
      img: '../../../assets/Img/Latest Blog/img-2.jpg',
      title: 'Autoblog: The latest news and reviews from the automotive world.',
      desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus, officia eos? Explicabo ratione nam eveniet fugit excepturi at quod id.',
      date: 17,
      month: 'JUL'
    },
    {
      img: '../../../assets/Img/Latest Blog/img-3.jpg',
      title: 'Cycle World: The definitive resource for motorcycle enthusiasts.',
      desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus, officia eos? Explicabo ratione nam eveniet fugit excepturi at quod id.',
      date: 29,
      month: 'JUN'
    },
  ]

  deliveryRulesBoxes = [
    {
      img: '../../../assets/Img/Rules/1.png',
      title: 'Free Shipping.',
      desc: 'Free Worldwide ShiPping On All Area On Order Above $100'
    },
    {
      img: '../../../assets/Img/Rules/2.png',
      title: '7 Days Easy Return.',
      desc: 'Product Any Fault Within 07 Days For An Immediately Exchange'
    },
    {
      img: '../../../assets/Img/Rules/3.png',
      title: '24/7 Friendly Support.',
      desc: 'Our Support Team Always Ready For You To 7 Days A Week'
    },
    {
      img: '../../../assets/Img/Rules/4.png',
      title: 'Payment Secure.',
      desc: 'We Ensure 100% Secure Payment With Online Payment'
    },
  ]


  popFunc(number: number): void {
    this.popular_Id = number;
  }

  popArrowFunc(value: string, value2: string): void {
    if (value2 === 'popular') {
      if (value === 'prev') {
        if (this.popular_Id === 0) {
          this.popular_Id = 3;
        } else {
          this.popular_Id--;
        }
      } else if (value === 'next') {
        if (this.popular_Id === 3) {
          this.popular_Id = 0;
        } else {
          this.popular_Id++;
        }
      }
    } else if (value2 === 'profile') {
      if (value === 'prev') {
        if (this.profile_Id === 0) {
          this.profile_Id = 2;
        } else {
          this.profile_Id--;
        }
      } else if (value === 'next') {
        if (this.profile_Id === 2) {
          this.profile_Id = 0;
        } else {
          this.profile_Id++;
        }
      }
    } else if (value2 === 'dailyDeals') {
      if (value === 'prev') {
        if (this.dailyDealId === 0) {
          this.dailyDealId = 2;
        } else {
          this.dailyDealId--;
        }
      } else if (value === 'next') {
        if (this.dailyDealId === 2) {
          this.dailyDealId = 0;
        } else {
          this.dailyDealId++;
        }
      }
    }
  }
}
