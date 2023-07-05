import { useState, useContext } from "react";

import AuthContext from "../../stores/auth-context";

import { Link } from "react-router-dom";
import { FilePond, registerPlugin } from "react-filepond";
import FilePondPluginFileValidateType from "filepond-plugin-file-validate-type";
import FilePondPluginPdfPreview from "filepond-plugin-pdf-preview";

import { testApi } from "../../apis/testApi";

import ModalPortal from "../UI/Modal/ModalPortal";
import LoadingModal from "../UI/Modal/LoadingModal";
import "filepond/dist/filepond.min.css";
import "filepond-plugin-pdf-preview/dist/filepond-plugin-pdf-preview.min.css";
import "../../styles/filepond.css";

registerPlugin(FilePondPluginFileValidateType, FilePondPluginPdfPreview);

const FileUpload = () => {
  const ctx = useContext(AuthContext);

  const [files, setFiles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleUpload = async () => {
    const formData = new FormData();
    files.map((file) => formData.append("pdf", file.file));

    setIsLoading(true);
    window.loading_modal.showModal();

    await testApi.postPdf(formData);
  };

  return (
    <>
      <FilePond
        name="files"
        files={files}
        onupdatefiles={setFiles}
        allowMultiple={true}
        allowFileTypeValidation={true}
        acceptedFileTypes="application/pdf"
        labelIdle='<span class="filepond--label-action">컴퓨터에서 파일 업로드</span> 또는 여기에 파일을 드롭!'
        credits={false}
      />
      <div className="card-actions justify-end px-6 py-4">
        {ctx.isSignedIn ? (
          <button
            className="btn btn-primary"
            onClick={handleUpload}
            disabled={files.length === 0}
          >
            문제 생성
          </button>
        ) : (
          <Link
            className="btn btn-primary"
            to="https://develop.unieum.kr:4000/auth/kakao"
          >
            로그인 후 이용하기
          </Link>
        )}
      </div>
      {isLoading && (
        <ModalPortal>
          <LoadingModal />
        </ModalPortal>
      )}
    </>
  );
};

export default FileUpload;
