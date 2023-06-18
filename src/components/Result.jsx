import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  SvgIcon,
  Typography,
} from "@mui/material";
import Rating from "@mui/material/Rating";
import SimCardDownloadOutlinedIcon from "@mui/icons-material/SimCardDownloadOutlined";

import studyImg from "../assets/img_study.png";
import "jspdf-autotable";

import { generateQuestionPDF } from "../utils/pdfUtils";
import { COLORS } from "../styles/color";
import { useNavigate } from "react-router-dom";
import useTitle from "../hooks/useTitle";
import { useState } from "react";
import { surveyAtom } from "../store/atoms";
import { useAtomValue, useSetAtom } from "jotai/react";
import { Warning } from "@mui/icons-material";
import { userApi } from "../apis/userApi";

export default function Result() {
  useTitle("✅ 완료!");
  //질문 PDF 생성 및 다운로드

  const surveyStatus = useAtomValue(surveyAtom);
  const setSurveyStatus = useSetAtom(surveyAtom);

  const questionDownloadClick = () => {
    const question_pdf = generateQuestionPDF(
      JSON.parse(localStorage.getItem("testList") || ""),
      false
    );
    question_pdf.save("문제지.pdf");
  };

  //답변 pdf 생성 및 다운로드
  const [open, setOpen] = useState(false);
  const [maxWidth, setMaxWidth] = useState("sm");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = async () => {
    try {
      if (value !== null) {
        const response = await userApi.postSurvey(value);
        setSurveyStatus(1);
        setOpen(false);
      }
    } catch (e) {
      // console.log(e);
      setSurveyStatus(1);
      setOpen(false);
    }
  };

  const answerDownloadClick = () => {
    if (surveyStatus === -1) {
      handleClickOpen();
    } else {
      const answer_pdf = generateQuestionPDF(
        JSON.parse(localStorage.getItem("testList") || ""),
        true
      );
      answer_pdf.save("답안지.pdf");
    }
  };

  const [value, setValue] = (useState < number) | (null > 0);
  const [hover, setHover] = useState(-1);
  const navigate = useNavigate();

  return (
    <>
      <Typography variant="h1" textAlign={"center"}>
        문제 생성 완료!
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignContent: "center",
          alignItems: "center",
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "row", gap: "20px" }} py={3}>
          <Button
            variant="outlined"
            size="large"
            color="primary"
            onClick={questionDownloadClick}
            endIcon={<SimCardDownloadOutlinedIcon />}
          >
            문제 PDF
          </Button>
          <Button
            variant="outlined"
            size="large"
            color="primary"
            onClick={answerDownloadClick}
            endIcon={<SimCardDownloadOutlinedIcon />}
          >
            답안 PDF
          </Button>
        </Box>

        <Box
          sx={{
            width: "100vw",
            backgroundColor: "#EEF3FF",
            display: "flex",
            flexDirection: "row",
            alignItems: "stretch",
            justifyContent: "center",
            gap: "20px",
          }}
          m={8}
          p={3}
        >
          <img src={studyImg} alt="test" style={{ maxWidth: "300px" }} />
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              alignItems: "stretch",
            }}
            p={3}
          >
            <Box display={"flex"} gap={1.5} flexDirection={"column"}>
              {" "}
              <Typography variant="h3">혹은 여기서 바로 문제 풀기</Typography>
              <Typography variant="body2" color={COLORS.gray3}>
                PDF 다운로드도 귀찮다면
                <br /> 만들어진 문제를 바로 풀어보세요!
              </Typography>
            </Box>
            <Button
              variant="contained"
              onClick={() => {
                const testGenerationId =
                  localStorage.getItem("testGenerationId");
                navigate(`/quiz/${testGenerationId}`);
              }}
            >
              문제 풀어보기!
            </Button>
          </Box>
        </Box>
      </Box>
      <Button href="/">홈으로</Button>

      {/* survey */}
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        maxWidth={maxWidth}
        fullWidth={true}
      >
        <Box display={"flex"} flexDirection={"column"} m={3}>
          <SvgIcon
            component={Warning}
            inheritViewBox={true}
            sx={{ width: "100px", height: "100px", margin: "0 auto", p: 2 }}
          />
          <DialogTitle
            variant="h3"
            id="alert-dialog-title"
            sx={{
              textAlign: "center",
            }}
          >
            답안지를 받기 전에...
          </DialogTitle>
          <DialogContent sx={{ display: "flex", flexDirection: "column" }}>
            <DialogContentText
              id="alert-dialog-description"
              variant="body2"
              sx={{
                textAlign: "center",
                mb: 4,
              }}
            >
              유니음을 지인에게 추천하고 싶으신가요?????
            </DialogContentText>
            <Rating
              name="half-rating"
              precision={0.5}
              sx={{
                margin: "0 auto",
              }}
              size="large"
              value={value}
              onChange={(event, newValue) => {
                setValue(newValue);
              }}
            />
          </DialogContent>
          <DialogActions
            sx={{ justifyContent: "space-around", display: "flex" }}
          >
            <Button variant="outlined" onClick={handleClose}>
              제출하기
            </Button>
          </DialogActions>
        </Box>
      </Dialog>
    </>
  );
}
