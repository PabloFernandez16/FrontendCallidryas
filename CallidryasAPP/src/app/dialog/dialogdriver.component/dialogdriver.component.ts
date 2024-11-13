import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Driver } from 'src/app/Models/driver';
import { ApidriverService } from 'src/app/services/apidriver.service';

@Component({
  selector: 'app-dialogdriver.component',
  templateUrl: './dialogdriver.component.html',
  styleUrls: ['./dialogdriver.component.scss']
})
export class DialogdriverComponent {

  public DriverName: string;
  public DriverLastName: string;

  constructor(
    public dialogRef: MatDialogRef<DialogdriverComponent>,
    private apiDriver: ApidriverService,
    public snackBar: MatSnackBar,
  ){

  }

  add(){
    const driver: Driver = {DriverName: this.DriverName, DriverLastName: this.DriverLastName} ;

    this.apiDriver.add(driver).subscribe(response =>{
      if(response.success === 1){
        this.dialogRef.close();this.snackBar.open(response.message, 'Listo',{
          duration: 2000
        });
      }
    }); 
  }

  close(){
    this.dialogRef.close();
  }
}
