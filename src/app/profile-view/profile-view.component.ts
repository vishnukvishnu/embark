import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {ActivatedRoute, Router} from '@angular/router';
import { ProfileviewService } from '../services/profileview.service'
import {EditJoinDateComponent } from '../pop-ups/edit-join-date/edit-join-date.component';

@Component({
  selector: 'app-profile-view',
  templateUrl: './profile-view.component.html',
  styleUrls: ['./profile-view.component.scss']
})
export class ProfileViewComponent implements OnInit {
  lat: number = 51.678418;
  long: number = 7.809007;
  joinDetails = [];
  showLoading:boolean = true;
  constructor(private router: Router, 
              private route: ActivatedRoute,
              public dialog: MatDialog,
              private profileviewService:ProfileviewService) { }
  ngOnInit() {
    this.profileviewService.getPersonaldata().subscribe(data => {
      this.showLoading = false;
      this.joinDetails = data;
    })
  }

  backhome(){
    this.router.navigate(['home']);
  }
  
ediJoinDate(){
  this.router.navigate(['offerletter']);
  let dialogRef = this.dialog.open(EditJoinDateComponent, {
    width: '500px',
  });
}
}