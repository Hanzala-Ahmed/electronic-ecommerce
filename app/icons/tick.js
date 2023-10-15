function Tick({ width, height, size, color, ...props }) {
  if (size) {
    width = size;
    height = size;
  }
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size ? size : width ? width : 29}
      height={size ? size : height ? height : 22}
      fill="none"
      viewBox="0 0 29 22"
    >
      <path
        fill={color ? color : "#fff"}
        d="M9.216 17.357l-6.875-6.841L0 12.829 9.216 22 29 2.313 26.675 0 9.216 17.357z"
      ></path>
    </svg>
  );
}

export default Tick;
