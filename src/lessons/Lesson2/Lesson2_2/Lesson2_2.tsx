import { useEffect, useState } from 'react';
import { fetchBio } from './fetchBio';

const Lesson2_2 = () => {
  const [userName, setUserName] = useState('ShinCode');
  const [bio, setBio] = useState<string | null>(null);

  useEffect(() => {
    const startFetching = async () => {
      const response = await fetchBio(userName);
      //console.log(response);
      setBio(response);
    };
    startFetching();
  }, [userName]);
  return (
    <div>
      <select onChange={(e) => setUserName(e.target.value)} value={userName}>
        <option value="ShinCode">ShinCode</option>
        <option value="TestUser">TestUser</option>
        <option value="SampleUser">SampleUser</option>
      </select>

      <hr />

      <p className="text-black">{bio ?? 'Loading...'}</p>
    </div>
  );
};

export default Lesson2_2;
