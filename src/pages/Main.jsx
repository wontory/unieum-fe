import { useState } from "react";

import { FilePond, registerPlugin } from "react-filepond";
import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";

import Card from "../components/ui/Card";
import "filepond/dist/filepond.min.css";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";

registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);

const Main = () => {
  const [files, setFiles] = useState([]);
  const [isSignIn, setIsSignIn] = useState(false);

  return (
    <div className="max-w-[1200px] w-full">
      <div className="prose">
        <h1>나만의 시험 문제 생성기</h1>
        <div>PDF 혹은 문장만 업로드하면 AI가 알아서 문제를 만들어드립니다!</div>
      </div>
      <div className="tabs">
        <a className="tab tab-bordered tab-active">업로드</a>
        <a className="tab tab-bordered">텍스트 직접 입력</a>
      </div>
      <FilePond
        files={files}
        onupdatefiles={setFiles}
        allowMultiple={false}
        maxFiles={1}
        server="/api"
        name="files"
        allowFileTypeValidation={true}
        acceptedFileTypes={["application/pdf"]}
        labelIdle='<span class="btn btn-neutral">컴퓨터에서 파일 업로드</span><p>또는 여기에 파일을 드롭!</p>'
        disabled={!isSignIn}
      />
      <div className="flex flex-col md:flex-row justify-between">
        <Card></Card>
        <Card></Card>
        <Card></Card>
      </div>
    </div>
  );
};

export default Main;
