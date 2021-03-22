import {
  Data,
  UPDATE_DATA,
  CLEAR_DATA,
  ActionTypes,
  SET_GROUP,
  SET_TAG,
  ErrorMessage,
  UPDATE_ERROR_MESSAGES,
  CLEAR_ERROR_MESSAGES,
  CLEAR_ITEM_ERROR_MESSAGE,
  SET_LOADING,
} from '../types';

export function updateData(newData: Data): ActionTypes {
  return {
    type: UPDATE_DATA,
    payload: newData,
  };
}

export function clearData(): ActionTypes {
  return {
    type: CLEAR_DATA,
  };
}

export function setGroup(): ActionTypes {
  return {
    type: SET_GROUP,
  };
}

export function setLoading(isLoading: boolean): ActionTypes {
  return {
    type: SET_LOADING,
    playload: isLoading,
  };
}

export function setTag(newTag: string): ActionTypes {
  return {
    type: SET_TAG,
    payload: newTag,
  };
}

export function updateErrorMessages(newMessadge: ErrorMessage): ActionTypes {
  return {
    type: UPDATE_ERROR_MESSAGES,
    payload: newMessadge,
  };
}

export function clearErrorMessges(): ActionTypes {
  return {
    type: CLEAR_ERROR_MESSAGES,
  };
}

export function clearItemErrorMessges(id: string): ActionTypes {
  return {
    type: CLEAR_ITEM_ERROR_MESSAGE,
    payload: id,
  };
}
