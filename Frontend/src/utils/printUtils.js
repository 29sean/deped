import headerLogo from "../assets/Images/image.png";

export const handlePrint = (data) => {
  const {
    divisionName,
    periodStart,
    periodEnd,
    purposeTransaction,
    maleCount,
    femaleCount,
    ageBracket,
    clientType,
    totalRespondents,
    avgSqd1,
    avgSqd2,
    avgSqd3,
    avgSqd4,
    avgSqd5,
    avgSqd6,
    avgSqd7,
    avgSqd8,
    preparedByName,
    notedByName,
    image = headerLogo,
  } = data;

  const printContent = `
    <html>
      <head>
        <title>Customer Feedback Report</title>
        <style>
          @page {
            size: portrait;
            margin: 15mm;
          }

          body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            width: 100%;
            height: 100%;
            line-height: 1.6;
          }

          .report-header {
            text-align: center;
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            background-color: white;
            padding: 10px;
            z-index: 999;
            page-break-before: always;
          }

          .report-header img {
            width: 300px;
            margin-bottom: 10px;
          }

          .report-header hr {
            border: 1px solid black;
            width: 100%;
            margin: 10px 0;
          }

          .section-header {
            margin-top: 210px;
            text-align: center;
          }

          .section-header div {
            margin-bottom: 10px;
          }

          .section-header b {
            font-size: 18px;
          }

          .demographics {
            margin-top: 20px;
          }

          .demographics div {
            margin-bottom: 10px;
          }

          .client-type {
            margin-top: 15px;
          }

          table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 20px;
          }

          th, td {
            border: 1px solid black;
            padding: 10px;
            text-align: center;
          }

          th {
            font-weight: bold;
            background-color: #f2f2f2;
          }

          .signature-section {
            margin-top: 40px;
            display: flex;
            justify-content: space-between;
          }

          .signature-block {
            text-align: center;
            width: 45%;
          }

          .signature-line {
            border-top: 1px solid black;
            margin: 20px auto;
            width: 80%;
          }

          .divisionName {
            text-decoration: underline;
            font-weight: bold;
          }

          .serviceName {
            text-decoration: underline;
            font-weight: bold;
          }
        </style>
      </head>
      <body>
        <div class="page-content">
          <div class="report-header">
            <img src=${image} alt="Header Logo">
            <hr>
          </div>

          <div class="section-header">
            <div><b>CUSTOMER FEEDBACK REPORT</b></div>
            <div><b>Functional Division/Section/Unit:</b> <span class="divisionName">${divisionName}</span></div>
            <div><b>PERIOD:</b> ${periodStart} TO ${periodEnd}</div>
          </div>

          <div style="margin-top: 20px;">
            <div><b>Purpose of Transaction:</b> <span class="serviceName">${purposeTransaction}</span></div>
          </div>

          <div class="demographics">
            <div><b>Sex:</b> Male: ${maleCount} | Female: ${femaleCount}</div>
            <div><b>Age Bracket:</b> ${ageBracket}</div>
          </div>

          <div class="client-type">
            <div><b>Client Type:</b> ${clientType}</div>
          </div>

          <table>
            <thead>
              <tr>
                <th>Service Quality Dimension</th>
                <th>Average Score</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>SQD1</td>
                <td>${avgSqd1}</td>
              </tr>
              <tr>
                <td>SQD2</td>
                <td>${avgSqd2}</td>
              </tr>
              <tr>
                <td>SQD3</td>
                <td>${avgSqd3}</td>
              </tr>
              <tr>
                <td>SQD4</td>
                <td>${avgSqd4}</td>
              </tr>
              <tr>
                <td>SQD5</td>
                <td>${avgSqd5}</td>
              </tr>
              <tr>
                <td>SQD6</td>
                <td>${avgSqd6}</td>
              </tr>
              <tr>
                <td>SQD7</td>
                <td>${avgSqd7}</td>
              </tr>
              <tr>
                <td>SQD8</td>
                <td>${avgSqd8}</td>
              </tr>
              <tr>
                <td><b>Total Respondents</b></td>
                <td><b>${totalRespondents}</b></td>
              </tr>
            </tbody>
          </table>

          <div class="signature-section">
            <div class="signature-block">
              <div class="signature-line"></div>
              <div>Prepared by:</div>
              <div>${preparedByName}</div>
            </div>

            <div class="signature-block">
              <div class="signature-line"></div>
              <div>Noted by:</div>
              <div>${notedByName}</div>
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
