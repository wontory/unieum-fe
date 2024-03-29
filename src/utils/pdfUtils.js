import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

import { pretendard } from "../assets/fonts/pretendard";

const generatePdf = (data, testFormat, isAnswerSheet) => {
  const font = pretendard;

  const doc = new jsPDF();

  const tableData =
    testFormat === "multiple-choice"
      ? data.flatMap((item) => [
          [
            `${item.question}${
              isAnswerSheet ? ` ----- ${Number(item.answer) + 1}` : ""
            }`,
          ],
          [
            item.options
              .map((option, index) => `${index + 1}. ${option}`)
              .join("\n"),
          ],
        ])
      : data.flatMap((item) => [
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
