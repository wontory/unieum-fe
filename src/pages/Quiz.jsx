import { useState, useEffect } from "react";

import { useParams } from "react-router-dom";

import { testApi } from "../apis/testApi";

import ShortAnswerQuiz from "./ShortAnswerQuiz";

const Quiz = () => {
  const { id } = useParams();

  const [outputTestFormat, setOutputTestFormat] = useState([]);
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    testApi.getTest(id).then((res) => {
      setOutputTestFormat(res.data.data.outputTestFormat);

      const questionList = res.data.data.testList.map((e) => JSON.parse(e));
      setQuestions(questionList.sort(() => Math.random() - 0.5));
    });
  }, [id]);

  return outputTestFormat === "short-answer" ? (
    <ShortAnswerQuiz questions={questions} />
  ) : (
    <div>Not yet implemented</div>
  );
};

export default Quiz;
