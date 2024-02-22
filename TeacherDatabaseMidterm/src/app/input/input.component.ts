import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { DataService } from "../data.service";
import { DataModel } from "../data.model";
import { EmploymentType } from "../employment-type";

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent {
  form: FormGroup;
  employmentTypes: string[] = Object.values(EmploymentType);

  constructor(private service: DataService, private router: Router, private fb: FormBuilder) {
    this.form = fb.group({
      firstName: ["", [Validators.required, Validators.pattern(/\S/g)]],
      lastName: ["", [Validators.required, Validators.pattern(/\S/g)]],
      employmentTerm: ["", Validators.required]
    });
  }

  enumValues(enumeration: any): string[] {
    return Object.keys(enumeration).filter(key => isNaN(Number(enumeration[key])));
  }

  onSubmit(): void {
    this.service.setData(
      new DataModel(this.form.value.firstName.trim(), this.form.value.lastName.trim(), this.form.value.employmentTerm)
    );
    this.router.navigate(["/output"]);
  }

  protected readonly EmploymentType = EmploymentType;
}
