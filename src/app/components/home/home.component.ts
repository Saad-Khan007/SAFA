import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  categories = [
    {
      img: '../../../assets/Img/Category/img-1.jpg',
      type: 'Pistol',
      name: ['Derringers', 'Pocket Pistols', 'Double-Action Pistols', 'Semi-automatic Pistols']
    },
    {
      img: '../../../assets/Img/Category/img-2.jpg',
      type: 'Generade',
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
