import {Component} from '@angular/core';
import {MEMBERS, STAFF} from 'src/app/constants/contacts.constants';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  public headerPath = `assets/contacts-header.md`;
  public footerPath = `assets/contacts-footer.md`;
  public disclaimerPath = `assets/disclaimer.md`;
  public members = MEMBERS;
  public staff = STAFF;
}
