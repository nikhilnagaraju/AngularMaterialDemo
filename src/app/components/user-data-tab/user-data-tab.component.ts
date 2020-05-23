import { Component, OnInit, Input } from "@angular/core";
import { UserItem } from "src/app/models/user-item";

@Component({
  selector: "app-user-data-tab",
  templateUrl: "./user-data-tab.component.html",
  styleUrls: ["./user-data-tab.component.less"],
})
export class UserDataTabComponent implements OnInit {
  displayedColumns = ["id", "name", "username", "city", "zipcode", "company"];
  @Input() users: UserItem[];
  constructor() {}

  ngOnInit() {}
}
