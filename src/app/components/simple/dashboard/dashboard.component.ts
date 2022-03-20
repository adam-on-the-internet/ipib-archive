import {Component} from "@angular/core";
import {NavHelperService} from "src/app/services/general/nav-helper.service";
import {SettingsService} from "../../../services/general/settings.service";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"]
})
export class DashboardComponent {
  constructor(
    private navHelper: NavHelperService,
    private settings: SettingsService,
  ) {
    this.settings.showNav = true;
  }

}
