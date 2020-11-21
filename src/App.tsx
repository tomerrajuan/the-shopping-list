import React from "react";
import List from "./components/items-list/items-list";
import Navbar from "./components/navbar/navbar";
import Searchbar from "./components/searchbar/searchbar";
function App() {
  return (
    <div className="app">
      <Navbar/>
      <h1>Shopping List</h1>
      <Searchbar />
      <List />
      <div className="linkin-icons">
      <a target="_blank" href="https://icons8.com/icons/set/apple" rel="noreferrer">Apple icon</a> icon by <a target="_blank" rel="noreferrer" href="https://icons8.com">Icons8</a>
      </div>
    </div>
  );
}
export default App;

// const [direction, setDirection] = React.useState(false);

// const isRTL = (handleSubmit: string) => {
//   var ltrChars =
//       "A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02B8\u0300-\u0590\u0800-\u1FFF" +
//       "\u2C00-\uFB1C\uFDFE-\uFE6F\uFEFD-\uFFFF",
//     rtlChars = "\u0591-\u07FF\uFB1D-\uFDFD\uFE70-\uFEFC",
//     rtlDirCheck = new RegExp("^[^" + ltrChars + "]*[" + rtlChars + "]");

//   return rtlDirCheck.test(handleSubmit);
// };
