import {EmploymentType} from "./employment-type";

export class DataModel {
  firstName: string;
  lastName: string;
  employmentTerm: EmploymentType;

  constructor(firstName: string, lastName: string, employmentType: EmploymentType) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.employmentTerm = employmentType;
  }
}
