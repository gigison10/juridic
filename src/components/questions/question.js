import "./question.css";
import { useState } from "react";

function Question() {
  const [answerCheck, setAnswerCheck] = useState(false);
  const [style, setStyle] = useState(false);
  const [questionNumber, setQuestionNumber] = useState(0);

  const questions = [
    {
      question:
        "1: După natura sa contractul de vânzare-cumpărare este un contract:",
      answer1: { answer: "Translativ de posesie.", isItCorrect: false },
      answer2: {
        answer: "Translativ de posesie şi folosinţă.",
        isItCorrect: false,
      },
      answer3: { answer: "Translativ de proprietate.", isItCorrect: true },
    },
    ////////////
    {
      question:
        "2: Conform regulii generale, dreptul de proprietate asupra bunului mobil este transferat cumpărătorului:",
      answer1: {
        answer: "In momentul încheierii contractului.",
        isItCorrect: false,
      },
      answer2: {
        answer: "In momentul predării bunului.",
        isItCorrect: true,
      },
      answer3: {
        answer: "In momentul achitării preţului..",
        isItCorrect: false,
      },
    },
    ////////////
    {
      question: "3: Vânzare-cumpăre este un act:",
      answer1: {
        answer: "De constituire.",
        isItCorrect: false,
      },
      answer2: {
        answer: "De dispoziţie.",
        isItCorrect: true,
      },
      answer3: {
        answer: "De conservare.",
        isItCorrect: false,
      },
    }, ////////////
    {
      question: "4: Nu pot forma obiectul contractului de vânzare-cumpărare:",
      answer1: {
        answer: "Bunurile consumptibile.",
        isItCorrect: false,
      },
      answer2: {
        answer: "Bunurile necorporale.",
        isItCorrect: false,
      },
      answer3: {
        answer: "Drepturile  prevăzute de lege.",
        isItCorrect: true,
      },
    }, ////////////
    {
      question:
        "5: Dacă datoria de a executa imediat nu rezultă din lege, contract saun din natura obligaţiei, debitorul trebuie să execute obligaţia.",
      answer1: {
        answer: "In termen de 7 zile de la data semnării contractului.",
        isItCorrect: false,
      },
      answer2: {
        answer: "In termen de 7 zile de la data încheierii contractului.",
        isItCorrect: false,
      },
      answer3: {
        answer: "In termen de 7 zile din momentul cererii creditorului.",
        isItCorrect: true,
      },
    }, ////////////
    {
      question: "6: Dreptul  de preemţiune apare dacă bunul.",
      answer1: {
        answer: "Se vinde.",
        isItCorrect: true,
      },
      answer2: {
        answer: "Se schimbă.",
        isItCorrect: false,
      },
      answer3: {
        answer: "Se donează.",
        isItCorrect: false,
      },
    }, ////////////
    {
      question:
        "7: Contractului de vânzare-cumpărare este consensual deoarece:",
      answer1: {
        answer:
          "Parţile au realizat un acord în privinţa tuturor condiţiilor esenţiale contractului.",
        isItCorrect: true,
      },
      answer2: {
        answer: "Da naştere la obligaţii reciproce pentru ambele părţi.",
        isItCorrect: false,
      },
      answer3: {
        answer: "Fiecare parte urmăreşte un interes patrimonial.",
        isItCorrect: false,
      },
    }, ////////////
    {
      question: "8: Dreptul de răscumpărare apare dacă:",
      answer1: {
        answer:
          "Acest drept a fost rezervat în contractul de vânzare-cumpărare.",
        isItCorrect: true,
      },
      answer2: {
        answer: "Acest drept a fost rezervat în alt contract accesoriu.",
        isItCorrect: true,
      },
      answer3: {
        answer: "In orice caz.",
        isItCorrect: false,
      },
    }, ////////////
    {
      question: "9: Se consideră  viciu material dacă:",
      answer1: {
        answer:
          "Vinzătorul predă bunul într-o cantitate mai mică decât ceea convenită.",
        isItCorrect: true,
      },
      answer2: {
        answer: "Specificaţiile nu puteau influenţa decizia cumpărătorului.",
        isItCorrect: false,
      },
      answer3: {
        answer:
          "In registru bunulurilor imobile este înscris un drept inexistent.",
        isItCorrect: false,
      },
    }, ////////////
  ];

  function checked(event) {
    if (event === true) {
      setAnswerCheck("Corect !!!");
      setStyle("corect");
      if (questionNumber + 1 < questions.length) {
        console.log(questionNumber, questions.length);

        setQuestionNumber((prev) => prev + 1);
        console.log(questionNumber, questions.length);

        setTimeout(() => {
          setAnswerCheck(false);
          setStyle(false);
        }, 1500);
      }
      if (questionNumber + 1 == questions.length) {
        setQuestionNumber(0);
      }
    } else {
      setAnswerCheck("Fals !!!");
      setStyle("false");

      setTimeout(() => {
        setAnswerCheck(false);
        setStyle(false);
      }, 1500);
    }
    // console.log(event.currentTarget.value);
  }

  return (
    <div className="card">
      <div className="card-question">{questions[questionNumber].question}</div>
      <div className="card-answer">
        <div className="card-answer-text">
          {questions[questionNumber].answer1.answer}
        </div>
        <button
          className="card-answer-button"
          onClick={() => checked(questions[questionNumber].answer1.isItCorrect)}
        >
          Raspunde
        </button>
      </div>
      <div className="card-answer">
        <div className="card-answer-text">
          {questions[questionNumber].answer2.answer}
        </div>
        <button
          className="card-answer-button"
          onClick={() => checked(questions[questionNumber].answer2.isItCorrect)}
        >
          Raspunde
        </button>
      </div>
      <div className="card-answer">
        <div className="card-answer-text">
          {questions[questionNumber].answer3.answer}
        </div>
        <button
          className="card-answer-button"
          onClick={() => checked(questions[questionNumber].answer3.isItCorrect)}
        >
          Raspunde
        </button>
      </div>
      <div className={`card-result ${style}`}>{answerCheck}</div>
    </div>
  );
}
export default Question;

// 1.  După natura sa contractul de vânzare-cumpărare este un contract:
// a) translativ de posesie;
// b) translativ de posesie şi folosinţă;
// c) translativ de proprietate.     <-  corect

// 2.  Conform regulii generale, dreptul de proprietate asupra bunului mobil este transferat cumpărătorului:
// a) în momentul încheierii contractului;
// b) în momentul predării bunului;     <-  corect
// c) în momentul achitării preţului.

// 3.  Vânzare-cumpăre este un act:
// a) de constituire;
// b) de dispoziţie;     <-  corect
// c) de conservare.

// 4.  Nu pot forma obiectul contractului de vânzare-cumpărare:
// a) Bunurile consumptibile.
// b) Bunurile necorporale.
// c) Drepturile  prevăzute de lege.     <-  corect

// 5.  Dacă datoria de a executa imediat nu rezultă din lege, contract saun din natura obligaţiei, debitorul trebuie să execute obligaţia:
// a) In termen de 7 zile de la data semnării contractului.
// b)  In termen de 7 zile de la data încheierii contractului.
// c)  In termen de 7 zile din momentul cererii creditorului.     <-  corect

// 6.  Dreptul  de preemţiune apare dacă bunul:
// a) se vinde;     <-  corect
// b) se schimbă;
// c) se donează.

// 7.  Contractului de vânzare-cumpărare este consensual deoarece:
// a) Parţile au realizat un acord în privinţa tuturor condiţiilor esenţiale contractului;     <-  corect
// b) Da naştere la obligaţii reciproce pentru ambele părţi;
// c) Fiecare parte urmăreşte un interes patrimonial

// 8.  Dreptul de răscumpărare apare dacă:
// a) Acest drept a fost rezervat în contractul de vânzare-cumpărare.     <-  corect
// b) Acest drept a fost rezervat în alt contract accesoriu.
// c) In orice caz.

// 9.  Se consideră  viciu material dacă:
// a) Vinzătorul predă bunul într-o cantitate mai mică decât ceea convenită.     <-  corect
// b) Specificaţiile nu puteau influenţa decizia cumpărătorului.
// c) In registru bunulurilor imobile este înscris un drept inexistent.

// 10.  Conform regulii generale, dreptul de proprietate asupra bunului imobil este transferat cumpărătorului:
// a) în momentul înregistrării contractului de vânzare-cumpărare  în registru bunurilor imobile;
// b) în momentul semnării  contractului de vânzare-cumpărare;
// c) în momentul în care părţile au realizat un acord în privinţa tuturor condiţiilor esenţiale contractului
