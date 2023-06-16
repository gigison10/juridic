import "./question.css";

function Question() {
  const questions = {
    question:
      "După natura sa contractul de vânzare-cumpărare este un contract:",
    answer1: { answer: "Translativ de posesie.", isItCorrect: false },
    answer2: {
      answer: "Translativ de posesie şi folosinţă.",
      isItCorrect: false,
    },
    answer3: { answer: "Translativ de proprietate.", isItCorrect: true },
  };

  function checked() {
    let button = true;
    console.log("asd");
  }

  return (
    <div className="questionBlock">
      <h2>{questions.question}</h2>
      <div className="answers" onClick={checked}>
        <h4 className="answersText">{questions.answer1.answer}</h4>
        <div className="buttonAnswer">Raspunde</div>
      </div>
      <div className="answers" onClick={checked}>
        <h4 className="answersText">{questions.answer2.answer}</h4>
        <div className="buttonAnswer">Raspunde</div>
      </div>
      <div className="answers" onClick={checked}>
        <h4 className="answersText">{questions.answer3.answer}</h4>
        <div className="buttonAnswer">Raspunde</div>
      </div>
    </div>
  );
}
export default Question;

// 1.  După natura sa contractul de vânzare-cumpărare este un contract:
// a) translativ de posesie;
// b) translativ de posesie şi folosinţă;
// c) translativ de proprietate.     <-  corect
