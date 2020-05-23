import { Component, OnInit } from "@angular/core";
import { ApiService } from "../services/api.service";
import { UserItem } from "../models/user-item";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.less"],
})
export class HomeComponent implements OnInit {
  usersData: UserItem[];
  showProgress: boolean = true;
  apiError: boolean = false;

  constructor(private api: ApiService) {}

  ngOnInit() {
    this.api.getUsersData().subscribe((res) => {
      this.usersData = res as UserItem[];
      this.showProgress = false;
      this.apiError = false;
    }, () => {
      this.showProgress = false;
      this.apiError = true;
    });
  }
}
