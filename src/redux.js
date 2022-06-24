import { selectCount, plus, minus } from "./counterSlice";
import { useSelector, useDispatch } from "react-redux";

const Redux = () => {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();
  return (
    <>
      hello this is the redux
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
