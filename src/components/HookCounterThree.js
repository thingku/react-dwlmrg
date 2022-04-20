import React, { useState } from 'react';

function HookCounterThree() {
  const personObj = {
    firstname: '',
    lastname: '',
  };
  const [name, setName] = useState(personObj);

  return (
    <form>
      Firstname:{' '}
      <input
        type="text"
        value={name.firstname}
        onChange={(e) => setName({ ...name, firstname: e.target.value })}
      />
      <br />
      Lastname:{' '}
      <input
        type="text"
        value={name.lastname}
        onChange={(e) => setName({ ...name, lastname: e.target.value })}
      />
      <br />
      <h2>
        Your firstname is: {name.firstname} <br />
        Your lastname is: {name.lastname}
      </h2>
      <h2>{JSON.stringify(name)}</h2>
    </form>
  );
}

export default HookCounterThree;
