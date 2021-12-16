import React from 'react';

function Prompt({changeAnswer, prompt}) {

  /** User has changed input box: update parent with value. */

  function handleChange(evt) {
    const {value} = evt.target;
    changeAnswer(prompt, value);
  }

  return (
      <div className="Prompt">
        <input placeholder={prompt}
                changeAnswer={handleChange} />
      </div>
  );
}

export default Prompt;

