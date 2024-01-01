import { useState } from "react";

export function InputGroup({
  onInitialInvestment,
  onAnnualInvestment,
  onExpectedReturn,
  onDuration,
}) {
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>INITIAL INVESTMENT</label>
          <input type="number" onChange={onInitialInvestment}></input>
        </p>
        <p>
          <label>ANNUAL INVESTMENT</label>
          <input type="number" onChange={onAnnualInvestment}></input>
        </p>
      </div>
      <div className="input-group">
        <p>
          <label>EXPECTED RETURN</label>
          <input type="number" onChange={onExpectedReturn}></input>
        </p>
        <p>
          <label>DURATION</label>
          <input type="number" onChange={onDuration}></input>
        </p>
      </div>
    </section>
  );
}
