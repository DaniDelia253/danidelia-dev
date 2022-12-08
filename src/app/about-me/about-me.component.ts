import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css'],
})
export class AboutMeComponent implements OnInit {
  public windowWidth: any;

  public images = [
    { name: 'html', src: 'https://i.imgur.com/v8Lx4Wk.png' },
    { name: 'css', src: 'https://i.imgur.com/pHR9faW.png' },
    { name: 'javascript', src: 'https://i.imgur.com/81yWrLV.png' },
    { name: 'typescript', src: 'https://i.imgur.com/OUWVQR2.png' },
    { name: 'node', src: 'https://i.imgur.com/ynkueDC.png' },
    { name: 'c#', src: 'https://i.imgur.com/QQzxtAe.png' },
    { name: 'dotnet', src: 'https://i.imgur.com/nbFjm4F.png' },
    { name: 'bootstrap', src: 'https://i.imgur.com/c4zGYEw.png' },
    { name: 'react', src: 'https://i.imgur.com/q9ozGlq.png' },
    { name: 'nextjs', src: 'https://i.imgur.com/jTSqX1H.png' },
    { name: 'angular', src: 'https://i.imgur.com/ZG7x2St.png' },
    { name: 'express', src: 'https://i.imgur.com/PFCPben.png' },
    { name: 'mysql', src: 'https://i.imgur.com/JZtlX4z.png' },
    { name: 'mongo', src: 'https://i.imgur.com/GfEgbh7.png' },
    { name: 'dynamodb', src: 'https://i.imgur.com/3oo7aJu.png' },
    { name: 'git', src: 'https://i.imgur.com/8QdLnZ6.png' },
    { name: 'aws', src: 'https://i.imgur.com/o2cwUA5.png' },
  ];
  condition: any;

  constructor() {}

  ngOnInit(): void {
    this.windowWidth = window.innerWidth;
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.windowWidth = window.innerWidth;
  }
}
