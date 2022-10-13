import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BasketService } from '../services/jobBasket.service'

@Component({
  selector: 'app-job-basket',
  templateUrl: './job-basket.component.html',
  styleUrls: ['./job-basket.component.scss']
})
export class JobBasketComponent implements OnInit {
  jobApplied = [];
  showLoading = true;
  constructor(private router: Router,
    private basketService: BasketService) { }

  ngOnInit() {
    this.basketService.getOfferdata().subscribe(data => {
      this.showLoading = false;
      this.jobApplied = data;
    })
  }
  backhome() {
    this.router.navigate(['home']);
  }
}
