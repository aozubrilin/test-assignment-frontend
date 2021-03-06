import * as React from 'react';

interface Props {
  isFormValid: boolean;
  value: string;
  onChangeInput: Function;
  className: string;
}

const Input = ({
  isFormValid,
  value,
  onChangeInput,
  className,
}: Props): JSX.Element => {
  return (
    <label className={`${className} input ${!isFormValid && `input--error`}`}>
      <input
        className="input__block"
        type="text"
        placeholder="Введите тег"
        value={value}
        onChange={(evt) => onChangeInput(evt)}
      />
      <svg
        className="input__icon"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 20 20"
      >
        <path d="M0 0h24v24H0z" fill="none" />
        <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0016 9.5 6.5 6.5 0 109.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
      </svg>
      <span className="input__error">Заполните поле 'тег'</span>
    </label>
  );
};

export default Input;
