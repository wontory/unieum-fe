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

  const upload = async (file) => {
    const formData = new FormData();
    formData.append("pdf", file);

    const response = await testApi.postPdf(formData);

    localStorage.setItem(
      "testGenerationId",
      response.data.data.testGenerationId
    );
    localStorage.setItem(
      "testList",
      JSON.stringify(response.data.data.testList)
    );
  };

  return (
    <FilePond
      name="files"
      files={files}
      onupdatefiles={setFiles}
      allowMultiple={true}
      allowFileTypeValidation={true}
      acceptedFileTypes={["application/pdf"]}
      instantUpload={true}
      storeAsFile={true}
      server={{
        process: (file) => upload(file),
      }}
      labelIdle='<span class="filepond--label-action">컴퓨터에서 파일 업로드</span> 또는 여기에 파일을 드롭!'
      credits={false}
      disabled={!ctx.isSignedIn}
    />
  );
};

export default FileUpload;
