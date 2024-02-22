import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CupcakePreferenceService {
  private quantity!: number;
  private selectedFlavor!: string; // Use a string or enum to represent the flavor

  setQuantity(quantity: number): void {
    this.quantity = quantity;
  }

  setSelectedFlavor(flavor: string): void {
    this.selectedFlavor = flavor;
  }

  getQuantity(): number {
    return this.quantity;
  }

  getSelectedFlavor(): string {
    return this.selectedFlavor;
  }

  calculateSubtotal(): number {
    // Assuming the price of each cupcake is 2 dollars
    return this.quantity * 2;
  }
}
