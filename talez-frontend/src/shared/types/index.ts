/**
 * TimeStampedModelMixin map of fields from `TimeStampedModelMixin` django-model
 */
export type TimeStampedModelMixin = {
  created_at: string;
  updated_at: string;
};

/**
 * Request Params Field
 */
export type requestParams = {
  limit: number;
  offset: number;
};

/**
 * Share Type Params Field
 */

export interface peopleWithAccessResponse {
  _id: string;
  workflow: string;
  shared_by: string;
  role: string;
  shared_at: string;
  __v: number;
  shared_to: SharedTo;
}
export interface SharedTo {
  _id: string;
  username: string;
  email: string;
}

export enum AccessLevel {
  FULL_ACCESS = "full_access",
  CAN_EDIT = "can_edit",
  CAN_VIEW = "can_view",
  REMOVE_ACCESS = "remove_access",
}

export type accessOptionProps = {
  value: AccessLevel;
  label: string;
};

export interface peopleWithAccessProps {
  workflowId: string | number;
}

export interface updateAccessRequestprops {
  email: string;
  role: string;
}

export type inviteUserRequestProps = updateAccessRequestprops;

export interface User {
  _id: string;
  username: string;
  email: string;
  isVerified: boolean;
  __v: number;
  status: string;
}

export type UserResponse = {
  user: User;
};
