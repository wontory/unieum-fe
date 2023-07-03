import { useLayoutEffect } from "react";

import { useParams } from "react-router-dom";

import { testApi } from "../apis/testApi";

const Quiz = () => {
  const { id } = useParams();

  const [questions, setQuestions] = useState([]);

  useLayoutEffect(() => {
    testApi.getTest(id).then((res) => {
      setQuestions(res.data.data.testList.map((e) => JSON.parse(e)));
    });
    console.log(questions);
  });
};

export default Quiz;
