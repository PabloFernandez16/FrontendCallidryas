import { Component, OnInit } from '@angular/core';
import { ApidriverService } from '../services/apidriver.service';
import { Response } from '../Models/response';
import { DialogdriverComponent } from '../dialog/dialogdriver.component/dialogdriver.component';

import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-driver',
  templateUrl: './driver.component.html',
  styleUrls: ['./driver.component.scss']
})
export class DriverComponent implements OnInit {

  public lst: any[] ;

  public colums: string[] = ['Name', 'Lastname'];

  constructor(
    private apiDriver: ApidriverService, public dialog: MatDialog,
  ) {}

  ngOnInit(): void {
    this.getDrivers();
  }

  getDrivers() {
    this.apiDriver.getDrivers().subscribe((response: Response) => {
      if (response.success === 1) {   
        this.lst = response.data;
      } else {
        console.error("Error en la respuesta:", response.message);
      }
      console.log(response.data);
    });
  }

  openAdd() {
    const dialoRef = this.dialog.open(DialogdriverComponent, { width: '300'});
    dialoRef.afterClosed().subscribe(result =>{
      this.getDrivers();
    });
  }
  
}
