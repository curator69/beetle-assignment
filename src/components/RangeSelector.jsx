import { Slider } from "@/components/ui/slider";

const RangeSelector = ({
  title,
  min,
  max,
  defaultValue,
  valueselected,
  onValueChange,
}) => {
  return (
    <div className="flex flex-col gap-4 bg-[var(--light-purple)] p-4 rounded-xl">
      <label className="text-lg font-bold">{title}</label>
      <div className="flex gap-4">
        <p>{min}</p>
        <Slider
          defaultValue={[defaultValue]}
          max={100}
          step={1}
          onValueChange={onValueChange}
          valueselected={valueselected}
        ></Slider>
        <p>{max}</p>
      </div>
    </div>
  );
};

export default RangeSelector;
