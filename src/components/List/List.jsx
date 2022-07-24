import React from 'react';
import Item from '../Item/Item';

import ListStyles from './List.module.scss';

const List = ({ showTodo, delItemFromList }) => {
  //   console.log(showTodo);
  return (
    showTodo && (
      <ul className={ListStyles.list}>
        {showTodo.map((toDoItem) => {
          return (
            <Item
              delItemFromList={delItemFromList}
              showTodo={toDoItem.item}
              key={toDoItem.id}
              id={toDoItem.id}
            />
          );
        })}
      </ul>
    )
  );
};

export default List;
