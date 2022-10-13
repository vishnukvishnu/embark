import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MatDialog} from '@angular/material';
import {MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-success-popup',
  templateUrl: './success-popup.component.html',
  styleUrls: ['./success-popup.component.scss']
})
export class SuccessPopupComponent {

      acceptSuccessMsg:String = "You have been accepted offer letter successfullly.";
      decSuccessMsg:String;
      joinSuccessMsg:String;
      editJoinMsg:String;
      isTrue:boolean = true;
      isSuccssCheck:boolean = true;
      
    constructor(public thisDialogRef: MatDialogRef<SuccessPopupComponent>,
                public dialog: MatDialog,
                @Inject(MAT_DIALOG_DATA) public isSuccss: boolean,
                @Inject(MAT_DIALOG_DATA) public decMsg: String,
                @Inject(MAT_DIALOG_DATA) public succussMsg: String,
                @Inject(MAT_DIALOG_DATA) public editSuccussMsg:String )  
     { 
      this.isSuccssCheck = isSuccss;
      this.decSuccessMsg = decMsg;
      this.joinSuccessMsg = succussMsg;
      this.editJoinMsg = editSuccussMsg;
     }

    remarkStatus(){
        this.thisDialogRef.close(this.isTrue);
    }
    submit(){
      this.thisDialogRef.close(this.isSuccss);
    }
}
