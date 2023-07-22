/* eslint-disable react/prop-types */
import Footer from "../components/Footer";
import Header from "../components/Header";

const MasterLayout = (props) => {
  return (
    <>
      <Header></Header>
      <div>{props.children}</div>
      <Footer></Footer>
    </>
  );
};

export default MasterLayout;
