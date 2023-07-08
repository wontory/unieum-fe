import Card from "../UI/Card/Card";
import { ReactComponent as RobotIcon } from "../../assets/images/robot_icon.svg";
import { ReactComponent as UnieumIcon } from "../../assets/images/unieum_icon.svg";

const Answer = ({ answer, feedback }) => {
  return (
    <Card>
      <span className="badge badge-ghost p-4 gap-2">
        <RobotIcon width={22} />
        <p className="text-[16px] font-semibold">AI 모범 답안</p>
      </span>
      {answer}
      <div className="flex flex-col rounded-lg bg-primary-content p-4 gap-2">
        <div className="flex gap-2 items-center">
          <UnieumIcon width={20} />
          <p className="font-semibold">유니음의 제안</p>
        </div>
        {feedback}
      </div>
    </Card>
  );
};

export default Answer;