/* tslint:disable */

import {ContactInfo} from "../models/general/ContactInfo.model";

export const MEMBERS: ContactInfo[] = [
  {
    name: "Joan Corbin",
    role: "Government Representative",
    subtitle: "Pella",
    notes: null,
    email: null,
    phone: null,
  },
  {
    name: "E. J. Giovannetti",
    role: "Government Representative",
    subtitle: "Urbandale",
    notes: null,
    email: null,
    phone: null,
  },
  {
    name: "Barry Lindahl",
    role: "Government Representative",
    subtitle: "Dubuque",
    notes: null,
    email: null,
    phone: null,
  },
  {
    name: "Keith Luchtel",
    role: "Media  Representative",
    subtitle: "Clive",
    notes: null,
    email: null,
    phone: null,
  },
  {
    name: "Monica McHugh",
    role: "Public  Representative",
    subtitle: "Zwingle",
    notes: null,
    email: null,
    phone: null,
  },
  {
    name: "Fredrick (Rick) Morain",
    role: "Media  Representative",
    subtitle: "Jefferson",
    notes: null,
    email: null,
    phone: null,
  },
  {
    name: "Julie Pottorff",
    role: "Public Representative",
    subtitle: "Des Moines",
    notes: null,
    email: null,
    phone: null,
  },
  {
    name: "Suzan Stewart",
    role: "Public Representative",
    subtitle: "Sioux City",
    notes: null,
    email: null,
    phone: null,
  },
  {
    name: "Vacant Seat",
    role: "Public Representative",
    subtitle: null,
    notes: null,
    email: null,
    phone: null,
  },
];

export const STAFF: ContactInfo[] = [
  {
    name: "Margaret E. Johnson, J.D.",
    role: "Executive Director",
    subtitle: null,
    notes: null,
    email: null,
    phone: null,
  },
  {
    name: "Brett J. Toresdahl",
    role: "Deputy Director",
    subtitle: null,
    notes: null,
    email: null,
    phone: null,
  },
  {
    name: "Vacant Seat",
    role: "Legal Counsel",
    subtitle: null,
    notes: null,
    email: null,
    phone: null,
  },
];

export const FORMER: ContactInfo[] = [];

export const CONTACTS: ContactInfo[] = MEMBERS.concat(STAFF);
