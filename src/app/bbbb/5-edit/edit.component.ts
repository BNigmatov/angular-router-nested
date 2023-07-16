import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'bbbb-edit',
  // standalone: true,
  // imports: [CommonModule, RouterLink],
  template: `
    <h2>Edit</h2>
    <h2><a [routerLink]="['..']">close</a> Edit ID: {{ id }}</h2>
  `,
})
export class BbbbEditComponent implements OnInit {
  id: string = '';

  constructor(private _route: ActivatedRoute) {}

  ngOnInit() {
    this._route.paramMap.subscribe((params) => {
      this.id = params.get('id') || '';
    });
  }
}
