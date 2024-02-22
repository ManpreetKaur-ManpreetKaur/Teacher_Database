import {Injectable} from '@angular/core';
import {Data} from "@angular/router";
import {DataModel} from "./data.model";
import {EmploymentType} from "./employment-type";

@Injectable({
  providedIn: 'root'
})
export class DataService {
  dataModel: DataModel = new DataModel('', '', EmploymentType.FULL_TIME);

  setData(data: DataModel): void {
    this.dataModel = data;
  }

  getData(): DataModel {
    return this.dataModel;
  }
}
