import { useState, useLayoutEffect } from "react";

import { useParams } from "react-router-dom";

import { testApi } from "../apis/testApi";

import Card from "../components/ui/Card";

const Quiz = () => {
  const { id } = useParams();

  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);

  useLayoutEffect(() => {
    testApi.getTest(id).then((res) => {
      const questionList = res.data.data.testList.map((e) => JSON.parse(e));
      setQuestions(questionList.sort(() => Math.random() - 0.5));
    });
  }, []);

  return (
    <Card className="max-w-[1200px] w-full">
      <progress className="progress progress-primary" value="20" max="100" />
      <div className="card-title">
        {questions[currentIndex] && questions[currentIndex].question}
      </div>
      <div>
        <textarea
          className="textarea textarea-bordered w-full"
          placeholder="정답을 입력해주세요!"
        />
      </div>
      {showAnswer && (
        <div>
          <p>AI 정답 (정확하지 않을 수 있습니다!)</p>
          <div className="alert">
            <span>
              {questions[currentIndex] && questions[currentIndex].answer}
            </span>
          </div>
        </div>
      )}
      <div className="card-actions">
        {showAnswer ? (
          <button
            className="btn btn-primary w-full"
            onClick={() => {
              setCurrentIndex((curIndex) => {
                curIndex + 1;
              });
            }}
          >
            다음 문제
          </button>
        ) : (
          <button
            className="btn btn-primary w-full"
            onClick={() => {
              setShowAnswer(true);
            }}
          >
            정답 보기
          </button>
        )}
      </div>
    </Card>
  );
};

export default Quiz;
