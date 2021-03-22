import * as React from 'react';

interface Props {
  label: string;
  className: string;
  onClickButton: Function;
  isLoadingData?: boolean;
}

const Button = ({
  onClickButton,
  className,
  label,
  isLoadingData,
}: Props): JSX.Element => {
  return (
    <button
      className={className}
      type="button"
      onClick={() => onClickButton()}
      disabled={isLoadingData}
    >
      {label}
    </button>
  );
};

export default Button;
