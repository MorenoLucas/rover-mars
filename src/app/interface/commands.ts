export interface Commands {
  direction: 'L' | 'R' | 'A';
  orientation: 'N' | 'E' | 'S' | 'W';
  coordinates: Coordinates;
  successTrip: boolean;
}

export interface Coordinates {
  xWidth: number;
  yHeight: number;
}
