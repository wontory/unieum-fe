import { useState, useEffect } from "react";

import { Link } from "react-router-dom";

import { testApi } from "../apis/testApi";

import TestList from "../components/TestList/TestList";

const My = () => {
  const [testList, setTestList] = useState([]);

  useEffect(() => {
    testApi.getList().then((res) => {
      const sortedList = res.data.data.sort((a, b) => {
        const dateA = new Date(a.testCreateAt);
        const dateB = new Date(b.testCreateAt);
        return dateB.getTime() - dateA.getTime();
      });
      setTestList(sortedList);
    });
  }, []);

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
                <Link className="btn btn-primary w-full" to="/">
                  문제 생성하러 가기
                </Link>
              </div>
            </div>
          </div>
        ) : (
          <TestList testList={testList} />
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
