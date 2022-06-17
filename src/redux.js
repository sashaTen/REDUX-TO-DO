import { selectCount, plus, minus } from "./counterSlice";
import { useSelector, useDispatch } from "react-redux";

const Redux = () => {
  const dispatch = useDispatch();
  const count = useSelector(selectCount);
  return (
    <>
      hello redux
      <button
        onClick={() => {
          dispatch(plus());
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          dispatch(minus());
        }}
      >
        -
      </button>
      {count}
    </>
  );
};

export default Redux;
