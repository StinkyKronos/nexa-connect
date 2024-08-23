export default function CheckboxSearch({ title, value, isAuth, isGender }) {
  return (
    <div className="w-full h-fit relative">
      <input
        type="radio"
        id={title}
        name={isAuth ? "auth" : isGender ? "gender" : "sharing"}
        value={value}
        className="w-full h-full absolute appearance-none border-black/20 bg-[#FFF3ED] checked:border-[#FC813E] border-2"
      />
      <label
        htmlFor={title}
        className="w-full h-full flex flex-col justify-center items-center p-2"
      >
        <h3 className="poppins-medium w-fit select-none text-[#909090] z-10">
          {title}
        </h3>
      </label>
    </div>
  );
}
