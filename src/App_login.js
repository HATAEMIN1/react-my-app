import React from "react";
// import "./assets/css/style.scss";
import "./assets/css/tStyle.scss";

function App() {
  return (
    <>
      {/* <div className="container mx-auto bg-gray-500 p-4 rounded text-white grid grid-cols-1 md:grid-cols-3 gap-4 mt-5">
        <div className="bg-sb-300 rounded-md p-4">test1</div>
        <div className="bg-sb-300 rounded-md p-4">test2</div>
        <div className="bg-sb-300 rounded-md p-4">test3</div>
        <div className="bg-sb-300 rounded-md p-4 md:hidden">test4</div>
      </div> */}
      <section className="flex bg-gray-700 mt-20 max-w-[400px] m-auto">
        <div className="bg-white shadow-md rounded-md border p-6 w-full">
          <h1 className="text-center text-2xl font-semibold mb-4">로그인</h1>
          <hr className="mb-4"></hr>
          <div className="mb-6">
            <label
              htmlFor="email"
              className="text-sm font-semibold text-gray-500 flex mb-2"
            >
              이메일
            </label>
            <input
              type="text"
              id="email"
              className="w-full bg-white border rounded-md p-2 text-xs"
              placeholder="이메일을 입력하세요"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="pwd"
              className="text-sm font-semibold text-gray-500 flex mb-2"
            >
              패스워드
            </label>
            <input
              type="text"
              id="pwd"
              className="w-full bg-white border rounded-md p-2 text-xs"
              placeholder="패스워드을 입력하세요"
            />
          </div>
          <button className="w-full text-xs text-white bg-gray-800 px-4 py-2 rounded-md hover:bg-gray-600">
            회원가입
          </button>
        </div>
      </section>
    </>
  );
}

export default App;
