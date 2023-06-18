const Number: React.FC<Props> = ({ digits, label }) => {
  const stringDigit = digits < 10 ? "0" + digits.toString() : digits.toString();
  const digitArray = stringDigit.split("");

  return (
    <span className="text-center ">
      <div className="flex gap-x-1 text-xl md:text-4xl font-bold text-white ">
        {digitArray.map((digit, index) => (
          <div
            key={index}
            className="p-2 sm:p-4 bg-custom-brown text-center w-10 sm:w-14 rounded-md"
          >
            {digit}
          </div>
        ))}
      </div>
      <label className="leading-10 text-neutral-700 text-xs sm:text-base">{label}</label>
    </span>
  );
};

interface Props {
  digits: number;
  label: string;
}

export default Number;
