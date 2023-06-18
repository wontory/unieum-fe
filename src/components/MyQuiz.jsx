import { useState } from "react";

import { useNavigate } from "react-router-dom";

import { Box, Button, TextField, Typography } from "@mui/material";
import Stack from "@mui/material/Stack";
import LinearProgress from "@mui/material/LinearProgress";

import { SIZE } from "../styles/size";
import { COLORS } from "../styles/color";

const MyQuiz = ({ json }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const currentQuestion = json[currentQuestionIndex];

  const [userAnswers, setUserAnswers] = useState("");
  const [showAnswer, setShowAnswer] = useState(false);

  const isLastQuestion = currentQuestionIndex === json.length - 1;
  const correctAnswer = currentQuestion?.answer || "";
  const navigate = useNavigate();

  const LinearProgressWithLabel = (props) => {
    return (
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Box sx={{ width: "100%" }}>
          <LinearProgress variant="determinate" {...props} />
        </Box>
      </Box>
    );
  };

  const handleNextQuestion = () => {
    setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    setUserAnswers("");
    setShowAnswer(false);
  };

  const handleAnswerSubmission = () => {
    setShowAnswer(true);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleAnswerSubmission();
    }
  };

  return (
    <>
      {currentQuestionIndex < json.length ? (
        <>
          <Stack
            spacing={2}
            display={"flex"}
            alignItems={"flex-start"}
            flexGrow={1}
            width={"100%"}
            maxWidth={SIZE.quizMaxWidth}
            mt={10}
            px={2}
          >
            <Box width={"100%"}>
              <LinearProgressWithLabel
                sx={{ width: "100%", height: 10 }}
                value={(currentQuestionIndex / json.length) * 100}
              />
            </Box>

            <Typography variant="h3" width={"100%"}>
              {currentQuestion?.question || ""}
            </Typography>
            <TextField
              key={"sdfsf"}
              value={userAnswers}
              autoComplete="off"
              multiline
              onChange={(e) => {
                setUserAnswers(e.target.value);
              }}
              onKeyDown={handleKeyDown}
              sx={{
                width: "100%",
              }}
            />
            {showAnswer && (
              <Box
                sx={{
                  width: "100%",
                }}
              >
                {" "}
                <Typography variant="body2" color={COLORS.gray4} my={1}>
                  AI 정답 (정확하지 않아요!)
                </Typography>
                <Box
                  p={2}
                  mb={2}
                  sx={{
                    backgroundColor: COLORS.lightgreen,
                    opacity: showAnswer ? 1 : 0, // Set initial opacity based on the showAnswer state
                    transition: "opacity 0.5s ease-in", // Apply a transition effect to the opacity property
                  }}
                >
                  <Typography variant="body1">{correctAnswer}</Typography>
                </Box>
              </Box>
            )}
          </Stack>
          <Box width={"100%"} maxWidth={SIZE.quizMaxWidth}>
            {showAnswer ? (
              <Button
                variant="contained"
                onClick={handleNextQuestion}
                fullWidth={true}
                sx={{
                  my: 2,
                }}
              >
                {isLastQuestion ? "끝!" : "다음 문제"}
              </Button>
            ) : (
              <Button
                fullWidth={true}
                variant="contained"
                onClick={handleAnswerSubmission}
                sx={{
                  my: 2,
                }}
              >
                정답 보기
              </Button>
            )}
          </Box>
        </>
      ) : (
        <>
          <Stack alignItems={"center"} mt={14}>
            <Typography variant="h1" mb={12}>
              {" "}
              끝!
            </Typography>
            <Box display={"flex"} gap={2}>
              <Button variant="contained" onClick={() => navigate("/")}>
                홈으로
              </Button>
              <Button variant="contained" onClick={() => navigate("/my")}>
                복습 페이지
              </Button>
            </Box>
          </Stack>
        </>
      )}
    </>
  );
};

export default MyQuiz;
