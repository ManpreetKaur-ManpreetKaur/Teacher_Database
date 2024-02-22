import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {CupcakePreferenceService} from "../cupcake-preference.service";

@Component({
  selector: 'app-first-page',
  templateUrl: './first-page.component.html',
  styleUrl: './first-page.component.css'
})
export class FirstPageComponent {

  constructor(private router: Router, private cupcakePreferenceService: CupcakePreferenceService) {}

  startPurchase(quantity: number): void {

    this.cupcakePreferenceService.setQuantity(quantity);

    this.router.navigate(['/second-page']);
  }
}
