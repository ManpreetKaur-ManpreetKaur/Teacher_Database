import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {CupcakePreferenceService} from "../cupcake-preference.service";

@Component({
  selector: 'app-third-page',
  templateUrl: './third-page.component.html',
  styleUrl: './third-page.component.css'
})
export class ThirdPageComponent implements OnInit {
  quantity!: number;
  selectedFlavor!: string;
  subtotal!: number;

  constructor(private router: Router, private cupcakePreferenceService: CupcakePreferenceService) {}

  ngOnInit(): void {

    this.quantity = this.cupcakePreferenceService.getQuantity();
    this.selectedFlavor = this.cupcakePreferenceService.getSelectedFlavor();


    this.subtotal = this.cupcakePreferenceService.calculateSubtotal();
  }

  goBack(): void {
    this.router.navigate(['/cupcake-options']);
  }

}
