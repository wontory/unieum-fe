import img_study from "../assets/images/img_study.png";

const GenerateComplete = () => {
  return (
    <div className="flex flex-col max-w-[1200px] w-full gap-6">
      <div className="flex justify-center">
        <div className="flex flex-col items-center text-center w-full prose">
          <h1 className="mb-3">나만의 시험 문제 생성기</h1>
          <div>
            문제 생성 완료!
            <br />
            파일을 다운로드하세요
          </div>
        </div>
      </div>
      <div className="flex justify-center gap-4">
        <button className="btn btn-outline btn-primary btn-lg">문제 PDF</button>
        <button className="btn btn-outline btn-primary btn-lg">정답 PDF</button>
      </div>
      <div className="flex justify-center">
        <div className="card card-side w-[800px] bg-base-100 shadow-md">
          <figure>
            <img src={img_study} />
          </figure>
          <div className="card-body">
            <h2 className="card-title">혹은, 여기서 바로 문제 풀기</h2>
            <p>
              PDF 다운로드도 귀찮다면
              <br /> 만들어진 문제를 바로 풀어보세요!
            </p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary btn-lg w-full">
                문제 풀이 시작!
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default GenerateComplete;
