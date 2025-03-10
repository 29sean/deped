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
    image = headerLogo,
  } = data;

  const printContent = `<html>
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
      }

      th,
      td {
        border: 1px solid black;
        padding: 0.5em;
        text-align: center;
      }

      th {
        background-color: #f2f2f2;
      }

      .signature-section {
        margin-top: 2em;
        display: flex;
        justify-content: space-between;
      }

      .signature-block {
        text-align: center;
        width: 45%;
      }

      .signature-line {
        border-top: 1px solid black;
        margin: 1em auto;
        width: 80%;
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
            <th>Survey</th>
            <th>5</th>
            <th>4</th>
            <th>3</th>
            <th>2</th>
            <th>1</th>
            <th>0</th>
            <th>Total Rated Score</th>
            <th>Ave. Rated Score</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>SQD1 - (Responsiveness)</td>
            <td>${avgSqd1[5]}</td>
            <td>${avgSqd1[4]}</td>
            <td>${avgSqd1[3]}</td>
            <td>${avgSqd1[2]}</td>
            <td>${avgSqd1[1]}</td>
            <td>${avgSqd1[0]}</td>
            <td>${avgSqd1.totalScore}</td>
            <td>${avgSqd1.averageScore}</td>
          </tr>
          <tr>
            <td>SQD2 - (Reliability)</td>
            <td>${avgSqd2[5]}</td>
            <td>${avgSqd2[4]}</td>
            <td>${avgSqd2[3]}</td>
            <td>${avgSqd2[2]}</td>
            <td>${avgSqd2[1]}</td>
            <td>${avgSqd2[0]}</td>
            <td>${avgSqd2.totalScore}</td>
            <td>${avgSqd2.averageScore}</td>
          </tr>
          <tr>
            <td>SQD3 - (Access and Facilities)</td>
            <td>${avgSqd3[5]}</td>
            <td>${avgSqd3[4]}</td>
            <td>${avgSqd3[3]}</td>
            <td>${avgSqd3[2]}</td>
            <td>${avgSqd3[1]}</td>
            <td>${avgSqd3[0]}</td>
            <td>${avgSqd3.totalScore}</td>
            <td>${avgSqd3.averageScore}</td>
          </tr>
          <tr>
            <td>SQD4 - (Communication)</td>
            <td>${avgSqd4[5]}</td>
            <td>${avgSqd4[4]}</td>
            <td>${avgSqd4[3]}</td>
            <td>${avgSqd4[2]}</td>
            <td>${avgSqd4[1]}</td>
            <td>${avgSqd4[0]}</td>
            <td>${avgSqd4.totalScore}</td>
            <td>${avgSqd4.averageScore}</td>
          </tr>
          <tr>
            <td>SQD5 - (Costs)</td>
            <td>${avgSqd5[5]}</td>
            <td>${avgSqd5[4]}</td>
            <td>${avgSqd5[3]}</td>
            <td>${avgSqd5[2]}</td>
            <td>${avgSqd5[1]}</td>
            <td>${avgSqd5[0]}</td>
            <td>${avgSqd5.totalScore}</td>
            <td>${avgSqd5.averageScore}</td>
          </tr>
          <tr>
            <td>SQD6 - (Integrity)</td>
            <td>${avgSqd6[5]}</td>
            <td>${avgSqd6[4]}</td>
            <td>${avgSqd6[3]}</td>
            <td>${avgSqd6[2]}</td>
            <td>${avgSqd6[1]}</td>
            <td>${avgSqd6[0]}</td>
            <td>${avgSqd6.totalScore}</td>
            <td>${avgSqd6.averageScore}</td>
          </tr>
          <tr>
            <td>SQD7 - (Assurance)</td>
            <td>${avgSqd7[5]}</td>
            <td>${avgSqd7[4]}</td>
            <td>${avgSqd7[3]}</td>
            <td>${avgSqd7[2]}</td>
            <td>${avgSqd7[1]}</td>
            <td>${avgSqd7[0]}</td>
            <td>${avgSqd7.totalScore}</td>
            <td>${avgSqd7.averageScore}</td>
          </tr>
          <tr>
            <td>SQD8 - (Outcome)</td>
            <td>${avgSqd8[5]}</td>
            <td>${avgSqd8[4]}</td>
            <td>${avgSqd8[3]}</td>
            <td>${avgSqd8[2]}</td>
            <td>${avgSqd8[1]}</td>
            <td>${avgSqd8[0]}</td>
            <td>${avgSqd8.totalScore}</td>
            <td>${avgSqd8.averageScore}</td>
          </tr>
          <tr>
            <td colspan="7"><b>Total Respondents</b></td>
            <td colspan="2"><b>${totalRespondents}</b></td>
          </tr>
        </tbody>
      </table>

      <div class="signature-section">
        <div class="signature-block">
          <div class="signature-line"></div>
          <div>Prepared by:</div>
          <div>CHEM JAYDER M. CABUNGCAL</div>
          <div><i>Information Technology Officer I</i></div>
        </div>

        <div class="signature-block">
          <div class="signature-line"></div>
          <div>Noted by:</div>
          <div>CHRISTOPHER R. DIAZ, CESO V</div>
          <div><i>Schools Division Superintendent</i></div>
        </div>
      </div>
    </div>
  </body>
</html>`;

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
