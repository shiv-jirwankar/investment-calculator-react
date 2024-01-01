import { calculateInvestmentResults, formatter } from "../util/investment";

export function Result({ inputValues }) {
  const dataArr = calculateInvestmentResults(inputValues);
  console.log("dataArr is", dataArr);
  const initialInvestment =
    dataArr.length > 0
      ? dataArr[0].valueEndOfYear -
        dataArr[0].interest -
        dataArr[0].annualInvestment
      : 0;

  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Investment Capital</th>
        </tr>
      </thead>
      <tbody>
        {dataArr.map((entry) => {
          const totalInterest =
            entry.valueEndOfYear -
            entry.annualInvestment * entry.year -
            initialInvestment;
          const totalAmountInvested = entry.valueEndOfYear - totalInterest;
          return (
            <tr key={entry.year}>
              <td>{entry.year}</td>
              <td>{formatter.format(entry.valueEndOfYear)}</td>
              <td>{formatter.format(entry.interest)}</td>
              <td>{formatter.format(totalInterest)}</td>
              <td>{formatter.format(totalAmountInvested)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
