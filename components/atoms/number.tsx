const Number: React.FC<Props> = ({ digits, label }) => {
  const stringDigit = digits < 10 ? "0" + digits.toString() : digits.toString();
  const digitArray = stringDigit.split("");

  return (
    <span className="text-center ">
      <div className="flex gap-x-1 text-xl md:text-4xl font-bold text-white pb-2">
        {digitArray.map((digit, index) => (
          <div
            key={index}
            className="p-2 sm:p-4 bg-custom-brown text-center w-10 sm:w-14 rounded-md"
          >
            {digit}
          </div>
        ))}
      </div>
      <label className="leading-10 text-white text-xs sm:text-base bg-neutral-900/30 px-2 rounded-lg">{label}</label>
    </span>
  );
};

interface Props {
  digits: number;
  label: string;
}

export default Number;
