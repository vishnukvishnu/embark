import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import { FormsModule } from '@angular/forms'
import { SuccessPopupComponent } from '../success-popup/success-popup.component';


@Component({
  selector: 'app-decline-popup',
  templateUrl: './decline-popup.component.html',
  styleUrls: ['./decline-popup.component.scss']
})
export class DeclinePopupComponent implements OnInit {

  decSuccess: String = "";
  decMsg: String = "Request for decline offer has been submitted successfully.";
  isflag:boolean;
  
  constructor(public thisDialogRef: MatDialogRef<DeclinePopupComponent>,
    public dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: String) {}

  ngOnInit() {
  }
  valuechange(decSuccess){
    if (this.decSuccess == ''){
      this.isflag = false;
    }else{
      this.isflag = true;
    }
  }
  openSuccess() {
    this.thisDialogRef.close(this.decSuccess);
    let dialogRef = this.dialog.open(SuccessPopupComponent, {
      width: '450px',
      data: this.decMsg
    });
  }
  oncloseConfirm() {
    this.thisDialogRef.close();
  }

}
