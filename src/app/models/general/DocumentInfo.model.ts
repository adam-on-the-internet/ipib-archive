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
  hasRecording?: boolean;
  hasMinutes?: boolean;
  hasAgenda?: boolean;
  hasMaterials?: boolean;
}
