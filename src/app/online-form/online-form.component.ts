import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {Router} from '@angular/router';
import {GuideLinesComponent} from '../pop-ups/guide-lines/guide-lines.component';
import { MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer } from "@angular/platform-browser";
import { OnlinformService } from '../services/onlinform.service'

@Component({
  selector: 'app-online-form',
  templateUrl: './online-form.component.html',
  styleUrls: ['./online-form.component.scss']
})
export class OnlineFormComponent implements OnInit {
  fileUpload: File = null;
  pdfUrl: any = "/assets/images/form-11.pdf";
  name :any = "vishnu";
  lstatus:boolean = false;
  rstatus:boolean = true
  showLoading = true;
  items: Array<any> = []
  constructor(private router: Router, 
              public dialog: MatDialog,
              private formService:OnlinformService,
              private matIconRegistry: MatIconRegistry,
              private domSanitizer: DomSanitizer) {
                this.matIconRegistry.addSvgIcon(
                  "datepicker",
                  this.domSanitizer.bypassSecurityTrustResourceUrl("/assets/images/calendar.svg")
                );
               }

  ngOnInit() {
    this.formService.getformdata().subscribe(data =>{
      this.showLoading = false;
           this.items = data;
      })
  }
  backhome(){
    this.router.navigate(['home']);
  }
  leftStatus(){
    this.lstatus = true;
    this.rstatus = false;
  }
  rightStatus(){
    this.lstatus = false;
    this.rstatus = true;
  }
  openGuideline(){
    let dialogRef = this.dialog.open(GuideLinesComponent,{
      width:'900px',
    });
  }

  previewForm(){
    this.router.navigate(['/onlineform', this.pdfUrl]);
  }
}
