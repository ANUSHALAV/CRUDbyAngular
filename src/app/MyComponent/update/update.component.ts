import { Component } from '@angular/core';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent {

  constructor() { }

  name: string | undefined
  email: string | undefined
  pincode: number | undefined
  city: string | undefined
  mobile: number | undefined
  age: number | undefined
  country: string | undefined
  state: string | undefined
  gender: string | undefined

  updateData() {

    this.name = this.name?.trim();
    this.state = this.state?.trim();

    var data = {
      name: this.name,
      email: this.email,
      pincode: this.pincode,
      city: this.city,
      mobile: this.mobile,
      age: this.age,
      country: this.country,
      state: this.state,
      gender: this.gender
    }

    alert("i click update button..");
  }




  countryChange() {
    this.state = undefined;
  }

  nameValidation(event: KeyboardEvent) {
    const charCode = event.which || event.keyCode;

    if ((charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122) || charCode === 32) {
      return true;
    } else {
      event.preventDefault();
      return false;
    }
  }

  emailValidation(event: KeyboardEvent) {
    const charCode = event.which || event.keyCode;

    if ((charCode >= 64 && charCode <= 90) || (charCode >= 97 && charCode <= 122) || charCode >= 48 && charCode <= 57 || charCode == 46) {
      return true;
    } else {
      event.preventDefault();
      return false;
    }
  }

  stateValidation(event: KeyboardEvent) {
    const charCode = event.which || event.keyCode;

    if ((charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122) || charCode == 32) {
      return true;
    } else {
      event.preventDefault();
      return false;
    }
  }

  cityValidation(event: KeyboardEvent) {
    const charCode = event.which || event.keyCode;

    if ((charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122) || charCode == 32) {
      return true;
    } else {
      event.preventDefault();
      return false;
    }
  }


  ageValidation(event: KeyboardEvent) {
    const charCode = event.which || event.keyCode;

    if (charCode >= 48 && charCode <= 57) {
      return true;
    } else {
      event.preventDefault();
      return false;
    }
  }


  mobileValidation(event: KeyboardEvent) {
    const charCode = event.which || event.keyCode;

    if (charCode >= 48 && charCode <= 57) {
      return true;
    } else {
      event.preventDefault();
      return false;
    }
  }

  pincodeValidation(event: KeyboardEvent) {
    const charCode = event.which || event.keyCode;

    if (charCode >= 48 && charCode <= 57) {
      return true;
    } else {
      event.preventDefault();
      return false;
    }
  }
}
