import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {ActivatedRoute, Router} from '@angular/router';
import {formatDate } from '@angular/common';
import { OfferService } from '../services/offer.service'
import {DeclinePopupComponent} from '../pop-ups/decline-popup/decline-popup.component';
import { SuccessPopupComponent } from '../pop-ups/success-popup/success-popup.component';
import {EditJoinDateComponent } from '../pop-ups/edit-join-date/edit-join-date.component';

@Component({
  selector: 'app-offer-let',
  templateUrl: './offer-let.component.html',
  styleUrls: ['./offer-let.component.scss']
})
export class OfferLetComponent implements OnInit {
  remarkStuus:String;
  successStatus:String;
  editJoinReason:any;
  existDate:any;
  joinDate:any;
  isSuccss:boolean;
  editJoinDetails = [];
  joinDetails = [];
  date = new Date();
  constructor( private router: Router,
               private route: ActivatedRoute,
               public dialog: MatDialog,
                private Offerservice: OfferService,) { 
                  
              }
  ngOnInit() {
    this.Offerservice.getOfferdata().subscribe(data =>{
        this.joinDetails = data;
        this.existDate = this.joinDetails[2].subtitle;
  })
 
}
  backhome(){
    this.router.navigate(['home']);
  }

  openDecline(){
    let dialogRef = this.dialog.open(DeclinePopupComponent,{
      width:'550px',
    });

    dialogRef.afterClosed().subscribe(result =>{
      this.remarkStuus = result;
    })
}
openSuccess(){
  let dialogRef = this.dialog.open(SuccessPopupComponent, {
    width: '450px',
     data: this.isSuccss,
  });
  
  dialogRef.afterClosed().subscribe(result =>{
    this.successStatus = result;
  })
}

ediJoinDate(){
  let dialogRef = this.dialog.open(EditJoinDateComponent, {
    width: '500px',
    data:this.existDate
  });
  dialogRef.afterClosed().subscribe(result =>{
    this.joinDate = result[0];
    this.editJoinReason = result[1];
  })

}

}