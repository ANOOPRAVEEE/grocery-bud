import { useState } from "react";

const SingleItem = ({ id, name, completed, removeItem, editItem }) => {


  return (
    <div className="single-item">
      <input
        type="checkbox"
        checked={completed}
        onChange={() => {
            editItem(id);
        }}
      />
      <p
        style={{
          textTransform: "capitalize",
          textDecoration: completed && "line-through",
        }}
      >
        {name}
      </p>
      <button
        onClick={() => removeItem(id)}
        className="btn remove-btn"
        type="button"
      >
        delete
      </button>
    </div>
  );
};

export default SingleItem;
