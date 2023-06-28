import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  popular_Id: number = 0;
  profile_Id = 0;
  popFunc(number: number): void {
    this.popular_Id = number;
  }
  popArrowFunc(value: string, value2: string): void {
    if (value2 === 'popular') {
      if (value === 'prev') {
        if (this.popular_Id === 0) {
          this.popular_Id = 2;
        } else {
          this.popular_Id--;
        }
      } else if (value === 'next') {
        if (this.popular_Id === 2) {
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
    }
  }
  profiles = [
    {
      post: 'Sniper',
      name: 'American Sniper.',
      img: '../../../assets/Img/Profile/img-1.jpg'
    },
    {
      post: 'Swordsman',
      name: 'MR. Unknown',
      img: '../../../assets/Img/Profile/img-2.jpg'
    },
    {
      post: 'Heavy Weapons Operator',
      name: 'MR. Nobody',
      img: '../../../assets/Img/Profile/img-3.jpg'
    },
  ]
  popularFeatured = [
    [
      {
        type: 'Pistol',
        img: '../../../assets/Img/Category/img-1-1.jpg',
        name: 'Derringers',
        rate: 100,
      },
      {
        type: 'Pistol',
        img: '../../../assets/Img/Category/img-1-4.jpg',
        name: 'Semi-automatic Pistols',
        rate: 200,
      },
      {
        type: 'Grenade',
        img: '../../../assets/Img/Category/img-2-1.jpg',
        name: 'Flash Grenade',
        rate: 10,
      },
      {
        type: 'Grenade',
        img: '../../../assets/Img/Category/img-2-2.jpg',
        name: 'Smoke Grenade',
        rate: 15,
      },
      {
        type: 'Sniper',
        img: '../../../assets/Img/Category/img-3-1.jpg',
        name: 'Sako TRG',
        rate: 1000,
      },
      {
        type: 'Sniper',
        img: '../../../assets/Img/Category/img-3-3.jpg',
        name: 'Barrett M82/M107',
        rate: 1700,
      },
      {
        type: 'Rifle',
        img: '../../../assets/Img/Category/img-4-3.jpg',
        name: 'Lever-Action Rifle',
        rate: 1370,
      },
      {
        type: 'Rifle',
        img: '../../../assets/Img/Category/img-4-4.jpg',
        name: 'Semi-Automatic Rifle',
        rate: 3120,
      },
      {
        type: 'Knife',
        img: '../../../assets/Img/Category/img-5-1.jpg',
        name: 'Tactical Knife',
        rate: 60,
      },
      {
        type: 'Dagger',
        img: '../../../assets/Img/Category/img-5-3.jpg',
        name: 'Khanjar',
        rate: 230,
      },
    ],
    [
      {
        type: 'Pistol',
        img: '../../../assets/Img/Category/img-1-1.jpg',
        name: 'Derringers',
        rate: 100,
      },
      {
        type: 'Pistol',
        img: '../../../assets/Img/Category/img-1-2.jpg',
        name: 'Pocket Pistols',
        rate: 150,
      },
      {
        type: 'Pistol',
        img: '../../../assets/Img/Category/img-1-3.jpg',
        name: 'Double-Action Pistols',
        rate: 170,
      },
      {
        type: 'Pistol',
        img: '../../../assets/Img/Category/img-1-4.jpg',
        name: 'Semi-automatic Pistols',
        rate: 200,
      },
      {
        type: 'Grenade',
        img: '../../../assets/Img/Category/img-2-1.jpg',
        name: 'Flash Grenade',
        rate: 10,
      },
      {
        type: 'Grenade',
        img: '../../../assets/Img/Category/img-2-2.jpg',
        name: 'Smoke Grenade',
        rate: 15,
      },
      {
        type: 'Grenade',
        img: '../../../assets/Img/Category/img-2-3.jpg',
        name: 'Concussion Grenade',
        rate: 17,
      },
      {
        type: 'Grenade',
        img: '../../../assets/Img/Category/img-2-4.jpg',
        name: 'Fragmentation Grenade',
        rate: 20,
      }
    ],
    [
      {
        type: 'Sniper',
        img: '../../../assets/Img/Category/img-3-1.jpg',
        name: 'Sako TRG',
        rate: 1000,
      },
      {
        type: 'Sniper',
        img: '../../../assets/Img/Category/img-3-2.jpg',
        name: 'Dragunov SVD',
        rate: 1500,
      },
      {
        type: 'Sniper',
        img: '../../../assets/Img/Category/img-3-3.jpg',
        name: 'Barrett M82/M107',
        rate: 1700,
      },
      {
        type: 'Sniper',
        img: '../../../assets/Img/Category/img-3-4.jpg',
        name: 'Mosin-Nagant M91/30',
        rate: 2000,
      },
      {
        type: 'Rifle',
        img: '../../../assets/Img/Category/img-4-1-1.jpg',
        name: 'Assault Rifle',
        rate: 900,
      },
      {
        type: 'Rifle',
        img: '../../../assets/Img/Category/img-4-2-2.jpg',
        name: 'Bolt-Action Rifle',
        rate: 1050,
      },
      {
        type: 'Rifle',
        img: '../../../assets/Img/Category/img-4-3.jpg',
        name: 'Lever-Action Rifle',
        rate: 1370,
      },
      {
        type: 'Rifle',
        img: '../../../assets/Img/Category/img-4-4.jpg',
        name: 'Semi-Automatic Rifle',
        rate: 3120,
      }
    ],

  ]
  categories = [
    {
      img: '../../../assets/Img/Category/img-1.jpg',
      type: 'Pistol',
      name: ['Derringers', 'Pocket Pistols', 'Double-Action Pistols', 'Semi-automatic Pistols']
    },
    {
      img: '../../../assets/Img/Category/img-2.jpg',
      type: 'Grenade',
      name: ['Flash Grenade', 'Smoke Grenade', 'Concussion Grenade', 'Fragmentation Grenade']
    },
    {
      img: '../../../assets/Img/Category/img-3.jpg',
      type: 'Sniper',
      name: ['Sako TRG', 'Dragunov SVD', 'Barrett M82/M107', 'Mosin-Nagant M91/30']
    },
    {
      img: '../../../assets/Img/Category/img-4.jpg',
      type: 'Rifle',
      name: ['Assault Rifle', 'Bolt-Action Rifle', 'Lever-Action Rifle', 'Semi-Automatic Rifle']
    },
    {
      img: '../../../assets/Img/Category/img-5.jpg',
      type: 'Knife',
      name: ['Pocket Knife', 'Tactical Knife', 'Survival Knife', 'Hunting Knife']
    },
    {
      img: '../../../assets/Img/Category/img-6.jpg',
      type: 'Armor',
      name: ['Shield', 'Helmet', 'Plate Armor', 'Brigandine Armor']
    },
  ]

  specialProducts = [
    {
      img: '../../../assets/Img/Latest Blog/img-1.jpg',
      type: 'Pistol',
      name: 'Desert Eagle',
      rate: 200
    },
    {
      img: '../../../assets/Img/Latest Blog/img-2.jpg',
      type: 'Rifle',
      name: 'Assault Rifle M-16',
      rate: 500
    },
    {
      img: '../../../assets/Img/Latest Blog/img-3.jpg',
      type: 'Auto-Rifle',
      name: 'Kalashnikov (AK-47)',
      rate: 2000
    },
  ]

  latestBlogCards = [
    {
      img: '../../../assets/Img/Latest Blog/img-1.jpg',
      title: 'The Mighty Pistol: Unveiling the Power and Versatility',
      desc: 'Discover the compact and formidable world of pistols, where precision meets portability. Explore their sleek designs, exceptional firepower, and their role as the ultimate tool for self-defense and personal protection.',
      date: 13,
      month: 'DEC'
    },
    {
      img: '../../../assets/Img/Latest Blog/img-2.jpg',
      title: 'The Art of Long-Range Shooting: Exploring the World of Rifles',
      desc: 'Delve into the world of rifles, where long-range precision meets raw firepower. Uncover the craftsmanship behind these versatile firearms, renowned for their accuracy, range, and impact, making them indispensable for hunting, marksmanship, and military applications.',
      date: 17,
      month: 'JUL'
    },
    {
      img: '../../../assets/Img/Latest Blog/img-3.jpg',
      title: 'AK-47: The Iconic Firearm That Shaped History',
      desc: 'Step into the legendary realm of the AK-47, an iconic assault rifle that has left an indelible mark on history. Explore its rugged design, unparalleled reliability, and global impact, showcasing its role as a symbol of revolution, conflict, and cultural influence.',
      date: 29,
      month: 'JUN'
    },
  ]

  delieveryRulesBoxes = [
    {
      img: '../../../assets/Img/Rules/1.png',
      title: 'Free Shiping.',
      desc: 'Free Worldwide Shiping On All Area On Order Above $100'
    },
    {
      img: '../../../assets/Img/Rules/2.png',
      title: '7 Days Easy Return.',
      desc: 'Product Any Fault Within 07 Days For An Immediately Exchange'
    },
    {
      img: '../../../assets/Img/Rules/3.png',
      title: '24/7 Friendly Support.',
      desc: 'Our Support Team Allways Ready For You To 7 Days A Week'
    },
    {
      img: '../../../assets/Img/Rules/4.png',
      title: 'Payment Secure.',
      desc: 'We Ensure 100% Secure Payment With Online Payment'
    },
  ]
}
