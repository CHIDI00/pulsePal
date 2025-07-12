export const ButtonOne = ({ name, className }) => {
  return (
    <button
      className={`${className} capitalize flex items-center text-white rounded-2xl py-6 px-7 hover:scale-95 font-semibold bg-gradient-to-r from-green-500 to-green-400 text-3xl `}
    >
      {name}
    </button>
  );
};
