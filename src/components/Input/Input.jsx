import React, { useState } from 'react';
import Button from '../UI/Button';

import InputStyles from './Input.module.scss';

const Input = ({ getNewItem }) => {
  const [inputValue, setInputValue] = useState('');

  const onChangeHandler = (event) => {
    setInputValue(event.target.value);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    getNewItem(inputValue);
    setInputValue('');
  };

  //   console.log(inputValue);

  return (
    <form className={InputStyles.form} onSubmit={onSubmitHandler}>
      <input
        type="text"
        className={InputStyles.input}
        value={inputValue}
        onChange={onChangeHandler}
      />
      <Button isDisabled={inputValue} type={'submit'}>
        Add Item
      </Button>
    </form>
  );
};

export default Input;
