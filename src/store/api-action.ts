import { getImages } from '../services/api';
import { updateData, setLoading } from './actions/actions';
import { getDataAdapted, getErrorsAdapted } from '../utils/adapter';
import { updateErrorMessages } from './actions/actions';

export const fetchData = (tags: Array<string>) => {
  return (dispatch) => {
    dispatch(setLoading(true));
    Promise.all(tags.map((item) => getImages(item))).then((result) => {
      const errorMessages = result.filter((item) => item.error);
      const data = result.filter((item) => !item.error);

      if (data.length > 0) {
        dispatch(updateData(getDataAdapted(data)));
        dispatch(setLoading(false));
        return;
      }

      dispatch(updateErrorMessages(getErrorsAdapted(errorMessages)));
      dispatch(setLoading(false));
    });
  };
};
