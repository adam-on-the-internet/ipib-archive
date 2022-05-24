export interface DocumentInfo {
  name: string;
  link: string;
  description: string;
  date?: string;
  type?: string;
  useHost?: boolean;
}

export interface MeetingInfo extends DocumentInfo {
  ipibLink?: string;
  youtubeLink?: string;
  hasMinutes?: boolean;
  hasMinutesPDF?: boolean;
  hasAgenda?: boolean;
  hasMaterials?: boolean;
  isUpcoming?: boolean;
}

export function missingAny(meetingInfo: MeetingInfo): boolean {
  return !meetingInfo.hasMaterials || !meetingInfo.youtubeLink || !meetingInfo.hasAgenda || !meetingInfo.hasMinutes;
}
