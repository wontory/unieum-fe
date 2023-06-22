const My = () => {
  return (
    <div className="flex flex-col max-w-[1200px] w-full gap-6">
      <div className="flex justify-center">
        <div className="flex flex-col items-center text-center w-full prose">
          <h1 className="mb-3">복습</h1>
        </div>
      </div>
      <div className="flex justify-center overflow-x-auto">
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
            <tr>
              <th>1</th>
              <td>2áá¡á¨áá§á« áá...</td>
              <td>1 hour ago</td>
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
            <tr>
              <th>2</th>
              <td>áá©á¼áá¡á¨áá...</td>
              <td>6/20/2023, 8:41:56 PM</td>
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
            <tr>
              <th>3</th>
              <td>ch06_áá­áá¡á¨ áá...</td>
              <td>6/6/2023, 7:28:44 PM</td>
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
          </tbody>
        </table>
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
