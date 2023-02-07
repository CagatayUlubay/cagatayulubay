"use strict";
(() => {
var exports = {};
exports.id = 40;
exports.ids = [40];
exports.modules = {

/***/ 455:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

;// CONCATENATED MODULE: external "react"
const external_react_namespaceObject = require("react");
;// CONCATENATED MODULE: ./pages/api/users_back.tsx
 /**import clientPromise from "../../lib/mongodb";

export default async (req:any, res:any) => {
  try {
    const client = await clientPromise
    const db = client.db("trs")

    const users = await db
      .collection("users")
      .find({})
      .sort({})
      .toArray()

    res.json(users)
  } catch (e) {
    console.log(e)
  }
}**/ 


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(455));
module.exports = __webpack_exports__;

})();