import { useEffect, useState } from "react";
import { InputSnipper, RangeSelector } from ".";

const Calculator = () => {
  const [teamMembers, setTeamMembers] = useState(10);
  const [networkSize, setNetworkSize] = useState(2000);
  const [noOfSignalsPerYear, NoOfSignalsPerYear] = useState(0.5);
  const [legitimateSignals, setLegitimateSignals] = useState(10);
  const [uniqueSignals, setUniqueSignals] = useState(20);
  const [noOfSignals, setNoOfSignals] = useState(200);

  // teamMembers * networkSize * noOfSignalsPerYear * (legitimateSignals / 100) * (uniqueSignals / 100)

  useEffect(() => {
    const result =
      teamMembers *
      networkSize *
      noOfSignalsPerYear *
      (legitimateSignals / 100) *
      (uniqueSignals / 100);

    setNoOfSignals(Math.round(result) / 100);
  }, [
    teamMembers,
    networkSize,
    noOfSignalsPerYear,
    legitimateSignals,
    uniqueSignals,
  ]);

  return (
    <div
      className="flex flex-col gap-4 w-[50%] text-black p-4 rounded-lg"
      style={{ boxShadow: "0px 12px 64px 0px #00000014" }}
    >
      <InputSnipper
        title="Number of Team Members"
        defaultValue={10}
        id="teamMembers"
        onChange={({ target: { value } }) => setTeamMembers(value)}
      />
      <InputSnipper
        title="Size of Network"
        defaultValue={2000}
        id="Network"
        onChange={({ target: { value } }) => setNetworkSize(value)}
      />
      <InputSnipper
        title="Number of Signals Per Contact / Year"
        defaultValue={0.5}
        id="Signals"
        onChange={({ target: { value } }) => NoOfSignalsPerYear(value)}
      />
      <RangeSelector
        title="% Legitimate Signals"
        min={0}
        max={100}
        defaultValue={10}
        valueselected={legitimateSignals}
        onValueChange={(e) => setLegitimateSignals(e)}
      />
      <RangeSelector
        title="% Unique/Hard To Discover Signals"
        min={0}
        max={100}
        defaultValue={20}
        valueselected={uniqueSignals}
        onValueChange={(e) => setUniqueSignals(e)}
      />
      <InputSnipper
        title="Number of Signals"
        value={noOfSignals}
        id="Signals2"
        readOnly
      />
    </div>
  );
};

export default Calculator;
