import { useSelector, TypedUseSelectorHook } from 'react-redux';
import {
  DataState,
  ActionTypes,
  UPDATE_DATA,
  CLEAR_DATA,
  SET_GROUP,
  SET_TAG,
  UPDATE_ERROR_MESSAGES,
  CLEAR_ERROR_MESSAGES,
  CLEAR_ITEM_ERROR_MESSAGE,
  SET_LOADING,
} from '../types';

const initialState: DataState = {
  data: [],
  tag: '',
  errorMessages: [],
  isGroup: false,
  isLoading: false,
};

export const useTypedSelector: TypedUseSelectorHook<DataState> = useSelector;

function reducer(state = initialState, action: ActionTypes): DataState {
  switch (action.type) {
    case UPDATE_DATA:
      return {
        ...state,
        data: [action.payload, ...state.data.slice()],
      };
    case UPDATE_ERROR_MESSAGES:
      return {
        ...state,
        errorMessages: [action.payload, ...state.errorMessages.slice()],
      };
    case CLEAR_DATA:
      return {
        ...state,
        data: [],
      };
    case CLEAR_ERROR_MESSAGES:
      return {
        ...state,
        errorMessages: [],
      };
    case CLEAR_ITEM_ERROR_MESSAGE:
      const newErrorMessages = state.errorMessages
        .flat()
        .filter((item) => item.id !== action.payload);
      return {
        ...state,
        errorMessages: newErrorMessages,
      };
    case SET_GROUP:
      return {
        ...state,
        isGroup: !state.isGroup,
      };
    case SET_TAG:
      return {
        ...state,
        tag: action.payload,
      };

    case SET_LOADING:
      return {
        ...state,
        isLoading: action.playload,
      };
    default:
      return state;
  }
}

export default reducer;
