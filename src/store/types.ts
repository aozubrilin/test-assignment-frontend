export const UPDATE_DATA = `UPDATE_DATA`;
export const CLEAR_DATA = `CLEAR_DATA`;
export const SET_GROUP = `SET_GROUP`;
export const SET_TAG = `SET_TAG`;
export const UPDATE_ERROR_MESSAGES = `UPDATE_ERROR_MESSAGES`;
export const CLEAR_ERROR_MESSAGES = `CLEAR_ERROR_MESSAGES`;
export const CLEAR_ITEM_ERROR_MESSAGE = `CLEAR_ITEM_ERROR_MESSAGE`;
export const SET_LOADING = `SET_LOADING`;

export interface Data {
  id: string;
  tag: string;
  url: string;
  width: string;
  height: string;
  title: string;
}

export interface ErrorMessage {
  id: string;
  error: boolean;
  message: string;
}

export interface DataState {
  data: Data[];
  isGroup: boolean;
  tag: string;
  errorMessages: ErrorMessage[];
  isLoading: boolean;
}

interface UpdateDataAction {
  type: typeof UPDATE_DATA;
  payload: Data;
}

interface UpdateErrorMessages {
  type: typeof UPDATE_ERROR_MESSAGES;
  payload: ErrorMessage;
}

interface ClearErrorMessages {
  type: typeof CLEAR_ERROR_MESSAGES;
}

interface ClearItemErrorMessage {
  type: typeof CLEAR_ITEM_ERROR_MESSAGE;
  payload: string;
}

interface ClearDataAction {
  type: typeof CLEAR_DATA;
}

interface SetGroup {
  type: typeof SET_GROUP;
}

interface SetLoading {
  type: typeof SET_LOADING;
  playload: boolean;
}

interface SetTag {
  type: typeof SET_TAG;
  payload: string;
}

export type ActionTypes =
  | UpdateDataAction
  | ClearDataAction
  | SetGroup
  | SetTag
  | UpdateErrorMessages
  | ClearErrorMessages
  | ClearItemErrorMessage
  | SetLoading;
