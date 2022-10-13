import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {HomeService} from '../services/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  // Guage values
  gaugeType = "full";
  gaugeValue = 10;
  gaugeLabel = "Days";
  gaugethick = 6;
  gaugesize = 150;
  foregroundColor = "greenyellow";
  backgroundColor ="white";
  gaugecap = "round";
  minvalue = "0";
  maxvalue = "15";
  


  lat: number = 51.678418;
  long: number = 7.809007;
  showLoading = true;
  navigations: any = [];
  lstatus:boolean = true;
  rstatus:boolean = false
  empDetails = [];
  jobDetails = [];
  managerDetails = [];
  recommentedJobs = [];
  socialValues = [];
 
  items: Array<any> = []
  constructor(private router: Router, 
              private route: ActivatedRoute,
              private homeService: HomeService) { 
              }

  
  admin(){
    this.router.navigate(['admin']);
  }
  leftStatus(){
    this.lstatus = true;
    this.rstatus = false;
  }
  rightStatus(){
    this.lstatus = false;
    this.rstatus = true;
  }
navigation(index){
  if(index == 0){
    this.router.navigate(['offerletter']);
  }else if(index == 1){
    this.router.navigate(['profile']);
  }else if(index ==2){
    this.router.navigate(['onlineform']);
  }else if(index ==4){
    this.router.navigate(['profile-view']);
  }
}

ngOnInit() {
  this.homeService.navgetData().subscribe(data =>{
    this.showLoading = false;
         this.navigations = data;
})
this.homeService.managergetData().subscribe(data =>{
  this.showLoading = false;
       this.managerDetails = data;
})
this.homeService.jobgetData().subscribe(data =>{
  this.showLoading = false;
       this.jobDetails = data;
})
this.homeService.empgetData().subscribe(data =>{
this.showLoading = false;
     this.empDetails = data;
})
this.homeService.recjobgetData().subscribe(data =>{
  this.showLoading = false;
       this.recommentedJobs = data;
})
this.homeService.socialgetData().subscribe(data =>{
this.showLoading = false;
     this.socialValues = data;
})
this.homeService.slidergetData().subscribe(data =>{
  this.showLoading = false;
       this.items = data;
  })
}

}
