const date = document.getElementById("date");
const userName = document.getElementById("sname");
const cname = document.getElementById("cname");
const input = document.getElementById("input");
const output = document.getElementById("output");
const ename = document.getElementById("ename");
const pname = document.getElementById("pname");
const rname = document.getElementById("rname");
const submitBtn = document.getElementById("submitBtn");

const { PDFDocument, rgb, degrees } = PDFLib;

const capitalize = (str, lower = false) =>
  (lower ? str.toLowerCase() : str).replace(/(?:^|\s|["'([{])+\S/g, (match) =>
    match.toUpperCase()
  );

submitBtn.addEventListener("click", () => {
  // get and trim form values
  const data = {
    field1: date.value,
    field2: sname.value,
    field3: cname.value,
    field4: input.value,
    field5: output.value,
    field6: ename.value,
    field7: pname.value,
    field8: rname.value,

    // duplicate for more
  };

  // generatePDF(data);
  const val = capitalize(userName.value);

  //check if the text is empty or not
  if (val.trim() !== "" && userName.checkValidity()) {
    // console.log(val);
    generatePDF(data);
  } else {
    userName.reportValidity();
  }
});

const generatePDF = async (fields) => {
  const existingPdfBytes = await fetch("./cert.pdf").then((res) =>
    res.arrayBuffer()
  );

  // Load a PDFDocument from the existing PDF bytes
  const pdfDoc = await PDFDocument.load(existingPdfBytes);
  pdfDoc.registerFontkit(fontkit);

  //get font
  const fontBytes = await fetch("./utsaah.ttf").then((res) =>
    res.arrayBuffer()
  );

  // Embed our custom font in the document
  const SanChezFont = await pdfDoc.embedFont(fontBytes, { subset: true });

  // Get the first page of the document
  const pages = pdfDoc.getPages();
  const firstPage = pages[0];

  // Draw a string of text diagonally across the first page
  firstPage.drawText(new Date().toLocaleDateString(("en-UK")), {
    x: 330,
    y: 553,
    size: 18,
    font: SanChezFont,

  });
  firstPage.drawText(new Date().toLocaleDateString(("en-UK")), {
    x: 765,
    y: 553,
    size: 18,
    font: SanChezFont,

  });

  firstPage.drawText(fields.field2, {
    x: 64,
    y: 435,
    size: 18,
    font: SanChezFont,

  });
  firstPage.drawText(fields.field2, {
    x: 454,
    y: 435,
    size: 18,
    font: SanChezFont,

  });
  firstPage.drawText(fields.field2, {
    x: 222,
    y: 48,
    size: 18,
    font: SanChezFont,

  });
  firstPage.drawText(fields.field2, {
    x: 605,
    y: 48,
    size: 18,
    font: SanChezFont,

  });
  firstPage.drawText(fields.field3, {
    x: 94,
    y: 417,
    size: 18,
    font: SanChezFont,

  });
  firstPage.drawText(fields.field3, {
    x: 484,
    y: 417,
    size: 18,
    font: SanChezFont,

  });
  firstPage.drawText(fields.field5, {
    x: 166,
    y: 417,
    size: 18,
    font: SanChezFont,

  });
  firstPage.drawText(fields.field5, {
    x: 556,
    y: 417,
    size: 18,
    font: SanChezFont,

  });
  firstPage.drawText(fields.field4, {
    x: 244,
    y: 417,
    size: 18,
    font: SanChezFont,

  });
  firstPage.drawText(fields.field4, {
    x: 634,
    y: 417,
    size: 18,
    font: SanChezFont,

  });
  firstPage.drawText(fields.field3, {
    x: 200,
    y: 32,
    size: 18,
    font: SanChezFont,

  });
  firstPage.drawText(fields.field3, {
    x: 598,
    y: 32,
    size: 18,
    font: SanChezFont,

  });
  firstPage.drawText(fields.field5, {
    x: 278,
    y: 32,
    size: 18,
    font: SanChezFont,

  });
  firstPage.drawText(fields.field5, {
    x: 668,
    y: 32,
    size: 18,
    font: SanChezFont,

  });
  firstPage.drawText(fields.field4, {
    x: 362,
    y: 32,
    size: 18,
    font: SanChezFont,

  });
  firstPage.drawText(fields.field4, {
    x: 748,
    y: 32,
    size: 18,
    font: SanChezFont,

  });
  firstPage.drawText(fields.field6, {
    x: 155,
    y: 337,
    size: 18,
    font: SanChezFont,

  });
  firstPage.drawText(fields.field6, {
    x: 545,
    y: 337,
    size: 18,
    font: SanChezFont,

  });
  firstPage.drawText(fields.field6, {
    x: 275,
    y: 63,
    size: 18,
    font: SanChezFont,

  });
  firstPage.drawText(fields.field6, {
    x: 660,
    y: 63,
    size: 18,
    font: SanChezFont,

  });
  firstPage.drawText(fields.field7, {
    x: 155,
    y: 324,
    size: 18,
    font: SanChezFont,

  });
  firstPage.drawText(fields.field7, {
    x: 545,
    y: 324,
    size: 18,
    font: SanChezFont,

  });
  firstPage.drawText(fields.field8, {
    x: 80,
    y: 261,
    size: 18,
    font: SanChezFont,

  });
  firstPage.drawText(fields.field8, {
    x: 469,
    y: 261,
    size: 18,
    font: SanChezFont,

  });
  firstPage.drawText(fields.field1, {
    x: 218,
    y: 261,
    size: 17,
    font: SanChezFont,

  });
  firstPage.drawText(fields.field1, {
    x: 611,
    y: 261,
    size: 17,
    font: SanChezFont,

  });

  // Serialize the PDFDocument to bytes (a Uint8Array)
  //
  const pdfBytes = await pdfDoc.save();
  console.log("Done creating");

  // this was for creating uri and showing in iframe

  // const pdfDataUri = await pdfDoc.saveAsBase64({ dataUri: true });
  // document.getElementById("pdf").src = pdfDataUri;

  var file = new File(
    [pdfBytes],
    "leave_app.pdf",
    {
      type: "application/pdf;charset=utf-8",
    }
  );
  saveAs(file);
};

// init();
function getCurrentDate() {
  let dateObj = new Date();
  let month = String(dateObj.getMonth() + 1).padStart(2, '0');
  let day = String(dateObj.getDate()).padStart(2, '0');
  let year = dateObj.getFullYear();
  let output = day + '/' + month + '/' + year;
  document.querySelector('.output').textContent = output;
}
