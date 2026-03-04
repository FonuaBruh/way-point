import WayPointIcon from "../../components/ui/Icons/WayPointIcon/WayPointIcon";
import Header from "../../layout/Header/Header";
import Main from "../../layout/Main/Main";
import Title from "../../modules/home/Title/Title";

export default function Home() {
  return (
    <>
      <Header>
        <WayPointIcon />
        <Title />
      </Header>
      <Main>123</Main>
    </>
  );
}
