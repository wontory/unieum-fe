import { useState, useEffect } from "react";

import { testApi } from "../apis/testApi";

import EmptyList from "../components/TestList/EmptyList";
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
          <EmptyList />
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
