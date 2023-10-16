export default function LabelInput({
  label,
  placeholder = null,
  type = "text",
  className,
}) {
  return (
    <div className="w-full h-fit flex flex-col gap-2">
      {label && (
        <label className="font-semibold uppercase text-[#555454]">
          {label}
        </label>
      )}
      <input
        type={type}
        placeholder={placeholder ? placeholder : ""}
        className={
          "outline-none border-[1px] border-[#D6D3D3] w-full px-4 py-2 " +
          className
        }
      />
    </div>
  );
}
