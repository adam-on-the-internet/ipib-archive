import {Component} from '@angular/core';
import {DOCUMENTS} from "../../constants/document.constants";
import {DocumentInfo} from "../../models/general/DocumentInfo.model";

@Component({
  selector: 'app-directory',
  templateUrl: './directory.component.html',
  styleUrls: ['./directory.component.css']
})
export class DirectoryComponent {
  public directoryHeaderMarkdownPath = `assets/directory-header.md`;
  public documents: DocumentInfo[] = DOCUMENTS;

  public getLink(doc: DocumentInfo): string {
    if (doc.useHost) {
      if (location.hostname === "localhost") {
      return `http://localhost:4200/#/${doc.link}`
      } else {
        return `https://iowapublicinformationboardarchive.netlify.app/#/${doc.link}`
      }
    } else {
      return `/assets/${doc.link}`
    }
  }
}
