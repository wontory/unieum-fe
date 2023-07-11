import { useState, useRef } from "react";

import { useNavigate } from "react-router-dom";

import Answer from "../Answer/Answer";

const ShortAnswerQuiz = ({ questions }) => {
  const navigate = useNavigate();

  const [currentIndex, setCurrentIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const userAnswer = useRef("");

  const handlePrevQuestion = () => {
    if (currentIndex === 0) {
      alert("이전 문제가 없습니다.");
    } else {
      setCurrentIndex((prev) => prev - 1);
      setShowAnswer(false);
      userAnswer.current.value = "";
    }
  };

  const handleNextQuestion = () => {
    if (currentIndex === questions.length - 1) {
      alert("퀴즈가 끝났습니다!");
      navigate("/my");
    } else {
      setCurrentIndex((prev) => prev + 1);
      setShowAnswer(false);
      userAnswer.current.value = "";
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
        <textarea
          className="textarea textarea-bordered textarea-lg w-full"
          placeholder="정답을 입력해주세요!"
          ref={userAnswer}
          disabled={showAnswer}
        />
        {showAnswer && (
          <Answer
            question={questions[currentIndex].question}
            answer={questions[currentIndex].answer}
            userAnswer={userAnswer.current.value}
          />
        )}
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

export default ShortAnswerQuiz;
