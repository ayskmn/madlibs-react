import React, {useState} from 'react';
import Prompt from './Prompt';


function PromptsForm({prompts, finishPrompts}) {
  const [promptForm, setPromptForm] = useState({});
  /** Update single answer. */

  function changeAnswer(prompt, val) {
    setPromptForm(data => ({...data, [prompt]: val}));
  }


  /** Send completed answers to Madlibs parent */

  function handleSubmit(evt) {
    evt.preventDefault();
    finishPrompts(promptForm);
  }

  // Have we filled in every prompt?
  let notDone = (
    Object.keys(promptForm).length < prompts.length
  );

  return (
      <form className="Prompts" onSubmit={handleSubmit}>
        {prompts.map((p, i) => (
            <Prompt key={i}
                    prompt={p}
                    answer={promptForm[p]}
                    changeAnswer={changeAnswer} />
        ))}
        <button disabled={notDone}>Get Story</button>
      </form>
  );
}

export default PromptsForm;




