import { Component, OnInit, Input } from "@angular/core";
import { UserItem } from "src/app/models/user-item";

@Component({
  selector: "app-user-stats",
  templateUrl: "./user-stats.component.html",
  styleUrls: ["./user-stats.component.less"],
})
export class UserStatsComponent implements OnInit {
  userBasePercentage: number;
  chartLabels: string[];
  chartData: number[];
  chartType: string = "pie";
  chartOptions = {
    aspectRatio: 1,
    legend: { position: "bottom" },
    title: {
      display: true,
      text: "Users Geo distribution",
    },
  };

  @Input() users: UserItem[];
  constructor() {}

  ngOnInit() {
    const userCount = this.users.length;
    let latGtZ = this.users.filter((usr) => parseFloat(usr.address.geo.lat) > 0)
      .length;
    let lngGtZ = this.users.filter((usr) => parseFloat(usr.address.geo.lng) > 0)
      .length;
    let latLtZ = userCount - latGtZ,
      lngLtZ = userCount - lngGtZ;

    latGtZ = (latGtZ / userCount) * 180;
    latLtZ = (latLtZ / userCount) * 180;
    lngGtZ = (lngGtZ / userCount) * 180;
    lngLtZ = (lngLtZ / userCount) * 180;
    this.chartData = [latGtZ, lngGtZ, latLtZ, lngLtZ];
    this.chartLabels = [
      "Latitude > 0",
      "Longitude > 0",
      "Latitude < 0",
      "Longitude > 0",
    ];

    this.userBasePercentage = (userCount / 10) * 100;
  }
}
