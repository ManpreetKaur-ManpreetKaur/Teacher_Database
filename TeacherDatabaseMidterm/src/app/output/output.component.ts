import { Component } from '@angular/core';
import {DataService} from "../data.service";
import {DataModel} from "../data.model";
import {Data} from "@angular/router";

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrl: './output.component.css'
})
export class OutputComponent {
  userData: DataModel;

  constructor(private dataService: DataService) {
    this.userData = this.dataService.getData();
  }
}
