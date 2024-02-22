import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {CupcakePreferenceService} from "../cupcake-preference.service";

@Component({
  selector: 'app-second-page',
  templateUrl: './second-page.component.html',
  styleUrl: './second-page.component.css'
})
export class SecondPageComponent {

  constructor(private router: Router, private cupcakePreferenceService: CupcakePreferenceService) {}

  selectFlavorAndProceed(flavor: string): void {

    this.cupcakePreferenceService.setSelectedFlavor(flavor);
  }
  cancel(): void {
    this.router.navigate(['/main']);
  }
  goToSummary(): void {
    this.router.navigate(['/third-page']);
  }
  calculateSubtotal():number{
    return this.cupcakePreferenceService.calculateSubtotal();
  }
}
