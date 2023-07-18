import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { RouterLink, RouterOutlet, NavigationEnd } from '@angular/router';
import { MatTabsModule } from '@angular/material/tabs';

@Component({
  selector: 'bbbb-details',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterOutlet, MatTabsModule],
  template: `
  <mat-tab-group [(selectedIndex)]="selectedTab" class="header-less-tabs">
    <mat-tab>
      <h2>Details</h2>
      <h2><a [routerLink]="['..']">close</a> Details ID: {{ id }}</h2>
      <div><a [routerLink]="['edit']">open edit</a></div>
    </mat-tab>
    <mat-tab>
      <router-outlet></router-outlet>
    </mat-tab>
  </mat-tab-group>
  `,
})
export class BbbbDetailsComponent implements OnInit {
  id: string = '';
  selectedTab: number = 0;

  constructor(private router: Router, private _route: ActivatedRoute) {
    this.router.events.subscribe((event: any) => {
      const url: string =
        event instanceof NavigationEnd ? event.url : event.routerEvent?.url;
      if (url) {
        this.selectedTab = url.indexOf('/edit') > 0 ? 1 : 0;
      }
    });
  }

  ngOnInit() {
    this._route.paramMap.subscribe((params) => {
      this.id = params.get('id') || '';
    });
  }
}
