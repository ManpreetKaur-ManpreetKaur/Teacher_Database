import { Component } from '@angular/core';
import { Location } from '@angular/common';
@Component({
  selector: 'app-back-arrow',
  templateUrl: './back-arrow.component.html',
  styleUrl: './back-arrow.component.css'
})
export class BackArrowComponent {

  constructor(private location: Location) { }

  goBack(): void {
    this.location.back();
  }
}
