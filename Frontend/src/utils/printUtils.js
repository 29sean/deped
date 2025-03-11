import headerLogo from "../assets/Images/image.png";

export const handlePrint = (dataArray) => {
  const getScore = (scores, index) => {
    if (!scores || !Array.isArray(scores) || scores.length <= index) return 0;
    return scores[index].toFixed(2); // Format to 2 decimal places
  };

  // Generate rows for the table based on the data array
  const generateTableRows = (data) => {
    return data
      .map(
        (item) => `
      <tr>
        <td>${item.ageBracket}</td>
        <td>${item.clientType}</td>
        <td>${item.maleCount}</td>
        <td>${item.femaleCount}</td>
        <td>${item.totalRespondents}</td>
        <td>${getScore(item.avgSqd1, 5)}</td>
        <td>${getScore(item.avgSqd1, 4)}</td>
        <td>${getScore(item.avgSqd1, 3)}</td>
        <td>${getScore(item.avgSqd1, 2)}</td>
        <td>${getScore(item.avgSqd1, 1)}</td>
        <td>${getScore(item.avgSqd1, 0)}</td>
        <td>${item.avgSqd1.totalScore || 0}</td>
        <td>${item.avgSqd1.averageScore || 0}</td>
        <td>${getScore(item.avgSqd2, 5)}</td>
        <td>${getScore(item.avgSqd2, 4)}</td>
        <td>${getScore(item.avgSqd2, 3)}</td>
        <td>${getScore(item.avgSqd2, 2)}</td>
        <td>${getScore(item.avgSqd2, 1)}</td>
        <td>${getScore(item.avgSqd2, 0)}</td>
        <td>${item.avgSqd2.totalScore || 0}</td>
        <td>${item.avgSqd2.averageScore || 0}</td>
        <!-- Repeat for avgSqd3 to avgSqd8 -->
      </tr>
    `
      )
      .join("");
  };

  // Use the first item in the array for header information
  const firstItem = dataArray[0];
  const {
    divisionName,
    periodStart,
    periodEnd,
    purposeTransaction,
    image = headerLogo,
  } = firstItem;

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

        .demographics,
        .client-type {
          margin-top: 1em;
        }

        table {
          width: 100%;
          border-collapse: collapse;
          margin-top: 1em;
          font-size: 0.9em;
          table-layout: fixed; /* Ensures table doesn't overflow */
        }

        th,
        td {
          border: 1px solid black;
          padding: 0.5em;
          text-align: center;
          word-wrap: break-word; /* Ensures text wraps within cells */
        }

        th {
          background-color: #f2f2f2;
        }

        th:first-child,
        td:first-child {
          text-align: left;
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
          <div>
            <b>Functional Division/Section/Unit:</b>
            <span class="divisionName">${divisionName}</span>
          </div>
          <div><b>PERIOD:</b> ${periodStart} TO ${periodEnd}</div>
        </div>

        <div style="margin-top: 20px">
          <div>
            <b>Purpose of Transaction:</b>
            <span class="serviceName">${purposeTransaction}</span>
          </div>
        </div>

        <table>
          <thead>
            <tr>
              <th>Age Bracket</th>
              <th>Client Type</th>
              <th>Male</th>
              <th>Female</th>
              <th>Total Respondents</th>
              <th>SQD1 (5)</th>
              <th>SQD1 (4)</th>
              <th>SQD1 (3)</th>
              <th>SQD1 (2)</th>
              <th>SQD1 (1)</th>
              <th>SQD1 (0)</th>
              <th>Total Rated Score</th>
              <th>Avg. Rated Score</th>
              <!-- Add columns for SQD2 to SQD8 -->
              <th>SQD2 (5)</th>
              <th>SQD2 (4)</th>
              <th>SQD2 (3)</th>
              <th>SQD2 (2)</th>
              <th>SQD2 (1)</th>
              <th>SQD2 (0)</th>
              <th>Total Rated Score</th>
              <th>Avg. Rated Score</th>
              <!-- Add similar columns for SQD3 to SQD8 -->
            </tr>
          </thead>
          <tbody>
            ${generateTableRows(dataArray)}
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
