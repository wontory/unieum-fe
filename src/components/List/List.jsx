import React, { useState } from "react";

import { useNavigate } from "react-router-dom";

import {
  Alert,
  Box,
  Button,
  IconButton,
  Paper,
  Snackbar,
  Typography,
} from "@mui/material";
import Grid from "@mui/material/Grid";

import ShareIcon from "@mui/icons-material/Share";

import { generateQuestionPDF } from "../../utils/pdfUtils";

import { testGeneratorApi } from "../../apis/testGeneratorApi";

const List = ({ testGenerationId, fileName, testCreateAt }) => {
  const navigate = useNavigate();

  const [open, setOpen] = useState(false);

  const handleQuestionPDF = async (testList, withAnswers) => {
    try {
      const question_pdf = generateQuestionPDF(testList, withAnswers);
      const fileName = withAnswers ? "정답지.pdf" : "문제지.pdf";
      question_pdf.save(fileName);
    } catch (error) {
      // console.log("Error generating PDF:", error);
    }
  };

  const handleTestClick = async () => {
    try {
      const res = await testGeneratorApi.getTest(testGenerationId);
      const testList = res.data.data.testList.map((e) => JSON.parse(e));
      localStorage.setItem("testList", JSON.stringify(testList));

      navigate(`/quiz/${testGenerationId}`);
    } catch (error) {
      // console.log("Error fetching test data:", error);
    }
  };

  return (
    <Paper
      sx={{
        width: "100%",
        maxHeight: "200px",
        p: 2,
      }}
      elevation={0}
      variant="outlined"
    >
      <Grid container spacing={2}>
        <Grid item xs={3} display="flex">
          <Box
            display="flex"
            sx={{
              my: "auto",
              width: "100%",
            }}
          >
            <Typography
              noWrap
              variant="body2"
              sx={{
                maxWidth: "100%",
              }}
            >
              {fileName}
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={3} display="flex" justifyContent="center">
          <Box
            display="flex"
            sx={{
              my: "auto",
            }}
          >
            <Typography variant="body1">{testCreateAt}</Typography>
          </Box>
        </Grid>
        <Grid
          item
          xs={6}
          display="flex"
          justifyContent="flex-end"
          alignContent={"center"}
          alignItems={"center"}
        >
          <Box mr={1}>
            <IconButton
              aria-label="delete"
              onClick={() => {
                navigator.clipboard.writeText(
                  `https://unieum.kr/quiz/${testGenerationId}`
                );
                setOpen(true);
              }}
            >
              <ShareIcon />
            </IconButton>
          </Box>

          <Box
            display="flex"
            gap={2}
            sx={{
              my: "auto",
            }}
          >
            <Button
              variant="outlined"
              size="large"
              color="primary"
              onClick={async () => {
                try {
                  const res = await testGeneratorApi.getTest(testGenerationId);
                  const testList = res.data.data.testList.map((e) =>
                    JSON.parse(e)
                  );
                  handleQuestionPDF(testList, false);
                } catch (error) {
                  // console.log("Error fetching test data:", error);
                }
              }}
            >
              문제 PDF
            </Button>
            <Button
              variant="outlined"
              size="large"
              color="primary"
              onClick={async () => {
                try {
                  const res = await testGeneratorApi.getTest(testGenerationId);
                  const testList = res.data.data.testList.map((e) =>
                    JSON.parse(e)
                  );
                  handleQuestionPDF(testList, true);
                } catch (error) {
                  // console.log("Error fetching test data:", error);
                }
              }}
            >
              정답 PDF
            </Button>
            <Button variant="contained" onClick={handleTestClick}>
              바로 풀어보기
            </Button>
          </Box>
        </Grid>
      </Grid>
      <Snackbar
        open={open}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        autoHideDuration={2000}
        onClose={() => setOpen(false)}
        // onClose={() => {}}
      >
        <Alert
          sx={{ width: "100%" }}
          onClose={() => setOpen(false)}
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                // setOpen(false);
              }}
            >
              {/* <CloseIcon fontSize="inherit" /> */}
            </IconButton>
          }
          severity="info"
        >
          {"클립보드에 복사되었습니다."}
        </Alert>
      </Snackbar>
    </Paper>
  );
};

export default List;
