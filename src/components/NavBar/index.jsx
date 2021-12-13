import { Container } from "./styles";

const NavBar = ({ children, ...rest }) => {
  return (
    <>
      <Container {...rest}>{children}</Container>
    </>
  );
};

export default NavBar;
