export default function Button({
  children,
  className = "",
  secondary = false,
  type = "button",
  onClick = () => {},
  ...args
}) {
  const newClassName = [
    "px-4 py-2 text-white border-theme-border-light dark:border-theme-border-dark rounded-lg cursor-pointer  transition-colors",
    secondary
      ? " bg-theme-secondary-light hover:bg-theme-secondary-hover-light dark:bg-theme-secondary-dark dark:hover:bg-theme-secondary-hover-dark"
      : " bg-theme-primary-light hover:bg-theme-primary-hover-light dark:bg-theme-primary-dark dark:hover:bg-theme-primary-hover-dark",
    className,
  ].join(" ");

  return (
    <button {...args} className={newClassName} onClick={onClick} type={type}>
      {children}
    </button>
  );
}
