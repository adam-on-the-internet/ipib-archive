import {Component, OnInit} from "@angular/core";
import {LogService} from "./services/general/log.service";
import {SettingsService} from "./services/general/settings.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  title = "ipib-archive";

  public get showNav(): boolean {
    return this.settingsService.showNav;
  }

  constructor(
    private logService: LogService,
    private settingsService: SettingsService,
  ) {
  }

  public ngOnInit() {
    this.logStart();
  }

  private logStart() {
    this.logService.log("info", "application visited").subscribe();
  }
}
