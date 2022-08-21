import React, { Component } from "react";

function Counter(props) {
  const getBadgeClasses = () => {
    let classes = "badge m-2 badge-";
    classes += props.counter.value === 0 ? "warning" : "primary";
    return classes;
  };

  const formatCount = () => {
    const { value } = props.counter;
    return value === 0 ? "Zero" : value;
  };
    return (
      <div>
        <div className="row">
          <div className="">
            <span
              style={{ fontSize: 24 }}
              data-testid="number-display"
              className={getBadgeClasses()}
            >
              {formatCount()}
            </span>
          </div>
          <div className="">
            <button
              aria-label="increment"
              className="btn btn-secondary"
              onClick={() => props.onIncrement(props.counter)}
            >
              <i className="fa fa-plus-circle" aria-hidden="true" />
            </button>
            <button
              aria-label="decrement"
              className="btn btn-info m-2"
              onClick={() => props.onDecrement(props.counter)}
              disabled={props.counter.value === 0 ? "disabled" : ""}
            >
              <i className="fa fa-minus-circle" aria-hidden="true" />
            </button>
            <button
              className="btn btn-danger"
              onClick={() => props.onDelete(props.counter.id)}
            >
              <i className="fa fa-trash-o" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    );
}

export default Counter;
