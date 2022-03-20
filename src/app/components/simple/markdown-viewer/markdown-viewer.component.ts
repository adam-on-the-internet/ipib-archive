import {Component, OnInit} from "@angular/core";
import {ActivatedRoute, NavigationEnd, Router} from "@angular/router";
import {MeetingInfo} from "../../../models/general/DocumentInfo.model";
import {MEETINGS} from "../../../constants/meeting.constants";

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
    return !this.meetingInfo.hasMaterials || !this.meetingInfo.hasRecording || !this.meetingInfo.hasAgenda || !this.meetingInfo.hasMinutes;
  }

  public get recordingLink(): string {
    return `${this.meetingBaseLink}/recording.MP3`;
  }

  public get materialsLink(): string {
    return `${this.meetingBaseLink}/materials.pdf`;
  }

  public get meetingBaseLink(): string {
    return `/assets/meetings/${this.meetingCode}`;
  }

  public get meetingCode(): string {
    return this.rawPath.split("~")[1];
  }

  public get meetingInfo(): MeetingInfo {
    return MEETINGS.find((meeting) => {
      return meeting.link.includes(this.rawPath);
    });
  }

  public get fullPath(): string {
    return `assets/${this.path}.md`;
  }

  constructor(
    private route: ActivatedRoute,
    private router: Router,
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
