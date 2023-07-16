import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'bbbb-list',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <h2>List:</h2>
    <div class="list">
      <div *ngFor="let item of items">
        <a [routerLink]="[item.id]">
          {{ item.title }}
        </a>
      </div>
    </div>
  `,
})
export class BbbbListComponent {
  items: any[] = [
    {
      id: 1,
      title: '1111',
    },
    {
      id: 2,
      title: '2222',
    },
    {
      id: 3,
      title: '3333',
    },
  ];
}
