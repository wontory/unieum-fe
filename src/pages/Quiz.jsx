import { useLayoutEffect } from "react";

import { useNavigate, useParams } from "react-router-dom";

import { testApi } from "../apis/testApi";

const Quiz = () => {
  const navigate = useNavigate();

  const { id } = useParams();

  useLayoutEffect(() => {
    try {
      testApi.getTest(id).then((res) => {
        console.log(res.data.data.testList);
      });
    } catch (err) {
      navigate("/404");
    }
  });
};

export default Quiz;
