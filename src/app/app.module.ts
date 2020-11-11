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
import {MatDialogModule} from "@angular/material/dialog";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UpdateClientComponent } from './component/update-client/update-client.component';

let routes: Routes = [
  {path: 'trip', component: TripComponent},
  {path: 'guide', component: GuideComponent},
  {path: 'client', component: ClientComponent}
];

@NgModule({
  exports: [
    RouterModule,
    MatDialogModule
  ],
  declarations: [
    AppComponent,
    NavbarComponent,
    GuideComponent,
    TripComponent,
    ClientComponent,
    UpdateClientComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    FormsModule,
    MatDialogModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents:[UpdateClientComponent],
})
export class AppModule { }
