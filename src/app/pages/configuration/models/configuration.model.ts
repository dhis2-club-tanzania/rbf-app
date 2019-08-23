export interface BaseConfiguration {
  id?: string;
  indicator?: string;
  dataElement?: string;
  created: Date;
  lastUpdate: Date;
  user: {
    id: string;
    name: string;
  };
}
