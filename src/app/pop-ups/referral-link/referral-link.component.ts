import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
@Component({
  selector: 'app-referral-link',
  templateUrl: './referral-link.component.html',
  styleUrls: ['./referral-link.component.scss']
})
export class ReferralLinkComponent implements OnInit {

  constructor(public thisDialogRef: MatDialogRef<ReferralLinkComponent>) { }

  ngOnInit() {
  }
  oncloseConfirm(){
    this.thisDialogRef.close();
}
}
