import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  RouterLink,
  RouterOutlet,
  Router,
  Event,
  NavigationEnd,
} from '@angular/router';
import { BbbbListComponent } from './1-list/list.component';

@Component({
  selector: 'bbbb',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterOutlet, BbbbListComponent],
  template: `
    <h2>Bbbb Component:</h2>
    <div class="relative flex flex-auto w-full bg-card dark:bg-transparent">
      <div class="relative flex flex-col min-w-0 md:w-1/2 border-r z-10">
        <bbbb-list></bbbb-list>
      </div>
      <div
        class="flex-auto w-full"
        [ngClass]="{
          'w-full z-20 absolute inset-0 inset-auto -flex': isDetailsShowed,
          'w-1/2 hidden md:flex': !isDetailsShowed
        }"
        style="background-color: red"
      >
        <router-outlet></router-outlet>
      </div>
    </div>
  `,
})
export class BbbbComponent {
  isDetailsShowed: boolean = false;

  constructor(private router: Router) {
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        this.isDetailsShowed = event.url.indexOf('/details') > 0;
      }
    });
  }
}
