import { useState } from "react";

import { FilePond, registerPlugin } from "react-filepond";
import FilePondPluginFileValidateType from "filepond-plugin-file-validate-type";
import FilePondPluginPdfPreview from "filepond-plugin-pdf-preview";

import "../../styles/filepond.css";
import "filepond/dist/filepond.min.css";
import "filepond-plugin-pdf-preview/dist/filepond-plugin-pdf-preview.min.css";

registerPlugin(FilePondPluginFileValidateType, FilePondPluginPdfPreview);

const FileUpload = ({ isSignIn }) => {
  const [files, setFiles] = useState([]);

  return (
    <FilePond
      files={files}
      onupdatefiles={setFiles}
      allowMultiple={true}
      name="files"
      allowFileTypeValidation={true}
      acceptedFileTypes={["application/pdf"]}
      labelIdle='<span class="filepond--label-action">컴퓨터에서 파일 업로드</span> 또는 여기에 파일을 드롭!'
      disabled={!isSignIn}
    />
  );
};

export default FileUpload;
