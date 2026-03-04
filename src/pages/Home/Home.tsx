import WayPointIcon from "../../components/ui/icons/WayPointIcon/WayPointIcon";
import Heading from "../../components/ui/text/Heading/Heading";
import WayPointDesc from "../../components/ui/text/WayPointDesc/WayPointDesc";
import Header from "../../layout/Header/Header";
import MainContent from "../../layout/MainContent/MainContent";
import Title from "../../components/ui/text/WayPointTitle/WayPointTitle";
import "./Home.css";
import CreateEventButton from "../../components/ui/buttons/CreateEventButton/CreateEventButton";
import CreateForm from "../../modules/shared/CreateForm/CreateForm";

export default function Home() {
  return (
    <>
      <Header>
        <div className="top-row">
          <WayPointIcon />
          <Title />
        </div>
        <WayPointDesc />
      </Header>
      <MainContent>
        <CreateEventButton text="Создать ивент" />
        <CreateForm formType="createEvent" title="Создать ивент" />
        <CreateForm
          formType="createShoppingList"
          title="Создать список покупок"
        />
        <Heading text="Созданные ивенты" />
      </MainContent>
    </>
  );
}
