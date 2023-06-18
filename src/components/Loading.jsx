import { Typography, styled, Card, Box, LinearProgress } from "@mui/material";
import Slide from "@mui/material/Slide";
import { questionData } from "../mocks/question";
// import LoadingAnimation from "./LoadingAnimation";
import useTitle from "../hooks/useTitle";
import Paper from "@mui/material/Paper";
import { COLORS } from "../styles/color";
import { useEffect, useState } from "react";
import Stack from "@mui/material/Stack";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  height: "100%",
  width: "100%",
}));

const NotiCard = styled(Card)(({ theme }) => ({
  minHeight: "100px",
  display: "flex",
  position: "relative",
  flexDirection: "column",
  justifyContent: "center",
  elevation: 0,
  boxShadow: "none",
  background: COLORS.mainblue,
}));

const CustomSlide = styled(Slide)(({ theme }) => ({
  position: "absolute",
  top: "40%",
  bottom: "0",
  left: "0",
  right: "0",

  // maxWidth: "400px",
}));

const LinearProgressWithLabel = (props) => {
  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <Box sx={{ width: "100%", mr: 1 }}>
        <LinearProgress variant="determinate" {...props} />
      </Box>
      <Box sx={{ minWidth: 35 }}>
        <Typography variant="body2" color="text.secondary">{`${Math.round(
          props.value
        )}%`}</Typography>
      </Box>
    </Box>
  );
};

const Loading = ({ setData, setStep, setLoading }) => {
  const [activeCardIndex, setActiveCardIndex] = useState(0);

  useTitle("생성중...");
  const onclick = () => {
    setLoading(false);
    setData(questionData);

    setStep(1);
  };
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCardIndex((prevIndex) => (prevIndex + 1) % 3);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) =>
        prevProgress >= 99 ? 99 : prevProgress + 1
      );
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <>
      <Stack spacing={1} width={"100%"} alignItems={"center"}>
        <Item elevation={0}>
          <Typography variant="h2">열심히 문제 만드는 중...</Typography>
        </Item>
        <Item
          elevation={0}
          sx={{
            maxWidth: "600px",
          }}
        >
          <LoadingAnimation />
        </Item>
        <Item elevation={0}>
          <LinearProgressWithLabel value={progress} />
        </Item>
        <Item elevation={0}>
          <NotiCard>
            <CustomSlide direction="left" in={activeCardIndex === 0}>
              <Typography variant="h3" color={COLORS.gray0}>
                1. 해당 창을 나가면 문제를 받을 수 없어요!
              </Typography>
            </CustomSlide>
            <CustomSlide direction="left" in={activeCardIndex === 1}>
              <Typography variant="h3" color={COLORS.gray0}>
                2. 긴 파일의 경우 시간이 오래 걸릴 수 있어요!
              </Typography>
            </CustomSlide>
            <CustomSlide direction="left" in={activeCardIndex === 2}>
              <Typography variant="h3" color={COLORS.gray0}>
                3. 생성이 완료되면 탭 타이틀이 바뀌니 확인해주세요!
              </Typography>
            </CustomSlide>
          </NotiCard>
        </Item>
      </Stack>
    </>
  );
};

export default Loading;
