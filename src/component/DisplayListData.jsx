import React, { useEffect, useState } from "react";

const DisplayListData = ({ data }) => {
  let [filtered, setFiltered] = useState([]);
  useEffect(() => {
    setFiltered(data);
  }, [data]);
  function FilterDatabasedOnDate(e) {
    let a = e.target.value;
    if (e.target.value == "all") {
      return setFiltered(data);
    } else {
      let found = data.filter((e) => {
        let x = new Date(e.date).getFullYear();
        return Number(x) == Number(a);
      });
      setFiltered(found);
    }
  }
  return (
    <div>
      <div className="selectOption">
        <select  className="optionAll"
          name=""
          id=""
          onChange={(e) => {
            FilterDatabasedOnDate(e);
          }}
        >
          <option value="all">All</option>
          {[
            ...new Set(
              data.map((items) => {
                return new Date(items.date).getFullYear();
              })
            ),
          ].map((items, i) => {
            return (
              <option value={items} key={i}>
                {items}
              </option>
            );
          })}
        </select>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", marginLeft:"9%" }}>
        <p> S.No</p>
        <p>Title</p>
        <p>Price</p>
        <p>Date</p>
      </div>
      {filtered.map((items, i) => {
        let month = new Date(items.date).getMonth();
        let monthStr = new Intl.DateTimeFormat("en-US", {
          month: "long",
        }).format(new Date(0, month));
        return (
          <>
            <div className="outputConatiner">
              <p style={{fontSize:"3em"}}>{i + 1}.</p>
              <p style={{fontSize:"3em"}}> {items.title}</p>
              <p style={{fontSize:"3em"}}>{items.price}</p>
              <div className="dateContainer">
                <span>{new Date(items.date).getDate()} </span>
                <span> {monthStr}</span>
                <span> {new Date(items.date).getFullYear()}</span>
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default DisplayListData;
