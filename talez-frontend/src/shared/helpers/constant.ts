import { AccessLevel, accessOptionProps } from "../types";

export const accessOptions: accessOptionProps[] = [
  { value: AccessLevel.FULL_ACCESS, label: "Full Access" },
  { value: AccessLevel.CAN_EDIT, label: "Can Edit" },
  { value: AccessLevel.CAN_VIEW, label: "Can View" },
  { value: AccessLevel.REMOVE_ACCESS, label: "Remove Access" },
];
