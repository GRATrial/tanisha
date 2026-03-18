// ### PLACEHOLDER: Researcher will customize video data

export interface VideoResult {
  id: string;
  title: string;
  source: string;
  duration: string;
  views: string;
  thumbnailKey?: string;
}

// Fictional video results for research simulation
export const VIDEOS: VideoResult[] = [
  {
    id: "v1",
    title: "Tanisha Jefferson on financial analysis best practices ...",
    source: "YouTube · CFA Institute",
    duration: "6:22",
    views: "Mar 1, 2025"
  },
  {
    id: "v2",
    title: "Women in Finance Summit — Tanisha Jefferson keynote",
    source: "YouTube · WIF Conference",
    duration: "22:15",
    views: "Nov 8, 2024"
  },
  {
    id: "v3",
    title: "Tanisha Jefferson discusses investment research careers",
    source: "YouTube · CareerPaths",
    duration: "9:48",
    views: "Jul 19, 2024"
  }
];

