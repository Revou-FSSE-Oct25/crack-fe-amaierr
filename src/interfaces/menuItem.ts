export interface MenuItem {
  menuIndex: number;
  menu: {
    label: string;
    path: string;
    icon: string;
    count?: number;
  };
};