import { useState, useEffect } from "react";

import { useNavigate, useParams } from "react-router-dom";

import { testApi } from "../apis/testApi";

import Answer from "../components/Answer/Answer";

const Quiz = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);

  useEffect(() => {
    testApi.getTest(id).then((res) => {
      const questionList = res.data.data.testList.map((e) => JSON.parse(e));
      setQuestions(questionList.sort(() => Math.random() - 0.5));
    });
  }, [id]);

  const handleNextQuestion = () => {
    if (currentIndex === questions.length - 1) {
      alert("퀴즈가 끝났습니다!");
      navigate("/my");
    } else {
      setCurrentIndex((curIndex) => curIndex + 1);
      setShowAnswer(false);
    }
  };

  const handleShowAnswer = () => {
    setShowAnswer(true);
  };

  return (
    <div
      className="flex flex-col justify-between max-w-[1200px] w-full"
      style={{ height: "calc(100vh - 160px)" }}
    >
      <div className="flex flex-col gap-4">
        <progress
          className="progress progress-primary"
          value={currentIndex + 1}
          max={questions.length}
        />
        <div className="card-title">
          {questions[currentIndex] && questions[currentIndex].question}
        </div>
        <textarea
          className="textarea textarea-bordered textarea-lg w-full"
          placeholder="정답을 입력해주세요!"
        />
        {showAnswer && (
          <Answer
            answer={questions[currentIndex] && questions[currentIndex].answer}
            feedback="준비중인 기능입니다."
          />
        )}
      </div>
      {showAnswer ? (
        <button className="btn btn-primary w-full" onClick={handleNextQuestion}>
          다음 문제
        </button>
      ) : (
        <button className="btn btn-primary w-full" onClick={handleShowAnswer}>
          정답 보기
        </button>
      )}
    </div>
  );
};

export default Quiz;
