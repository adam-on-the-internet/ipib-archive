import {Component} from '@angular/core';
import {MEETINGS} from "../../constants/meeting.constants";
import {DocumentInfo, MeetingInfo, missingAny} from "../../models/general/DocumentInfo.model";

@Component({
  selector: 'app-directory',
  templateUrl: './directory.component.html',
  styleUrls: ['./directory.component.css']
})
export class DirectoryComponent {
  public directoryHeaderMarkdownPath = `assets/directory-header.md`;
  public meetings: MeetingInfo[] = MEETINGS;

  public getLink(doc: DocumentInfo): string {
    if (doc.useHost) {
      if (location.hostname === "localhost") {
        return `http://localhost:4200/#/${doc.link}`;
      } else {
        return `https://ipib-archive.netlify.app/#/${doc.link}`;
      }
    } else {
      return `/assets/${doc.link}`;
    }
  }

  public missingAny(meetingInfo: MeetingInfo): boolean {
    return missingAny(meetingInfo);
  }
}
