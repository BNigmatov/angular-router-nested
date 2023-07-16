import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { Routes, RouterModule, RouterLink } from "@angular/router";
import { BbbbEditComponent } from "./edit.component";
import routes from "./edit.routes";

@NgModule({
  imports: [
    CommonModule,
    RouterLink,
    RouterModule.forChild(routes)
  ],
  declarations: [BbbbEditComponent],
})
export class BbbbEditModule { }
