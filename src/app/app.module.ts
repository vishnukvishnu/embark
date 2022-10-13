import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import {MAT_DIALOG_DATA} from '@angular/material';
import { MatDialogRef} from '@angular/material';
import { PopoverModule } from 'ngx-bootstrap/popover';
import { AgmCoreModule } from '@agm/core';
import { NgxGaugeModule } from 'ngx-gauge';
import { Ng2CarouselamosModule } from 'ng2-carouselamos';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { HomeService } from './services/home.service';
import { OfferService } from './services/offer.service';
import { BasketService } from './services/jobBasket.service';
import { ProfileService } from './services/profile.service';
import { ProfileviewService } from './services/profileview.service';
import { OnlinformService } from './services/onlinform.service';
import { PdfViewerModule } from 'ng2-pdf-viewer';

// import { MatMomentDateModule } from '@angular/material-moment-adapter';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatNativeDateModule} from '@angular/material';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {MatTabsModule} from '@angular/material/tabs';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { OfferLetComponent } from './offer-let/offer-let.component';
import { AdminComponent } from './admin/admin.component';
import { OnlineFormComponent } from './online-form/online-form.component';
import { ProfileViewComponent } from './profile-view/profile-view.component';
import { JobBasketComponent } from './job-basket/job-basket.component';
import { DeclinePopupComponent } from './pop-ups/decline-popup/decline-popup.component';
import { SuccessPopupComponent } from './pop-ups/success-popup/success-popup.component';
import { EditJoinDateComponent } from './pop-ups/edit-join-date/edit-join-date.component';
import { ReferralLinkComponent } from './pop-ups/referral-link/referral-link.component';
import { GuideLinesComponent } from './pop-ups/guide-lines/guide-lines.component';
import { CngPswdComponent } from './pop-ups/cng-pswd/cng-pswd.component';
import { PreviewFormComponent } from './preview-form/preview-form.component';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { MatIconModule } from "@angular/material/icon";
// import {MatDatepickerModule} from '@angular/material/datepicker';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    PageNotFoundComponent,
    HomeComponent,
    OfferLetComponent,
    AdminComponent,
    OnlineFormComponent,
    ProfileViewComponent,
    JobBasketComponent,
    DeclinePopupComponent,
    SuccessPopupComponent,
    EditJoinDateComponent,
    ReferralLinkComponent,
    GuideLinesComponent,
    CngPswdComponent,
    PreviewFormComponent,
    FooterComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    NgxGaugeModule,
    MatCheckboxModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatDialogModule,
    AppRoutingModule, 
    MatDatepickerModule,
    MatNativeDateModule,
    MatTabsModule,
    MatProgressSpinnerModule,
    FormsModule,
    HttpClientModule,
    HttpModule,
    PdfViewerModule,
    Ng2CarouselamosModule,
    MatIconModule,
    // MatMomentDateModule,
    PopoverModule.forRoot(),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDvnT8urY3tf-Jp75JgdTDW15NOOXaW4tA'
    }),
    TooltipModule.forRoot(),
 
  ],
  entryComponents: [DeclinePopupComponent,
                    SuccessPopupComponent,
                    EditJoinDateComponent,
                    ReferralLinkComponent,
                    GuideLinesComponent,
                    CngPswdComponent],
  providers: [  { provide: MAT_DIALOG_DATA, useValue: {} },
                { provide: MatDialogRef, useValue: {} },
                MatDatepickerModule,HomeService, OfferService,
                BasketService,ProfileService,ProfileviewService,
                OnlinformService
             ],
  bootstrap: [AppComponent]
})
export class AppModule { }
