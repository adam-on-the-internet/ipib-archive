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
  hasAgendaPDF?: boolean;
  hasMaterials?: boolean;
  isUpcoming?: boolean;
  areMinutesExempt?: boolean;
}

export function missingAny(meetingInfo: MeetingInfo): boolean {
  return !meetingInfo.youtubeLink || !meetingInfo.hasAgenda || (!meetingInfo.hasMinutes && !meetingInfo.areMinutesExempt);
}
