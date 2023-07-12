import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  footerBoxes: any[] = [
    {
      title: 'MY ACCOUNT',
      items: [
        'About Us',
        'Delivery Information',
        'Privacy Policy',
        'Terms & Conditions',
        'Newsletter'
      ]
    },
    {
      title: 'INFORMATION',
      items: [
        'My Account',
        'Order History',
        'Wish List',
        'Specials',
        'Brands'
      ]
    },
    {
      title: 'CUSTOMER SERVICE',
      items: [
        'Contact Us',
        'Site Map',
        'Gift Certificates',
        'Affiliate',
        'Returns'
      ]
    },
    {
      title: 'CONTACT US',
      items: [
        'Address: Lahore',
        'in Pakistan',
        'Call: 123-456-789',
        'Email: safa@example.com'
      ]
    }
  ];

  externalLinks: string[] = [
    'Engine',
    'Transmission',
    'Driveshaft',
    'Axles',
    'Wheels',
    'Tires',
    'Brakes',
    'Suspension',
    'Steering',
    'Body',
    'Interior',
    'Windows',
    'Mirrors',
    'Lights'
  ];
}

