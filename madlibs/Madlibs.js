import React, {useState} from 'react';
import "./Madlibs.css";
import Story from './Story';
import PromptForm from "./PromptForm";

/** Madlib game:
 *
 * props:
 * - prompts:["noun", "noun 2", "adjective", "color"]
 * - template: `There was a [color] [noun] who loved a [adjective] [noun 2].`
 *
 *
 * - answers: {"noun": "car", "noun 2": "bike", "adjective": "small", "color": "red"}
 *
 */

function Madlib({prompts, template}) {

  const [answers, setAnswers] = useState(null);
  /** If have answers, render story, else render prompts. */

  return (
      <div className="Madlib">
        <h1>Madlibs!</h1>
        {answers
            ? <Story answers={answers}
                      template={template}
                      restart={() => setAnswers(null)} />

            : <PromptForm prompts={prompts}
                            finishPrompts={setAnswers} />
        }
      </div>
  );
}

Madlib.defaultProps = {
  prompts: ["noun", "noun 2", "adjective", "color"],
  template: `There was a [color] [noun] who loved a [adjective] [noun 2].`,
};


export default Madlib;