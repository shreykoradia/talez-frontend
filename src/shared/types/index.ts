import { AxiosError } from "axios";

/**
 * TimeStampedModelMixin map of fields from `TimeStampedModelMixin` django-model
 */
export type TimeStampedModelMixin = {
  createdAt: string;
  updatedTAt: string;
};

/**
 * Request Params Field
 */
export type requestParams = {
  limit: number;
  offset: number;
};

/**
 * Axios Error Custom Resposne Type
 */
export type AxiosErrorProps = {
  message: string;
  status: number;
};

export type ErrorResponse = AxiosError<AxiosErrorProps>;

/**
 * Share Type Params Field
 */

export interface peopleWithAccessResponse {
  _id: string;
  workflow: string;
  sharedBy: string;
  role: string;
  sharedAt: string;
  __v: number;
  sharedTo: SharedTo;
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
  githubId: string;
  authType: "custom" | "github";
  githubToken: string;
  avatarUrl: string;
  isVerified: boolean;
  __v: number;
  status: string;
}

export type UserResponse = {
  user: User;
};

export interface sharedUserResponse {
  shared_users?: SharedUsersEntity[] | null;
}
export interface SharedUsersEntity {
  _id: string;
  workflow: string;
  sharedBy: string;
  role: string;
  sharedAt: string;
  __v: number;
  sharedTo: SharedTo;
}
export interface SharedTo {
  _id: string;
  username: string;
  email: string;
}
