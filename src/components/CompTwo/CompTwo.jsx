import React from 'react';
import { useTestContext } from '../../utils/useContext';

export default function CompTwo() {
  //   const {
  //     textValue: { text, setText },
  //   } = useTestContext();
  const { text, setText } = useTestContext();

  const handleChange = evt => {
    const val = evt.target.value;
    setText(val);
  };

  console.count('TEXT rerender');

  return (
    <div>
      <h1>Text Component</h1>
      <h2>{text}</h2>
      <input
        name="text"
        type="text"
        value={text}
        onChange={handleChange}
      ></input>
    </div>
  );
}
