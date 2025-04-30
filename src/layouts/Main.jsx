export default function Main({ children, ...args }) {
  return (
    <>
      <main {...args}>{children}</main>
    </>
  );
}
