import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import {MatDialog} from '@angular/material/dialog';
import {CngPswdComponent} from "../pop-ups/cng-pswd/cng-pswd.component";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent  {

  isTrue:boolean = true;
 
  constructor(private router: Router, 
              public dialog: MatDialog) {}
  
  jobBasket(iconpopover){
    this.router.navigate(['job-basket']);
    iconpopover.hide();
  }
  changePassword(){
    let dialogRef = this.dialog.open(CngPswdComponent, {
      width: '425px',
    });
  }
  backhome(){
    this.router.navigate(['home']);
  }
}

