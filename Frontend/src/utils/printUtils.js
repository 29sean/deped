import headerLogo from "../assets/Images/image.png";

export const handlePrint = (data) => {
  const {
    divisionName,
    periodStart,
    periodEnd,
    purposeTransaction,
    maleCount,
    femaleCount,
    ageCountsLower,
    ageCounts2034,
    ageCounts3549,
    ageCounts5064,
    ageCountsHigher,
    clientType,
    totalRespondents,
    totalRatedScore,
    avgRatedScore,
    preparedByName,
    notedByName,
    image = headerLogo, // Default image URL
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
            <div><b>Functional Division/Section/Unit:</b> ${divisionName}</div>
            <div><b>PERIOD:</b> ${periodStart} to ${periodEnd}</div>
          </div>

          <div style="margin-top: 20px;">
            <div><b>Purpose of Transaction:</b> ${purposeTransaction}</div>
          </div>

          <div class="demographics">
            <div><b>Sex:</b> Male: ${maleCount} | Female: ${femaleCount}</div>
            <div>
              <b>Age:</b> 19-Lower: ${ageCountsLower} | 20-34: ${ageCounts2034} | 35-49: ${ageCounts3549} | 50-64: ${ageCounts5064} | 65-Higher: ${ageCountsHigher}
            </div>
          </div>

          <div class="client-type">
            <div><b>Client Type:</b> ${clientType}</div>
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
                <th>Total Respondents</th>
                <th>Total Rated Score</th>
                <th>Avg. Rated Score</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Responsiveness</td>
                <td></td><td></td><td></td><td></td><td></td>
                <td>${totalRespondents}</td>
                <td>${totalRatedScore}</td>
                <td>${avgRatedScore}</td>
              </tr>
              <!-- Add more rows as needed -->
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
