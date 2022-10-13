import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MatDialog } from '@angular/material';
import { SuccessPopupComponent } from "../success-popup/success-popup.component";
import { MAT_DIALOG_DATA } from '@angular/material';
import { MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer } from "@angular/platform-browser";
// import {MomentDateAdapter} from '@angular/material-moment-adapter';

@Component({
  selector: 'app-edit-join-date',
  templateUrl: './edit-join-date.component.html',
  styleUrls: ['./edit-join-date.component.scss']
})
export class EditJoinDateComponent implements OnInit {

  editSuccussMsg: String = "Result for new joing date has been submitted sucessfully.";
  joinDate: any;
  editReason: any;
  editJoinDetails: any = [];
  date: any;
  isflag: boolean;
  constructor(public thisDialogRef: MatDialogRef<EditJoinDateComponent>,
    public dialog: MatDialog,
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer,
    @Inject(MAT_DIALOG_DATA) public existDate: String
  ) {
    this.date = existDate;
    this.matIconRegistry.addSvgIcon(
      "datepicker",
      this.domSanitizer.bypassSecurityTrustResourceUrl("/assets/images/calendar.svg")
    );
  }

  ngOnInit() {

  }

  openSuccess() {
    this.editJoinDetails[0] = this.joinDate;
    this.editJoinDetails[1] = this.editReason;
    this.thisDialogRef.close(this.editJoinDetails);
    let dialogRef = this.dialog.open(SuccessPopupComponent, {
      width: '450px',
      data: this.editSuccussMsg,
    });
  }
  oncloseConfirm() {
    this.thisDialogRef.close();
  }
}
