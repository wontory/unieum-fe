import { useState } from "react";
import { FilePond, registerPlugin } from "react-filepond";
import "filepond/dist/filepond.min.css";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";
import "./FileUpload.css";
import { useFileUpload } from "../hooks/useFileUpload";
import { useAtomValue } from "jotai";
import { userAtom } from "../store/atoms";
import FilePondPluginFileValidateType from "filepond-plugin-file-validate-type";

registerPlugin(FilePondPluginFileValidateType, FilePondPluginImagePreview);

function MyFileUpload({ setLoading, setStep, setAlertMessage, setOpen }) {
  //파일 업로드
  const handleFileUpload = useFileUpload(
    setLoading,
    setStep,
    setAlertMessage,
    setOpen
  );

  const [file, setFile] = useState([]);
  const isSignIn = useAtomValue(userAtom);

  return (
    <FilePond
      stylePanelLayout={null}
      files={file}
      disabled={!isSignIn}
      allowMultiple={true}
      maxFiles={1}
      server={{
        process: (fieldName, file, metadata, load, error, progress, abort) =>
          handleFileUpload(file),
      }}
      instantUpload={true}
      storeAsFile={true}
      name="files"
      allowFileTypeValidation={true}
      acceptedFileTypes={["application/pdf"]}
      labelIdle={`<span class="custom-label-action">파일 업로드</span></div><p style="font-size:16px; color:#646464; margin-top:8px; ">${
        isSignIn ? "또는 여기에 파일을 드롭" : "카카오톡 로그인이 필요합니다"
      }</p><p>텍스트가 없는 이미지 PDF는 준비중입니다!</p> `}
    />
  );
}

export default MyFileUpload;
