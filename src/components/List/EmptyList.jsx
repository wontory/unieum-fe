import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Paper, Typography } from "@mui/material";

const EmptyList = () => {
  const navigate = useNavigate();

  const handleCreatePage = () => {
    navigate("/");
  };

  return (
    <Paper
      sx={{
        p: 2,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 2,
      }}
    >
      <Typography variant="h3">데이터 없음!</Typography>
      <Button variant="contained" onClick={handleCreatePage}>
        문제 생성하러 가기
      </Button>
    </Paper>
  );
};

export default EmptyList;
