import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

import { font } from "../assets/font";

const generatePdf = (data, isAnswerSheet) => {
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
