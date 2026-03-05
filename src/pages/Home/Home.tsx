import { motion } from "framer-motion";

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
        <motion.div
          initial={{ opacity: 0, x: 400 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="top-row">
            <WayPointIcon />
            <Title />
          </div>
        </motion.div>
      </Header>
      <MainContent>
        {isEventFormOpen && (
          <motion.div
            className="create-event-section-wrapper"
            initial={{
              opacity: 0,
              y: 100,
            }}
            animate={{ opacity: 1, y: 20 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="create-event-section">
              <CreateForm
                formType="createEvent"
                title={TEXTDATA.createEventFormTitle}
              />
            </div>
          </motion.div>
        )}
        {!isEventFormOpen && (
          <div className="welcome-section">
            <motion.div
              initial={{
                opacity: 0,
                y: -200,
              }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <Paragraph text={TEXTDATA.wayPointDesc} />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -500 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div className="createBtnWrapper">
                <Paragraph text={TEXTDATA.arrowToCreateEventBtn} />
                <HomePageButton
                  onClick={() => setIsEventFormOpen(true)}
                  text={TEXTDATA.createEventBtn}
                />
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 300 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div className="createBtnWrapper reverse">
                <Paragraph text={TEXTDATA.arrowToPrevEventsListBtn} />
                <HomePageButton
                  onClick={() => setIsEventFormOpen(false)}
                  text={TEXTDATA.prevEventsListBtn}
                />
              </div>
            </motion.div>
          </div>
        )}
      </MainContent>
    </>
  );
}
