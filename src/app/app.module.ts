import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './component/appcomponent/app.component';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule, Routes} from "@angular/router";
import {FormsModule} from "@angular/forms";
import { NavbarComponent } from './component/navbar/navbar.component';
import { GuideComponent } from './component/guide/guide.component';
import { TripComponent } from './component/trip/trip.component';
import { ClientComponent } from './component/client/client.component';

let routes: Routes = [
  {path: 'trip', component: TripComponent},
  {path: 'guide', component: GuideComponent},
  {path: 'client', component: ClientComponent}
];

@NgModule({
  exports: [RouterModule],
  declarations: [
    AppComponent,
    NavbarComponent,
    GuideComponent,
    TripComponent,
    ClientComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
