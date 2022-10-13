import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-preview-form',
  templateUrl: './preview-form.component.html',
  styleUrls: ['./preview-form.component.scss']
})
export class PreviewFormComponent implements OnInit {

  fileUpload: File = null;
  pdfUrl: any;
  constructor(private router: Router, private route: ActivatedRoute ) {
  }

  ngOnInit() {
    let url = this.route.snapshot.paramMap.get('id');
    this.pdfUrl = url;
    console.log("this.pdfUrl" + this.pdfUrl);
  }

  backOnlineform(){
    this.router.navigate(['onlineform']);
  }
}
