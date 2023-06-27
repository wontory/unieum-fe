import generatePdf from "../../utils/pdfUtils";

const TestList = ({ testList }) => {
  const formatDate = (test) => {
    const currentTime = new Date();
    const testCreatedAt = new Date(test.testCreateAt);
    const timeDifference = Math.floor(
      (currentTime.getTime() - testCreatedAt.getTime()) / 60000
    );

    if (timeDifference < 60) {
      return `${timeDifference} minutes ago`;
    } else if (timeDifference < 1440) {
      return `${Math.floor(timeDifference / 60)} hours ago`;
    } else {
      return testCreatedAt.toLocaleString();
    }
  };

  const downloadPdf = async (testGenerationId, withAnswers) => {
    const res = await testApi.getTest(testGenerationId);
    const testList = res.data.data.testList.map((e) => JSON.parse(e));

    const question_pdf = generatePdf(testList, withAnswers);
    const fileName = withAnswers ? "정답지.pdf" : "문제지.pdf";
    question_pdf.save(fileName);
  };

  return (
    <table className="table">
      <thead>
        <tr>
          <th></th>
          <th>파일명</th>
          <th>시간</th>
          <th>다운로드</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {testList.map((test, index) => {
          return (
            <tr key={test.testGenerationId}>
              <th>{index + 1}</th>
              <td>{test.fileName}</td>
              <td>{formatDate(test)}</td>
              <td>
                <div className="join">
                  <button
                    className="join-item btn btn-primary btn-outline btn-sm"
                    onClick={() => downloadPdf(test.testGenerationId, false)}
                  >
                    문제 PDF
                  </button>
                  <button
                    className="join-item btn btn-primary btn-outline btn-sm"
                    onClick={() => downloadPdf(test.testGenerationId, true)}
                  >
                    정답 PDF
                  </button>
                </div>
              </td>
              <td>
                <button className="btn btn-primary btn-sm">
                  바로 풀어보기
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default TestList;
