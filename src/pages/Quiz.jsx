import { useState, useEffect } from "react";

import { useParams } from "react-router-dom";

import { testApi } from "../apis/testApi";

import ShortAnswerQuiz from "../components/Quiz/ShortAnswerQuiz";
import MultipleChoiceQuiz from "../components/Quiz/MultipleChoiceQuiz";

const Quiz = () => {
  const { id } = useParams();

  const [outputTestFormat, setOutputTestFormat] = useState();
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    testApi.getTest(id).then((res) => {
      setOutputTestFormat(res.data.data.outputTestFormat);

      const questionList = res.data.data.testList.map((e) => JSON.parse(e));
      setQuestions(questionList.sort(() => Math.random() - 0.5));
    });
  }, [id]);

  return outputTestFormat === "multiple-choice" ? (
    <MultipleChoiceQuiz questions={questions} />
  ) : (
    <ShortAnswerQuiz questions={questions} />
  );
};

export default Quiz;
