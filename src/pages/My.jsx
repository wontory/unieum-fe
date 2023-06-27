import { useState, useEffect } from "react";

import { testApi } from "../apis/testApi";

const My = () => {
  const [testList, setTestList] = useState([]);

  useEffect(() => {
    testApi.getList().then((res) => setTestList(res.data.data));
    testList.sort((a, b) => {
      const dateA = new Date(a.testCreateAt);
      const dateB = new Date(b.testCreateAt);
      return dateB.getTime() - dateA.getTime();
    });
  }, []);

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

  return (
    <div className="flex flex-col max-w-[1200px] w-full gap-6">
      <div className="flex justify-center">
        <div className="flex flex-col items-center text-center w-full prose">
          <h1 className="mb-3">복습</h1>
        </div>
      </div>
      <div className="flex justify-center">
        {testList.length === 0 ? (
          <div className="card bg-base-100 shadow-md">
            <div className="card-body p-6 items-center text-center">
              <h2 className="card-title">오류</h2>
              <p>생성된 문제가 없습니다!</p>
              <div className="card-actions">
                <button className="btn btn-primary w-full">
                  문제 생성하러 가기
                </button>
              </div>
            </div>
          </div>
        ) : (
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
                    <th>{index}</th>
                    <td>{test.fileName}</td>
                    <td>{formatDate(test)}</td>
                    <td>
                      <div className="join">
                        <button className="join-item btn btn-primary btn-outline btn-sm">
                          문제 PDF
                        </button>
                        <button className="join-item btn btn-primary btn-outline btn-sm">
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
        )}
      </div>
      <div className="flex justify-center">
        <div className="join">
          <button className="join-item btn">«</button>
          <button className="join-item btn">Page 1</button>
          <button className="join-item btn">»</button>
        </div>
      </div>
    </div>
  );
};
export default My;
