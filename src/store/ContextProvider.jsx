import React, {useState} from 'react'
import AuthContext from './context'

function ContextProvider(props) {
  // eslint-disable-next-line
  const [itemsNumber, setItemsNumber] = useState(0);

  const value = {
    itemsNumber,
  };

  return (
    <AuthContext.Provider value={value}>{props.children}</AuthContext.Provider>
  );
}

export default ContextProvider
