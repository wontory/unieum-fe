// [Todo] type 알아야 함
export const quizJson = {
  // config 부분을 나누어줘야 할 듯
  title: "퀴즈",
  showProgressBar: "bottom",
  showTimerPanel: "top",
  maxTimeToFinishPage: 0,
  maxTimeToFinish: 0,
  firstPageIsStarted: true,
  startSurveyText: "시작",
  pages: [
    {
      elements: [
        {
          type: "html",
          html: "시작 버튼을 누르면 만들어진 주관식 문제를 풀어볼 수 있습니다!<br/><br/> 답 확인은 Enter키를 눌러주세요 (Next 버튼을 누르면 바로 다음 문제로 넘어갑니다.)",
        },
      ],
    },
  ],
  completedHtml: "<h4>모든 문제를 풀었습니다.</h4>",
  completedHtmlOnCondition: [
    {
      expression: "{correctAnswers} == 0",
      html: "<br /><h4>모든 문제를 풀었습니다!</h4>",
    },
    {
      expression: "{correctAnswers} == {questionCount}",
      html: "<br /><h4>모든 문제를 풀었습니다!</h4>",
    },
  ],
};
