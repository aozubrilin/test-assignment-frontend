import * as React from 'react';
import Alert from '../../components/alert/alert';
import { useTypedSelector } from '../../store/reducer/reducer';
import { useDispatch } from 'react-redux';
import { clearItemErrorMessges } from '../../store/actions/actions';

const withAlertDialog = (WrappedComponent) => {
  const WithAlertDialog = () => {
    const dispatch = useDispatch();
    const errorMessages = useTypedSelector((state) => state.errorMessages);

    const onClickCloseButton = (id: string): void => {
      dispatch(clearItemErrorMessges(id));
    };

    const temlateErrorMessages = (): JSX.Element => {
      return errorMessages.flat().map((item) => {
        return (
          <Alert
            key={item.id}
            message={item.message}
            id={item.id}
            onClickCloseButton={onClickCloseButton}
          />
        );
      });
    };

    return (
      <React.Fragment>
        <div className="alert__list">
          {errorMessages && temlateErrorMessages()}
        </div>
        <WrappedComponent />
      </React.Fragment>
    );
  };

  return WithAlertDialog;
};

export { withAlertDialog };
export default (WrappedComponent) => withAlertDialog(WrappedComponent);
