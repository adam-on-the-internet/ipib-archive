import {Component, Input} from "@angular/core";
import {LinkItem} from "../../../models/general/LinkItem.model";

@Component({
  selector: "app-link-display",
  templateUrl: "./link-display.component.html",
  styleUrls: ["./link-display.component.scss"]
})
export class LinkDisplayComponent {
  @Input() public links: LinkItem[];
  @Input() public showNoLinks = true;
}
