import React, { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import Cards from "../components/Cards";
import Jumbotron from "../components/Jumbotron";
import Navbar from "../components/Navbar";

function Storiespage() {
  const [data, setData] = useState([]);
  const [currentOffset, setCurrentOffset] = useState(0);
  const pageRef = useRef(null);

  const getData = async () => {
    const response = await fetch(
      `https://www.scoopwhoop.com/api/v4/read/all/?offset=${currentOffset}&limit=12`
    );
    //    console.log(response)
    const dataList = await response.json();
    setData([...data, ...dataList.data]);
    //    console.log(dataList)
    console.log(pageRef.current?.clientHeight);
  };

  useEffect(() => {
    getData();
  }, [currentOffset]);

  return (
    <div
      ref={pageRef}
      className="Mainpage"
      onScroll={(e) => {
        console.log(e.currentTarget.scrollTop);
        const elem = e.target;
        if (elem.scrollHeight - elem.scrollTop - elem.clientHeight < 10) {
          console.log(elem.scrollTop, "top");
          console.log(elem.clientHeight, "clientheight");
          console.log(elem.scrollHeight, "scrollheight");
          console.log("end");
          setCurrentOffset((prev) => prev + 8);
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
      <div
        className="scrollUp"
        onClick={() => {
          pageRef.current.scrollTo(
            {
              top:0,
              behavior:"smooth"
            }
          
          )
          
        }}
        style={pageRef.current?.scrollTop > 40 ? {display:"block"} : { display: "none" }}
      >
        <FontAwesomeIcon icon={faArrowUp} />
      </div>
    </div>
  );
}
export default Storiespage;
