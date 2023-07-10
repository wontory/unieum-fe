import { useState } from "react";

import { useNavigate } from "react-router-dom";

const MultipleChoiceQuiz = ({ questions }) => {
  const navigate = useNavigate();

  const [currentIndex, setCurrentIndex] = useState(0);

  const circledDigit = ["①", "②", "③", "④"];

  const checkAnswer = (index) => {
    if (index === questions[currentIndex].answer) {
      alert("정답입니다!");
    } else {
      alert("오답입니다!");
    }
  };

  const handlePrevQuestion = () => {
    if (currentIndex === 0) {
      alert("이전 문제가 없습니다.");
    } else {
      setCurrentIndex((curIndex) => curIndex - 1);
      setShowAnswer(false);
    }
  };

  const handleNextQuestion = () => {
    if (currentIndex === questions.length - 1) {
      alert("퀴즈가 끝났습니다!");
      navigate("/my");
    } else {
      setCurrentIndex((curIndex) => curIndex + 1);
      setShowAnswer(false);
    }
  };

  return (
    <div
      className="flex flex-col justify-between max-w-[1200px] w-full"
      style={{ minHeight: "calc(100vh - 160px)" }}
    >
      <div className="flex flex-col gap-4">
        <progress
          className="progress progress-primary"
          value={currentIndex + 1}
          max={questions.length}
        />
        <div className="card-title">{questions[currentIndex].question}</div>
        <ul className="menu menu-lg w-full rounded-box gap-3 p-0">
          {questions[currentIndex].options.map((option, index) => (
            <li>
              <a className="bg-gray-100 p-4" onClick={() => checkAnswer(index)}>
                <p className="text-xl">{circledDigit[index]}</p>
                <span>{option}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="join mt-4">
        <button
          className="btn btn-neutral w-1/2 join-item"
          onClick={handlePrevQuestion}
        >
          이전 문제
        </button>
        <button
          className="btn btn-neutral w-1/2 join-item"
          onClick={handleNextQuestion}
        >
          다음 문제
        </button>
      </div>
    </div>
  );
};

export default MultipleChoiceQuiz;
