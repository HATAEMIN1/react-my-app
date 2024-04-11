import React from "react";
import { createStore } from "redux";
import "./assets/css/tStyle.scss";
import { Provider, useSelector, useDispatch } from "react-redux";

//persist설정 lib
// import { persistStore, persistReducer } from "redux-persist";
// import storage from "redux-persist/lib/storage";
// import persistReducer from "redux-persist/es/persistReducer";

function reducer(state, action) {
  // console.log("init data " + state.num);
  console.log(action);
  if (action.type === "numUp") {
    return {
      ...state,
      num: state.num + action.payload,
      // title: state.title + action.payload,
    };
  }

  if (action.type === "titleModi") {
    return {
      ...state,
      title: action.payload,
    };
  }
  return state;
}
const initialState = {
  num: 100,
  title: "안녕하세요",
  content:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. In, blanditiis fugit distinctio alias natus reprehenderit incidunt asperiores error illo. Quam?",
};

//persist구성
// const persistConfig = {
//   key: "root",
//   storage,
// };

// const persistReducer2 = persistReducer(persistConfig, reducer);

const store = createStore(reducer, initialState);
// const store = createStore(persistReducer2);
// const persistor = persistStore(store);

function App() {
  return (
    <>
      <Provider store={store}>
        <div className="border p-4">
          <h3>title1</h3>
          <ChildOne />
        </div>
      </Provider>
    </>
  );
}

function ChildOne() {
  const title = useSelector((state) => {
    return state.title;
  });
  return (
    <>
      <div className="border p-4">
        <h3>childOne {title}</h3>
        <ChildTwo />
      </div>
    </>
  );
}

function ChildTwo() {
  // const num = useSelector((state) => {
  //   return state.num;
  // });
  // const content = useSelector((state) => {
  //   return state.content;
  // });
  // const { num, content } = useSelector((state) => {
  //   return state;
  // });
  const { num, content, title } = useSelector((state) => state);
  const dispatch = useDispatch();
  console.log("child trans : " + num);
  return (
    <>
      <div className="border p-4">
        <h3>ChildTwo</h3>
        number ({num})
        <br />
        title: {title}
        <br></br>
        <button
          className=" bg-blue-300 px-4 py-1 rounded-md hover:bg-blue-500 hover:text-white"
          onClick={() => {
            dispatch({ type: "numUp", payload: 1 });
          }}
        >
          아주 쉬운 클릭
        </button>
        <button
          onClick={() => {
            dispatch({ type: "titleModi", payload: "title변경됨" });
          }}
        >
          글자변경
        </button>
      </div>
    </>
  );
}

export default App;
