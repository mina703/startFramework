import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigator',
  templateUrl: './navigator.component.html',
  styleUrls: ['./navigator.component.css']
})
export class NavigatorComponent implements OnInit, OnDestroy {

  navbarHeight: number = 110; // Initial height of the navbar

  ngOnInit() {
    window.addEventListener('scroll', this.onWindowScroll.bind(this));
  }

  ngOnDestroy() {
    window.removeEventListener('scroll', this.onWindowScroll.bind(this));
  }

  onWindowScroll(event: Event) {
    const scrollOffset = window.scrollY || window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
        if (scrollOffset > 20) {
      this.navbarHeight = 75;
    } else {
      this.navbarHeight = 110; 
    }
  }
}