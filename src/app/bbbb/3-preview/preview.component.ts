import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, NavigationEnd, Router, Event, RouterEvent } from '@angular/router';
import { RouterLink, RouterOutlet } from '@angular/router';
import { MatTabsModule } from '@angular/material/tabs';

@Component({
  selector: 'bbbb-preview',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterOutlet, MatTabsModule],
  template: `
  <mat-tab-group [(selectedIndex)]="selectedTab" class="header-less-tabs">
    <mat-tab>
      <h2><a [routerLink]="['..']">close</a> Preview ID: {{ id }}</h2>
      <div><a [routerLink]="['details']">open details</a></div>
    </mat-tab>
    <mat-tab>
      <router-outlet></router-outlet>
    </mat-tab>
  </mat-tab-group>
  `,
})
export class BbbbPreviewComponent implements OnInit {
  id: string = '';
  selectedTab: number = 0;

  constructor(private router: Router, private _route: ActivatedRoute) {
    this.router.events.subscribe((event: any) => {
      const url: string = event instanceof NavigationEnd ? event.url : event.routerEvent?.url;
      if (url) {
        this.selectedTab = url.indexOf('/details') > 0 ? 1 : 0;
      }
    });
  }

  ngOnInit() {
    this._route.paramMap.subscribe((params) => {
      this.id = params.get('id') || '';
    });
  }
}
