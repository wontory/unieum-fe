import { useLayoutEffect, useState } from "react";

import { useParams } from "react-router-dom";

import MyQuiz from "../components/MyQuiz";
import { testGeneratorApi } from "../apis/testGeneratorApi";

const Quiz = () => {
  const [json, setJson] = useState([]);
  let { id } = useParams();

  useLayoutEffect(() => {
    if (id) {
      testGeneratorApi.getTest(id).then((res) => {
        localStorage.setItem(
          "testList",
          JSON.stringify(res.data.data.testList.map((e) => JSON.parse(e)))
        );
        setJson(JSON.parse(localStorage.getItem("testList") || "[]"));
      });
    } else {
      setJson(JSON.parse(localStorage.getItem("testList") || "[]"));
    }
  }, [id]);

  return <MyQuiz json={json} />;
};

export default Quiz;
