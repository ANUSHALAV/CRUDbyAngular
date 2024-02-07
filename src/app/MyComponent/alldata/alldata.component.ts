import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HealthServiceService, UserRespoce, } from 'src/app/Service/health-service.service';

@Component({
  selector: 'app-alldata',
  templateUrl: './alldata.component.html',
  styleUrls: ['./alldata.component.css']
})
export class AlldataComponent {
  id: number | undefined

  constructor(private healthservice: HealthServiceService, private router: Router) { }

  alluser!: UserRespoce[];

  ngOnInit() {
    this.getAllUserList();
  }

  getAllUserList() {
    this.healthservice.getAllData().subscribe((res: any) => {
      this.alluser = res;
    });

  }

  clickEditBtn(data: any) {
    this.id = data.Id;
    this.router.navigate(['/update', this.id]);
  }

  clickDeleteBtn(id: number) {
    let conform = confirm("Do you want to delete the data?");
    if (conform) {
      this.healthservice.deleteData(id).subscribe({
        next: (res) => {

          this.getAllUserList();
        },
        error: console.log,
      });
    } else {

    }
  }
}
