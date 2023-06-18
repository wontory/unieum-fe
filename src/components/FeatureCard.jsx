import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { COLORS } from "../styles/color";
import ImgFeatOne from "../assets/illustration1.svg";
import ImgFeatTwo from "../assets/illustration2.svg";
import ImgFeatThree from "../assets/illustration3.svg";
import styled from "@emotion/styled";

const AnimatedCard = styled(Card)`
  opacity: 0;
  animation: fadeInFromBottom 0.5s ease-in-out forwards;

  @keyframes fadeInFromBottom {
    0% {
      opacity: 0;
      transform: translateY(20px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const Index = (props) => {
  return (
    <Box
      width="fit-content"
      display="flex"
      flexDirection="row"
      justifyContent="center"
      sx={{
        background: "#EEF3FF",
        borderRadius: "19px",
        padding: "6px 12px",
      }}
    >
      <Typography color={COLORS.mainblue}>{props.text}</Typography>
    </Box>
  );
};

const Title = (props) => {
  return <Typography variant="body1">{props.text}</Typography>;
};

const SubTitle = (props) => {
  return <Typography variant="body2">{props.text}</Typography>;
};

const TextContainer = ({ index, title, subtitle }) => {
  return (
    <Box display="flex" flexDirection="column" gap={"20px"}>
      <Box display={"flex"} flexDirection={"column"} gap={"12px"}>
        <Index text={index} />
        <Title text={title} />
      </Box>
      <SubTitle text={subtitle} />
    </Box>
  );
};

const SubTitleShort = (props) => {
  return (
    <Typography variant="body2" width={"196px"}>
      {props.text}
    </Typography>
  );
};
const TextContainerShort = ({ index, title, subtitle }) => {
  return (
    <Box minWidth={"389px"}>
      <Box display="flex" flexDirection="column" gap={"20px"} width={"190px"}>
        <Box display={"flex"} flexDirection={"column"} gap={"12px"}>
          <Index text={index} />
          <Title text={title} />
        </Box>
        <SubTitleShort text={subtitle} />
      </Box>
    </Box>
  );
};

export default function FeatureCard() {
  const Feat1 = () => {
    return (
      <>
        <AnimatedCard sx={{ display: "flex", maxWidth: 389, minHeight: 284 }}>
          <CardContent
            sx={{
              display: "flex",
              flexDirection: "row",
              gap: "16px",
            }}
          >
            <TextContainer
              index="HOW"
              title="교수님이 주신 PDF, 그것만 있으면 됩니다!"
              subtitle="시험의 자료가 될 PDF 혹은 텍스트만 입력하면 AI가 자동으로 예상 문제를 만들어 드려요."
            />
            <Box
              display="flex"
              flexDirection="column"
              justifyContent={"center"}
            >
              <img src={ImgFeatOne} />
            </Box>
          </CardContent>
        </AnimatedCard>
      </>
    );
  };
  const Feat2 = () => {
    return (
      <>
        <AnimatedCard
          sx={{ display: "flex", maxWidth: 389, minHeight: 284 }}
          style={{ animationDelay: `100ms` }}
        >
          <CardContent
            sx={{
              display: "flex",
              flexDirection: "Column",
              alignItems: "center",
            }}
          >
            <TextContainer
              index="WHO"
              title="내일 모레 시험인 당신..."
              subtitle="예상 문제를 만들고 풀기는 커녕 PDF 읽을 시간도 없다고요? 잘 찾아오셨습니다! 유니음이 지금 바로 문제를 만들어 드릴게요."
            />
            <Box
              display="flex"
              flexDirection="column"
              sx={{
                margin: "-6px 0px",
              }}
            >
              <img src={ImgFeatTwo} />
            </Box>
          </CardContent>
        </AnimatedCard>
      </>
    );
  };
  const Feat3 = () => {
    return (
      <>
        <AnimatedCard
          sx={{ display: "flex", maxWidth: 389, minHeight: 284 }}
          style={{ animationDelay: `200ms` }}
        >
          <CardContent sx={{ position: "relative" }}>
            <TextContainerShort
              index="WHERE"
              title="이제 언제 어디서나 문제를 풀어봐요~"
              subtitle="등굣길, 하굣길, 집 등등... 
              원하면 어디에서나 유니음을 
              통해 시험 예상 문제를 만들고 풀어볼 수 있어요."
            />
            <Box
              position={"absolute"}
              flexDirection="column"
              left={"120px"}
              top={"40px"}
            >
              <img src={ImgFeatThree} />
            </Box>
          </CardContent>
        </AnimatedCard>
      </>
    );
  };

  return (
    <>
      <Box
        display={"flex"}
        flexDirection={"row"}
        alignItems={"flex-start"}
        gap={"16px"}
      >
        <Feat1 />
        <Feat2 />
        <Feat3 />
      </Box>
    </>
  );
}
