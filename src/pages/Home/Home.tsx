import WayPointIcon from "../../components/ui/icons/WayPointIcon/WayPointIcon";
import Paragraph from "../../components/ui/text/Paragraph/Paragraph";
import Header from "../../layout/Header/Header";
import MainContent from "../../layout/MainContent/MainContent";
import Title from "../../components/ui/text/WayPointTitle/WayPointTitle";
import HomePageButton from "../../components/ui/buttons/HomePageButton/HomePageButton";
import CreateForm from "../../modules/shared/CreateForm/CreateForm";
import { TEXTDATA } from "./textData";

import "./Home.css";
import { useState } from "react";

export default function Home() {
  const [isEventFormOpen, setIsEventFormOpen] = useState(false);

  return (
    <>
      <Header>
        <div className="top-row">
          <WayPointIcon />
          <Title />
        </div>
        <Paragraph text={TEXTDATA.wayPointHeaderDesc} />
      </Header>
      <MainContent>
        {isEventFormOpen && (
          <div className="create-event-section">
            <CreateForm
              formType="createEvent"
              title={TEXTDATA.createEventFormTitle}
            />
          </div>
        )}
        {!isEventFormOpen && (
          <div className="welcome-section">
            <Paragraph text={TEXTDATA.wayPointDesc} />
            <div className="createBtnWrapper">
              <Paragraph text={TEXTDATA.arrowToCreateEventBtn} />
              <HomePageButton
                onClick={() => setIsEventFormOpen(true)}
                text={TEXTDATA.createEventBtn}
              />
            </div>
            <div className="createBtnWrapper reverse">
              <Paragraph text={TEXTDATA.arrowToPrevEventsListBtn} />
              <HomePageButton
                onClick={() => setIsEventFormOpen(false)}
                text={TEXTDATA.prevEventsListBtn}
              />
            </div>
          </div>
        )}
      </MainContent>
    </>
  );
}
