import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, NavigationEnd, Router, Event, RouterEvent } from '@angular/router';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'bbbb-preview',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterOutlet],
  template: `
    <ng-container *ngIf="!isFullWidth">
      <h2><a [routerLink]="['..']">close</a> Preview ID: {{ id }}</h2>
      <div><a [routerLink]="['details']">open details</a></div>
    </ng-container>
    <div>
      <router-outlet></router-outlet>
    </div>
  `,
})
export class BbbbPreviewComponent implements OnInit {
  id: string = '';
  isFullWidth: boolean = false;

  constructor(private router: Router, private _route: ActivatedRoute) {
    this.router.events.subscribe((event: any) => {
      const url: string = event instanceof NavigationEnd ? event.url : event.routerEvent?.url;
      if (url) {
        this.isFullWidth = url.indexOf('/details') > 0;
      }
    });
  }

  ngOnInit() {
    this._route.paramMap.subscribe((params) => {
      this.id = params.get('id') || '';
    });
  }
}
