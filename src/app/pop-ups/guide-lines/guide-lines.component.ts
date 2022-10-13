import { Component, OnInit } from '@angular/core';
import { MatDialogRef} from '@angular/material/dialog';
@Component({
  selector: 'app-guide-lines',
  templateUrl: './guide-lines.component.html',
  styleUrls: ['./guide-lines.component.scss']
})
export class GuideLinesComponent implements OnInit {

  constructor(public thisDialogRef: MatDialogRef<GuideLinesComponent>) { }

  ngOnInit() {
  }
  oncloseConfirm(){
    this.thisDialogRef.close();
}
}
