import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HealthServiceService } from 'src/app/Service/health-service.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})

export class UpdateComponent implements OnInit {
  name: string = "";
  email: string = "";
  pincode: number = 0;
  city: string = "";
  mobile: number = 0;
  age: number = 0;
  country: string = "";
  state:string | undefined;
  gender: string = "";


  constructor(private route: ActivatedRoute,
    private healthservice: HealthServiceService) { }

  dataobj: any = {};
  ngOnInit(): void {
    let Id = this.route.snapshot.paramMap.get("id");
    Id && this.healthservice.getDataById(Id).subscribe((Data) => {
      this.dataobj = Data;
    });
  }




  resetForm() {
    this.name = "";
    this.email = "";
    this.pincode = 0;
    this.city = "";
    this.mobile = 0;
    this.age = 0;
    this.country = "";
    this.state = "";
    this.gender = "";
  }




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

    if (data.name == null) {
      alert("Please Enter the Name");
    } else if (data.name.length < 4) {
      alert("Enter the Valid Name");
    } else if (data.email == null) {
      alert("Please Enter the Email");
    } else if (data.age == null) {
      alert("Please Enter the Age");
    } else if (data.age > 99) {
      alert("Please Enter the Valid Age");
    }
    else if (data.gender == null) {
      alert("Please Enter the Gender");
    } else if (data.country == null) {
      alert("Please Enter the Country");
    } else if (data.state == null) {
      alert("Please Enter the State");
    } else if (data.city == null) {
      alert("Please Enter the City");
    } else if (data.mobile == null) {
      alert("Please Enter the Mobile");
    } else if (data.pincode == null) {
      alert("Please Enter the Pin Code");
    } else {
      this.healthservice.updateDataById(this.dataobj.Id, data).subscribe({
        next: (res: any) => {
          alert("Data updated successfully");
          this.resetForm();
        },
        error: (error: any) => {
          console.error("Error updating data:", error);
          alert("Data not updated successfully");
          this.resetForm();
        }
      });
    }
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
