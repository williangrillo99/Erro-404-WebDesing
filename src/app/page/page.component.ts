import {Component,  OnInit,} from '@angular/core';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
  export class PageComponent implements OnInit{

  // @ViewChild('nav-Menu') navMenu!: ElementRef;
  // @ViewChild('nav-Toggle') navToggle!: ElementRef;
  // @ViewChild('nav-Close') navClose!: ElementRef;
  // element!: HTMLElement;

  navMenu!: HTMLElement;
  navToggle!: HTMLElement;
  navClose!: HTMLElement;
  navLink!: HTMLElement;
  n!: HTMLElement;

  ngOnInit(): void {
    this.navLink = document.querySelector('.nav__link') as HTMLElement;
    this.navClose  = document.getElementById('nav-close') as HTMLElement;
    this.navMenu = document.getElementById('nav-menu') as HTMLElement;
    this.navToggle = document.getElementById('nav-toggle') as HTMLElement

    if(this.navToggle){
      this.navToggle.addEventListener('click', () => {
        this.navMenu.classList.add('show-menu')
      })
    }

    if(this.navClose){
      this.navClose.addEventListener('click', () => {
        this.navMenu.classList.remove('show-menu')
      })
    }
    this.linkAction();
  }

  constructor() {}

  //============= Remover menu mobile apos o click============//
  linkAction(): void {
    this.navMenu.classList.remove('show-menu');

  }


}
