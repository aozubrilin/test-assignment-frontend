import * as React from 'react';
import { useState, useEffect } from 'react';
import { useTypedSelector } from '../../store/reducer/reducer';
import { useDispatch } from 'react-redux';
import Input from '../input/input';
import Button from '../button/button';
import { fetchData } from '../../store/api-action';
import {
  clearData,
  setGroup,
  setTag,
  clearErrorMessges,
} from '../../store/actions/actions';
import withAlertDialog from '../../hocs/with-alert-dialog/with-alert-dialog';
import { randomString } from '../../utils/utils';
import { TAG_REG_EXP, TAG_DELAY } from '../../utils/const';

const SearchForm = () => {
  const dispatch = useDispatch();
  const isGroup = useTypedSelector((state) => state.isGroup);
  const isLoading = useTypedSelector((state) => state.isLoading);
  const tag = useTypedSelector((state) => state.tag);
  const [isFormValid, setFormValid] = useState<boolean>(true);
  const [timeoutCounter, setCounter] = useState(0);

  const isLoadingData = isLoading || timeoutCounter > 1;

  useEffect(() => {
    if (timeoutCounter !== 0) {
      let timer = setTimeout(() => {
        setCounter(timeoutCounter + 1);
        dispatch(fetchData(randomString()));
        dispatch(clearErrorMessges());
      }, 5000);
      return () => {
        clearTimeout(timer);
      };
    }
    return;
  }, [timeoutCounter]);

  const onChangeTagInput = (evt: React.ChangeEvent<HTMLInputElement>): void => {
    setFormValid(true);
    dispatch(setTag(evt.target.value.replace(TAG_REG_EXP, '')));
    dispatch(clearErrorMessges());
  };

  const onClickLoadButtton = (): void => {
    if (tag == TAG_DELAY) {
      setCounter(1);
      return;
    }

    if (!tag) {
      setFormValid(false);
      return;
    }

    const value = tag.split(',');
    dispatch(fetchData(value));
  };

  const onClickClearButtton = (): void => {
    if (timeoutCounter > 0) {
      setCounter(0);
      dispatch(setTag(''));
      dispatch(clearErrorMessges());
      return;
    }

    dispatch(clearErrorMessges());
    dispatch(setTag(''));
    dispatch(clearData());
  };

  const onClickGroupButtton = (): void => {
    dispatch(setGroup());
  };

  return (
    <form className="search-form">
      <div className="search-form__wrapper">
        <Input
          value={tag}
          className="search-form__input"
          isFormValid={isFormValid}
          onChangeInput={onChangeTagInput}
        />
        <Button
          className="search-form__button button button--green"
          label={isLoadingData > 0 ? `Загрузка...` : `Загрузить`}
          onClickButton={onClickLoadButtton}
          isLoadingData={isLoadingData}
        />
        <Button
          className="search-form__button button button--red"
          label={timeoutCounter > 0 ? `Остановить` : `Очистить`}
          onClickButton={onClickClearButtton}
        />
        <Button
          className="search-form__button button button--blue"
          label={isGroup ? `Разгрупировать` : `Сгрупировать`}
          onClickButton={onClickGroupButtton}
        />
      </div>
    </form>
  );
};

export { SearchForm };
export default withAlertDialog(SearchForm);
