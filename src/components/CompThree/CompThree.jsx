import React from 'react';
import { useTestContext } from '../../utils/useContext';

export default function CompThree() {
  //   const {
  //     numValue: { number, setNumber },
  //   } = useTestContext();
  const { number, setNumber } = useTestContext();

  const handleChange = evt => {
    const val = evt.target.value;
    setNumber(val);
  };

  console.count('NUMBER rerender');

  return (
    <div>
      <h1>Number Component</h1>
      <h2>{number}</h2>
      <input
        name="number"
        type="number"
        value={number}
        onChange={handleChange}
      ></input>
    </div>
  );
}
