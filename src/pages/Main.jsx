import { useState } from "react";

import FileUpload from "../components/TestUpload/FileUpload";
import TextUpload from "../components/TestUpload/TextUpload";
import FeatureCard from "../components/UI/Card/FeatureCard";
import Feat1 from "../assets/images/feat_1.svg";
import Feat2 from "../assets/images/feat_2.svg";
import Feat3 from "../assets/images/feat_3.svg";

const Main = () => {
  const [tabIndex, setTabIndex] = useState(0);

  const tabArr = [
    { name: "업로드", content: <FileUpload /> },
    { name: "텍스트 직접 입력", content: <TextUpload /> },
  ];

  const featureArr = [
    {
      badge: "HOW",
      title: "교수님이 주신 PDF, 그것만 있으면 됩니다!",
      content:
        "시험의 자료가 될 PDF 혹은 텍스트만 입력하면 AI가 자동으로 예상 문제를 만들어 드려요.",
      img: Feat1,
    },
    {
      badge: "WHO",
      title: "내일 모레 시험인 당신...",
      content:
        "예상 문제를 만들고 풀기는 커녕 PDF 읽을 시간도 없다고요? 잘 찾아오셨습니다! 유니음이 지금 바로 문제를 만들어 드릴게요.",
      img: Feat2,
    },
    {
      badge: "WHERE",
      title: "이제 언제 어디서나 문제를 풀어봐요~",
      content:
        "등교길, 집에서, 카페에서, 어디서든 문제를 풀어볼 수 있어요. 유니음이 당신의 시험을 응원합니다!",
      img: Feat3,
    },
  ];

  return (
    <div className="flex flex-col max-w-[1200px] w-full gap-6">
      <div className="flex justify-center">
        <div className="flex flex-col items-center text-center w-full prose">
          <h1 className="mb-3">나만의 시험 문제 생성기</h1>
          <div>
            PDF 혹은 문장만 업로드하면 AI가 알아서 문제를 만들어드립니다!
          </div>
        </div>
      </div>
      <div className="tabs">
        {tabArr.map((tab, index) => (
          <a
            key={"tab" + index}
            className={
              index === tabIndex
                ? "tab tab-bordered tab-active"
                : "tab tab-bordered"
            }
            onClick={() => setTabIndex(index)}
          >
            {tab.name}
          </a>
        ))}
      </div>
      <div className="form-control">{tabArr[tabIndex].content}</div>
      <div className="flex flex-col gap-3 md:flex-row justify-between">
        {featureArr.map((feature, index) => (
          <FeatureCard key={"feature" + index}>
            <div className="badge badge-secondary badge-lg">
              {feature.badge}
            </div>
            <h2 className="card-title">{feature.title}</h2>
            <p>{feature.content}</p>
            <img src={feature.img} className="w-[170px] h-[201px]" />
          </FeatureCard>
        ))}
      </div>
    </div>
  );
};

export default Main;
