import React, { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import Cards from "../components/Cards";
import Jumbotron from "../components/Jumbotron";
import Navbar from "../components/Navbar";

function Storiespage() {
  const [data, setData] = useState([]);
  const [displayButton, setDisplayButton] = useState(false);
  const [currentOffset, setCurrentOffset] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const pageRef = useRef(null);

  const getData = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(
        `https://www.scoopwhoop.com/api/v4/read/all/?offset=${currentOffset}&limit=12`
      );
      const dataList = await response.json();
      setData([...data, ...dataList.data]);
      setIsLoading(false);
    } catch (error) {
      setData(data);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, [currentOffset]);

  return (
    <div
      ref={pageRef}
      className="Mainpage"
      onScroll={(e) => {
        const elem = e.target;
        if (elem.scrollHeight - elem.scrollTop - elem.clientHeight < 10) {
          getData(currentOffset+12)
          setCurrentOffset((prev) => prev + 12);
        }
        if (elem.scrollTop > 30) {
          setDisplayButton(true);
        } else {
          setDisplayButton(false);
        }
      }}
    >
      <Navbar />
      <Jumbotron />
      <div className="cardDisplay">
        {data.map((curElem) => {
          return <Cards curElem={curElem} />;
        })}
      </div>
      {isLoading && (
        <div className="spin">
        <div className="spinner-border spin" role="status">
        </div>
         <p>Loading...</p>
         </div>
      )}
      {displayButton && (
        <div
          className="scrollUp"
          onClick={() => {
            pageRef.current.scrollTo({
              top: 0,
              behavior: "smooth",
            });
          }}
        >
          <FontAwesomeIcon icon={faArrowUp} />
        </div>
      )}
    </div>
  );
}
export default Storiespage;
