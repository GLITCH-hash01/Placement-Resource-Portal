export default function Button({ onClick, children, icon }) {
  return (
    <>
      <button
        onClick={onClick}
        className="bg-primary hover:bg-secondary transition-all duration-150 delay-100 ease-in-out px-8 border-2 rounded-xl text-2xl font-primary font-bold border-black py-2 cursor-pointer flex items-center justify-center w-fit gap-3"
        style={{ boxShadow: "0px 4px 0px 0px #000" }}>
        {children}
        {icon && icon}
      </button>
    </>
  );
}
