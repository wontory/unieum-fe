import { useState, useContext } from "react";

import AuthContext from "../../stores/auth-context";

import { FilePond, registerPlugin } from "react-filepond";
import FilePondPluginFileValidateType from "filepond-plugin-file-validate-type";
import FilePondPluginPdfPreview from "filepond-plugin-pdf-preview";

import StyledFilepondContainer from "../../styles/StyledFilepondContainer";
import Uploader from "./Uploader";
import "filepond/dist/filepond.min.css";
import "filepond-plugin-pdf-preview/dist/filepond-plugin-pdf-preview.min.css";

registerPlugin(FilePondPluginFileValidateType, FilePondPluginPdfPreview);

const FileUpload = () => {
  const ctx = useContext(AuthContext);

  const [files, setFiles] = useState([]);

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
      <Uploader dataType="file" data={files} disabled={files.length === 0} />
    </>
  );
};

export default FileUpload;
