function ArrowDown({ width, height, size, color, ...props }) {
  if (size) {
    width = size;
    height = size;
  }
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size ? size : width ? width : 10}
      height={size ? size : height ? height : 11}
      fill="none"
      viewBox="0 0 10 11"
      {...props}
    >
      <path fill={color ? color : "#fff"} d="M0 0l5 11 5-11H0z"></path>
    </svg>
  );
}

export default ArrowDown;
