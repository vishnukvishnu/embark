import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProfileService } from '../services/profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  imgUrl: String = "/assets/images/personalNormal.svg";
  fileUpload: File = null;
  fileSize: number = 2097152;
  isTrue: boolean;
  imageValid: boolean;
  isFlag: boolean;
  personalDetails = [];
  educationDetails = [];
  workDetails = [];
  showLoading: boolean = true;

  constructor(private router: Router,
    private route: ActivatedRoute,
    private profileService: ProfileService) { }

  ngOnInit() {
    this.profileService.getPersonaldata().subscribe(data => {
      this.showLoading = false;
      this.personalDetails = data;
    })
    this.profileService.getProfiledata().subscribe(data => {
      this.showLoading = false;
      this.educationDetails = data;
    })
    this.profileService.getWorkdata().subscribe(data => {
      this.showLoading = false;
      this.workDetails = data;
    })
  }

  backhome() {
    this.router.navigate(['home']);
  }
  // imageValidate() {
  //   this.isFlag = true;
  //   if (!this.isFlag) {
  //     this.router.navigate(['home']);
  //   }
  // }
  handleFileInput(file: FileList) {
    this.fileUpload = file.item(0);

    //show image preview

    var reader = new FileReader();
    reader.onload = (event: any) => {
      this.imgUrl = event.target.result;
    }
    reader.readAsDataURL(this.fileUpload);

    if ((this.fileUpload.type == "image/gif" || this.fileUpload.type == "image/png" ||
      this.fileUpload.type == "image/jpeg" || this.fileUpload.type == "image/jpeg")
      && (this.fileUpload.size < this.fileSize)) {
      this.isTrue = false;
    } else {
      this.isTrue = true;
    }
  }
}
