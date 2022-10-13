import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {ReferralLinkComponent} from '../pop-ups/referral-link/referral-link.component';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  constructor(private router: Router,
              private route: ActivatedRoute,
              public dialog: MatDialog) { }

  ngOnInit() {
  }
  backhome(){
    this.router.navigate(['home']);
  }
  referrelLink(){
    let dialogRef = this.dialog.open(ReferralLinkComponent, {
      width: '650px',
    });
  }
}
