import React, { useState, useEffect } from "react";

import { Box, Chip, IconButton, Snackbar, Typography } from "@mui/material";
import Result from "../components/Result";
import ChooseTypeTab from "../components/ChooseTypeTab";

import InstagramIcon from "@mui/icons-material/Instagram";
import CloseIcon from "@mui/icons-material/Close";

import DiscordIcon from "../assets/discord.svg";

import Loading from "../components/Loading";
import FeatureCard from "../components/FeatureCard";
import ShareIcon from "@mui/icons-material/Share";
import HelpIcon from "@mui/icons-material/Help";

import useTitle from "../hooks/useTitle";

const Alert = React.forwardRef((props, ref) => {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const Title = () => (
  <Box
    sx={{
      textAlign: "center",
      justifyContent: "center",
      display: "flex",
      flexDirection: "column",
      gap: "12px",
    }}
  >
    <Typography variant="h1">GPT로 기출 문제 만들기</Typography>

    <Box
      display={"flex"}
      flexDirection={"row"}
      justifyContent={"center"}
      gap={2}
    >
      <Chip
        sx={{ px: 1, py: 2 }}
        icon={<InstagramIcon />}
        label="인스타그램"
        variant="outlined"
        onClick={() => {
          window.open("https://www.instagram.com/unieum/");
        }}
      />
      <Chip
        sx={{ px: 1, py: 2 }}
        icon={<img src={DiscordIcon} />}
        label="디스코드"
        variant="outlined"
        onClick={() => {
          window.open("https://discord.gg/hDrBhsejQ3");
        }}
      />
      <Chip
        sx={{ px: 1, py: 2 }}
        icon={<ShareIcon />}
        label="친구에게 링크 공유"
        variant="outlined"
        onClick={() => {
          navigator.clipboard.writeText("https://bit.ly/45zbDnA");
          setOpen(true);
          setAlertMessage("링크가 복사되었습니다.");
        }}
      />
      <Chip
        sx={{ px: 1, py: 2 }}
        icon={<HelpIcon />}
        label="빈 PDF가 나왔어요"
        variant="outlined"
        onClick={() => {
          window.open("https://help.unieum.kr");
        }}
      />
    </Box>
  </Box>
);

const Transfer = () => {
  const [loading, setLoading] = useState(false);
  const [Data, setData] = useState({});
  const [step, setStep] = useState(0);
  const [open, setOpen] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");

  const MainSection = () => {
    return (
      <>
        <Title />
        <ChooseTypeTab
          setData={setData}
          setLoading={setLoading}
          setStep={setStep}
          setAlertMessage={setAlertMessage}
          setOpen={setOpen}
        />
        <FeatureCard />
      </>
    );
  };

  const steplist = [<MainSection />, <Result />];

  useEffect(() => {
    useTitle("유니음");
  }, []);

  return (
    <>
      {loading ? (
        <Loading setData={setData} setStep={setStep} setLoading={setLoading} />
      ) : (
        steplist[step]
      )}
      <Snackbar
        open={open}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        onClose={() => {}}
      >
        <Alert
          sx={{ width: "100%" }}
          onClose={() => {}}
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                setOpen(false);
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
          severity="error"
        >
          {alertMessage}
        </Alert>
      </Snackbar>
    </>
  );
};

export default Transfer;
