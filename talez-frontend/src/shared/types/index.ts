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
