interface Props {
  children: React.ReactNode;
}
export const AnekdotLayout = ({ children }: Props) => {
  return (
    <>
      <h1>{children}</h1>
    </>
  );
};
