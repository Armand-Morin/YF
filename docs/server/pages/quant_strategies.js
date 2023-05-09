"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/quant_strategies";
exports.ids = ["pages/quant_strategies"];
exports.modules = {

/***/ "./pages/quant_strategies.js":
/*!***********************************!*\
  !*** ./pages/quant_strategies.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/*\nimport React, { useState } from \"react\";\nimport { SimpleStorage } from \"../abi/abi.js\";\nimport Web3 from \"web3\";\nimport styles from \"../styles/App.module.css\";\n\n// Access our wallet inside of our dapp\nconst web3 = new Web3(Web3.givenProvider);\n// Contract address of the deployed smart contract\nconst contractAddress = \"0xb22D5A8F226262CAF376bA123342F8f3eeCdb463\";\nconst storageContract = web3.eth.Contract(SimpleStorage, contractAddress);\n\nfunction App() {\n  // Hold variables that will interact with our contract and frontend\n  const [number, setUint] = useState(0);\n  const [getNumber, setGet] = useState(\"0\");\n  \n  const numberSet = async (t) => {\n    t.preventDefault();\n    const accounts = await window.ethereum.enable();\n    const account = accounts[0];\n    // Get permission to access user funds to pay for gas fees\n    const gas = await storageContract.methods.set(number).estimateGas();\n    const post = await storageContract.methods.set(number).send({\n      from: account,\n      gas,\n    });\n  };\n\n  const numberGet = async (t) => {\n    t.preventDefault();\n    const post = await storageContract.methods.get().call();\n    setGet(post);\n  };\n  \n  return (\n     <div className={styles.main}>\n       <div className={styles.card}>\n         <form className={styles.form} onSubmit={numberSet}>\n           <label>\n             Set your uint256:\n             <input\n               className=\"input\"\n               type=\"text\"\n               name=\"name\"\n               onChange={(t) => setUint(t.target.value)}\n             />\n           </label>\n           <button className={styles.button} type=\"submit\" value=\"Confirm\">\n             Confirm\n           </button>\n         </form>\n         <br />\n         <button className={styles.button} onClick={numberGet} type=\"button\">\n           Get your uint256\n         </button>\n         {getNumber}\n       </div>\n     </div>\n  );\n}\n\nexport default App;\n*/ \n\nfunction StPage() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Staking\"\n            }, void 0, false, {\n                fileName: \"/Users/armandmorin/Documents/Blockchain - Projects/copy/pages/quant_strategies.js\",\n                lineNumber: 71,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: \"This is the Staking page.\"\n            }, void 0, false, {\n                fileName: \"/Users/armandmorin/Documents/Blockchain - Projects/copy/pages/quant_strategies.js\",\n                lineNumber: 72,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/armandmorin/Documents/Blockchain - Projects/copy/pages/quant_strategies.js\",\n        lineNumber: 70,\n        columnNumber: 5\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (StPage);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9xdWFudF9zdHJhdGVnaWVzLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQStEQSxHQUVBO0FBQTBCO0FBRTFCLFNBQVNDLFNBQVM7SUFDaEIscUJBQ0UsOERBQUNDOzswQkFDQyw4REFBQ0M7MEJBQUc7Ozs7OzswQkFDSiw4REFBQ0M7MEJBQUU7Ozs7Ozs7Ozs7OztBQUdUO0FBRUEsaUVBQWVILE1BQU1BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ZRi8uL3BhZ2VzL3F1YW50X3N0cmF0ZWdpZXMuanM/ZWQ1YiJdLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBTaW1wbGVTdG9yYWdlIH0gZnJvbSBcIi4uL2FiaS9hYmkuanNcIjtcbmltcG9ydCBXZWIzIGZyb20gXCJ3ZWIzXCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi9zdHlsZXMvQXBwLm1vZHVsZS5jc3NcIjtcblxuLy8gQWNjZXNzIG91ciB3YWxsZXQgaW5zaWRlIG9mIG91ciBkYXBwXG5jb25zdCB3ZWIzID0gbmV3IFdlYjMoV2ViMy5naXZlblByb3ZpZGVyKTtcbi8vIENvbnRyYWN0IGFkZHJlc3Mgb2YgdGhlIGRlcGxveWVkIHNtYXJ0IGNvbnRyYWN0XG5jb25zdCBjb250cmFjdEFkZHJlc3MgPSBcIjB4YjIyRDVBOEYyMjYyNjJDQUYzNzZiQTEyMzM0MkY4ZjNlZUNkYjQ2M1wiO1xuY29uc3Qgc3RvcmFnZUNvbnRyYWN0ID0gd2ViMy5ldGguQ29udHJhY3QoU2ltcGxlU3RvcmFnZSwgY29udHJhY3RBZGRyZXNzKTtcblxuZnVuY3Rpb24gQXBwKCkge1xuICAvLyBIb2xkIHZhcmlhYmxlcyB0aGF0IHdpbGwgaW50ZXJhY3Qgd2l0aCBvdXIgY29udHJhY3QgYW5kIGZyb250ZW5kXG4gIGNvbnN0IFtudW1iZXIsIHNldFVpbnRdID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IFtnZXROdW1iZXIsIHNldEdldF0gPSB1c2VTdGF0ZShcIjBcIik7XG4gIFxuICBjb25zdCBudW1iZXJTZXQgPSBhc3luYyAodCkgPT4ge1xuICAgIHQucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCBhY2NvdW50cyA9IGF3YWl0IHdpbmRvdy5ldGhlcmV1bS5lbmFibGUoKTtcbiAgICBjb25zdCBhY2NvdW50ID0gYWNjb3VudHNbMF07XG4gICAgLy8gR2V0IHBlcm1pc3Npb24gdG8gYWNjZXNzIHVzZXIgZnVuZHMgdG8gcGF5IGZvciBnYXMgZmVlc1xuICAgIGNvbnN0IGdhcyA9IGF3YWl0IHN0b3JhZ2VDb250cmFjdC5tZXRob2RzLnNldChudW1iZXIpLmVzdGltYXRlR2FzKCk7XG4gICAgY29uc3QgcG9zdCA9IGF3YWl0IHN0b3JhZ2VDb250cmFjdC5tZXRob2RzLnNldChudW1iZXIpLnNlbmQoe1xuICAgICAgZnJvbTogYWNjb3VudCxcbiAgICAgIGdhcyxcbiAgICB9KTtcbiAgfTtcblxuICBjb25zdCBudW1iZXJHZXQgPSBhc3luYyAodCkgPT4ge1xuICAgIHQucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCBwb3N0ID0gYXdhaXQgc3RvcmFnZUNvbnRyYWN0Lm1ldGhvZHMuZ2V0KCkuY2FsbCgpO1xuICAgIHNldEdldChwb3N0KTtcbiAgfTtcbiAgXG4gIHJldHVybiAoXG4gICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubWFpbn0+XG4gICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jYXJkfT5cbiAgICAgICAgIDxmb3JtIGNsYXNzTmFtZT17c3R5bGVzLmZvcm19IG9uU3VibWl0PXtudW1iZXJTZXR9PlxuICAgICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgICAgU2V0IHlvdXIgdWludDI1NjpcbiAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImlucHV0XCJcbiAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgIG5hbWU9XCJuYW1lXCJcbiAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsodCkgPT4gc2V0VWludCh0LnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAgLz5cbiAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5idXR0b259IHR5cGU9XCJzdWJtaXRcIiB2YWx1ZT1cIkNvbmZpcm1cIj5cbiAgICAgICAgICAgICBDb25maXJtXG4gICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgPGJyIC8+XG4gICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLmJ1dHRvbn0gb25DbGljaz17bnVtYmVyR2V0fSB0eXBlPVwiYnV0dG9uXCI+XG4gICAgICAgICAgIEdldCB5b3VyIHVpbnQyNTZcbiAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAge2dldE51bWJlcn1cbiAgICAgICA8L2Rpdj5cbiAgICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFwcDtcbiovXG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmZ1bmN0aW9uIFN0UGFnZSgpIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGgxPlN0YWtpbmc8L2gxPlxuICAgICAgPHA+VGhpcyBpcyB0aGUgU3Rha2luZyBwYWdlLjwvcD5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgU3RQYWdlO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwiU3RQYWdlIiwiZGl2IiwiaDEiLCJwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/quant_strategies.js\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/quant_strategies.js"));
module.exports = __webpack_exports__;

})();