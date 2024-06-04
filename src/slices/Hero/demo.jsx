import React from "react";

const demo = () => {
  return <div>demo</div>;
};

function Square() {
  return <div></div>;
}

function Board() {
  return (
    <div>
      <div></div>
      <div></div>
      <button></button>
      <div>
        <div>
          <Square />
          <Square />
          <Square />
        </div>
        <div>
          <Square />
          <Square />
          <Square />
        </div>
        <div>
          <Square />
          <Square />
          <Square />
        </div>
      </div>
    </div>
  );
}

function Game() {
  return (
    <div>
      <div>
        <Board />
      </div>
    </div>
  );
}

export default demo;
