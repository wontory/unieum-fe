import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { Button, TextField } from "@mui/material";
import FileUpload from "./FileUpload";
import { testGeneratorApi } from "../apis/testGeneratorApi";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import TextFieldsIcon from "@mui/icons-material/TextFields";
import useTitle from "../hooks/useTitle";

const TabPanel = (props) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box pt={2} pb={0}>
          {children}
        </Box>
      )}
    </div>
  );
};

const a11yProps = (index) => {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
};

export default function ChooseTypeTab({
  files,
  setFiles,
  setData,
  setLoading,
  setStep,
  setAlertMessage,
  setOpen,
}) {
  const [value, setValue] = React.useState(0);
  const [text, setText] = React.useState("");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleButtonClick = async () => {
    setLoading(true);
    try {
      const response = await testGeneratorApi.postText(text);
      // console.log(response);
      localStorage.setItem(
        "testList",
        JSON.stringify(response.data.data.testList)
      );

      setLoading(false);
      setStep(1);
      document.title = "유니음 - 생성 완료!";
    } catch (err) {
      // console.log(err?.response?.data);
      setAlertMessage(err?.response?.data.message);

      // setData(questonData2);
      setLoading(false);
      setOpen(true);
      // eslint-disable-next-line react-hooks/rules-of-hooks
      useTitle("에러 발생");
      setStep(0);
    }
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="choose"
          sx={{
            maxHeight: "60px",
          }}
        >
          <Tab
            label="파일"
            {...a11yProps(0)}
            icon={<UploadFileIcon />}
            iconPosition="start"
            sx={{
              py: "0px",
            }}
          />
          <Tab
            label="직접 입력"
            {...a11yProps(1)}
            icon={<TextFieldsIcon />}
            iconPosition="start"
          />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <FileUpload
          setData={setData}
          setLoading={setLoading}
          setStep={setStep}
          setAlertMessage={setAlertMessage}
          setOpen={setOpen}
        />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <TextField
            id="filled-multiline-static"
            sx={{
              width: "100%",
              mb: 2,
              fontWeight: 400,
            }}
            label="문제를 생성하고 싶은 텍스트를 복사 붙여넣기 해주세요."
            multiline
            rows={3}
            defaultValue=""
            variant="outlined"
            onChange={(e) => setText(e.target.value)}
          />
          <Button
            sx={{ mb: 2 }}
            variant="contained"
            onClick={handleButtonClick}
            size="large"
          >
            문제 만들기
          </Button>
        </Box>
      </TabPanel>
    </Box>
  );
}
