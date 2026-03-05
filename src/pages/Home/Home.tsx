import WayPointIcon from "../../components/ui/icons/WayPointIcon/WayPointIcon";
import Heading from "../../components/ui/text/Heading/Heading";
import WayPointDesc from "../../components/ui/text/WayPointDesc/WayPointDesc";
import Header from "../../layout/Header/Header";
import MainContent from "../../layout/MainContent/MainContent";
import Title from "../../components/ui/text/WayPointTitle/WayPointTitle";
import CreateEventButton from "../../components/ui/buttons/CreateEventButton/CreateEventButton";
import CreateForm from "../../modules/shared/CreateForm/CreateForm";
import { TEXTDATA } from "./textData";

import "./Home.css";

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
        <CreateEventButton text={TEXTDATA.createEventBtn} />
        <CreateForm
          formType="createEvent"
          title={TEXTDATA.createEventFormTitle}
        />
        <CreateForm
          formType="createShoppingList"
          title={TEXTDATA.createShoppingListFormTitle}
        />
        <Heading text={TEXTDATA.createdEventsHeading} />
      </MainContent>
    </>
  );
}
