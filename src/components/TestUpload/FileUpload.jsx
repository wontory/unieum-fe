import { useState, useContext } from "react";

import AuthContext from "../../stores/auth-context";

import { useNavigate, Link } from "react-router-dom";
import { FilePond, registerPlugin } from "react-filepond";
import FilePondPluginFileValidateType from "filepond-plugin-file-validate-type";
import FilePondPluginPdfPreview from "filepond-plugin-pdf-preview";

import { testApi } from "../../apis/testApi";

import StyledFilepondContainer from "../../styles/StyledFilepondContainer";
import ModalPortal from "../UI/Modal/ModalPortal";
import LoadingModal from "../UI/Modal/LoadingModal";
import "filepond/dist/filepond.min.css";
import "filepond-plugin-pdf-preview/dist/filepond-plugin-pdf-preview.min.css";

registerPlugin(FilePondPluginFileValidateType, FilePondPluginPdfPreview);

const FileUpload = () => {
  const navigate = useNavigate();

  const ctx = useContext(AuthContext);

  const [files, setFiles] = useState([]);

  const handleUpload = async () => {
    let testGenerationId;

    window.loading_modal.showModal();

    try {
      const formData = new FormData();
      formData.append("targetTestFormat", "short-answer");
      formData.append("targetLanguage", "korean");
      formData.append("openaiModel", "gpt-3.5-turbo-16k");
      formData.append("countOfQuestions", "5");
      files.map((file) => formData.append("fileList", file.file));

      const res = await testApi.postFileList(formData);
      testGenerationId = res.data.data.testGenerationId;
    } catch (err) {
      alert(`문제 생성에 실패했습니다. (${err?.response?.data.message})`);
      console.log(err);
      window.loading_modal.closeModal();
      window.location.reload();
    }

    navigate(`/done/${testGenerationId}`);
  };

  return (
    <>
      <StyledFilepondContainer files={files}>
        <FilePond
          name="files"
          files={files}
          onupdatefiles={setFiles}
          allowMultiple={true}
          allowFileTypeValidation={true}
          acceptedFileTypes="application/pdf"
          labelIdle='<span class="btn filepond--label-action">기기에서 파일 업로드</span><br/>또는 여기에 파일을 드롭!'
          credits={false}
          disabled={!ctx.isSignedIn}
        />
      </StyledFilepondContainer>
      <div className="card card-bordered rounded-t-none border-t-0 bg-base-100">
        <div className="card-body p-0 gap-0">
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
        </div>
      </div>
      <ModalPortal>
        <LoadingModal>열심히 문제 만드는 중...</LoadingModal>
      </ModalPortal>
    </>
  );
};

export default FileUpload;
