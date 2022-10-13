import {NgModule} from '@angular/core';
import {Routes , RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import {ProfileComponent} from './profile/profile.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {HomeComponent} from './home/home.component';
import {OfferLetComponent} from './offer-let/offer-let.component';
import {PreviewFormComponent} from './preview-form/preview-form.component'
import {AdminComponent} from './admin/admin.component';
import {OnlineFormComponent} from './online-form/online-form.component';
import {ProfileViewComponent} from './profile-view/profile-view.component';
import {JobBasketComponent} from './job-basket/job-basket.component';
  

const routes: Routes = [
   {path: '', redirectTo: '/home', pathMatch: 'full' },
   {path: 'home', component: HomeComponent},
   {path: 'profile', component: ProfileComponent},
   {path: 'offerletter', component: OfferLetComponent},
   {path: 'admin', component: AdminComponent},
   {path: 'profile-view', component: ProfileViewComponent},
   {path: 'job-basket', component: JobBasketComponent},
   {path: 'onlineform', component: OnlineFormComponent},
   {path: 'onlineform/:id', component: PreviewFormComponent },
   {path: '**', component: PageNotFoundComponent}
  
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [ ProfileComponent,
                                   HomeComponent,
                                   OfferLetComponent,
                                   AdminComponent,
                                   OnlineFormComponent,
                                   ProfileViewComponent,
                                   JobBasketComponent,
                                   PreviewFormComponent
];
