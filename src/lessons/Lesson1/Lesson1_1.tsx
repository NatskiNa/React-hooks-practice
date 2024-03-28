import { ChangeEvent, useState } from 'react';

const Lesson1_1 = () => {
  const [count, setCount] = useState<number>(0);
  const [type, setType] = useState('type something here');

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <input
        type="text"
        value={type}
        onChange={(e: ChangeEvent<HTMLInputElement>) => setType(e.target.value)}
      />
      <button
        onClick={handleClick}
        className="border p-2 rounded-md bg-red-100"
      >
        Click
      </button>
      <p>Current count is {count}</p>
    </div>
  );
};

export default Lesson1_1;
