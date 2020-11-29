import React from "react";
import List from "./components/01-molecules/02-items-list/items-list";
// import Navbar from "./components/01-molecules/00-navbar/navbar";
import Searchbar from "./components/01-molecules/01-searchbar/searchbar";
function App() {
  return (
    <>
      <div className="app">
        {/* <Navbar /> */}
        <div className="search-section">
          <h1>Shopping List</h1>
          <Searchbar />
        </div>
        <List />
        <div className="a2a_kit a2a_kit_size_32 a2a_default_style share-buttons">
          {/* <a className="a2a_dd" href="https://www.addtoany.com/share"></a> */}
          <a className="a2a_button_whatsapp"></a>
          <a className="a2a_button_google_gmail"></a>
          <a className="a2a_button_sms"></a>
          <a className="a2a_button_facebook_messenger"></a>
        </div>
      </div>
      <div className="linkin-icons">
        list icons by{" "}
        <a target="_blank" rel="noreferrer" href="https://icons8.com">
          Icons8
        </a>
      </div>
    </>
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
