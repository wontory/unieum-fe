import jsPDF from "jspdf";
import "jspdf-autotable";
import autoTable from "jspdf-autotable";

const generatePdf = (data, isAnswerSheet) => {
  const doc = new jsPDF();
  const columnWidths = [180];
  const tableData = data.flatMap((item) => [
    [item.question],
    [isAnswerSheet ? item.answer : ""],
  ]);

  autoTable(doc, {
    body: tableData,
    columnStyles: {
      0: { cellWidth: columnWidths[0] },
    },
  });

  return doc;
};

export default generatePdf;
