const InputSnipper = ({
  title,
  defaultValue,
  id,
  readOnly = false,
  onChange,
  value,
}) => {
  return (
    <div className="flex flex-col gap-4 bg-[var(--light-purple)] p-4 rounded-xl">
      <label htmlFor={id} className="text-lg font-bold">
        {title}
      </label>
      <input
        type="number"
        id={id}
        defaultValue={defaultValue}
        value={value}
        className="text-lg bg-[--light-purple] rounded-full p-4 outline-none"
        readOnly={readOnly}
        onChange={onChange}
      />
    </div>
  );
};

export default InputSnipper;
