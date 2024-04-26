export interface SidebarLink {
  icon: any;
  route: string;
  label: string;
  color: string;
}
export interface Task {
  dateCreated: string;
  title: string;
  description: string;
  status: string;
  date: string;
}
export const sidebarLinks: SidebarLink[] = [
  {
    icon: "pi pi-list",
    route: "/profile",
    label: "All Tasks",
    color: "text-white",
  },
  {
    icon: "pi pi-ellipsis-h",
    route: "/profile/pending",
    label: "Pending Tasks",
    color: "text-orange-500",
  },
  {
    icon: "pi pi-check-circle",
    route: "/profile/approved",
    label: "Approved Tasks",
    color: "text-green-500",
  },
  {
    icon: "pi pi-times-circle",
    route: "/profile/rejected",
    label: "Rejected Tasks",
    color: "text-red-500",
  },
];

export const tasks: Task[] = [
  {
    dateCreated: "20-20-2000",
    title: "titulo",
    description: "descripcion",
    status: "Approved",
    date: "10-10-1010",
  },
  {
    dateCreated: "20-20-2000",
    title: "titulo",
    description: "descripcion",
    status: "Rejected",
    date: "10-10-1010",
  },
  {
    dateCreated: "20-20-2000",
    title: "titulo",
    description: "descripcion",
    status: "Pending",
    date: "10-10-1010",
  },
  {
    dateCreated: "20-20-2000",
    title: "titulo",
    description: "descripcion",
    status: "Pending",
    date: "10-10-1010",
  },
  {
    dateCreated: "20-20-2000",
    title: "titulo",
    description: "descripcion",
    status: "Pending",
    date: "10-10-1010",
  },
];
