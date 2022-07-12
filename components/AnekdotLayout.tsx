interface Props {
  children: React.ReactNode;
}
import styles from "../styles/anekdot.module.scss";
export const AnekdotLayout = ({ children }: Props) => {
  return (
    <>
      <div>{children}</div>
    </>
  );
};
