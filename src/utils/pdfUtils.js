import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

import { pretendard } from "../assets/fonts/pretendard";

const generatePdf = (data, isAnswerSheet) => {
  const font = pretendard;

  const doc = new jsPDF();

  const tableData = data.flatMap((item) => [
    [item.question],
    [isAnswerSheet ? item.answer : ""],
  ]);

  doc.addFileToVFS("pretendard.ttf", font);
  doc.addFont("pretendard.ttf", "pretendard", "normal");
  doc.setFont("pretendard");

  autoTable(doc, {
    body: tableData,
    columnStyles: {
      0: { cellWidth: 180 },
    },
    styles: {
      font: "pretendard",
    },
  });

  return doc;
};

export default generatePdf;
