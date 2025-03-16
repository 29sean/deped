import headerLogo from "../assets/Images/image.png";

export const handlePrint = (dataArray) => {
  const generateTableRows = (item) => {
    if (!item) return "";

    const sqdLabels = [
      "SQD1 - Responsive",
      "SQD2 - Reliability",
      "SQD3 - Access and Facilities",
      "SQD4 - Communication",
      "SQD5 - Costs",
      "SQD6 - Integrity",
      "SQD7 - Assurance",
      "SQD8 - Outcome",
    ];

    const totalCounts = [
      (Number(item.sqd1_5) || 0) +
        (Number(item.sqd1_4) || 0) +
        (Number(item.sqd1_3) || 0) +
        (Number(item.sqd1_2) || 0) +
        (Number(item.sqd1_1) || 0) +
        (Number(item.sqd1_0) || 0),
      (Number(item.sqd2_5) || 0) +
        (Number(item.sqd2_4) || 0) +
        (Number(item.sqd2_3) || 0) +
        (Number(item.sqd2_2) || 0) +
        (Number(item.sqd2_1) || 0) +
        (Number(item.sqd2_0) || 0),
      (Number(item.sqd3_5) || 0) +
        (Number(item.sqd3_4) || 0) +
        (Number(item.sqd3_3) || 0) +
        (Number(item.sqd3_2) || 0) +
        (Number(item.sqd3_1) || 0) +
        (Number(item.sqd3_0) || 0),
      (Number(item.sqd4_5) || 0) +
        (Number(item.sqd4_4) || 0) +
        (Number(item.sqd4_3) || 0) +
        (Number(item.sqd4_2) || 0) +
        (Number(item.sqd4_1) || 0) +
        (Number(item.sqd4_0) || 0),
      (Number(item.sqd5_5) || 0) +
        (Number(item.sqd5_4) || 0) +
        (Number(item.sqd5_3) || 0) +
        (Number(item.sqd5_2) || 0) +
        (Number(item.sqd5_1) || 0) +
        (Number(item.sqd5_0) || 0),
      (Number(item.sqd6_5) || 0) +
        (Number(item.sqd6_4) || 0) +
        (Number(item.sqd6_3) || 0) +
        (Number(item.sqd6_2) || 0) +
        (Number(item.sqd6_1) || 0) +
        (Number(item.sqd6_0) || 0),
      (Number(item.sqd7_5) || 0) +
        (Number(item.sqd7_4) || 0) +
        (Number(item.sqd7_3) || 0) +
        (Number(item.sqd7_2) || 0) +
        (Number(item.sqd7_1) || 0) +
        (Number(item.sqd7_0) || 0),
      (Number(item.sqd8_5) || 0) +
        (Number(item.sqd8_4) || 0) +
        (Number(item.sqd8_3) || 0) +
        (Number(item.sqd8_2) || 0) +
        (Number(item.sqd8_1) || 0) +
        (Number(item.sqd8_0) || 0),
    ];

    const totalStronglyAgree = [
      Number(item.sqd1_5) || 0,
      Number(item.sqd2_5) || 0,
      Number(item.sqd3_5) || 0,
      Number(item.sqd4_5) || 0,
      Number(item.sqd5_5) || 0,
      Number(item.sqd6_5) || 0,
      Number(item.sqd7_5) || 0,
      Number(item.sqd8_5) || 0,
    ];

    return sqdLabels
      .map((label, index) => {
        return `
        <tr>
          <td>${label}</td>
          <td>${item[`sqd${index + 1}_5`] || 0}</td>
          <td>${item[`sqd${index + 1}_4`] || 0}</td>
          <td>${item[`sqd${index + 1}_3`] || 0}</td>
          <td>${item[`sqd${index + 1}_2`] || 0}</td>
          <td>${item[`sqd${index + 1}_1`] || 0}</td>
          <td>${item[`sqd${index + 1}_0`] || 0}</td>
          <td><b>${totalCounts[index]}</b></td>
          <td><b>${totalStronglyAgree[index]}</b></td>
        </tr>
      `;
      })
      .join("");
  };

  const firstItem = dataArray[0];
  const {
    divisionName,
    periodStart,
    periodEnd,
    purposeTransaction,
    clientType,
    image = headerLogo,
  } = firstItem;

  const generateDemographics = (data) => {
    let maleTotal = 0;
    let femaleTotal = 0;
    const ageBrackets = new Set();

    data.forEach((item) => {
      maleTotal += Number(item.maleCount) || 0;
      femaleTotal += Number(item.femaleCount) || 0;
      ageBrackets.add(item.ageBracket);
    });

    return `
      <div>
        <b>Age Brackets:</b> ${[...ageBrackets].join(", ")} |
        <b>Total Male:</b> ${maleTotal} |
        <b>Total Female:</b> ${femaleTotal}
      </div>
    `;
  };

  const printContent = `
  <html>
    <head>
      <title>Customer Feedback Report</title>
      <style>
        @page {
          size: letter;
          margin: 10mm;
        }

        body {
          font-family: Arial, sans-serif;
          font-size: 1em;
          margin: 0;
          padding: 0;
          width: 100%;
          height: 100%;
          line-height: 1.4;
        }

        .report-header {
          text-align: center;
          padding: 5px 0;
        }

        .report-header img {
          width: 15em;
        }

        .report-header hr {
          border: 1px solid black;
          margin: 5px 0;
        }

        .section-header {
          text-align: center;
        }

        .section-header b {
          font-size: 1.2em;
        }

        table {
          width: 100%;
          border-collapse: collapse;
          margin-top: 1em;
          font-size: 0.9em;
          table-layout: fixed;
        }

        th,
        td {
          border: 1px solid black;
          padding: 0.75em;
          text-align: center;
          word-wrap: break-word;
        }

        th {
          background-color: #f2f2f2;
        }

        th:first-child,
        td:first-child {
          text-align: left;
          width: 25%;
        }

        th:nth-child(n+2),
        td:nth-child(n+2) {
          width: 10%;
        }

        th:last-child,
        td:last-child {
          width: 15%;
        }

        .signature-section {
          margin-top: 2em;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }

        .signature-block {
          text-align: left;
          width: 100%;
          margin-bottom: 1em;
          padding-top: 0.5em;
        }

        .divisionName,
        .serviceName {
          text-decoration: underline;
          font-weight: bold;
        }
      </style>
    </head>
    <body>
      <div class="page-content">
        <div class="report-header">
          <img src="${image}" alt="Header Logo" />
          <hr />
        </div>

        <div class="section-header">
          <div><b>CUSTOMER FEEDBACK REPORT</b></div>
        </div>

        <div style="margin-top: 20px">
          <div style="display: flex; justify-content: space-between; align-items: center;">
            <div>
              <b>Functional Division/Section/Unit:</b>
              <span class="divisionName">${divisionName}</span>
            </div>
            <div>
               <b>PERIOD:<span class="serviceName"> ${periodStart}-${periodEnd}</b></span>
            </div>
          </div>

          <div>
            <b>Purpose of Transaction:</b>
            <span class="serviceName">${purposeTransaction}</span>
          </div>
          <div>
            <b>Client Type:</b>
            <span class="serviceName">${clientType}</span>
          </div>
        </div>

        <div>
          ${generateDemographics(dataArray)}
        </div>

        <table>
          <thead>
            <tr>
              <th>Survey</th>
              <th>5</th>
              <th>4</th>
              <th>3</th>
              <th>2</th>
              <th>1</th>
              <th>0</th>
              <th>Total Rated Score</th>
              <th>Total Strongly Agree (5)</th>
            </tr>
          </thead>
          <tbody>
             ${dataArray.map((item) => generateTableRows(item)).join("")}
             <tr>
               <td colspan="7"><b>Total Number of Respondents</b></td>
               <td colspan="2"><b>${dataArray.reduce(
                 (acc, item) =>
                   acc +
                   (Number(item.maleCount) || 0) +
                   (Number(item.femaleCount) || 0),
                 0
               )}</b></td>
             </tr>
          </tbody>
        </table>

        <div class="signature-section">
          <div class="signature-block">
            <div>Prepared by:</div>
            <br>
            <div><b>CHEM JAYDER M. CABUNGCAL</b></div>
            <div><i>Information Technology Officer I</i></div>
          </div>

          <div class="signature-block">
            <div>Noted by:</div>
            <br>
            <div><b>CHRISTOPHER R. DIAZ, CESO V</b></div>
            <div><i>Schools Division Superintendent</i></div>
          </div>
        </div>
      </div>
    </body>
  </html>
  `;

  const iframe = document.createElement("iframe");
  iframe.style.position = "absolute";
  iframe.style.width = "0px";
  iframe.style.height = "0px";
  iframe.style.border = "none";
  document.body.appendChild(iframe);

  iframe.contentWindow.document.open();
  iframe.contentWindow.document.write(printContent);
  iframe.contentWindow.document.close();

  iframe.contentWindow.onload = () => {
    iframe.contentWindow.print();
    document.body.removeChild(iframe);
  };
};
