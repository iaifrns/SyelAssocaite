
const CustomInput = ({
  placeholder,
  value,
  onChange,
}: {
  placeholder: string;
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}) => {
  return (
    <input
      type="text"
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      className="p-4 focus:outline-none bg-[rgba(230,230,230)] w-full font-poppins"
    />
  );
};

export default CustomInput;
