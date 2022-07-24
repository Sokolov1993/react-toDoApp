import React from 'react';
import ItemStyles from './Item.module.scss';

const Item = ({ showTodo, delItemFromList, id }) => {
  const itemOnDblClick = () => {
    delItemFromList(id);
  };

  return (
    <li onDoubleClick={itemOnDblClick} className={ItemStyles.item}>
      {showTodo}
    </li>
  );
};

export default Item;
