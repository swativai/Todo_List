import React, { useState } from "react";

const Todo = () => {
  const [data, setData] = useState("");
  const [item, setItem] = useState([]);

  const addItem = () => {
    if (!data) {
      alert("Please Enter the value");
    } else {
      setItem([...item, data]);
      setData("");
    }
  };

  const removeItem = (id) => {
    const updateItem = item.filter((curEle, index) => {
      return index !== id;
    });
    setItem(updateItem);
  };

  return (
    <>
      <div className="w-[600px]  h-[600px] bg-black m-auto align-item-center rounde">
        <h2 className="text-center text-3xl font-bold text-blue-500 ">
          Todo List
        </h2>
        <div className="flex justify-center mt-[10px]">
          <input
            type="text"
            placeholder="Enter Todo Item"
            autoComplete="off"
            className="w-[300px]  h-[40px] rounded-md"
            value={data}
            onChange={(e) => setData(e.target.value)}
          />
          <button
            className="bg-blue-600 text-white p-2 rounded-md"
            onClick={addItem}
          >
            Add
          </button>
        </div>
        <div className="flex flex-col justify-center ">
          {item.map((curElem, id) => {
            return (
              <div className="bg-blue-700 flex  justify-evenly w-[200px] m-2">
                <p key={id} className="text-white text-center">
                  {curElem}
                </p>
                <button
                  className="bg-red-400 text-white  rounded-md "
                  onClick={() => removeItem(id)}
                >
                  Remove
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Todo;
