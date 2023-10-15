function MenuIcon({ width, height, size, color, ...props }) {
  if (size) {
    width = size;
    height = size;
  }
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size ? size : width ? width : 24}
      height={size ? size : height ? height : 24}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color ? color : "#fff"}
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      class="feather feather-menu"
    >
      <line x1="3" y1="12" x2="21" y2="12"></line>
      <line x1="3" y1="6" x2="21" y2="6"></line>
      <line x1="3" y1="18" x2="21" y2="18"></line>
    </svg>
  );
}

export default MenuIcon;
