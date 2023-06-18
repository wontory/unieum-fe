import jsPDF from "jspdf";
import "jspdf-autotable";

import { font } from "../assets/font";

export const generateQuestionPDF = (data, isAnswerSheet = false) => {
  const doc = new jsPDF();
  const pdf_font = font;

  doc.addFileToVFS("pretendard.ttf", pdf_font);
  doc.addFont("pretendard.ttf", "pretendard", "normal");
  doc.setFont("pretendard");
  //pdf 내에서 문제랑 답 한줄씩 적기
  const tableData = data.flatMap((item) => [
    [item.question],
    [isAnswerSheet ? item.answer : ""],
  ]);

  const columnWidths = [180];

  autoTable(doc, {
    body: tableData,
    columnStyles: {
      0: { cellWidth: columnWidths[0] },
    },
    styles: {
      font: "pretendard",
    },
  });

  return doc;
};
