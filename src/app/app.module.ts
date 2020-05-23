import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FlexLayoutModule } from "@angular/flex-layout";
import {
  MatCardModule,
  MatProgressSpinnerModule,
  MatTableModule,
} from "@angular/material";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatIconModule } from "@angular/material/icon";
import { ChartsModule } from "ng2-charts";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { UserStatsComponent } from "./components/user-stats/user-stats.component";
import { UserDataTabComponent } from "./components/user-data-tab/user-data-tab.component";

const thirdPartyModules = [
  FlexLayoutModule,
  MatToolbarModule,
  MatTableModule,
  MatIconModule,
  MatCardModule,
  MatProgressSpinnerModule,
  ChartsModule,
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserStatsComponent,
    UserDataTabComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    thirdPartyModules,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
