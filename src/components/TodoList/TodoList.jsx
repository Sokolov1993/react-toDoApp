import React, { useState } from 'react';
import Input from '../Input/Input';
import List from '../List/List';

import TodoListStyles from './TodoList.module.scss';

const TodoList = () => {
  const [addTodo, setAddTodo] = useState('');
  const inputValueObj = { id: Math.random().toString() };

  const delItemFromList = (itemForDel) => {
    setAddTodo((prevState) =>
      prevState.filter((item) => item.id !== itemForDel)
    );
  };

  const getNewItem = (newItem) => {
    inputValueObj.item = newItem;
    setAddTodo((prevState) => [inputValueObj, ...prevState]);
  };

  return (
    <div className={TodoListStyles.todoList}>
      <Input getNewItem={getNewItem} />
      <List showTodo={addTodo} delItemFromList={delItemFromList} />
    </div>
  );
};

export default TodoList;
