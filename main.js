/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/index.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/index.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `*{
    padding:0;
    margin:0;
    box-sizing: border-box;
}
body{
    font-size:20px;
    height:100vh;
    padding:2em;
    width:90vw;
    margin: auto;
}
.header{
    text-align: center;
}
li {
    list-style-type: none;
}
.content{
    padding:1.5em;
    display: grid;
    grid-template-columns: 1fr 3fr;
    min-height: 80vh;
    
}
.projects-container,.project-tasks-container{
    padding:2em;
    border-radius: .2em;
}
.project-task-list>li,.projects-list>li{
    margin:.8em 2em 0em 2em;
    display: flex;
    align-items: center;
    i{
        margin-right:.3em;
    }
}   
.project-task-list li{
    display: flex;
    padding:1em;
    background-color: white;
    border-radius: .5em;
}
.projects-container{
    background-color: aliceblue;
}
.project-tasks-container{
    background-color:lavenderblush;
}
.project-tasks-container h3 {
    margin:1em 0em;
}
.projects-header,.tasks-header{
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.toggle-form-btn{
    font-size: 2em;
    color:black;
    border: none;
    background-color: inherit;
    &:hover{
        cursor: pointer;
    }
}
.toggle-taskform-btn{
    padding:.5em;
    font-size: 1em;
    border-radius: .2em;
    background-color:lavenderblush;
    border:1px solid cadetblue;
    &:hover{
        cursor: pointer;
    }
}
.task-keys,.project-task-list li{
    display: grid;
    gap:1em;
    grid-template-columns: repeat(4,1fr);
}
.task-keys{
    padding:1em;
}
.new-project-input {
    background: transparent;
    border: 0;
    border-bottom: 1px solid black;
    font-size: inherit;
    outline: none;
    padding: 0.25em;
}
.add-project-form{
    margin:1em;
    display: none;
}  
.add-project-btn{
    padding:.3em;
    font-size: .8em;
    border-radius:5px;
    &:hover{
        cursor: pointer;
    }
}
.task-form{
   display: flex;
   flex-direction: column;
   padding:1em;
   margin:auto;
}
.task-form input,#priority{
    padding: .5em;
    font-size: .8em;
    border-radius: 5px;
    margin-bottom: 1em;
}
.add-task-btn{
    padding:1em;
    font-size:1em;
}
#modal {
    position: relative;
    top: 60%;        
    left:50%;        
    transform: translateY(-50%);
    background-color: white; 
    padding:.5em;   
    width:25em;
    border: 5px solid #ccfbf1;
}
.hide-form{
    background-color: red;
    color:white;
    position: absolute;
    top:0;
    right:0;
    font-size:1em;
    padding:.5em;
    border-radius: 2px;
    &:hover{
        cursor: pointer;
    }
}
.project-list-item.active{
    border-radius: 10px;
    box-shadow: none;
    border:1px solid green;
    transform: scale(1.1);
}

.fa-regular{
    font-size:1.6em;
}
.project-task-list>.complete{
    text-decoration:line-through;
    color:grey;
    opacity:.5;   
}
.functions-div{
    i{
        margin-left:3em;
        &:hover{
            cursor: pointer;
        }
    }
}
.low{
    border-left:30px solid #dc2626;
}
.medium{
    border-left: 30px solid #f59e0b;
}
.high{
    border-left: 30px solid green;
}
.task-list-item{
    display: flex;
    align-items: center;
    i{
        margin-right:.5em;
        font-size:2em;
        &:hover{
            cursor: pointer;
        }
    }
   
}
.project-list-item{
    padding:.5em;
    display: flex;
    justify-content: space-between;
    border-radius: 10px;
    box-shadow: 0 0 7px 2px #d1d5db;
    &:hover{
        cursor:pointer;
    }
}

/* MEDIA QUAERIES */
@media screen and (max-width:1590px){
    body{
        font-size:18px;
    }
    .functions-div{
        display: flex;
        i{
            margin-left:1em;
            &:hover{
                cursor: pointer;
            }
        }
    }
    .project-task-list>li{
        padding:.5rem;
    }

}
@media screen and (max-width:1280px){
    body{
        font-size:16px;
        width:100vw;
    }
    .projects-container{
        padding:2rem;
    }
   
    .project-list-item{
        padding:.5rem;
    }
    .add-project-form{
        padding:.1rem;
    }
    .new-project-input{
        width:9rem;
    }
}
@media screen and (max-width:860px){
    .content{
        padding:1.5em;
        display: flex;
        flex-direction: column;
        min-height: 90vh;
        padding:1rem;
    }
    .project-tasks-container{
        min-height:50vh;
    }
    .new-project-input{
        width:15rem;
    }
   
}
@media screen and (max-width:630px) {
    body{
        width:100vw;
        padding:.1rem;
        font-size:13px;
    }
    .content{
        padding:.5rem;
    }
    #modal{
        top:50%;
        left:5%;
    }
    .new-project-input{
        width:8rem;
    }
    .projects-list{
        display: grid;
        grid-template-columns: repeat(2,1fr);
        gap:.1rem;
        padding:0;
    }
    .project-task-list>li,.projects-list>li{
        margin:.2rem .5rem 0rem .5rem;
        display: flex;
        align-items: center;
        i{
            margin-right:.3em;
        }
    }  
    .tasks-container{
        padding:0;
    }
    .project-list-item{
        padding:.2rem;
    }
    .project-tasks-container{
        padding:1rem;
        min-height:60vh;
    }
    .toggle-taskform-btn{
        padding:.2rem;
    }
    .description-header{
        display: none;
    }
    .task-keys,.project-task-list>li{
        padding:.5rem;
        display: flex;
        justify-content: space-between;
    }
    .desc-key{
        display: none;
    }
    .low{
        border-left:10px solid #dc2626;
    }
    .medium{
        border-left: 10px solid #f59e0b;
    }
    .high{
        border-left: 10px solid green;
    }

}`, "",{"version":3,"sources":["webpack://./src/index.css"],"names":[],"mappings":"AAAA;IACI,SAAS;IACT,QAAQ;IACR,sBAAsB;AAC1B;AACA;IACI,cAAc;IACd,YAAY;IACZ,WAAW;IACX,UAAU;IACV,YAAY;AAChB;AACA;IACI,kBAAkB;AACtB;AACA;IACI,qBAAqB;AACzB;AACA;IACI,aAAa;IACb,aAAa;IACb,8BAA8B;IAC9B,gBAAgB;;AAEpB;AACA;IACI,WAAW;IACX,mBAAmB;AACvB;AACA;IACI,uBAAuB;IACvB,aAAa;IACb,mBAAmB;IACnB;QACI,iBAAiB;IACrB;AACJ;AACA;IACI,aAAa;IACb,WAAW;IACX,uBAAuB;IACvB,mBAAmB;AACvB;AACA;IACI,2BAA2B;AAC/B;AACA;IACI,8BAA8B;AAClC;AACA;IACI,cAAc;AAClB;AACA;IACI,aAAa;IACb,mBAAmB;IACnB,8BAA8B;AAClC;AACA;IACI,cAAc;IACd,WAAW;IACX,YAAY;IACZ,yBAAyB;IACzB;QACI,eAAe;IACnB;AACJ;AACA;IACI,YAAY;IACZ,cAAc;IACd,mBAAmB;IACnB,8BAA8B;IAC9B,0BAA0B;IAC1B;QACI,eAAe;IACnB;AACJ;AACA;IACI,aAAa;IACb,OAAO;IACP,oCAAoC;AACxC;AACA;IACI,WAAW;AACf;AACA;IACI,uBAAuB;IACvB,SAAS;IACT,8BAA8B;IAC9B,kBAAkB;IAClB,aAAa;IACb,eAAe;AACnB;AACA;IACI,UAAU;IACV,aAAa;AACjB;AACA;IACI,YAAY;IACZ,eAAe;IACf,iBAAiB;IACjB;QACI,eAAe;IACnB;AACJ;AACA;GACG,aAAa;GACb,sBAAsB;GACtB,WAAW;GACX,WAAW;AACd;AACA;IACI,aAAa;IACb,eAAe;IACf,kBAAkB;IAClB,kBAAkB;AACtB;AACA;IACI,WAAW;IACX,aAAa;AACjB;AACA;IACI,kBAAkB;IAClB,QAAQ;IACR,QAAQ;IACR,2BAA2B;IAC3B,uBAAuB;IACvB,YAAY;IACZ,UAAU;IACV,yBAAyB;AAC7B;AACA;IACI,qBAAqB;IACrB,WAAW;IACX,kBAAkB;IAClB,KAAK;IACL,OAAO;IACP,aAAa;IACb,YAAY;IACZ,kBAAkB;IAClB;QACI,eAAe;IACnB;AACJ;AACA;IACI,mBAAmB;IACnB,gBAAgB;IAChB,sBAAsB;IACtB,qBAAqB;AACzB;;AAEA;IACI,eAAe;AACnB;AACA;IACI,4BAA4B;IAC5B,UAAU;IACV,UAAU;AACd;AACA;IACI;QACI,eAAe;QACf;YACI,eAAe;QACnB;IACJ;AACJ;AACA;IACI,8BAA8B;AAClC;AACA;IACI,+BAA+B;AACnC;AACA;IACI,6BAA6B;AACjC;AACA;IACI,aAAa;IACb,mBAAmB;IACnB;QACI,iBAAiB;QACjB,aAAa;QACb;YACI,eAAe;QACnB;IACJ;;AAEJ;AACA;IACI,YAAY;IACZ,aAAa;IACb,8BAA8B;IAC9B,mBAAmB;IACnB,+BAA+B;IAC/B;QACI,cAAc;IAClB;AACJ;;AAEA,mBAAmB;AACnB;IACI;QACI,cAAc;IAClB;IACA;QACI,aAAa;QACb;YACI,eAAe;YACf;gBACI,eAAe;YACnB;QACJ;IACJ;IACA;QACI,aAAa;IACjB;;AAEJ;AACA;IACI;QACI,cAAc;QACd,WAAW;IACf;IACA;QACI,YAAY;IAChB;;IAEA;QACI,aAAa;IACjB;IACA;QACI,aAAa;IACjB;IACA;QACI,UAAU;IACd;AACJ;AACA;IACI;QACI,aAAa;QACb,aAAa;QACb,sBAAsB;QACtB,gBAAgB;QAChB,YAAY;IAChB;IACA;QACI,eAAe;IACnB;IACA;QACI,WAAW;IACf;;AAEJ;AACA;IACI;QACI,WAAW;QACX,aAAa;QACb,cAAc;IAClB;IACA;QACI,aAAa;IACjB;IACA;QACI,OAAO;QACP,OAAO;IACX;IACA;QACI,UAAU;IACd;IACA;QACI,aAAa;QACb,oCAAoC;QACpC,SAAS;QACT,SAAS;IACb;IACA;QACI,6BAA6B;QAC7B,aAAa;QACb,mBAAmB;QACnB;YACI,iBAAiB;QACrB;IACJ;IACA;QACI,SAAS;IACb;IACA;QACI,aAAa;IACjB;IACA;QACI,YAAY;QACZ,eAAe;IACnB;IACA;QACI,aAAa;IACjB;IACA;QACI,aAAa;IACjB;IACA;QACI,aAAa;QACb,aAAa;QACb,8BAA8B;IAClC;IACA;QACI,aAAa;IACjB;IACA;QACI,8BAA8B;IAClC;IACA;QACI,+BAA+B;IACnC;IACA;QACI,6BAA6B;IACjC;;AAEJ","sourcesContent":["*{\n    padding:0;\n    margin:0;\n    box-sizing: border-box;\n}\nbody{\n    font-size:20px;\n    height:100vh;\n    padding:2em;\n    width:90vw;\n    margin: auto;\n}\n.header{\n    text-align: center;\n}\nli {\n    list-style-type: none;\n}\n.content{\n    padding:1.5em;\n    display: grid;\n    grid-template-columns: 1fr 3fr;\n    min-height: 80vh;\n    \n}\n.projects-container,.project-tasks-container{\n    padding:2em;\n    border-radius: .2em;\n}\n.project-task-list>li,.projects-list>li{\n    margin:.8em 2em 0em 2em;\n    display: flex;\n    align-items: center;\n    i{\n        margin-right:.3em;\n    }\n}   \n.project-task-list li{\n    display: flex;\n    padding:1em;\n    background-color: white;\n    border-radius: .5em;\n}\n.projects-container{\n    background-color: aliceblue;\n}\n.project-tasks-container{\n    background-color:lavenderblush;\n}\n.project-tasks-container h3 {\n    margin:1em 0em;\n}\n.projects-header,.tasks-header{\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n}\n.toggle-form-btn{\n    font-size: 2em;\n    color:black;\n    border: none;\n    background-color: inherit;\n    &:hover{\n        cursor: pointer;\n    }\n}\n.toggle-taskform-btn{\n    padding:.5em;\n    font-size: 1em;\n    border-radius: .2em;\n    background-color:lavenderblush;\n    border:1px solid cadetblue;\n    &:hover{\n        cursor: pointer;\n    }\n}\n.task-keys,.project-task-list li{\n    display: grid;\n    gap:1em;\n    grid-template-columns: repeat(4,1fr);\n}\n.task-keys{\n    padding:1em;\n}\n.new-project-input {\n    background: transparent;\n    border: 0;\n    border-bottom: 1px solid black;\n    font-size: inherit;\n    outline: none;\n    padding: 0.25em;\n}\n.add-project-form{\n    margin:1em;\n    display: none;\n}  \n.add-project-btn{\n    padding:.3em;\n    font-size: .8em;\n    border-radius:5px;\n    &:hover{\n        cursor: pointer;\n    }\n}\n.task-form{\n   display: flex;\n   flex-direction: column;\n   padding:1em;\n   margin:auto;\n}\n.task-form input,#priority{\n    padding: .5em;\n    font-size: .8em;\n    border-radius: 5px;\n    margin-bottom: 1em;\n}\n.add-task-btn{\n    padding:1em;\n    font-size:1em;\n}\n#modal {\n    position: relative;\n    top: 60%;        \n    left:50%;        \n    transform: translateY(-50%);\n    background-color: white; \n    padding:.5em;   \n    width:25em;\n    border: 5px solid #ccfbf1;\n}\n.hide-form{\n    background-color: red;\n    color:white;\n    position: absolute;\n    top:0;\n    right:0;\n    font-size:1em;\n    padding:.5em;\n    border-radius: 2px;\n    &:hover{\n        cursor: pointer;\n    }\n}\n.project-list-item.active{\n    border-radius: 10px;\n    box-shadow: none;\n    border:1px solid green;\n    transform: scale(1.1);\n}\n\n.fa-regular{\n    font-size:1.6em;\n}\n.project-task-list>.complete{\n    text-decoration:line-through;\n    color:grey;\n    opacity:.5;   \n}\n.functions-div{\n    i{\n        margin-left:3em;\n        &:hover{\n            cursor: pointer;\n        }\n    }\n}\n.low{\n    border-left:30px solid #dc2626;\n}\n.medium{\n    border-left: 30px solid #f59e0b;\n}\n.high{\n    border-left: 30px solid green;\n}\n.task-list-item{\n    display: flex;\n    align-items: center;\n    i{\n        margin-right:.5em;\n        font-size:2em;\n        &:hover{\n            cursor: pointer;\n        }\n    }\n   \n}\n.project-list-item{\n    padding:.5em;\n    display: flex;\n    justify-content: space-between;\n    border-radius: 10px;\n    box-shadow: 0 0 7px 2px #d1d5db;\n    &:hover{\n        cursor:pointer;\n    }\n}\n\n/* MEDIA QUAERIES */\n@media screen and (max-width:1590px){\n    body{\n        font-size:18px;\n    }\n    .functions-div{\n        display: flex;\n        i{\n            margin-left:1em;\n            &:hover{\n                cursor: pointer;\n            }\n        }\n    }\n    .project-task-list>li{\n        padding:.5rem;\n    }\n\n}\n@media screen and (max-width:1280px){\n    body{\n        font-size:16px;\n        width:100vw;\n    }\n    .projects-container{\n        padding:2rem;\n    }\n   \n    .project-list-item{\n        padding:.5rem;\n    }\n    .add-project-form{\n        padding:.1rem;\n    }\n    .new-project-input{\n        width:9rem;\n    }\n}\n@media screen and (max-width:860px){\n    .content{\n        padding:1.5em;\n        display: flex;\n        flex-direction: column;\n        min-height: 90vh;\n        padding:1rem;\n    }\n    .project-tasks-container{\n        min-height:50vh;\n    }\n    .new-project-input{\n        width:15rem;\n    }\n   \n}\n@media screen and (max-width:630px) {\n    body{\n        width:100vw;\n        padding:.1rem;\n        font-size:13px;\n    }\n    .content{\n        padding:.5rem;\n    }\n    #modal{\n        top:50%;\n        left:5%;\n    }\n    .new-project-input{\n        width:8rem;\n    }\n    .projects-list{\n        display: grid;\n        grid-template-columns: repeat(2,1fr);\n        gap:.1rem;\n        padding:0;\n    }\n    .project-task-list>li,.projects-list>li{\n        margin:.2rem .5rem 0rem .5rem;\n        display: flex;\n        align-items: center;\n        i{\n            margin-right:.3em;\n        }\n    }  \n    .tasks-container{\n        padding:0;\n    }\n    .project-list-item{\n        padding:.2rem;\n    }\n    .project-tasks-container{\n        padding:1rem;\n        min-height:60vh;\n    }\n    .toggle-taskform-btn{\n        padding:.2rem;\n    }\n    .description-header{\n        display: none;\n    }\n    .task-keys,.project-task-list>li{\n        padding:.5rem;\n        display: flex;\n        justify-content: space-between;\n    }\n    .desc-key{\n        display: none;\n    }\n    .low{\n        border-left:10px solid #dc2626;\n    }\n    .medium{\n        border-left: 10px solid #f59e0b;\n    }\n    .high{\n        border-left: 10px solid green;\n    }\n\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./index.css */ "./node_modules/css-loader/dist/cjs.js!./src/index.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.css */ "./src/index.css");


const projectsList = document.querySelector('.projects-list');
const projectForm = document.querySelector('.add-project-form')
const newProjectInput = document.querySelector('.new-project-input');
const tasksForm = document.querySelector('.task-form');
const tasksList = document.querySelector('.project-task-list');
const projectName = document.querySelector('.project-name');
const toggleProjectFormBtn =  document.querySelector('.toggle-form-btn');

const displayForm = document.querySelector('.toggle-taskform-btn');
const hideForm = document.querySelector('.hide-form');
const modal = document.querySelector('.modal');

const LOCAL_STORAGE_PROJECT_KEY = 'projects'
const LOCAL_STORAGE_SELECTED_PROJECT_KEY = 'selectedProject'

//get projects from local storage instead of array but if n local, give empty array
let Projects = JSON.parse(localStorage.getItem(LOCAL_STORAGE_PROJECT_KEY)) || [{"name":"Default Project","id":0,"tasks":[]}]
//get selected project from projects
let selectedProjectId = localStorage.getItem(LOCAL_STORAGE_SELECTED_PROJECT_KEY)


displayForm.addEventListener('click',()=>{
    //console.log(selectedProjectId)
    if (selectedProjectId == null) {
        alert("Click on a project to attach tasks");
    } else {
        tasksForm.reset();
        modal.showModal();
    }
   
})
hideForm.addEventListener('click',(e)=>{
    modal.close();
})
toggleProjectFormBtn.addEventListener('click',()=>{
    if (projectForm.style.display === 'none' || projectForm.style.display === '') {
        projectForm.style.display = 'block';
        const input = projectForm.querySelector('input'); 
        input.focus();
    } else {
        projectForm.style.display = 'none';
    }
})

function clearElement(elem){
    while (elem.firstChild){
        elem.removeChild(elem.firstChild)
        
    }
}
projectForm.addEventListener('submit',e=>{
    e.preventDefault();
    const projectTitle = newProjectInput.value;
    //console.log(projectTitle);
    //verify input
    if (projectTitle) {
        //create project and add to Projects 
        const project = createProject(projectTitle) 
        Projects.push(project);
        selectedProjectId = project.id;
        saveToLocalStorage();
        clearElement(projectsList);
        projectForm.style.display = 'none';
        renderProjects();
        const selectedProject = Projects.find(project => project.id == selectedProjectId);
        console.log(selectedProject.name)
        projectName.textContent = `${selectedProject.name}`;
        renderProjectTasks(selectedProject)
        newProjectInput.value='';
    }
})
//Listen for selected Project
projectsList.addEventListener('click',e => {   
    if (e.target.tagName.toLowerCase() == 'li'){
        selectedProjectId = e.target.id;
        saveToLocalStorage();  
        clearElement(projectsList);
        renderProjects();
        const selectedProject = Projects.find(project => project.id == selectedProjectId);
        projectName.textContent = `${selectedProject.name}`
        renderProjectTasks(selectedProject)
    }
})
function createProject(name){
    const project = {
        name:name,
        id:Date.now().toString(),
        tasks:[]
    }
    return project;
}
function saveToLocalStorage(){
    localStorage.setItem(LOCAL_STORAGE_PROJECT_KEY,JSON.stringify(Projects))
    localStorage.setItem(LOCAL_STORAGE_SELECTED_PROJECT_KEY,selectedProjectId)
}

function renderProjects() {
    Projects.forEach(project => {
        //console.log(project);
        const projectItem = document.createElement('li');
        projectItem.classList.add('project-list-item')
        projectItem.id = `${project.id}`;
        
       
        const span = document.createElement('span');
        span.classList.add('project-list-icon');
        

        if (projectItem.id === selectedProjectId) {
            projectItem.classList.add('active');
        }
       
        projectItem.appendChild(span);

        // Append the text node to the projectItem after the span
        const textNode = document.createTextNode(` ${project.name}`);
        projectItem.appendChild(textNode);

        const delIcon = document.createElement('i');
        delIcon.classList.add('fa-solid');
        delIcon.classList.add('fa-trash');
        delIcon.addEventListener('click',() => deleteProject(project.id))
        projectItem.append(delIcon);

        projectsList.appendChild(projectItem);
    });
}
function deleteProject(projectId){
    Projects = Projects.filter(project => project.id !== projectId);
    selectedProjectId = null;
    saveToLocalStorage();
    clearElement(projectsList);
    clearElement(tasksList);
    renderProjects();
}
renderProjects();

//Tasks section
tasksForm.addEventListener('submit',e=>{
    const selectedProject = Projects.find(project => project.id == selectedProjectId);

    //console.log(selectedProject);
    e.preventDefault();
    const title = document.getElementById('title').value;
    const duedate = document.getElementById('duedate').value
    const description = document.getElementById('description').value
    const priority = document.getElementById('priority').value
    const taskId = document.getElementById('taskId').value;
    
    if (taskId) {
        //edit exisitng task
        const task = selectedProject.tasks.find(task => task.id == taskId);
        task.title = title;
        task.description = description;
        task.duedate = duedate;
        task.priority = priority;
       
    } else {
        //create new task
        const task = createTask(title, description, duedate, priority);
        selectedProject.tasks.push(task);
    }

    saveToLocalStorage();
    clearElement(tasksList);
    tasksForm.reset();
    document.getElementById('taskId').value = '';
    modal.close();
    renderProjectTasks(selectedProject);
})
function createTask(title,description,duedate,priority){
    return {title,description,duedate,priority,complete:false, id: Date.now().toString()}
}
function completeTask(e){
    const selectedProject = Projects.find(project => project.id == selectedProjectId);

    if (e.target.closest('li')){
        const taskId = e.target.closest('li').dataset.taskId;
        //console.log(taskId);
        
        //console.log(selectedProject)
        const task = selectedProject.tasks.find(task => task.id == taskId);
        
        //console.log(task);
        if (task) {
            task.complete = !task.complete; 
            saveToLocalStorage();
            renderProjectTasks(selectedProject); 
        }
   }
}

function renderProjectTasks(selectedProject){
    clearElement(tasksList);
    if(selectedProject){
        selectedProject.tasks.forEach(task => {
            const taskItem = document.createElement('li');
    
            const taskListItemSpan = document.createElement('span');
            taskListItemSpan.classList.add('task-list-item');
            taskItem.dataset.taskId = task.id;
    
            const icon = document.createElement('i');
            icon.classList.add('fa-regular', task.complete ? 'fa-check-square': 'fa-square');
            icon.addEventListener('click',(e) => completeTask(e))
            taskListItemSpan.appendChild(icon);
            taskListItemSpan.appendChild(document.createTextNode(` ${task.title}`));
            
            const descriptionSpan = document.createElement('span');
            descriptionSpan.classList.add('description-header');
            descriptionSpan.textContent = `${task.description}`
            
            const dueDateSpan = document.createElement('span');
            dueDateSpan.classList.add('duedate-header');
            const dueDate = new Date(task.duedate);
            dueDateSpan.textContent = dueDate.toLocaleString();
    
            taskItem.appendChild(taskListItemSpan);
            taskItem.appendChild(descriptionSpan);
            taskItem.appendChild(dueDateSpan);
    
            if (task.complete) {
                taskItem.classList.add('complete');
            }
           
            if (task.priority == 'high'){
                taskItem.classList.add('high');
            } else if (task.priority == 'medium'){
                taskItem.classList.add('medium')
            } else{
                taskItem.classList.add('low');
            }
          
            const functionsDiv = document.createElement('div')
            functionsDiv.classList.add('functions-div')
            const deleteIcon = document.createElement('i');
            deleteIcon.classList.add('fa-solid','fa-trash');
            deleteIcon.addEventListener('click',()=>deleteTask(task.id));
            const editIcon = document.createElement('i');
            editIcon.classList.add('fa-solid','fa-pen');
            editIcon.addEventListener('click',()=>editTask(task.id));
            functionsDiv.appendChild(deleteIcon);
            functionsDiv.appendChild(editIcon);
            taskItem.appendChild(functionsDiv);
    
            tasksList.appendChild(taskItem);
        });
    }
}
function deleteTask(taskId) {
    const selectedProject = Projects.find(project => project.id == selectedProjectId);
    selectedProject.tasks = selectedProject.tasks.filter(task => task.id !== taskId);
    saveToLocalStorage();
    renderProjectTasks(selectedProject);
}
function editTask(id){
    const selectedProject = Projects.find(project => project.id == selectedProjectId);
    const task = selectedProject.tasks.find(task => task.id == id);
    if (!task) return;

    // Populate the form with the task values
    document.getElementById('title').value = task.title;
    document.getElementById('duedate').value = task.dueDate;
    document.getElementById('description').value = task.description;
    document.getElementById('priority').value = task.priority;
    document.getElementById('taskId').value = task.id;

    modal.showModal();
}

if (selectedProjectId){
    selectedProjectId = selectedProjectId
} else {
    console.log("inside else")
    const activeProjectIcon = document.querySelector('.project-list-item')
    activeProjectIcon.classList.add('active');
    selectedProjectId = 0 ;
    saveToLocalStorage();
}
const selectedProject = Projects.find(project => project.id == selectedProjectId)
renderProjectTasks(selectedProject);


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLENBQUMsT0FBTyxnRkFBZ0YsVUFBVSxVQUFVLFlBQVksTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksY0FBYyxNQUFNLEtBQUssVUFBVSxZQUFZLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxNQUFNLFlBQVksTUFBTSxLQUFLLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksTUFBTSxVQUFVLE1BQU0sS0FBSyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxNQUFNLFVBQVUsTUFBTSxLQUFLLEtBQUssVUFBVSxVQUFVLFlBQVksTUFBTSxLQUFLLFVBQVUsS0FBSyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLE1BQU0sVUFBVSxNQUFNLEtBQUssS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLEtBQUssS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLE1BQU0sVUFBVSxNQUFNLEtBQUssS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxLQUFLLEtBQUssS0FBSyxVQUFVLEtBQUssVUFBVSxNQUFNLEtBQUssS0FBSyxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxNQUFNLFlBQVksV0FBVyxLQUFLLFVBQVUsTUFBTSxNQUFNLEtBQUssS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsTUFBTSxVQUFVLE1BQU0sTUFBTSxZQUFZLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFV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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUNBQXFDLHFCQUFxQjtBQUMxRDtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQyxxQkFBcUI7QUFDMUQ7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixXQUFXO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHFEQUFxRCxhQUFhO0FBQ2xFOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxRUFBcUUsV0FBVztBQUNoRjtBQUNBO0FBQ0E7QUFDQSw2Q0FBNkMsaUJBQWlCO0FBQzlEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguY3NzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmNzcz9jZmU0Iiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAqe1xuICAgIHBhZGRpbmc6MDtcbiAgICBtYXJnaW46MDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuYm9keXtcbiAgICBmb250LXNpemU6MjBweDtcbiAgICBoZWlnaHQ6MTAwdmg7XG4gICAgcGFkZGluZzoyZW07XG4gICAgd2lkdGg6OTB2dztcbiAgICBtYXJnaW46IGF1dG87XG59XG4uaGVhZGVye1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbmxpIHtcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG59XG4uY29udGVudHtcbiAgICBwYWRkaW5nOjEuNWVtO1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgM2ZyO1xuICAgIG1pbi1oZWlnaHQ6IDgwdmg7XG4gICAgXG59XG4ucHJvamVjdHMtY29udGFpbmVyLC5wcm9qZWN0LXRhc2tzLWNvbnRhaW5lcntcbiAgICBwYWRkaW5nOjJlbTtcbiAgICBib3JkZXItcmFkaXVzOiAuMmVtO1xufVxuLnByb2plY3QtdGFzay1saXN0PmxpLC5wcm9qZWN0cy1saXN0Pmxpe1xuICAgIG1hcmdpbjouOGVtIDJlbSAwZW0gMmVtO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBpe1xuICAgICAgICBtYXJnaW4tcmlnaHQ6LjNlbTtcbiAgICB9XG59ICAgXG4ucHJvamVjdC10YXNrLWxpc3QgbGl7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBwYWRkaW5nOjFlbTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBib3JkZXItcmFkaXVzOiAuNWVtO1xufVxuLnByb2plY3RzLWNvbnRhaW5lcntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBhbGljZWJsdWU7XG59XG4ucHJvamVjdC10YXNrcy1jb250YWluZXJ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjpsYXZlbmRlcmJsdXNoO1xufVxuLnByb2plY3QtdGFza3MtY29udGFpbmVyIGgzIHtcbiAgICBtYXJnaW46MWVtIDBlbTtcbn1cbi5wcm9qZWN0cy1oZWFkZXIsLnRhc2tzLWhlYWRlcntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuLnRvZ2dsZS1mb3JtLWJ0bntcbiAgICBmb250LXNpemU6IDJlbTtcbiAgICBjb2xvcjpibGFjaztcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcbiAgICAmOmhvdmVye1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgfVxufVxuLnRvZ2dsZS10YXNrZm9ybS1idG57XG4gICAgcGFkZGluZzouNWVtO1xuICAgIGZvbnQtc2l6ZTogMWVtO1xuICAgIGJvcmRlci1yYWRpdXM6IC4yZW07XG4gICAgYmFja2dyb3VuZC1jb2xvcjpsYXZlbmRlcmJsdXNoO1xuICAgIGJvcmRlcjoxcHggc29saWQgY2FkZXRibHVlO1xuICAgICY6aG92ZXJ7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB9XG59XG4udGFzay1rZXlzLC5wcm9qZWN0LXRhc2stbGlzdCBsaXtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdhcDoxZW07XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNCwxZnIpO1xufVxuLnRhc2sta2V5c3tcbiAgICBwYWRkaW5nOjFlbTtcbn1cbi5uZXctcHJvamVjdC1pbnB1dCB7XG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyOiAwO1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBibGFjaztcbiAgICBmb250LXNpemU6IGluaGVyaXQ7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBwYWRkaW5nOiAwLjI1ZW07XG59XG4uYWRkLXByb2plY3QtZm9ybXtcbiAgICBtYXJnaW46MWVtO1xuICAgIGRpc3BsYXk6IG5vbmU7XG59ICBcbi5hZGQtcHJvamVjdC1idG57XG4gICAgcGFkZGluZzouM2VtO1xuICAgIGZvbnQtc2l6ZTogLjhlbTtcbiAgICBib3JkZXItcmFkaXVzOjVweDtcbiAgICAmOmhvdmVye1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgfVxufVxuLnRhc2stZm9ybXtcbiAgIGRpc3BsYXk6IGZsZXg7XG4gICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgcGFkZGluZzoxZW07XG4gICBtYXJnaW46YXV0bztcbn1cbi50YXNrLWZvcm0gaW5wdXQsI3ByaW9yaXR5e1xuICAgIHBhZGRpbmc6IC41ZW07XG4gICAgZm9udC1zaXplOiAuOGVtO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxZW07XG59XG4uYWRkLXRhc2stYnRue1xuICAgIHBhZGRpbmc6MWVtO1xuICAgIGZvbnQtc2l6ZToxZW07XG59XG4jbW9kYWwge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0b3A6IDYwJTsgICAgICAgIFxuICAgIGxlZnQ6NTAlOyAgICAgICAgXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlOyBcbiAgICBwYWRkaW5nOi41ZW07ICAgXG4gICAgd2lkdGg6MjVlbTtcbiAgICBib3JkZXI6IDVweCBzb2xpZCAjY2NmYmYxO1xufVxuLmhpZGUtZm9ybXtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG4gICAgY29sb3I6d2hpdGU7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDowO1xuICAgIHJpZ2h0OjA7XG4gICAgZm9udC1zaXplOjFlbTtcbiAgICBwYWRkaW5nOi41ZW07XG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xuICAgICY6aG92ZXJ7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB9XG59XG4ucHJvamVjdC1saXN0LWl0ZW0uYWN0aXZle1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICBib3JkZXI6MXB4IHNvbGlkIGdyZWVuO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcbn1cblxuLmZhLXJlZ3VsYXJ7XG4gICAgZm9udC1zaXplOjEuNmVtO1xufVxuLnByb2plY3QtdGFzay1saXN0Pi5jb21wbGV0ZXtcbiAgICB0ZXh0LWRlY29yYXRpb246bGluZS10aHJvdWdoO1xuICAgIGNvbG9yOmdyZXk7XG4gICAgb3BhY2l0eTouNTsgICBcbn1cbi5mdW5jdGlvbnMtZGl2e1xuICAgIGl7XG4gICAgICAgIG1hcmdpbi1sZWZ0OjNlbTtcbiAgICAgICAgJjpob3ZlcntcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgfVxuICAgIH1cbn1cbi5sb3d7XG4gICAgYm9yZGVyLWxlZnQ6MzBweCBzb2xpZCAjZGMyNjI2O1xufVxuLm1lZGl1bXtcbiAgICBib3JkZXItbGVmdDogMzBweCBzb2xpZCAjZjU5ZTBiO1xufVxuLmhpZ2h7XG4gICAgYm9yZGVyLWxlZnQ6IDMwcHggc29saWQgZ3JlZW47XG59XG4udGFzay1saXN0LWl0ZW17XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGl7XG4gICAgICAgIG1hcmdpbi1yaWdodDouNWVtO1xuICAgICAgICBmb250LXNpemU6MmVtO1xuICAgICAgICAmOmhvdmVye1xuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICB9XG4gICAgfVxuICAgXG59XG4ucHJvamVjdC1saXN0LWl0ZW17XG4gICAgcGFkZGluZzouNWVtO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgYm94LXNoYWRvdzogMCAwIDdweCAycHggI2QxZDVkYjtcbiAgICAmOmhvdmVye1xuICAgICAgICBjdXJzb3I6cG9pbnRlcjtcbiAgICB9XG59XG5cbi8qIE1FRElBIFFVQUVSSUVTICovXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjE1OTBweCl7XG4gICAgYm9keXtcbiAgICAgICAgZm9udC1zaXplOjE4cHg7XG4gICAgfVxuICAgIC5mdW5jdGlvbnMtZGl2e1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBpe1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6MWVtO1xuICAgICAgICAgICAgJjpob3ZlcntcbiAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgLnByb2plY3QtdGFzay1saXN0Pmxpe1xuICAgICAgICBwYWRkaW5nOi41cmVtO1xuICAgIH1cblxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDoxMjgwcHgpe1xuICAgIGJvZHl7XG4gICAgICAgIGZvbnQtc2l6ZToxNnB4O1xuICAgICAgICB3aWR0aDoxMDB2dztcbiAgICB9XG4gICAgLnByb2plY3RzLWNvbnRhaW5lcntcbiAgICAgICAgcGFkZGluZzoycmVtO1xuICAgIH1cbiAgIFxuICAgIC5wcm9qZWN0LWxpc3QtaXRlbXtcbiAgICAgICAgcGFkZGluZzouNXJlbTtcbiAgICB9XG4gICAgLmFkZC1wcm9qZWN0LWZvcm17XG4gICAgICAgIHBhZGRpbmc6LjFyZW07XG4gICAgfVxuICAgIC5uZXctcHJvamVjdC1pbnB1dHtcbiAgICAgICAgd2lkdGg6OXJlbTtcbiAgICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjg2MHB4KXtcbiAgICAuY29udGVudHtcbiAgICAgICAgcGFkZGluZzoxLjVlbTtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgbWluLWhlaWdodDogOTB2aDtcbiAgICAgICAgcGFkZGluZzoxcmVtO1xuICAgIH1cbiAgICAucHJvamVjdC10YXNrcy1jb250YWluZXJ7XG4gICAgICAgIG1pbi1oZWlnaHQ6NTB2aDtcbiAgICB9XG4gICAgLm5ldy1wcm9qZWN0LWlucHV0e1xuICAgICAgICB3aWR0aDoxNXJlbTtcbiAgICB9XG4gICBcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NjMwcHgpIHtcbiAgICBib2R5e1xuICAgICAgICB3aWR0aDoxMDB2dztcbiAgICAgICAgcGFkZGluZzouMXJlbTtcbiAgICAgICAgZm9udC1zaXplOjEzcHg7XG4gICAgfVxuICAgIC5jb250ZW50e1xuICAgICAgICBwYWRkaW5nOi41cmVtO1xuICAgIH1cbiAgICAjbW9kYWx7XG4gICAgICAgIHRvcDo1MCU7XG4gICAgICAgIGxlZnQ6NSU7XG4gICAgfVxuICAgIC5uZXctcHJvamVjdC1pbnB1dHtcbiAgICAgICAgd2lkdGg6OHJlbTtcbiAgICB9XG4gICAgLnByb2plY3RzLWxpc3R7XG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsMWZyKTtcbiAgICAgICAgZ2FwOi4xcmVtO1xuICAgICAgICBwYWRkaW5nOjA7XG4gICAgfVxuICAgIC5wcm9qZWN0LXRhc2stbGlzdD5saSwucHJvamVjdHMtbGlzdD5saXtcbiAgICAgICAgbWFyZ2luOi4ycmVtIC41cmVtIDByZW0gLjVyZW07XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGl7XG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6LjNlbTtcbiAgICAgICAgfVxuICAgIH0gIFxuICAgIC50YXNrcy1jb250YWluZXJ7XG4gICAgICAgIHBhZGRpbmc6MDtcbiAgICB9XG4gICAgLnByb2plY3QtbGlzdC1pdGVte1xuICAgICAgICBwYWRkaW5nOi4ycmVtO1xuICAgIH1cbiAgICAucHJvamVjdC10YXNrcy1jb250YWluZXJ7XG4gICAgICAgIHBhZGRpbmc6MXJlbTtcbiAgICAgICAgbWluLWhlaWdodDo2MHZoO1xuICAgIH1cbiAgICAudG9nZ2xlLXRhc2tmb3JtLWJ0bntcbiAgICAgICAgcGFkZGluZzouMnJlbTtcbiAgICB9XG4gICAgLmRlc2NyaXB0aW9uLWhlYWRlcntcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG4gICAgLnRhc2sta2V5cywucHJvamVjdC10YXNrLWxpc3Q+bGl7XG4gICAgICAgIHBhZGRpbmc6LjVyZW07XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICB9XG4gICAgLmRlc2Mta2V5e1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbiAgICAubG93e1xuICAgICAgICBib3JkZXItbGVmdDoxMHB4IHNvbGlkICNkYzI2MjY7XG4gICAgfVxuICAgIC5tZWRpdW17XG4gICAgICAgIGJvcmRlci1sZWZ0OiAxMHB4IHNvbGlkICNmNTllMGI7XG4gICAgfVxuICAgIC5oaWdoe1xuICAgICAgICBib3JkZXItbGVmdDogMTBweCBzb2xpZCBncmVlbjtcbiAgICB9XG5cbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9pbmRleC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxTQUFTO0lBQ1QsUUFBUTtJQUNSLHNCQUFzQjtBQUMxQjtBQUNBO0lBQ0ksY0FBYztJQUNkLFlBQVk7SUFDWixXQUFXO0lBQ1gsVUFBVTtJQUNWLFlBQVk7QUFDaEI7QUFDQTtJQUNJLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0kscUJBQXFCO0FBQ3pCO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixnQkFBZ0I7O0FBRXBCO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSx1QkFBdUI7SUFDdkIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQjtRQUNJLGlCQUFpQjtJ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O0lBQ2pCO0lBQ0E7UUFDSSxPQUFPO1FBQ1AsT0FBTztJQUNYO0lBQ0E7UUFDSSxVQUFVO0lBQ2Q7SUFDQTtRQUNJLGFBQWE7UUFDYixvQ0FBb0M7UUFDcEMsU0FBUztRQUNULFNBQVM7SUFDYjtJQUNBO1FBQ0ksNkJBQTZCO1FBQzdCLGFBQWE7UUFDYixtQkFBbUI7UUFDbkI7WUFDSSxpQkFBaUI7UUFDckI7SUFDSjtJQUNBO1FBQ0ksU0FBUztJQUNiO0lBQ0E7UUFDSSxhQUFhO0lBQ2pCO0lBQ0E7UUFDSSxZQUFZO1FBQ1osZUFBZTtJQUNuQjtJQUNBO1FBQ0ksYUFBYTtJQUNqQjtJQUNBO1FBQ0ksYUFBYTtJQUNqQjtJQUNBO1FBQ0ksYUFBYTtRQUNiLGFBQWE7UUFDYiw4QkFBOEI7SUFDbEM7SUFDQTtRQUNJLGFBQWE7SUFDakI7SUFDQTtRQUNJLDhCQUE4QjtJQUNsQztJQUNBO1FBQ0ksK0JBQStCO0lBQ25DO0lBQ0E7UUFDSSw2QkFBNkI7SUFDakM7O0FBRUpcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKntcXG4gICAgcGFkZGluZzowO1xcbiAgICBtYXJnaW46MDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuYm9keXtcXG4gICAgZm9udC1zaXplOjIwcHg7XFxuICAgIGhlaWdodDoxMDB2aDtcXG4gICAgcGFkZGluZzoyZW07XFxuICAgIHdpZHRoOjkwdnc7XFxuICAgIG1hcmdpbjogYXV0bztcXG59XFxuLmhlYWRlcntcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5saSB7XFxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG59XFxuLmNvbnRlbnR7XFxuICAgIHBhZGRpbmc6MS41ZW07XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDNmcjtcXG4gICAgbWluLWhlaWdodDogODB2aDtcXG4gICAgXFxufVxcbi5wcm9qZWN0cy1jb250YWluZXIsLnByb2plY3QtdGFza3MtY29udGFpbmVye1xcbiAgICBwYWRkaW5nOjJlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogLjJlbTtcXG59XFxuLnByb2plY3QtdGFzay1saXN0PmxpLC5wcm9qZWN0cy1saXN0Pmxpe1xcbiAgICBtYXJnaW46LjhlbSAyZW0gMGVtIDJlbTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgaXtcXG4gICAgICAgIG1hcmdpbi1yaWdodDouM2VtO1xcbiAgICB9XFxufSAgIFxcbi5wcm9qZWN0LXRhc2stbGlzdCBsaXtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgcGFkZGluZzoxZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBib3JkZXItcmFkaXVzOiAuNWVtO1xcbn1cXG4ucHJvamVjdHMtY29udGFpbmVye1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBhbGljZWJsdWU7XFxufVxcbi5wcm9qZWN0LXRhc2tzLWNvbnRhaW5lcntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjpsYXZlbmRlcmJsdXNoO1xcbn1cXG4ucHJvamVjdC10YXNrcy1jb250YWluZXIgaDMge1xcbiAgICBtYXJnaW46MWVtIDBlbTtcXG59XFxuLnByb2plY3RzLWhlYWRlciwudGFza3MtaGVhZGVye1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcbi50b2dnbGUtZm9ybS1idG57XFxuICAgIGZvbnQtc2l6ZTogMmVtO1xcbiAgICBjb2xvcjpibGFjaztcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xcbiAgICAmOmhvdmVye1xcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB9XFxufVxcbi50b2dnbGUtdGFza2Zvcm0tYnRue1xcbiAgICBwYWRkaW5nOi41ZW07XFxuICAgIGZvbnQtc2l6ZTogMWVtO1xcbiAgICBib3JkZXItcmFkaXVzOiAuMmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOmxhdmVuZGVyYmx1c2g7XFxuICAgIGJvcmRlcjoxcHggc29saWQgY2FkZXRibHVlO1xcbiAgICAmOmhvdmVye1xcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB9XFxufVxcbi50YXNrLWtleXMsLnByb2plY3QtdGFzay1saXN0IGxpe1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBnYXA6MWVtO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg0LDFmcik7XFxufVxcbi50YXNrLWtleXN7XFxuICAgIHBhZGRpbmc6MWVtO1xcbn1cXG4ubmV3LXByb2plY3QtaW5wdXQge1xcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gICAgYm9yZGVyOiAwO1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgYmxhY2s7XFxuICAgIGZvbnQtc2l6ZTogaW5oZXJpdDtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgcGFkZGluZzogMC4yNWVtO1xcbn1cXG4uYWRkLXByb2plY3QtZm9ybXtcXG4gICAgbWFyZ2luOjFlbTtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59ICBcXG4uYWRkLXByb2plY3QtYnRue1xcbiAgICBwYWRkaW5nOi4zZW07XFxuICAgIGZvbnQtc2l6ZTogLjhlbTtcXG4gICAgYm9yZGVyLXJhZGl1czo1cHg7XFxuICAgICY6aG92ZXJ7XFxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIH1cXG59XFxuLnRhc2stZm9ybXtcXG4gICBkaXNwbGF5OiBmbGV4O1xcbiAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgcGFkZGluZzoxZW07XFxuICAgbWFyZ2luOmF1dG87XFxufVxcbi50YXNrLWZvcm0gaW5wdXQsI3ByaW9yaXR5e1xcbiAgICBwYWRkaW5nOiAuNWVtO1xcbiAgICBmb250LXNpemU6IC44ZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMWVtO1xcbn1cXG4uYWRkLXRhc2stYnRue1xcbiAgICBwYWRkaW5nOjFlbTtcXG4gICAgZm9udC1zaXplOjFlbTtcXG59XFxuI21vZGFsIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB0b3A6IDYwJTsgICAgICAgIFxcbiAgICBsZWZ0OjUwJTsgICAgICAgIFxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlOyBcXG4gICAgcGFkZGluZzouNWVtOyAgIFxcbiAgICB3aWR0aDoyNWVtO1xcbiAgICBib3JkZXI6IDVweCBzb2xpZCAjY2NmYmYxO1xcbn1cXG4uaGlkZS1mb3Jte1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxuICAgIGNvbG9yOndoaXRlO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDowO1xcbiAgICByaWdodDowO1xcbiAgICBmb250LXNpemU6MWVtO1xcbiAgICBwYWRkaW5nOi41ZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcXG4gICAgJjpob3ZlcntcXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgfVxcbn1cXG4ucHJvamVjdC1saXN0LWl0ZW0uYWN0aXZle1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBib3gtc2hhZG93OiBub25lO1xcbiAgICBib3JkZXI6MXB4IHNvbGlkIGdyZWVuO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XFxufVxcblxcbi5mYS1yZWd1bGFye1xcbiAgICBmb250LXNpemU6MS42ZW07XFxufVxcbi5wcm9qZWN0LXRhc2stbGlzdD4uY29tcGxldGV7XFxuICAgIHRleHQtZGVjb3JhdGlvbjpsaW5lLXRocm91Z2g7XFxuICAgIGNvbG9yOmdyZXk7XFxuICAgIG9wYWNpdHk6LjU7ICAgXFxufVxcbi5mdW5jdGlvbnMtZGl2e1xcbiAgICBpe1xcbiAgICAgICAgbWFyZ2luLWxlZnQ6M2VtO1xcbiAgICAgICAgJjpob3ZlcntcXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgICAgICB9XFxuICAgIH1cXG59XFxuLmxvd3tcXG4gICAgYm9yZGVyLWxlZnQ6MzBweCBzb2xpZCAjZGMyNjI2O1xcbn1cXG4ubWVkaXVte1xcbiAgICBib3JkZXItbGVmdDogMzBweCBzb2xpZCAjZjU5ZTBiO1xcbn1cXG4uaGlnaHtcXG4gICAgYm9yZGVyLWxlZnQ6IDMwcHggc29saWQgZ3JlZW47XFxufVxcbi50YXNrLWxpc3QtaXRlbXtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgaXtcXG4gICAgICAgIG1hcmdpbi1yaWdodDouNWVtO1xcbiAgICAgICAgZm9udC1zaXplOjJlbTtcXG4gICAgICAgICY6aG92ZXJ7XFxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAgICAgfVxcbiAgICB9XFxuICAgXFxufVxcbi5wcm9qZWN0LWxpc3QtaXRlbXtcXG4gICAgcGFkZGluZzouNWVtO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGJveC1zaGFkb3c6IDAgMCA3cHggMnB4ICNkMWQ1ZGI7XFxuICAgICY6aG92ZXJ7XFxuICAgICAgICBjdXJzb3I6cG9pbnRlcjtcXG4gICAgfVxcbn1cXG5cXG4vKiBNRURJQSBRVUFFUklFUyAqL1xcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6MTU5MHB4KXtcXG4gICAgYm9keXtcXG4gICAgICAgIGZvbnQtc2l6ZToxOHB4O1xcbiAgICB9XFxuICAgIC5mdW5jdGlvbnMtZGl2e1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGl7XFxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6MWVtO1xcbiAgICAgICAgICAgICY6aG92ZXJ7XFxuICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgICAgICAgICB9XFxuICAgICAgICB9XFxuICAgIH1cXG4gICAgLnByb2plY3QtdGFzay1saXN0Pmxpe1xcbiAgICAgICAgcGFkZGluZzouNXJlbTtcXG4gICAgfVxcblxcbn1cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjEyODBweCl7XFxuICAgIGJvZHl7XFxuICAgICAgICBmb250LXNpemU6MTZweDtcXG4gICAgICAgIHdpZHRoOjEwMHZ3O1xcbiAgICB9XFxuICAgIC5wcm9qZWN0cy1jb250YWluZXJ7XFxuICAgICAgICBwYWRkaW5nOjJyZW07XFxuICAgIH1cXG4gICBcXG4gICAgLnByb2plY3QtbGlzdC1pdGVte1xcbiAgICAgICAgcGFkZGluZzouNXJlbTtcXG4gICAgfVxcbiAgICAuYWRkLXByb2plY3QtZm9ybXtcXG4gICAgICAgIHBhZGRpbmc6LjFyZW07XFxuICAgIH1cXG4gICAgLm5ldy1wcm9qZWN0LWlucHV0e1xcbiAgICAgICAgd2lkdGg6OXJlbTtcXG4gICAgfVxcbn1cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjg2MHB4KXtcXG4gICAgLmNvbnRlbnR7XFxuICAgICAgICBwYWRkaW5nOjEuNWVtO1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICBtaW4taGVpZ2h0OiA5MHZoO1xcbiAgICAgICAgcGFkZGluZzoxcmVtO1xcbiAgICB9XFxuICAgIC5wcm9qZWN0LXRhc2tzLWNvbnRhaW5lcntcXG4gICAgICAgIG1pbi1oZWlnaHQ6NTB2aDtcXG4gICAgfVxcbiAgICAubmV3LXByb2plY3QtaW5wdXR7XFxuICAgICAgICB3aWR0aDoxNXJlbTtcXG4gICAgfVxcbiAgIFxcbn1cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjYzMHB4KSB7XFxuICAgIGJvZHl7XFxuICAgICAgICB3aWR0aDoxMDB2dztcXG4gICAgICAgIHBhZGRpbmc6LjFyZW07XFxuICAgICAgICBmb250LXNpemU6MTNweDtcXG4gICAgfVxcbiAgICAuY29udGVudHtcXG4gICAgICAgIHBhZGRpbmc6LjVyZW07XFxuICAgIH1cXG4gICAgI21vZGFse1xcbiAgICAgICAgdG9wOjUwJTtcXG4gICAgICAgIGxlZnQ6NSU7XFxuICAgIH1cXG4gICAgLm5ldy1wcm9qZWN0LWlucHV0e1xcbiAgICAgICAgd2lkdGg6OHJlbTtcXG4gICAgfVxcbiAgICAucHJvamVjdHMtbGlzdHtcXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLDFmcik7XFxuICAgICAgICBnYXA6LjFyZW07XFxuICAgICAgICBwYWRkaW5nOjA7XFxuICAgIH1cXG4gICAgLnByb2plY3QtdGFzay1saXN0PmxpLC5wcm9qZWN0cy1saXN0Pmxpe1xcbiAgICAgICAgbWFyZ2luOi4ycmVtIC41cmVtIDByZW0gLjVyZW07XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgIGl7XFxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0Oi4zZW07XFxuICAgICAgICB9XFxuICAgIH0gIFxcbiAgICAudGFza3MtY29udGFpbmVye1xcbiAgICAgICAgcGFkZGluZzowO1xcbiAgICB9XFxuICAgIC5wcm9qZWN0LWxpc3QtaXRlbXtcXG4gICAgICAgIHBhZGRpbmc6LjJyZW07XFxuICAgIH1cXG4gICAgLnByb2plY3QtdGFza3MtY29udGFpbmVye1xcbiAgICAgICAgcGFkZGluZzoxcmVtO1xcbiAgICAgICAgbWluLWhlaWdodDo2MHZoO1xcbiAgICB9XFxuICAgIC50b2dnbGUtdGFza2Zvcm0tYnRue1xcbiAgICAgICAgcGFkZGluZzouMnJlbTtcXG4gICAgfVxcbiAgICAuZGVzY3JpcHRpb24taGVhZGVye1xcbiAgICAgICAgZGlzcGxheTogbm9uZTtcXG4gICAgfVxcbiAgICAudGFzay1rZXlzLC5wcm9qZWN0LXRhc2stbGlzdD5saXtcXG4gICAgICAgIHBhZGRpbmc6LjVyZW07XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICB9XFxuICAgIC5kZXNjLWtleXtcXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIH1cXG4gICAgLmxvd3tcXG4gICAgICAgIGJvcmRlci1sZWZ0OjEwcHggc29saWQgI2RjMjYyNjtcXG4gICAgfVxcbiAgICAubWVkaXVte1xcbiAgICAgICAgYm9yZGVyLWxlZnQ6IDEwcHggc29saWQgI2Y1OWUwYjtcXG4gICAgfVxcbiAgICAuaGlnaHtcXG4gICAgICAgIGJvcmRlci1sZWZ0OiAxMHB4IHNvbGlkIGdyZWVuO1xcbiAgICB9XFxuXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2luZGV4LmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xub3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2luZGV4LmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL2luZGV4LmNzcyc7XG5cbmNvbnN0IHByb2plY3RzTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0cy1saXN0Jyk7XG5jb25zdCBwcm9qZWN0Rm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtcHJvamVjdC1mb3JtJylcbmNvbnN0IG5ld1Byb2plY3RJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uZXctcHJvamVjdC1pbnB1dCcpO1xuY29uc3QgdGFza3NGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2stZm9ybScpO1xuY29uc3QgdGFza3NMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QtdGFzay1saXN0Jyk7XG5jb25zdCBwcm9qZWN0TmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LW5hbWUnKTtcbmNvbnN0IHRvZ2dsZVByb2plY3RGb3JtQnRuID0gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2dnbGUtZm9ybS1idG4nKTtcblxuY29uc3QgZGlzcGxheUZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9nZ2xlLXRhc2tmb3JtLWJ0bicpO1xuY29uc3QgaGlkZUZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGlkZS1mb3JtJyk7XG5jb25zdCBtb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbCcpO1xuXG5jb25zdCBMT0NBTF9TVE9SQUdFX1BST0pFQ1RfS0VZID0gJ3Byb2plY3RzJ1xuY29uc3QgTE9DQUxfU1RPUkFHRV9TRUxFQ1RFRF9QUk9KRUNUX0tFWSA9ICdzZWxlY3RlZFByb2plY3QnXG5cbi8vZ2V0IHByb2plY3RzIGZyb20gbG9jYWwgc3RvcmFnZSBpbnN0ZWFkIG9mIGFycmF5IGJ1dCBpZiBuIGxvY2FsLCBnaXZlIGVtcHR5IGFycmF5XG5sZXQgUHJvamVjdHMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKExPQ0FMX1NUT1JBR0VfUFJPSkVDVF9LRVkpKSB8fCBbe1wibmFtZVwiOlwiRGVmYXVsdCBQcm9qZWN0XCIsXCJpZFwiOjAsXCJ0YXNrc1wiOltdfV1cbi8vZ2V0IHNlbGVjdGVkIHByb2plY3QgZnJvbSBwcm9qZWN0c1xubGV0IHNlbGVjdGVkUHJvamVjdElkID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oTE9DQUxfU1RPUkFHRV9TRUxFQ1RFRF9QUk9KRUNUX0tFWSlcblxuXG5kaXNwbGF5Rm9ybS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKCk9PntcbiAgICAvL2NvbnNvbGUubG9nKHNlbGVjdGVkUHJvamVjdElkKVxuICAgIGlmIChzZWxlY3RlZFByb2plY3RJZCA9PSBudWxsKSB7XG4gICAgICAgIGFsZXJ0KFwiQ2xpY2sgb24gYSBwcm9qZWN0IHRvIGF0dGFjaCB0YXNrc1wiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICB0YXNrc0Zvcm0ucmVzZXQoKTtcbiAgICAgICAgbW9kYWwuc2hvd01vZGFsKCk7XG4gICAgfVxuICAgXG59KVxuaGlkZUZvcm0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLChlKT0+e1xuICAgIG1vZGFsLmNsb3NlKCk7XG59KVxudG9nZ2xlUHJvamVjdEZvcm1CdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCgpPT57XG4gICAgaWYgKHByb2plY3RGb3JtLnN0eWxlLmRpc3BsYXkgPT09ICdub25lJyB8fCBwcm9qZWN0Rm9ybS5zdHlsZS5kaXNwbGF5ID09PSAnJykge1xuICAgICAgICBwcm9qZWN0Rm9ybS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgY29uc3QgaW5wdXQgPSBwcm9qZWN0Rm9ybS5xdWVyeVNlbGVjdG9yKCdpbnB1dCcpOyBcbiAgICAgICAgaW5wdXQuZm9jdXMoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBwcm9qZWN0Rm9ybS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIH1cbn0pXG5cbmZ1bmN0aW9uIGNsZWFyRWxlbWVudChlbGVtKXtcbiAgICB3aGlsZSAoZWxlbS5maXJzdENoaWxkKXtcbiAgICAgICAgZWxlbS5yZW1vdmVDaGlsZChlbGVtLmZpcnN0Q2hpbGQpXG4gICAgICAgIFxuICAgIH1cbn1cbnByb2plY3RGb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsZT0+e1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCBwcm9qZWN0VGl0bGUgPSBuZXdQcm9qZWN0SW5wdXQudmFsdWU7XG4gICAgLy9jb25zb2xlLmxvZyhwcm9qZWN0VGl0bGUpO1xuICAgIC8vdmVyaWZ5IGlucHV0XG4gICAgaWYgKHByb2plY3RUaXRsZSkge1xuICAgICAgICAvL2NyZWF0ZSBwcm9qZWN0IGFuZCBhZGQgdG8gUHJvamVjdHMgXG4gICAgICAgIGNvbnN0IHByb2plY3QgPSBjcmVhdGVQcm9qZWN0KHByb2plY3RUaXRsZSkgXG4gICAgICAgIFByb2plY3RzLnB1c2gocHJvamVjdCk7XG4gICAgICAgIHNlbGVjdGVkUHJvamVjdElkID0gcHJvamVjdC5pZDtcbiAgICAgICAgc2F2ZVRvTG9jYWxTdG9yYWdlKCk7XG4gICAgICAgIGNsZWFyRWxlbWVudChwcm9qZWN0c0xpc3QpO1xuICAgICAgICBwcm9qZWN0Rm9ybS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICByZW5kZXJQcm9qZWN0cygpO1xuICAgICAgICBjb25zdCBzZWxlY3RlZFByb2plY3QgPSBQcm9qZWN0cy5maW5kKHByb2plY3QgPT4gcHJvamVjdC5pZCA9PSBzZWxlY3RlZFByb2plY3RJZCk7XG4gICAgICAgIGNvbnNvbGUubG9nKHNlbGVjdGVkUHJvamVjdC5uYW1lKVxuICAgICAgICBwcm9qZWN0TmFtZS50ZXh0Q29udGVudCA9IGAke3NlbGVjdGVkUHJvamVjdC5uYW1lfWA7XG4gICAgICAgIHJlbmRlclByb2plY3RUYXNrcyhzZWxlY3RlZFByb2plY3QpXG4gICAgICAgIG5ld1Byb2plY3RJbnB1dC52YWx1ZT0nJztcbiAgICB9XG59KVxuLy9MaXN0ZW4gZm9yIHNlbGVjdGVkIFByb2plY3RcbnByb2plY3RzTGlzdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsZSA9PiB7ICAgXG4gICAgaWYgKGUudGFyZ2V0LnRhZ05hbWUudG9Mb3dlckNhc2UoKSA9PSAnbGknKXtcbiAgICAgICAgc2VsZWN0ZWRQcm9qZWN0SWQgPSBlLnRhcmdldC5pZDtcbiAgICAgICAgc2F2ZVRvTG9jYWxTdG9yYWdlKCk7ICBcbiAgICAgICAgY2xlYXJFbGVtZW50KHByb2plY3RzTGlzdCk7XG4gICAgICAgIHJlbmRlclByb2plY3RzKCk7XG4gICAgICAgIGNvbnN0IHNlbGVjdGVkUHJvamVjdCA9IFByb2plY3RzLmZpbmQocHJvamVjdCA9PiBwcm9qZWN0LmlkID09IHNlbGVjdGVkUHJvamVjdElkKTtcbiAgICAgICAgcHJvamVjdE5hbWUudGV4dENvbnRlbnQgPSBgJHtzZWxlY3RlZFByb2plY3QubmFtZX1gXG4gICAgICAgIHJlbmRlclByb2plY3RUYXNrcyhzZWxlY3RlZFByb2plY3QpXG4gICAgfVxufSlcbmZ1bmN0aW9uIGNyZWF0ZVByb2plY3QobmFtZSl7XG4gICAgY29uc3QgcHJvamVjdCA9IHtcbiAgICAgICAgbmFtZTpuYW1lLFxuICAgICAgICBpZDpEYXRlLm5vdygpLnRvU3RyaW5nKCksXG4gICAgICAgIHRhc2tzOltdXG4gICAgfVxuICAgIHJldHVybiBwcm9qZWN0O1xufVxuZnVuY3Rpb24gc2F2ZVRvTG9jYWxTdG9yYWdlKCl7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oTE9DQUxfU1RPUkFHRV9QUk9KRUNUX0tFWSxKU09OLnN0cmluZ2lmeShQcm9qZWN0cykpXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oTE9DQUxfU1RPUkFHRV9TRUxFQ1RFRF9QUk9KRUNUX0tFWSxzZWxlY3RlZFByb2plY3RJZClcbn1cblxuZnVuY3Rpb24gcmVuZGVyUHJvamVjdHMoKSB7XG4gICAgUHJvamVjdHMuZm9yRWFjaChwcm9qZWN0ID0+IHtcbiAgICAgICAgLy9jb25zb2xlLmxvZyhwcm9qZWN0KTtcbiAgICAgICAgY29uc3QgcHJvamVjdEl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgICAgICBwcm9qZWN0SXRlbS5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LWxpc3QtaXRlbScpXG4gICAgICAgIHByb2plY3RJdGVtLmlkID0gYCR7cHJvamVjdC5pZH1gO1xuICAgICAgICBcbiAgICAgICBcbiAgICAgICAgY29uc3Qgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgc3Bhbi5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LWxpc3QtaWNvbicpO1xuICAgICAgICBcblxuICAgICAgICBpZiAocHJvamVjdEl0ZW0uaWQgPT09IHNlbGVjdGVkUHJvamVjdElkKSB7XG4gICAgICAgICAgICBwcm9qZWN0SXRlbS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICAgICAgfVxuICAgICAgIFxuICAgICAgICBwcm9qZWN0SXRlbS5hcHBlbmRDaGlsZChzcGFuKTtcblxuICAgICAgICAvLyBBcHBlbmQgdGhlIHRleHQgbm9kZSB0byB0aGUgcHJvamVjdEl0ZW0gYWZ0ZXIgdGhlIHNwYW5cbiAgICAgICAgY29uc3QgdGV4dE5vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShgICR7cHJvamVjdC5uYW1lfWApO1xuICAgICAgICBwcm9qZWN0SXRlbS5hcHBlbmRDaGlsZCh0ZXh0Tm9kZSk7XG5cbiAgICAgICAgY29uc3QgZGVsSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2knKTtcbiAgICAgICAgZGVsSWNvbi5jbGFzc0xpc3QuYWRkKCdmYS1zb2xpZCcpO1xuICAgICAgICBkZWxJY29uLmNsYXNzTGlzdC5hZGQoJ2ZhLXRyYXNoJyk7XG4gICAgICAgIGRlbEljb24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCgpID0+IGRlbGV0ZVByb2plY3QocHJvamVjdC5pZCkpXG4gICAgICAgIHByb2plY3RJdGVtLmFwcGVuZChkZWxJY29uKTtcblxuICAgICAgICBwcm9qZWN0c0xpc3QuYXBwZW5kQ2hpbGQocHJvamVjdEl0ZW0pO1xuICAgIH0pO1xufVxuZnVuY3Rpb24gZGVsZXRlUHJvamVjdChwcm9qZWN0SWQpe1xuICAgIFByb2plY3RzID0gUHJvamVjdHMuZmlsdGVyKHByb2plY3QgPT4gcHJvamVjdC5pZCAhPT0gcHJvamVjdElkKTtcbiAgICBzZWxlY3RlZFByb2plY3RJZCA9IG51bGw7XG4gICAgc2F2ZVRvTG9jYWxTdG9yYWdlKCk7XG4gICAgY2xlYXJFbGVtZW50KHByb2plY3RzTGlzdCk7XG4gICAgY2xlYXJFbGVtZW50KHRhc2tzTGlzdCk7XG4gICAgcmVuZGVyUHJvamVjdHMoKTtcbn1cbnJlbmRlclByb2plY3RzKCk7XG5cbi8vVGFza3Mgc2VjdGlvblxudGFza3NGb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsZT0+e1xuICAgIGNvbnN0IHNlbGVjdGVkUHJvamVjdCA9IFByb2plY3RzLmZpbmQocHJvamVjdCA9PiBwcm9qZWN0LmlkID09IHNlbGVjdGVkUHJvamVjdElkKTtcblxuICAgIC8vY29uc29sZS5sb2coc2VsZWN0ZWRQcm9qZWN0KTtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGl0bGUnKS52YWx1ZTtcbiAgICBjb25zdCBkdWVkYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2R1ZWRhdGUnKS52YWx1ZVxuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Rlc2NyaXB0aW9uJykudmFsdWVcbiAgICBjb25zdCBwcmlvcml0eSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcmlvcml0eScpLnZhbHVlXG4gICAgY29uc3QgdGFza0lkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rhc2tJZCcpLnZhbHVlO1xuICAgIFxuICAgIGlmICh0YXNrSWQpIHtcbiAgICAgICAgLy9lZGl0IGV4aXNpdG5nIHRhc2tcbiAgICAgICAgY29uc3QgdGFzayA9IHNlbGVjdGVkUHJvamVjdC50YXNrcy5maW5kKHRhc2sgPT4gdGFzay5pZCA9PSB0YXNrSWQpO1xuICAgICAgICB0YXNrLnRpdGxlID0gdGl0bGU7XG4gICAgICAgIHRhc2suZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICAgICAgdGFzay5kdWVkYXRlID0gZHVlZGF0ZTtcbiAgICAgICAgdGFzay5wcmlvcml0eSA9IHByaW9yaXR5O1xuICAgICAgIFxuICAgIH0gZWxzZSB7XG4gICAgICAgIC8vY3JlYXRlIG5ldyB0YXNrXG4gICAgICAgIGNvbnN0IHRhc2sgPSBjcmVhdGVUYXNrKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlZGF0ZSwgcHJpb3JpdHkpO1xuICAgICAgICBzZWxlY3RlZFByb2plY3QudGFza3MucHVzaCh0YXNrKTtcbiAgICB9XG5cbiAgICBzYXZlVG9Mb2NhbFN0b3JhZ2UoKTtcbiAgICBjbGVhckVsZW1lbnQodGFza3NMaXN0KTtcbiAgICB0YXNrc0Zvcm0ucmVzZXQoKTtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFza0lkJykudmFsdWUgPSAnJztcbiAgICBtb2RhbC5jbG9zZSgpO1xuICAgIHJlbmRlclByb2plY3RUYXNrcyhzZWxlY3RlZFByb2plY3QpO1xufSlcbmZ1bmN0aW9uIGNyZWF0ZVRhc2sodGl0bGUsZGVzY3JpcHRpb24sZHVlZGF0ZSxwcmlvcml0eSl7XG4gICAgcmV0dXJuIHt0aXRsZSxkZXNjcmlwdGlvbixkdWVkYXRlLHByaW9yaXR5LGNvbXBsZXRlOmZhbHNlLCBpZDogRGF0ZS5ub3coKS50b1N0cmluZygpfVxufVxuZnVuY3Rpb24gY29tcGxldGVUYXNrKGUpe1xuICAgIGNvbnN0IHNlbGVjdGVkUHJvamVjdCA9IFByb2plY3RzLmZpbmQocHJvamVjdCA9PiBwcm9qZWN0LmlkID09IHNlbGVjdGVkUHJvamVjdElkKTtcblxuICAgIGlmIChlLnRhcmdldC5jbG9zZXN0KCdsaScpKXtcbiAgICAgICAgY29uc3QgdGFza0lkID0gZS50YXJnZXQuY2xvc2VzdCgnbGknKS5kYXRhc2V0LnRhc2tJZDtcbiAgICAgICAgLy9jb25zb2xlLmxvZyh0YXNrSWQpO1xuICAgICAgICBcbiAgICAgICAgLy9jb25zb2xlLmxvZyhzZWxlY3RlZFByb2plY3QpXG4gICAgICAgIGNvbnN0IHRhc2sgPSBzZWxlY3RlZFByb2plY3QudGFza3MuZmluZCh0YXNrID0+IHRhc2suaWQgPT0gdGFza0lkKTtcbiAgICAgICAgXG4gICAgICAgIC8vY29uc29sZS5sb2codGFzayk7XG4gICAgICAgIGlmICh0YXNrKSB7XG4gICAgICAgICAgICB0YXNrLmNvbXBsZXRlID0gIXRhc2suY29tcGxldGU7IFxuICAgICAgICAgICAgc2F2ZVRvTG9jYWxTdG9yYWdlKCk7XG4gICAgICAgICAgICByZW5kZXJQcm9qZWN0VGFza3Moc2VsZWN0ZWRQcm9qZWN0KTsgXG4gICAgICAgIH1cbiAgIH1cbn1cblxuZnVuY3Rpb24gcmVuZGVyUHJvamVjdFRhc2tzKHNlbGVjdGVkUHJvamVjdCl7XG4gICAgY2xlYXJFbGVtZW50KHRhc2tzTGlzdCk7XG4gICAgaWYoc2VsZWN0ZWRQcm9qZWN0KXtcbiAgICAgICAgc2VsZWN0ZWRQcm9qZWN0LnRhc2tzLmZvckVhY2godGFzayA9PiB7XG4gICAgICAgICAgICBjb25zdCB0YXNrSXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgXG4gICAgICAgICAgICBjb25zdCB0YXNrTGlzdEl0ZW1TcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICAgICAgdGFza0xpc3RJdGVtU3Bhbi5jbGFzc0xpc3QuYWRkKCd0YXNrLWxpc3QtaXRlbScpO1xuICAgICAgICAgICAgdGFza0l0ZW0uZGF0YXNldC50YXNrSWQgPSB0YXNrLmlkO1xuICAgIFxuICAgICAgICAgICAgY29uc3QgaWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2knKTtcbiAgICAgICAgICAgIGljb24uY2xhc3NMaXN0LmFkZCgnZmEtcmVndWxhcicsIHRhc2suY29tcGxldGUgPyAnZmEtY2hlY2stc3F1YXJlJzogJ2ZhLXNxdWFyZScpO1xuICAgICAgICAgICAgaWNvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKGUpID0+IGNvbXBsZXRlVGFzayhlKSlcbiAgICAgICAgICAgIHRhc2tMaXN0SXRlbVNwYW4uYXBwZW5kQ2hpbGQoaWNvbik7XG4gICAgICAgICAgICB0YXNrTGlzdEl0ZW1TcGFuLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGAgJHt0YXNrLnRpdGxlfWApKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgY29uc3QgZGVzY3JpcHRpb25TcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICAgICAgZGVzY3JpcHRpb25TcGFuLmNsYXNzTGlzdC5hZGQoJ2Rlc2NyaXB0aW9uLWhlYWRlcicpO1xuICAgICAgICAgICAgZGVzY3JpcHRpb25TcGFuLnRleHRDb250ZW50ID0gYCR7dGFzay5kZXNjcmlwdGlvbn1gXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGNvbnN0IGR1ZURhdGVTcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICAgICAgZHVlRGF0ZVNwYW4uY2xhc3NMaXN0LmFkZCgnZHVlZGF0ZS1oZWFkZXInKTtcbiAgICAgICAgICAgIGNvbnN0IGR1ZURhdGUgPSBuZXcgRGF0ZSh0YXNrLmR1ZWRhdGUpO1xuICAgICAgICAgICAgZHVlRGF0ZVNwYW4udGV4dENvbnRlbnQgPSBkdWVEYXRlLnRvTG9jYWxlU3RyaW5nKCk7XG4gICAgXG4gICAgICAgICAgICB0YXNrSXRlbS5hcHBlbmRDaGlsZCh0YXNrTGlzdEl0ZW1TcGFuKTtcbiAgICAgICAgICAgIHRhc2tJdGVtLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uU3Bhbik7XG4gICAgICAgICAgICB0YXNrSXRlbS5hcHBlbmRDaGlsZChkdWVEYXRlU3Bhbik7XG4gICAgXG4gICAgICAgICAgICBpZiAodGFzay5jb21wbGV0ZSkge1xuICAgICAgICAgICAgICAgIHRhc2tJdGVtLmNsYXNzTGlzdC5hZGQoJ2NvbXBsZXRlJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgIFxuICAgICAgICAgICAgaWYgKHRhc2sucHJpb3JpdHkgPT0gJ2hpZ2gnKXtcbiAgICAgICAgICAgICAgICB0YXNrSXRlbS5jbGFzc0xpc3QuYWRkKCdoaWdoJyk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRhc2sucHJpb3JpdHkgPT0gJ21lZGl1bScpe1xuICAgICAgICAgICAgICAgIHRhc2tJdGVtLmNsYXNzTGlzdC5hZGQoJ21lZGl1bScpXG4gICAgICAgICAgICB9IGVsc2V7XG4gICAgICAgICAgICAgICAgdGFza0l0ZW0uY2xhc3NMaXN0LmFkZCgnbG93Jyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgXG4gICAgICAgICAgICBjb25zdCBmdW5jdGlvbnNEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICAgICAgZnVuY3Rpb25zRGl2LmNsYXNzTGlzdC5hZGQoJ2Z1bmN0aW9ucy1kaXYnKVxuICAgICAgICAgICAgY29uc3QgZGVsZXRlSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2knKTtcbiAgICAgICAgICAgIGRlbGV0ZUljb24uY2xhc3NMaXN0LmFkZCgnZmEtc29saWQnLCdmYS10cmFzaCcpO1xuICAgICAgICAgICAgZGVsZXRlSWNvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKCk9PmRlbGV0ZVRhc2sodGFzay5pZCkpO1xuICAgICAgICAgICAgY29uc3QgZWRpdEljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJyk7XG4gICAgICAgICAgICBlZGl0SWNvbi5jbGFzc0xpc3QuYWRkKCdmYS1zb2xpZCcsJ2ZhLXBlbicpO1xuICAgICAgICAgICAgZWRpdEljb24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCgpPT5lZGl0VGFzayh0YXNrLmlkKSk7XG4gICAgICAgICAgICBmdW5jdGlvbnNEaXYuYXBwZW5kQ2hpbGQoZGVsZXRlSWNvbik7XG4gICAgICAgICAgICBmdW5jdGlvbnNEaXYuYXBwZW5kQ2hpbGQoZWRpdEljb24pO1xuICAgICAgICAgICAgdGFza0l0ZW0uYXBwZW5kQ2hpbGQoZnVuY3Rpb25zRGl2KTtcbiAgICBcbiAgICAgICAgICAgIHRhc2tzTGlzdC5hcHBlbmRDaGlsZCh0YXNrSXRlbSk7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbmZ1bmN0aW9uIGRlbGV0ZVRhc2sodGFza0lkKSB7XG4gICAgY29uc3Qgc2VsZWN0ZWRQcm9qZWN0ID0gUHJvamVjdHMuZmluZChwcm9qZWN0ID0+IHByb2plY3QuaWQgPT0gc2VsZWN0ZWRQcm9qZWN0SWQpO1xuICAgIHNlbGVjdGVkUHJvamVjdC50YXNrcyA9IHNlbGVjdGVkUHJvamVjdC50YXNrcy5maWx0ZXIodGFzayA9PiB0YXNrLmlkICE9PSB0YXNrSWQpO1xuICAgIHNhdmVUb0xvY2FsU3RvcmFnZSgpO1xuICAgIHJlbmRlclByb2plY3RUYXNrcyhzZWxlY3RlZFByb2plY3QpO1xufVxuZnVuY3Rpb24gZWRpdFRhc2soaWQpe1xuICAgIGNvbnN0IHNlbGVjdGVkUHJvamVjdCA9IFByb2plY3RzLmZpbmQocHJvamVjdCA9PiBwcm9qZWN0LmlkID09IHNlbGVjdGVkUHJvamVjdElkKTtcbiAgICBjb25zdCB0YXNrID0gc2VsZWN0ZWRQcm9qZWN0LnRhc2tzLmZpbmQodGFzayA9PiB0YXNrLmlkID09IGlkKTtcbiAgICBpZiAoIXRhc2spIHJldHVybjtcblxuICAgIC8vIFBvcHVsYXRlIHRoZSBmb3JtIHdpdGggdGhlIHRhc2sgdmFsdWVzXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RpdGxlJykudmFsdWUgPSB0YXNrLnRpdGxlO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkdWVkYXRlJykudmFsdWUgPSB0YXNrLmR1ZURhdGU7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Rlc2NyaXB0aW9uJykudmFsdWUgPSB0YXNrLmRlc2NyaXB0aW9uO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcmlvcml0eScpLnZhbHVlID0gdGFzay5wcmlvcml0eTtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFza0lkJykudmFsdWUgPSB0YXNrLmlkO1xuXG4gICAgbW9kYWwuc2hvd01vZGFsKCk7XG59XG5cbmlmIChzZWxlY3RlZFByb2plY3RJZCl7XG4gICAgc2VsZWN0ZWRQcm9qZWN0SWQgPSBzZWxlY3RlZFByb2plY3RJZFxufSBlbHNlIHtcbiAgICBjb25zb2xlLmxvZyhcImluc2lkZSBlbHNlXCIpXG4gICAgY29uc3QgYWN0aXZlUHJvamVjdEljb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdC1saXN0LWl0ZW0nKVxuICAgIGFjdGl2ZVByb2plY3RJY29uLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgIHNlbGVjdGVkUHJvamVjdElkID0gMCA7XG4gICAgc2F2ZVRvTG9jYWxTdG9yYWdlKCk7XG59XG5jb25zdCBzZWxlY3RlZFByb2plY3QgPSBQcm9qZWN0cy5maW5kKHByb2plY3QgPT4gcHJvamVjdC5pZCA9PSBzZWxlY3RlZFByb2plY3RJZClcbnJlbmRlclByb2plY3RUYXNrcyhzZWxlY3RlZFByb2plY3QpO1xuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=