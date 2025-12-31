export type Announcement = {
  id: string;
  title: string;
  description?: string;
  href?: string;
  cta?: string;
  badge?: string;
  color: 'blue' | 'green' | 'orange' | 'purple' | 'gray' | 'red';
  startDate: Date;
  endDate?: Date;
  isActive: boolean;
};

export type AnnouncementsResponse = {
  announcements: Announcement[];
  showBanner: boolean;
};