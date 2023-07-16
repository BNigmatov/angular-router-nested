import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { RouterLink, RouterOutlet, NavigationEnd } from '@angular/router';

@Component({
  selector: 'bbbb-details',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterOutlet],
  template: `
    <ng-container *ngIf="!isFullWidth">
      <h2>Details</h2>
      <h2><a [routerLink]="['..']">close</a> Details ID: {{ id }}</h2>
      <div><a [routerLink]="['edit']">open edit</a></div>
    </ng-container>
    <router-outlet></router-outlet>
  `,
})
export class BbbbDetailsComponent implements OnInit {
  id: string = '';
  isFullWidth: boolean = false;

  constructor(private router: Router, private _route: ActivatedRoute) {
    this.router.events.subscribe((event: any) => {
      const url: string =
        event instanceof NavigationEnd ? event.url : event.routerEvent?.url;
      if (url) {
        this.isFullWidth = url.indexOf('/edit') > 0;
      }
    });
  }

  ngOnInit() {
    this._route.paramMap.subscribe((params) => {
      this.id = params.get('id') || '';
    });
  }
}
