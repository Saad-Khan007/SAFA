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
        'Address: Dara Adamkhel',
        'in Pakistan',
        'Call: 123-456-789',
        'Email: safa@weapon.com'
      ]
    }
  ];

  externalLinks: string[] = [
    'OpticsPlanet',
    'AR500 Armor',
    '5.11 Tactical',
    'Tactical Gear Junkie',
    'Cheaper Than Dirt',
    'Police Gear',
    'Tactical Distributors',
    'GunMag Warehouse',
    'Gun Safes',
    'Alien Gear Holsters',
    'US Patriot Tactical',
    'Primary Arms',
    'Bravo Company USA',
    'Gun Pro Deals'
  ];
}

