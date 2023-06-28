import { Link } from "react-router-dom";

const EmptyList = () => {
  return (
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
  );
};

export default EmptyList;
