import { useState, useContext } from "react";

import AuthContext from "../../store/auth-context";

import { FilePond, registerPlugin } from "react-filepond";
import FilePondPluginFileValidateType from "filepond-plugin-file-validate-type";
import FilePondPluginPdfPreview from "filepond-plugin-pdf-preview";

import { testApi } from "../../apis/testApi";

import "../../styles/filepond.css";
import "filepond/dist/filepond.min.css";
import "filepond-plugin-pdf-preview/dist/filepond-plugin-pdf-preview.min.css";

registerPlugin(FilePondPluginFileValidateType, FilePondPluginPdfPreview);

const FileUpload = () => {
  const ctx = useContext(AuthContext);

  const [files, setFiles] = useState([]);

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
        server="https://develop.unieum.kr:4000/test-generation/upload/pdf"
        credits={false}
        disabled={!ctx.isSignedIn}
      />
    </>
  );
};

export default FileUpload;
