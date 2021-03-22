import * as React from 'react';

type Props = {
  message: string;
  id: string;
  onClickCloseButton: Function;
};

export const Alert = ({
  message,
  id,
  onClickCloseButton,
}: Props): JSX.Element => {
  return (
    <div
      key={id}
      className="alert__item"
      onClick={() => onClickCloseButton(id)}
    >
      <span className="alert__closebtn">&times;</span>
      {message}
    </div>
  );
};

export default Alert;
