export default function Box({ children, className = "", ...args }) {
  const newClassName = [
    "rounded-md border border-theme-border-light dark:border-theme-border-dark",
    className,
  ].join(" ");

  return (
    <div className={newClassName} {...args}>
      {children}
    </div>
  );
}
