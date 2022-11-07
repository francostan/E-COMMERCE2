import React from 'react'

const useInput = () => {
    const [value, setValue] = React.useState('');
    function onChange(event) {
        setValue(event.target.value);
    }
  return ({value, onChange});
}

export default useInput;