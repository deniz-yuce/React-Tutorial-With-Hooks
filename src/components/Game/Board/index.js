import React from "react";
import { Row } from "./Row";
import { Square } from "./Square";

const ROW_NUM = 3;
const COL_NUM = 3;

function createArrayWithLength(n) {
  return Array.from(Array(n));
}

export function Board() {
  return (
    <div>
      {createArrayWithLength(ROW_NUM).map((_, rowIndex) => (
        <Row>
          {createArrayWithLength(COL_NUM).map((_, colIndex) => (
            <Square index={rowIndex * 3 + colIndex} />
          ))}
        </Row>
      ))}
    </div>
  );
}
