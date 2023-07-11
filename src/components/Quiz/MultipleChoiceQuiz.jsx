import { useState } from "react";

import { useNavigate } from "react-router-dom";

const MultipleChoiceQuiz = ({ questions }) => {
  const navigate = useNavigate();

  const [currentIndex, setCurrentIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);

  const circledDigit = ["①", "②", "③", "④"];

  const checkAnswer = (index) => {
    setShowAnswer(true);
    // if (index === questions[currentIndex].answer) {
    //   alert("정답입니다!");
    // } else {
    //   alert("오답입니다!");
    // }
  };

  const handlePrevQuestion = () => {
    if (currentIndex === 0) {
      alert("이전 문제가 없습니다.");
    } else {
      setCurrentIndex((prev) => prev - 1);
      setShowAnswer(false);
    }
  };

  const handleNextQuestion = () => {
    if (currentIndex === questions.length - 1) {
      alert("퀴즈가 끝났습니다!");
      navigate("/my");
    } else {
      setCurrentIndex((prev) => prev + 1);
      setShowAnswer(false);
    }
  };

  const handleShowAnswer = () => {
    setShowAnswer((prev) => !prev);
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
            <li className={showAnswer && "disabled"}>
              <button
                className={
                  (showAnswer
                    ? index === questions[currentIndex].answer
                      ? "bg-green-100 text-green-500 border border-green-500"
                      : "bg-red-100 text-red-500 border border-red-500"
                    : "bg-gray-100") + " p-4"
                }
                disabled={showAnswer}
                onClick={() => checkAnswer(index)}
              >
                <p className="text-xl">{circledDigit[index]}</p>
                <span>{option}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div className="join mt-4">
        <button
          className="btn btn-neutral w-1/3 join-item"
          onClick={handlePrevQuestion}
        >
          이전 문제
        </button>
        <button
          className="btn btn-primary w-1/3 join-item"
          onClick={handleShowAnswer}
        >
          {showAnswer ? "다시 풀기" : "정답 보기"}
        </button>
        <button
          className="btn btn-neutral w-1/3 join-item"
          onClick={handleNextQuestion}
        >
          다음 문제
        </button>
      </div>
    </div>
  );
};

export default MultipleChoiceQuiz;
