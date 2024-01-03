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
      <div>
        <select
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
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr " }}>
        <p> S.No</p>
        <p>Title</p>
        <p>Price</p>
        <p>Date</p>
      </div>
      {filtered.map((items,i) => {
         let month = new Date(items.date).getMonth();
         let monthStr = new Intl.DateTimeFormat("en-US", {
           month: "long",
         }).format(new Date(0, month));
        return (
          <>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr 1fr 1fr",
              }}
            >
                <p>{i+1}.</p>
              <p> {items.title}</p>
              <p>{items.price}</p>
              <div className="dateContainer">
                <p>{new Date(items.date).getDate()} </p>
                <p> {monthStr}</p>
                <p> {new Date(items.date).getFullYear()}</p>
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default DisplayListData;
