import { Component, OnInit, Inject } from '@angular/core';
import { MatSnackBar, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Label } from 'src/app/model/label.model';
import { LabelService } from 'src/app/services/labelservice.service';

@Component({
  selector: 'app-editlabel',
  templateUrl: './editlabel.component.html',
  styleUrls: ['./editlabel.component.scss']
})
export class EditlabelComponent implements OnInit {
  labels:Label[];
  changeText: boolean;

  constructor(public dialogRef: MatDialogRef<EditlabelComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,private labelService:LabelService,private matSnackBar:MatSnackBar) { 
      console.log(data);
      labelService.autoRefresh$.subscribe(()=>{
        this.labels=data.labels;
      });
      this.labels=data.labels;
      this.changeText = false;

    }

  ngOnInit() {
   
  }
  onClickCreateLabel(InputLabel){
    // document.getElementById("textfield1").value = "";
    console.log(InputLabel,"label input");
    let label={
      "labelName":InputLabel
    }
      this.labelService.createLabel(label).subscribe((response)=>{
        this.matSnackBar.open("Label Created","Ok",{duration:3000});
      });
  }
  onClickDeleteLabel(label){
    this.labelService.deleteLabel(label).subscribe((response)=>{
      this.matSnackBar.open("Label Deleted","Ok",{duration:3000});
    });
  }

}
