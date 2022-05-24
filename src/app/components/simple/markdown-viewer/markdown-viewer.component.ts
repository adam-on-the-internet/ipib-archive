import {Component, OnInit} from "@angular/core";
import {ActivatedRoute, NavigationEnd, Router} from "@angular/router";
import {MeetingInfo, missingAny} from "../../../models/general/DocumentInfo.model";
import {MEETINGS} from "../../../constants/meeting.constants";
import {DomSanitizer, SafeResourceUrl} from "@angular/platform-browser";

@Component({
  selector: "app-markdown-viewer",
  templateUrl: "./markdown-viewer.component.html",
  styleUrls: ["./markdown-viewer.component.css"]
})
export class MarkdownViewerComponent implements OnInit {
  public rawPath: string = null;
  public disclaimerMarkdownPath = `assets/disclaimer.md`;

  public get ready(): boolean {
    return this.rawPath !== null;
  }

  public get path(): string {
    return this.rawPath.replace(/~/g, "/");
  }

  public get isMeeting(): boolean {
    return this.path.startsWith("meetings/");
  }

  public get ipibLink(): string {
    return `https://ipib.iowa.gov/meeting/${this.meetingInfo.ipibLink}`;
  }

  public get missingAny(): boolean {
    return missingAny(this.meetingInfo);
  }

  public get materialsLink(): string {
    return `${this.meetingBaseLink}/materials.pdf`;
  }

  public get minutesPDF(): string {
    return `${this.meetingBaseLink}/minutes.pdf`;
  }

  public get embedYoutubeLink(): SafeResourceUrl {
    const url = `https://www.youtube.com/embed/${this.meetingInfo.youtubeLink}`;
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  public get agendaLink(): string {
    return `/#/view/meetings~${this.meetingCode}~agenda`;
  }

  public get minutesLink(): string {
    return `/#/view/meetings~${this.meetingCode}~minutes`;
  }

  public get overviewLink(): string {
    return `/#/view/meetings~${this.meetingCode}~info`;
  }

  public get meetingBaseLink(): string {
    return `/assets/meetings/${this.meetingCode}`;
  }

  public get meetingCode(): string {
    return this.rawPath.split("~")[1];
  }

  public get meetingInfo(): MeetingInfo {
    return MEETINGS.find((meeting) => {
      return meeting.link.includes(`meetings~${this.meetingCode}`);
    });
  }

  public get fullPath(): string {
    return `assets/${this.path}.md`;
  }

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private sanitizer: DomSanitizer
  ) {
  }

  public ngOnInit(): void {
    this.setPath();
    this.router.events
      .subscribe((event) => {
        if (event instanceof NavigationEnd) {
          this.setPath();
        }
      });
  }

  private setPath() {
    this.rawPath = this.route.snapshot.paramMap.get("path");
  }
}
