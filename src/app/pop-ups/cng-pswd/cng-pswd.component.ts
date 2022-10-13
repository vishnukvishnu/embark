import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-cng-pswd',
  templateUrl: './cng-pswd.component.html',
  styleUrls: ['./cng-pswd.component.scss']
})
export class CngPswdComponent implements OnInit {

  constructor(public thisDialogRef: MatDialogRef<CngPswdComponent>) { }

  ngOnInit() {
  }
  oncloseConfirm(){
    this.thisDialogRef.close();
  }
}
