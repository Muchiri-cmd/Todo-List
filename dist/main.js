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
    width:9em;
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
.fa-bars,.fa-eye-slash{
    font-size:2rem;
}
.add-project-btn{
    margin:.4em;
}

/* MEDIA QUAERIES */
@media (min-width: 1001px) {
    .fa-bars {
        display: none;
    }.fa-eye-slash{
        display: none;
    }
}
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
@media screen and (max-width:1000px){
    body{
        padding:.5rem;
    }
    .content{
        min-height: 99vh;
        padding:0;
    }
    .projects-container{
        display: none;
        position: fixed; 
        width: 30%;
        height: 100%;
        z-index: 10; 
    }
    .projects-container.show {
        display: block;
    }
    .toggle-projects,.toggle-tasks {
        display: block; 
        cursor: pointer;
    }
    .project-name,.projects-header{
        padding:1rem;
    }
    .projects-container,.project-tasks-container{
        min-height:90vh;
    }
    .project-tasks-container{
        width:99vw;
    }
 
    .header{
        display: none;
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
        padding:0;
        margin:0;
    }
    .project-tasks-container{
        width:90vw;
        
    }
    .projects-container{ 
        width: 50%;
        height: 100%;
        z-index: 10; 
        padding:.8rem;
    }
    .fa-eye-slash{
        font-size:1.5rem;
    }
    .projects-header{
        padding:.5rem .1rem;
    }
    .toggle-form-btn{
        margin-left:1rem;
    }
    #modal{
        top:50%;
        left:5%;
    }
    .new-project-input{
        width:7rem;
    }
    .project-task-list>li,.projects-list>li{
        margin:.2rem .5rem .6rem .5rem;
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
        width:98vw;
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

}`, "",{"version":3,"sources":["webpack://./src/index.css"],"names":[],"mappings":"AAAA;IACI,SAAS;IACT,QAAQ;IACR,sBAAsB;AAC1B;AACA;IACI,cAAc;IACd,YAAY;IACZ,WAAW;IACX,UAAU;IACV,YAAY;AAChB;AACA;IACI,kBAAkB;AACtB;AACA;IACI,qBAAqB;AACzB;AACA;IACI,aAAa;IACb,aAAa;IACb,8BAA8B;IAC9B,gBAAgB;AACpB;AACA;IACI,WAAW;IACX,mBAAmB;AACvB;AACA;IACI,uBAAuB;IACvB,aAAa;IACb,mBAAmB;IACnB;QACI,iBAAiB;IACrB;AACJ;AACA;IACI,aAAa;IACb,WAAW;IACX,uBAAuB;IACvB,mBAAmB;AACvB;AACA;IACI,2BAA2B;AAC/B;AACA;IACI,8BAA8B;AAClC;AACA;IACI,cAAc;AAClB;AACA;IACI,aAAa;IACb,mBAAmB;IACnB,8BAA8B;AAClC;AACA;IACI,cAAc;IACd,WAAW;IACX,YAAY;IACZ,yBAAyB;IACzB;QACI,eAAe;IACnB;AACJ;AACA;IACI,YAAY;IACZ,cAAc;IACd,mBAAmB;IACnB,8BAA8B;IAC9B,0BAA0B;IAC1B;QACI,eAAe;IACnB;AACJ;AACA;IACI,aAAa;IACb,OAAO;IACP,oCAAoC;AACxC;AACA;IACI,WAAW;AACf;AACA;IACI,uBAAuB;IACvB,SAAS;IACT,8BAA8B;IAC9B,kBAAkB;IAClB,aAAa;IACb,eAAe;IACf,SAAS;AACb;AACA;IACI,UAAU;IACV,aAAa;AACjB;AACA;IACI,YAAY;IACZ,eAAe;IACf,iBAAiB;IACjB;QACI,eAAe;IACnB;AACJ;AACA;GACG,aAAa;GACb,sBAAsB;GACtB,WAAW;GACX,WAAW;AACd;AACA;IACI,aAAa;IACb,eAAe;IACf,kBAAkB;IAClB,kBAAkB;AACtB;AACA;IACI,WAAW;IACX,aAAa;AACjB;AACA;IACI,kBAAkB;IAClB,QAAQ;IACR,QAAQ;IACR,2BAA2B;IAC3B,uBAAuB;IACvB,YAAY;IACZ,UAAU;IACV,yBAAyB;AAC7B;AACA;IACI,qBAAqB;IACrB,WAAW;IACX,kBAAkB;IAClB,KAAK;IACL,OAAO;IACP,aAAa;IACb,YAAY;IACZ,kBAAkB;IAClB;QACI,eAAe;IACnB;AACJ;AACA;IACI,mBAAmB;IACnB,gBAAgB;IAChB,sBAAsB;IACtB,qBAAqB;AACzB;;AAEA;IACI,eAAe;AACnB;AACA;IACI,4BAA4B;IAC5B,UAAU;IACV,UAAU;AACd;AACA;IACI;QACI,eAAe;QACf;YACI,eAAe;QACnB;IACJ;AACJ;AACA;IACI,8BAA8B;AAClC;AACA;IACI,+BAA+B;AACnC;AACA;IACI,6BAA6B;AACjC;AACA;IACI,aAAa;IACb,mBAAmB;IACnB;QACI,iBAAiB;QACjB,aAAa;QACb;YACI,eAAe;QACnB;IACJ;;AAEJ;AACA;IACI,YAAY;IACZ,aAAa;IACb,8BAA8B;IAC9B,mBAAmB;IACnB,+BAA+B;IAC/B;QACI,cAAc;IAClB;AACJ;AACA;IACI,cAAc;AAClB;AACA;IACI,WAAW;AACf;;AAEA,mBAAmB;AACnB;IACI;QACI,aAAa;IACjB,CAAC;QACG,aAAa;IACjB;AACJ;AACA;IACI;QACI,cAAc;IAClB;IACA;QACI,aAAa;QACb;YACI,eAAe;YACf;gBACI,eAAe;YACnB;QACJ;IACJ;IACA;QACI,aAAa;IACjB;;AAEJ;AACA;IACI;QACI,cAAc;QACd,WAAW;IACf;IACA;QACI,YAAY;IAChB;;IAEA;QACI,aAAa;IACjB;IACA;QACI,aAAa;IACjB;IACA;QACI,UAAU;IACd;AACJ;AACA;IACI;QACI,aAAa;IACjB;IACA;QACI,gBAAgB;QAChB,SAAS;IACb;IACA;QACI,aAAa;QACb,eAAe;QACf,UAAU;QACV,YAAY;QACZ,WAAW;IACf;IACA;QACI,cAAc;IAClB;IACA;QACI,cAAc;QACd,eAAe;IACnB;IACA;QACI,YAAY;IAChB;IACA;QACI,eAAe;IACnB;IACA;QACI,UAAU;IACd;;IAEA;QACI,aAAa;IACjB;;AAEJ;AACA;IACI;QACI,WAAW;QACX,aAAa;QACb,cAAc;IAClB;IACA;QACI,aAAa;QACb,SAAS;QACT,QAAQ;IACZ;IACA;QACI,UAAU;;IAEd;IACA;QACI,UAAU;QACV,YAAY;QACZ,WAAW;QACX,aAAa;IACjB;IACA;QACI,gBAAgB;IACpB;IACA;QACI,mBAAmB;IACvB;IACA;QACI,gBAAgB;IACpB;IACA;QACI,OAAO;QACP,OAAO;IACX;IACA;QACI,UAAU;IACd;IACA;QACI,8BAA8B;QAC9B,aAAa;QACb,mBAAmB;QACnB;YACI,iBAAiB;QACrB;IACJ;IACA;QACI,SAAS;IACb;IACA;QACI,aAAa;IACjB;IACA;QACI,YAAY;QACZ,UAAU;IACd;IACA;QACI,aAAa;IACjB;IACA;QACI,aAAa;IACjB;IACA;QACI,aAAa;QACb,aAAa;QACb,8BAA8B;IAClC;IACA;QACI,aAAa;IACjB;IACA;QACI,8BAA8B;IAClC;IACA;QACI,+BAA+B;IACnC;IACA;QACI,6BAA6B;IACjC;;AAEJ","sourcesContent":["*{\n    padding:0;\n    margin:0;\n    box-sizing: border-box;\n}\nbody{\n    font-size:20px;\n    height:100vh;\n    padding:2em;\n    width:90vw;\n    margin: auto;\n}\n.header{\n    text-align: center;\n}\nli {\n    list-style-type: none;\n}\n.content{\n    padding:1.5em;\n    display: grid;\n    grid-template-columns: 1fr 3fr;\n    min-height: 80vh;\n}\n.projects-container,.project-tasks-container{\n    padding:2em;\n    border-radius: .2em;\n}\n.project-task-list>li,.projects-list>li{\n    margin:.8em 2em 0em 2em;\n    display: flex;\n    align-items: center;\n    i{\n        margin-right:.3em;\n    }\n}   \n.project-task-list li{\n    display: flex;\n    padding:1em;\n    background-color: white;\n    border-radius: .5em;\n}\n.projects-container{\n    background-color: aliceblue;\n}\n.project-tasks-container{\n    background-color:lavenderblush;\n}\n.project-tasks-container h3 {\n    margin:1em 0em;\n}\n.projects-header,.tasks-header{\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n}\n.toggle-form-btn{\n    font-size: 2em;\n    color:black;\n    border: none;\n    background-color: inherit;\n    &:hover{\n        cursor: pointer;\n    }\n}\n.toggle-taskform-btn{\n    padding:.5em;\n    font-size: 1em;\n    border-radius: .2em;\n    background-color:lavenderblush;\n    border:1px solid cadetblue;\n    &:hover{\n        cursor: pointer;\n    }\n}\n.task-keys,.project-task-list li{\n    display: grid;\n    gap:1em;\n    grid-template-columns: repeat(4,1fr);\n}\n.task-keys{\n    padding:1em;\n}\n.new-project-input {\n    background: transparent;\n    border: 0;\n    border-bottom: 1px solid black;\n    font-size: inherit;\n    outline: none;\n    padding: 0.25em;\n    width:9em;\n}\n.add-project-form{\n    margin:1em;\n    display: none;\n}  \n.add-project-btn{\n    padding:.3em;\n    font-size: .8em;\n    border-radius:5px;\n    &:hover{\n        cursor: pointer;\n    }\n}\n.task-form{\n   display: flex;\n   flex-direction: column;\n   padding:1em;\n   margin:auto;\n}\n.task-form input,#priority{\n    padding: .5em;\n    font-size: .8em;\n    border-radius: 5px;\n    margin-bottom: 1em;\n}\n.add-task-btn{\n    padding:1em;\n    font-size:1em;\n}\n#modal {\n    position: relative;\n    top: 60%;        \n    left:50%;        \n    transform: translateY(-50%);\n    background-color: white; \n    padding:.5em;   \n    width:25em;\n    border: 5px solid #ccfbf1;\n}\n.hide-form{\n    background-color: red;\n    color:white;\n    position: absolute;\n    top:0;\n    right:0;\n    font-size:1em;\n    padding:.5em;\n    border-radius: 2px;\n    &:hover{\n        cursor: pointer;\n    }\n}\n.project-list-item.active{\n    border-radius: 10px;\n    box-shadow: none;\n    border:1px solid green;\n    transform: scale(1.1);\n}\n\n.fa-regular{\n    font-size:1.6em;\n}\n.project-task-list>.complete{\n    text-decoration:line-through;\n    color:grey;\n    opacity:.5;   \n}\n.functions-div{\n    i{\n        margin-left:3em;\n        &:hover{\n            cursor: pointer;\n        }\n    }\n}\n.low{\n    border-left:30px solid #dc2626;\n}\n.medium{\n    border-left: 30px solid #f59e0b;\n}\n.high{\n    border-left: 30px solid green;\n}\n.task-list-item{\n    display: flex;\n    align-items: center;\n    i{\n        margin-right:.5em;\n        font-size:2em;\n        &:hover{\n            cursor: pointer;\n        }\n    }\n   \n}\n.project-list-item{\n    padding:.5em;\n    display: flex;\n    justify-content: space-between;\n    border-radius: 10px;\n    box-shadow: 0 0 7px 2px #d1d5db;\n    &:hover{\n        cursor:pointer;\n    }\n}\n.fa-bars,.fa-eye-slash{\n    font-size:2rem;\n}\n.add-project-btn{\n    margin:.4em;\n}\n\n/* MEDIA QUAERIES */\n@media (min-width: 1001px) {\n    .fa-bars {\n        display: none;\n    }.fa-eye-slash{\n        display: none;\n    }\n}\n@media screen and (max-width:1590px){\n    body{\n        font-size:18px;\n    }\n    .functions-div{\n        display: flex;\n        i{\n            margin-left:1em;\n            &:hover{\n                cursor: pointer;\n            }\n        }\n    }\n    .project-task-list>li{\n        padding:.5rem;\n    }\n\n}\n@media screen and (max-width:1280px){\n    body{\n        font-size:16px;\n        width:100vw;\n    }\n    .projects-container{\n        padding:2rem;\n    }\n   \n    .project-list-item{\n        padding:.5rem;\n    }\n    .add-project-form{\n        padding:.1rem;\n    }\n    .new-project-input{\n        width:9rem;\n    }\n}\n@media screen and (max-width:1000px){\n    body{\n        padding:.5rem;\n    }\n    .content{\n        min-height: 99vh;\n        padding:0;\n    }\n    .projects-container{\n        display: none;\n        position: fixed; \n        width: 30%;\n        height: 100%;\n        z-index: 10; \n    }\n    .projects-container.show {\n        display: block;\n    }\n    .toggle-projects,.toggle-tasks {\n        display: block; \n        cursor: pointer;\n    }\n    .project-name,.projects-header{\n        padding:1rem;\n    }\n    .projects-container,.project-tasks-container{\n        min-height:90vh;\n    }\n    .project-tasks-container{\n        width:99vw;\n    }\n \n    .header{\n        display: none;\n    }\n   \n}\n@media screen and (max-width:630px) {\n    body{\n        width:100vw;\n        padding:.1rem;\n        font-size:13px;\n    }\n    .content{\n        padding:.5rem;\n        padding:0;\n        margin:0;\n    }\n    .project-tasks-container{\n        width:90vw;\n        \n    }\n    .projects-container{ \n        width: 50%;\n        height: 100%;\n        z-index: 10; \n        padding:.8rem;\n    }\n    .fa-eye-slash{\n        font-size:1.5rem;\n    }\n    .projects-header{\n        padding:.5rem .1rem;\n    }\n    .toggle-form-btn{\n        margin-left:1rem;\n    }\n    #modal{\n        top:50%;\n        left:5%;\n    }\n    .new-project-input{\n        width:7rem;\n    }\n    .project-task-list>li,.projects-list>li{\n        margin:.2rem .5rem .6rem .5rem;\n        display: flex;\n        align-items: center;\n        i{\n            margin-right:.3em;\n        }\n    }  \n    .tasks-container{\n        padding:0;\n    }\n    .project-list-item{\n        padding:.2rem;\n    }\n    .project-tasks-container{\n        padding:1rem;\n        width:98vw;\n    }\n    .toggle-taskform-btn{\n        padding:.2rem;\n    }\n    .description-header{\n        display: none;\n    }\n    .task-keys,.project-task-list>li{\n        padding:.5rem;\n        display: flex;\n        justify-content: space-between;\n    }\n    .desc-key{\n        display: none;\n    }\n    .low{\n        border-left:10px solid #dc2626;\n    }\n    .medium{\n        border-left: 10px solid #f59e0b;\n    }\n    .high{\n        border-left: 10px solid green;\n    }\n\n}"],"sourceRoot":""}]);
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

/***/ }),

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   clearElement: () => (/* binding */ clearElement),
/* harmony export */   projectName: () => (/* binding */ projectName),
/* harmony export */   renderProjectTasks: () => (/* binding */ renderProjectTasks),
/* harmony export */   renderProjects: () => (/* binding */ renderProjects),
/* harmony export */   tasksList: () => (/* binding */ tasksList)
/* harmony export */ });
/* harmony import */ var _project_manager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project-manager */ "./src/project-manager.js");
/* harmony import */ var _forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./forms */ "./src/forms.js");
/* harmony import */ var _tasks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tasks */ "./src/tasks.js");





const toggleProjectsIcon = document.querySelector('.toggle-projects');
const projectsContainer = document.querySelector('.projects-container');
const tasksIcon = document.querySelector('.toggle-tasks');
const toggleProjectFormBtn =  document.querySelector('.toggle-form-btn');
const projectName = document.querySelector('.project-name');
const tasksList = document.querySelector('.project-task-list');


function renderProjectTasks(selectedProject){
    clearElement(tasksList);

    if(selectedProject){
        projectName.textContent = `${selectedProject.name}`;
        selectedProject.tasks.forEach(task => {
            const taskItem = document.createElement('li');
    
            const taskListItemSpan = document.createElement('span');
            taskListItemSpan.classList.add('task-list-item');
            taskItem.dataset.taskId = task.id;
    
            const icon = document.createElement('i');
            icon.classList.add('fa-regular', task.complete ? 'fa-check-square': 'fa-square');
            icon.addEventListener('click',(e) => (0,_tasks__WEBPACK_IMPORTED_MODULE_2__.completeTask)(e))
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
            deleteIcon.addEventListener('click',()=>(0,_tasks__WEBPACK_IMPORTED_MODULE_2__.deleteTask)(task.id));
            const editIcon = document.createElement('i');
            editIcon.classList.add('fa-solid','fa-pen');
            editIcon.addEventListener('click',()=>(0,_tasks__WEBPACK_IMPORTED_MODULE_2__.editTask)(task.id));
            functionsDiv.appendChild(deleteIcon);
            functionsDiv.appendChild(editIcon);
            taskItem.appendChild(functionsDiv);
    
            tasksList.appendChild(taskItem);
        });
    }
}

function renderProjects() {
    _project_manager__WEBPACK_IMPORTED_MODULE_0__.Projects.forEach(project => {
  
        const projectItem = document.createElement('li');
        projectItem.classList.add('project-list-item')
        projectItem.id = `${project.id}`;
        
       
        const span = document.createElement('span');
        span.classList.add('project-list-icon');
        

        if (projectItem.id == _project_manager__WEBPACK_IMPORTED_MODULE_0__.selectedProjectId) {
            projectItem.classList.add('active');
        }
       
        projectItem.appendChild(span);
        // Append the text node to the projectItem after the span
        const textNode = document.createTextNode(` ${project.name}`);
        projectItem.appendChild(textNode);

        const delIcon = document.createElement('i');
        delIcon.classList.add('fa-solid');
        delIcon.classList.add('fa-trash');
        delIcon.addEventListener('click',() => (0,_project_manager__WEBPACK_IMPORTED_MODULE_0__.deleteProject)(project.id))
        projectItem.append(delIcon);

        _forms__WEBPACK_IMPORTED_MODULE_1__.projectsList.appendChild(projectItem);
    });
}
function clearElement(elem){
    while (elem.firstChild){
        elem.removeChild(elem.firstChild)
        
    }
}
//Listen for selected Project
_forms__WEBPACK_IMPORTED_MODULE_1__.projectsList.addEventListener('click',e => {   
    if (e.target.tagName.toLowerCase() == 'li'){
        (0,_project_manager__WEBPACK_IMPORTED_MODULE_0__.setProjectId)(e.target.id)
        ;(0,_project_manager__WEBPACK_IMPORTED_MODULE_0__.saveToLocalStorage)();  
        clearElement(_forms__WEBPACK_IMPORTED_MODULE_1__.projectsList);
        renderProjects();
        const selectedProject = _project_manager__WEBPACK_IMPORTED_MODULE_0__.Projects.find(project => project.id == _project_manager__WEBPACK_IMPORTED_MODULE_0__.selectedProjectId);
        projectName.textContent = `${selectedProject.name}`
        renderProjectTasks(selectedProject)
    }
})

toggleProjectFormBtn.addEventListener('click',()=>{
    if (_forms__WEBPACK_IMPORTED_MODULE_1__.projectForm.style.display === 'none' || _forms__WEBPACK_IMPORTED_MODULE_1__.projectForm.style.display === '') {
        _forms__WEBPACK_IMPORTED_MODULE_1__.projectForm.style.display = 'block';
        const input = _forms__WEBPACK_IMPORTED_MODULE_1__.projectForm.querySelector('input'); 
        input.focus();
    } else {
        _forms__WEBPACK_IMPORTED_MODULE_1__.projectForm.style.display = 'none';
    }
})

toggleProjectsIcon.addEventListener('click', () => {
    projectsContainer.classList.toggle('show');
});

tasksIcon.addEventListener('click', () => {
    projectsContainer.classList.remove('show');
});



/***/ }),

/***/ "./src/forms.js":
/*!**********************!*\
  !*** ./src/forms.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   projectForm: () => (/* binding */ projectForm),
/* harmony export */   projectsList: () => (/* binding */ projectsList)
/* harmony export */ });
/* harmony import */ var _project_manager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project-manager */ "./src/project-manager.js");
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom */ "./src/dom.js");
/* harmony import */ var _tasks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tasks */ "./src/tasks.js");





//Form related - DOM variables
const projectForm = document.querySelector('.add-project-form')
const projectsList = document.querySelector('.projects-list');
const tasksForm = document.querySelector('.task-form');
const displayForm = document.querySelector('.toggle-taskform-btn');
const hideForm = document.querySelector('.hide-form');
const modal = document.querySelector('.modal');
const newProjectInput = document.querySelector('.new-project-input');


//project form 
projectForm.addEventListener('submit',e=>{
    e.preventDefault();
    const projectTitle = newProjectInput.value;
  
    //verify input
    if (projectTitle) {
        //create project and add to Projects 
        const project = (0,_project_manager__WEBPACK_IMPORTED_MODULE_0__.createProject)(projectTitle) 
        _project_manager__WEBPACK_IMPORTED_MODULE_0__.Projects.push(project);
        (0,_project_manager__WEBPACK_IMPORTED_MODULE_0__.setProjectId)(project.id)
        ;(0,_project_manager__WEBPACK_IMPORTED_MODULE_0__.saveToLocalStorage)();
        (0,_dom__WEBPACK_IMPORTED_MODULE_1__.clearElement)(projectsList);
        projectForm.style.display = 'none';
        (0,_dom__WEBPACK_IMPORTED_MODULE_1__.renderProjects)();
        const selectedProject = _project_manager__WEBPACK_IMPORTED_MODULE_0__.Projects.find(project => project.id == _project_manager__WEBPACK_IMPORTED_MODULE_0__.selectedProjectId);
        console.log(selectedProject.name)
        _dom__WEBPACK_IMPORTED_MODULE_1__.projectName.textContent = `${selectedProject.name}`;
        (0,_dom__WEBPACK_IMPORTED_MODULE_1__.renderProjectTasks)(selectedProject)
        newProjectInput.value='';
    }
})

//tasks form functionalities
tasksForm.addEventListener('submit',e=>{
    const selectedProject = _project_manager__WEBPACK_IMPORTED_MODULE_0__.Projects.find(project => project.id == _project_manager__WEBPACK_IMPORTED_MODULE_0__.selectedProjectId);
    e.preventDefault();
    const title = document.getElementById('title').value;
    const duedate = document.getElementById('duedate').value
    const description = document.getElementById('description').value
    const priority = document.getElementById('priority').value
    const taskId = document.getElementById('taskId').value;
    
    if (taskId) {
        //edit exisitng task
        const selectedProject = _project_manager__WEBPACK_IMPORTED_MODULE_0__.Projects.find(project => project.id == _project_manager__WEBPACK_IMPORTED_MODULE_0__.selectedProjectId);
        const task = selectedProject.tasks.find(task => task.id == taskId);
        task.title = title;
        task.description = description;
        task.duedate = duedate;
        task.priority = priority;
       
    } else {
        //create new task
        const task = (0,_tasks__WEBPACK_IMPORTED_MODULE_2__.createTask)(title, description, duedate, priority);
        selectedProject.tasks.push(task);
    }

    (0,_project_manager__WEBPACK_IMPORTED_MODULE_0__.saveToLocalStorage)();
    (0,_dom__WEBPACK_IMPORTED_MODULE_1__.clearElement)(_dom__WEBPACK_IMPORTED_MODULE_1__.tasksList);
    tasksForm.reset();
    document.getElementById('taskId').value = '';
    modal.close();
    (0,_dom__WEBPACK_IMPORTED_MODULE_1__.renderProjectTasks)(selectedProject);
})
hideForm.addEventListener('click',(e)=>{
    modal.close();
})
displayForm.addEventListener('click', () => {
    if (_project_manager__WEBPACK_IMPORTED_MODULE_0__.selectedProjectId === null || _project_manager__WEBPACK_IMPORTED_MODULE_0__.selectedProjectId === 'null') { 
        alert("Click on a project to attach tasks to.");
    } else {
        tasksForm.reset();
        modal.showModal();
    }
});

/***/ }),

/***/ "./src/project-manager.js":
/*!********************************!*\
  !*** ./src/project-manager.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Projects: () => (/* binding */ Projects),
/* harmony export */   createProject: () => (/* binding */ createProject),
/* harmony export */   deleteProject: () => (/* binding */ deleteProject),
/* harmony export */   saveToLocalStorage: () => (/* binding */ saveToLocalStorage),
/* harmony export */   selectedProject: () => (/* binding */ selectedProject),
/* harmony export */   selectedProjectId: () => (/* binding */ selectedProjectId),
/* harmony export */   setProjectId: () => (/* binding */ setProjectId)
/* harmony export */ });
/* harmony import */ var _forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./forms */ "./src/forms.js");
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom */ "./src/dom.js");



//manages,creates and deletes projects in local storage

// ================== GLOBAL LOCAL STORAGE ===============================================//
const LOCAL_STORAGE_PROJECT_KEY = 'projects'
const LOCAL_STORAGE_SELECTED_PROJECT_KEY = 'selectedProject'

//get projects from local storage instead of array but if n local, give empty array
let Projects = JSON.parse(localStorage.getItem(LOCAL_STORAGE_PROJECT_KEY)) || [{"name":"Default Project","id":0,"tasks":[]}]
//get selected project from projects
let selectedProjectId = localStorage.getItem(LOCAL_STORAGE_SELECTED_PROJECT_KEY) || 0

function saveToLocalStorage(){
    localStorage.setItem(LOCAL_STORAGE_PROJECT_KEY,JSON.stringify(Projects))
    localStorage.setItem(LOCAL_STORAGE_SELECTED_PROJECT_KEY,selectedProjectId)
}

//get current selected project according to its id
let selectedProject = Projects.find(project => project.id == selectedProjectId)

function setProjectId (id){
    selectedProjectId = id
} 
function createProject(name){
    const project = {
        name:name,
        id:Date.now().toString(),
        tasks:[]
    }
    return project
}
function deleteProject(projectId){
    Projects = Projects.filter(project => project.id !== projectId);
    selectedProjectId = null;
    saveToLocalStorage();
    (0,_dom__WEBPACK_IMPORTED_MODULE_1__.clearElement)(_forms__WEBPACK_IMPORTED_MODULE_0__.projectsList);
    (0,_dom__WEBPACK_IMPORTED_MODULE_1__.clearElement)(_dom__WEBPACK_IMPORTED_MODULE_1__.tasksList);
    (0,_dom__WEBPACK_IMPORTED_MODULE_1__.renderProjects)();
}


/***/ }),

/***/ "./src/tasks.js":
/*!**********************!*\
  !*** ./src/tasks.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   completeTask: () => (/* binding */ completeTask),
/* harmony export */   createTask: () => (/* binding */ createTask),
/* harmony export */   deleteTask: () => (/* binding */ deleteTask),
/* harmony export */   editTask: () => (/* binding */ editTask)
/* harmony export */ });
/* harmony import */ var _project_manager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project-manager */ "./src/project-manager.js");
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom */ "./src/dom.js");




function createTask(title,description,duedate,priority){
    return {title,description,duedate,priority,complete:false, id: Date.now().toString()}
}

function completeTask(e){

    if (e.target.closest('li')){
        const taskId = e.target.closest('li').dataset.taskId;
        const selectedProject = _project_manager__WEBPACK_IMPORTED_MODULE_0__.Projects.find(project => project.id == _project_manager__WEBPACK_IMPORTED_MODULE_0__.selectedProjectId);
        const task = selectedProject.tasks.find(task => task.id == taskId);
        
        //console.log(task);
        if (task) {
            task.complete = !task.complete; 
            (0,_project_manager__WEBPACK_IMPORTED_MODULE_0__.saveToLocalStorage)();
            (0,_dom__WEBPACK_IMPORTED_MODULE_1__.renderProjectTasks)(selectedProject); 
        }
   }
}
function deleteTask(taskId) {
    const selectedProject = _project_manager__WEBPACK_IMPORTED_MODULE_0__.Projects.find(project => project.id == _project_manager__WEBPACK_IMPORTED_MODULE_0__.selectedProjectId);
    selectedProject.tasks = selectedProject.tasks.filter(task => task.id !== taskId);
    (0,_project_manager__WEBPACK_IMPORTED_MODULE_0__.saveToLocalStorage)();
    (0,_dom__WEBPACK_IMPORTED_MODULE_1__.renderProjectTasks)(selectedProject);
}
function editTask(id){
    const selectedProject = _project_manager__WEBPACK_IMPORTED_MODULE_0__.Projects.find(project => project.id == _project_manager__WEBPACK_IMPORTED_MODULE_0__.selectedProjectId);
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
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom */ "./src/dom.js");
/* harmony import */ var _project_manager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./project-manager */ "./src/project-manager.js");





//render projects and their tasks
(0,_dom__WEBPACK_IMPORTED_MODULE_1__.renderProjectTasks)(_project_manager__WEBPACK_IMPORTED_MODULE_2__.selectedProject);
(0,_dom__WEBPACK_IMPORTED_MODULE_1__.renderProjects)();






})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxDQUFDLE9BQU8sZ0ZBQWdGLFVBQVUsVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsTUFBTSxLQUFLLFVBQVUsWUFBWSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksTUFBTSxZQUFZLE1BQU0sS0FBSyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLE1BQU0sVUFBVSxNQUFNLEtBQUssS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsTUFBTSxVQUFVLE1BQU0sS0FBSyxLQUFLLFVBQVUsVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLEtBQUssS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLEtBQUssS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLE1BQU0sVUFBVSxNQUFNLEtBQUssS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLEtBQUssS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLE1BQU0sVUFBVSxNQUFNLEtBQUssS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxLQUFLLEtBQUssS0FBSyxVQUFVLEtBQUssVUFBVSxNQUFNLEtBQUssS0FBSyxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxNQUFNLFlBQVksV0FBVyxLQUFLLFVBQVUsTUFBTSxNQUFNLEtBQUssS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsTUFBTSxVQUFVLE1BQU0sS0FBSyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxZQUFZLE1BQU0sS0FBSyxVQUFVLFdBQVcsVUFBVSxNQUFNLEtBQUssS0FBSyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsS0FBSyxVQUFVLEtBQUssV0FBVyxNQUFNLEtBQUssS0FBSyxLQUFLLFVBQVUsT0FBTyxLQUFLLEtBQUssS0FBSyxVQUFVLFVBQVUsS0FBSyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsS0FBSyxLQUFLLEtBQUssS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsS0FBSyxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxLQUFLLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE9BQU8sS0FBSyxLQUFLLEtBQUssVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxVQUFVLFVBQVUsS0FBSyxLQUFLLFVBQVUsS0FBSyxLQUFLLFlBQVksV0FBVyxZQUFZLE1BQU0sWUFBWSxNQUFNLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFV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O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7Ozs7Ozs7Ozs7O0FDQXFCO0FBQ3FDO0FBQ047OztBQUdwRDtBQUNBLHdEQUFrQixDQUFDLDZEQUFlO0FBQ2xDLG9EQUFjIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmNzcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5jc3M/Y2ZlNCIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9kb20uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2Zvcm1zLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9wcm9qZWN0LW1hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3Rhc2tzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgKntcbiAgICBwYWRkaW5nOjA7XG4gICAgbWFyZ2luOjA7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cbmJvZHl7XG4gICAgZm9udC1zaXplOjIwcHg7XG4gICAgaGVpZ2h0OjEwMHZoO1xuICAgIHBhZGRpbmc6MmVtO1xuICAgIHdpZHRoOjkwdnc7XG4gICAgbWFyZ2luOiBhdXRvO1xufVxuLmhlYWRlcntcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5saSB7XG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xufVxuLmNvbnRlbnR7XG4gICAgcGFkZGluZzoxLjVlbTtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDNmcjtcbiAgICBtaW4taGVpZ2h0OiA4MHZoO1xufVxuLnByb2plY3RzLWNvbnRhaW5lciwucHJvamVjdC10YXNrcy1jb250YWluZXJ7XG4gICAgcGFkZGluZzoyZW07XG4gICAgYm9yZGVyLXJhZGl1czogLjJlbTtcbn1cbi5wcm9qZWN0LXRhc2stbGlzdD5saSwucHJvamVjdHMtbGlzdD5saXtcbiAgICBtYXJnaW46LjhlbSAyZW0gMGVtIDJlbTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgaXtcbiAgICAgICAgbWFyZ2luLXJpZ2h0Oi4zZW07XG4gICAgfVxufSAgIFxuLnByb2plY3QtdGFzay1saXN0IGxpe1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgcGFkZGluZzoxZW07XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgYm9yZGVyLXJhZGl1czogLjVlbTtcbn1cbi5wcm9qZWN0cy1jb250YWluZXJ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogYWxpY2VibHVlO1xufVxuLnByb2plY3QtdGFza3MtY29udGFpbmVye1xuICAgIGJhY2tncm91bmQtY29sb3I6bGF2ZW5kZXJibHVzaDtcbn1cbi5wcm9qZWN0LXRhc2tzLWNvbnRhaW5lciBoMyB7XG4gICAgbWFyZ2luOjFlbSAwZW07XG59XG4ucHJvamVjdHMtaGVhZGVyLC50YXNrcy1oZWFkZXJ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cbi50b2dnbGUtZm9ybS1idG57XG4gICAgZm9udC1zaXplOiAyZW07XG4gICAgY29sb3I6YmxhY2s7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XG4gICAgJjpob3ZlcntcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIH1cbn1cbi50b2dnbGUtdGFza2Zvcm0tYnRue1xuICAgIHBhZGRpbmc6LjVlbTtcbiAgICBmb250LXNpemU6IDFlbTtcbiAgICBib3JkZXItcmFkaXVzOiAuMmVtO1xuICAgIGJhY2tncm91bmQtY29sb3I6bGF2ZW5kZXJibHVzaDtcbiAgICBib3JkZXI6MXB4IHNvbGlkIGNhZGV0Ymx1ZTtcbiAgICAmOmhvdmVye1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgfVxufVxuLnRhc2sta2V5cywucHJvamVjdC10YXNrLWxpc3QgbGl7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBnYXA6MWVtO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDQsMWZyKTtcbn1cbi50YXNrLWtleXN7XG4gICAgcGFkZGluZzoxZW07XG59XG4ubmV3LXByb2plY3QtaW5wdXQge1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIGJvcmRlcjogMDtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgYmxhY2s7XG4gICAgZm9udC1zaXplOiBpbmhlcml0O1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgcGFkZGluZzogMC4yNWVtO1xuICAgIHdpZHRoOjllbTtcbn1cbi5hZGQtcHJvamVjdC1mb3Jte1xuICAgIG1hcmdpbjoxZW07XG4gICAgZGlzcGxheTogbm9uZTtcbn0gIFxuLmFkZC1wcm9qZWN0LWJ0bntcbiAgICBwYWRkaW5nOi4zZW07XG4gICAgZm9udC1zaXplOiAuOGVtO1xuICAgIGJvcmRlci1yYWRpdXM6NXB4O1xuICAgICY6aG92ZXJ7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB9XG59XG4udGFzay1mb3Jte1xuICAgZGlzcGxheTogZmxleDtcbiAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICBwYWRkaW5nOjFlbTtcbiAgIG1hcmdpbjphdXRvO1xufVxuLnRhc2stZm9ybSBpbnB1dCwjcHJpb3JpdHl7XG4gICAgcGFkZGluZzogLjVlbTtcbiAgICBmb250LXNpemU6IC44ZW07XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIG1hcmdpbi1ib3R0b206IDFlbTtcbn1cbi5hZGQtdGFzay1idG57XG4gICAgcGFkZGluZzoxZW07XG4gICAgZm9udC1zaXplOjFlbTtcbn1cbiNtb2RhbCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRvcDogNjAlOyAgICAgICAgXG4gICAgbGVmdDo1MCU7ICAgICAgICBcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7IFxuICAgIHBhZGRpbmc6LjVlbTsgICBcbiAgICB3aWR0aDoyNWVtO1xuICAgIGJvcmRlcjogNXB4IHNvbGlkICNjY2ZiZjE7XG59XG4uaGlkZS1mb3Jte1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbiAgICBjb2xvcjp3aGl0ZTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOjA7XG4gICAgcmlnaHQ6MDtcbiAgICBmb250LXNpemU6MWVtO1xuICAgIHBhZGRpbmc6LjVlbTtcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XG4gICAgJjpob3ZlcntcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIH1cbn1cbi5wcm9qZWN0LWxpc3QtaXRlbS5hY3RpdmV7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBib3gtc2hhZG93OiBub25lO1xuICAgIGJvcmRlcjoxcHggc29saWQgZ3JlZW47XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xufVxuXG4uZmEtcmVndWxhcntcbiAgICBmb250LXNpemU6MS42ZW07XG59XG4ucHJvamVjdC10YXNrLWxpc3Q+LmNvbXBsZXRle1xuICAgIHRleHQtZGVjb3JhdGlvbjpsaW5lLXRocm91Z2g7XG4gICAgY29sb3I6Z3JleTtcbiAgICBvcGFjaXR5Oi41OyAgIFxufVxuLmZ1bmN0aW9ucy1kaXZ7XG4gICAgaXtcbiAgICAgICAgbWFyZ2luLWxlZnQ6M2VtO1xuICAgICAgICAmOmhvdmVye1xuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICB9XG4gICAgfVxufVxuLmxvd3tcbiAgICBib3JkZXItbGVmdDozMHB4IHNvbGlkICNkYzI2MjY7XG59XG4ubWVkaXVte1xuICAgIGJvcmRlci1sZWZ0OiAzMHB4IHNvbGlkICNmNTllMGI7XG59XG4uaGlnaHtcbiAgICBib3JkZXItbGVmdDogMzBweCBzb2xpZCBncmVlbjtcbn1cbi50YXNrLWxpc3QtaXRlbXtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgaXtcbiAgICAgICAgbWFyZ2luLXJpZ2h0Oi41ZW07XG4gICAgICAgIGZvbnQtc2l6ZToyZW07XG4gICAgICAgICY6aG92ZXJ7XG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIH1cbiAgICB9XG4gICBcbn1cbi5wcm9qZWN0LWxpc3QtaXRlbXtcbiAgICBwYWRkaW5nOi41ZW07XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBib3gtc2hhZG93OiAwIDAgN3B4IDJweCAjZDFkNWRiO1xuICAgICY6aG92ZXJ7XG4gICAgICAgIGN1cnNvcjpwb2ludGVyO1xuICAgIH1cbn1cbi5mYS1iYXJzLC5mYS1leWUtc2xhc2h7XG4gICAgZm9udC1zaXplOjJyZW07XG59XG4uYWRkLXByb2plY3QtYnRue1xuICAgIG1hcmdpbjouNGVtO1xufVxuXG4vKiBNRURJQSBRVUFFUklFUyAqL1xuQG1lZGlhIChtaW4td2lkdGg6IDEwMDFweCkge1xuICAgIC5mYS1iYXJzIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9LmZhLWV5ZS1zbGFzaHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjE1OTBweCl7XG4gICAgYm9keXtcbiAgICAgICAgZm9udC1zaXplOjE4cHg7XG4gICAgfVxuICAgIC5mdW5jdGlvbnMtZGl2e1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBpe1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6MWVtO1xuICAgICAgICAgICAgJjpob3ZlcntcbiAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgLnByb2plY3QtdGFzay1saXN0Pmxpe1xuICAgICAgICBwYWRkaW5nOi41cmVtO1xuICAgIH1cblxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDoxMjgwcHgpe1xuICAgIGJvZHl7XG4gICAgICAgIGZvbnQtc2l6ZToxNnB4O1xuICAgICAgICB3aWR0aDoxMDB2dztcbiAgICB9XG4gICAgLnByb2plY3RzLWNvbnRhaW5lcntcbiAgICAgICAgcGFkZGluZzoycmVtO1xuICAgIH1cbiAgIFxuICAgIC5wcm9qZWN0LWxpc3QtaXRlbXtcbiAgICAgICAgcGFkZGluZzouNXJlbTtcbiAgICB9XG4gICAgLmFkZC1wcm9qZWN0LWZvcm17XG4gICAgICAgIHBhZGRpbmc6LjFyZW07XG4gICAgfVxuICAgIC5uZXctcHJvamVjdC1pbnB1dHtcbiAgICAgICAgd2lkdGg6OXJlbTtcbiAgICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjEwMDBweCl7XG4gICAgYm9keXtcbiAgICAgICAgcGFkZGluZzouNXJlbTtcbiAgICB9XG4gICAgLmNvbnRlbnR7XG4gICAgICAgIG1pbi1oZWlnaHQ6IDk5dmg7XG4gICAgICAgIHBhZGRpbmc6MDtcbiAgICB9XG4gICAgLnByb2plY3RzLWNvbnRhaW5lcntcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgcG9zaXRpb246IGZpeGVkOyBcbiAgICAgICAgd2lkdGg6IDMwJTtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICB6LWluZGV4OiAxMDsgXG4gICAgfVxuICAgIC5wcm9qZWN0cy1jb250YWluZXIuc2hvdyB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIH1cbiAgICAudG9nZ2xlLXByb2plY3RzLC50b2dnbGUtdGFza3Mge1xuICAgICAgICBkaXNwbGF5OiBibG9jazsgXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB9XG4gICAgLnByb2plY3QtbmFtZSwucHJvamVjdHMtaGVhZGVye1xuICAgICAgICBwYWRkaW5nOjFyZW07XG4gICAgfVxuICAgIC5wcm9qZWN0cy1jb250YWluZXIsLnByb2plY3QtdGFza3MtY29udGFpbmVye1xuICAgICAgICBtaW4taGVpZ2h0Ojkwdmg7XG4gICAgfVxuICAgIC5wcm9qZWN0LXRhc2tzLWNvbnRhaW5lcntcbiAgICAgICAgd2lkdGg6OTl2dztcbiAgICB9XG4gXG4gICAgLmhlYWRlcntcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG4gICBcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NjMwcHgpIHtcbiAgICBib2R5e1xuICAgICAgICB3aWR0aDoxMDB2dztcbiAgICAgICAgcGFkZGluZzouMXJlbTtcbiAgICAgICAgZm9udC1zaXplOjEzcHg7XG4gICAgfVxuICAgIC5jb250ZW50e1xuICAgICAgICBwYWRkaW5nOi41cmVtO1xuICAgICAgICBwYWRkaW5nOjA7XG4gICAgICAgIG1hcmdpbjowO1xuICAgIH1cbiAgICAucHJvamVjdC10YXNrcy1jb250YWluZXJ7XG4gICAgICAgIHdpZHRoOjkwdnc7XG4gICAgICAgIFxuICAgIH1cbiAgICAucHJvamVjdHMtY29udGFpbmVyeyBcbiAgICAgICAgd2lkdGg6IDUwJTtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICB6LWluZGV4OiAxMDsgXG4gICAgICAgIHBhZGRpbmc6LjhyZW07XG4gICAgfVxuICAgIC5mYS1leWUtc2xhc2h7XG4gICAgICAgIGZvbnQtc2l6ZToxLjVyZW07XG4gICAgfVxuICAgIC5wcm9qZWN0cy1oZWFkZXJ7XG4gICAgICAgIHBhZGRpbmc6LjVyZW0gLjFyZW07XG4gICAgfVxuICAgIC50b2dnbGUtZm9ybS1idG57XG4gICAgICAgIG1hcmdpbi1sZWZ0OjFyZW07XG4gICAgfVxuICAgICNtb2RhbHtcbiAgICAgICAgdG9wOjUwJTtcbiAgICAgICAgbGVmdDo1JTtcbiAgICB9XG4gICAgLm5ldy1wcm9qZWN0LWlucHV0e1xuICAgICAgICB3aWR0aDo3cmVtO1xuICAgIH1cbiAgICAucHJvamVjdC10YXNrLWxpc3Q+bGksLnByb2plY3RzLWxpc3Q+bGl7XG4gICAgICAgIG1hcmdpbjouMnJlbSAuNXJlbSAuNnJlbSAuNXJlbTtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgaXtcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDouM2VtO1xuICAgICAgICB9XG4gICAgfSAgXG4gICAgLnRhc2tzLWNvbnRhaW5lcntcbiAgICAgICAgcGFkZGluZzowO1xuICAgIH1cbiAgICAucHJvamVjdC1saXN0LWl0ZW17XG4gICAgICAgIHBhZGRpbmc6LjJyZW07XG4gICAgfVxuICAgIC5wcm9qZWN0LXRhc2tzLWNvbnRhaW5lcntcbiAgICAgICAgcGFkZGluZzoxcmVtO1xuICAgICAgICB3aWR0aDo5OHZ3O1xuICAgIH1cbiAgICAudG9nZ2xlLXRhc2tmb3JtLWJ0bntcbiAgICAgICAgcGFkZGluZzouMnJlbTtcbiAgICB9XG4gICAgLmRlc2NyaXB0aW9uLWhlYWRlcntcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG4gICAgLnRhc2sta2V5cywucHJvamVjdC10YXNrLWxpc3Q+bGl7XG4gICAgICAgIHBhZGRpbmc6LjVyZW07XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICB9XG4gICAgLmRlc2Mta2V5e1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbiAgICAubG93e1xuICAgICAgICBib3JkZXItbGVmdDoxMHB4IHNvbGlkICNkYzI2MjY7XG4gICAgfVxuICAgIC5tZWRpdW17XG4gICAgICAgIGJvcmRlci1sZWZ0OiAxMHB4IHNvbGlkICNmNTllMGI7XG4gICAgfVxuICAgIC5oaWdoe1xuICAgICAgICBib3JkZXItbGVmdDogMTBweCBzb2xpZCBncmVlbjtcbiAgICB9XG5cbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9pbmRleC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxTQUFTO0lBQ1QsUUFBUTtJQUNSLHNCQUFzQjtBQUMxQjtBQUNBO0lBQ0ksY0FBYztJQUNkLFlBQVk7SUFDWixXQUFXO0lBQ1gsVUFBVTtJQUNWLFlBQVk7QUFDaEI7QUFDQTtJQUNJLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0kscUJBQXFCO0FBQ3pCO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLFdB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bmc6MDtcXG4gICAgbWFyZ2luOjA7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcbmJvZHl7XFxuICAgIGZvbnQtc2l6ZToyMHB4O1xcbiAgICBoZWlnaHQ6MTAwdmg7XFxuICAgIHBhZGRpbmc6MmVtO1xcbiAgICB3aWR0aDo5MHZ3O1xcbiAgICBtYXJnaW46IGF1dG87XFxufVxcbi5oZWFkZXJ7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxubGkge1xcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxufVxcbi5jb250ZW50e1xcbiAgICBwYWRkaW5nOjEuNWVtO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAzZnI7XFxuICAgIG1pbi1oZWlnaHQ6IDgwdmg7XFxufVxcbi5wcm9qZWN0cy1jb250YWluZXIsLnByb2plY3QtdGFza3MtY29udGFpbmVye1xcbiAgICBwYWRkaW5nOjJlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogLjJlbTtcXG59XFxuLnByb2plY3QtdGFzay1saXN0PmxpLC5wcm9qZWN0cy1saXN0Pmxpe1xcbiAgICBtYXJnaW46LjhlbSAyZW0gMGVtIDJlbTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgaXtcXG4gICAgICAgIG1hcmdpbi1yaWdodDouM2VtO1xcbiAgICB9XFxufSAgIFxcbi5wcm9qZWN0LXRhc2stbGlzdCBsaXtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgcGFkZGluZzoxZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBib3JkZXItcmFkaXVzOiAuNWVtO1xcbn1cXG4ucHJvamVjdHMtY29udGFpbmVye1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBhbGljZWJsdWU7XFxufVxcbi5wcm9qZWN0LXRhc2tzLWNvbnRhaW5lcntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjpsYXZlbmRlcmJsdXNoO1xcbn1cXG4ucHJvamVjdC10YXNrcy1jb250YWluZXIgaDMge1xcbiAgICBtYXJnaW46MWVtIDBlbTtcXG59XFxuLnByb2plY3RzLWhlYWRlciwudGFza3MtaGVhZGVye1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcbi50b2dnbGUtZm9ybS1idG57XFxuICAgIGZvbnQtc2l6ZTogMmVtO1xcbiAgICBjb2xvcjpibGFjaztcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xcbiAgICAmOmhvdmVye1xcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB9XFxufVxcbi50b2dnbGUtdGFza2Zvcm0tYnRue1xcbiAgICBwYWRkaW5nOi41ZW07XFxuICAgIGZvbnQtc2l6ZTogMWVtO1xcbiAgICBib3JkZXItcmFkaXVzOiAuMmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOmxhdmVuZGVyYmx1c2g7XFxuICAgIGJvcmRlcjoxcHggc29saWQgY2FkZXRibHVlO1xcbiAgICAmOmhvdmVye1xcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB9XFxufVxcbi50YXNrLWtleXMsLnByb2plY3QtdGFzay1saXN0IGxpe1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBnYXA6MWVtO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg0LDFmcik7XFxufVxcbi50YXNrLWtleXN7XFxuICAgIHBhZGRpbmc6MWVtO1xcbn1cXG4ubmV3LXByb2plY3QtaW5wdXQge1xcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gICAgYm9yZGVyOiAwO1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgYmxhY2s7XFxuICAgIGZvbnQtc2l6ZTogaW5oZXJpdDtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgcGFkZGluZzogMC4yNWVtO1xcbiAgICB3aWR0aDo5ZW07XFxufVxcbi5hZGQtcHJvamVjdC1mb3Jte1xcbiAgICBtYXJnaW46MWVtO1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn0gIFxcbi5hZGQtcHJvamVjdC1idG57XFxuICAgIHBhZGRpbmc6LjNlbTtcXG4gICAgZm9udC1zaXplOiAuOGVtO1xcbiAgICBib3JkZXItcmFkaXVzOjVweDtcXG4gICAgJjpob3ZlcntcXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgfVxcbn1cXG4udGFzay1mb3Jte1xcbiAgIGRpc3BsYXk6IGZsZXg7XFxuICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICBwYWRkaW5nOjFlbTtcXG4gICBtYXJnaW46YXV0bztcXG59XFxuLnRhc2stZm9ybSBpbnB1dCwjcHJpb3JpdHl7XFxuICAgIHBhZGRpbmc6IC41ZW07XFxuICAgIGZvbnQtc2l6ZTogLjhlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiAxZW07XFxufVxcbi5hZGQtdGFzay1idG57XFxuICAgIHBhZGRpbmc6MWVtO1xcbiAgICBmb250LXNpemU6MWVtO1xcbn1cXG4jbW9kYWwge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHRvcDogNjAlOyAgICAgICAgXFxuICAgIGxlZnQ6NTAlOyAgICAgICAgXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7IFxcbiAgICBwYWRkaW5nOi41ZW07ICAgXFxuICAgIHdpZHRoOjI1ZW07XFxuICAgIGJvcmRlcjogNXB4IHNvbGlkICNjY2ZiZjE7XFxufVxcbi5oaWRlLWZvcm17XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG4gICAgY29sb3I6d2hpdGU7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOjA7XFxuICAgIHJpZ2h0OjA7XFxuICAgIGZvbnQtc2l6ZToxZW07XFxuICAgIHBhZGRpbmc6LjVlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xcbiAgICAmOmhvdmVye1xcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB9XFxufVxcbi5wcm9qZWN0LWxpc3QtaXRlbS5hY3RpdmV7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGJveC1zaGFkb3c6IG5vbmU7XFxuICAgIGJvcmRlcjoxcHggc29saWQgZ3JlZW47XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXG59XFxuXFxuLmZhLXJlZ3VsYXJ7XFxuICAgIGZvbnQtc2l6ZToxLjZlbTtcXG59XFxuLnByb2plY3QtdGFzay1saXN0Pi5jb21wbGV0ZXtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOmxpbmUtdGhyb3VnaDtcXG4gICAgY29sb3I6Z3JleTtcXG4gICAgb3BhY2l0eTouNTsgICBcXG59XFxuLmZ1bmN0aW9ucy1kaXZ7XFxuICAgIGl7XFxuICAgICAgICBtYXJnaW4tbGVmdDozZW07XFxuICAgICAgICAmOmhvdmVye1xcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgICAgIH1cXG4gICAgfVxcbn1cXG4ubG93e1xcbiAgICBib3JkZXItbGVmdDozMHB4IHNvbGlkICNkYzI2MjY7XFxufVxcbi5tZWRpdW17XFxuICAgIGJvcmRlci1sZWZ0OiAzMHB4IHNvbGlkICNmNTllMGI7XFxufVxcbi5oaWdoe1xcbiAgICBib3JkZXItbGVmdDogMzBweCBzb2xpZCBncmVlbjtcXG59XFxuLnRhc2stbGlzdC1pdGVte1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBpe1xcbiAgICAgICAgbWFyZ2luLXJpZ2h0Oi41ZW07XFxuICAgICAgICBmb250LXNpemU6MmVtO1xcbiAgICAgICAgJjpob3ZlcntcXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgICAgICB9XFxuICAgIH1cXG4gICBcXG59XFxuLnByb2plY3QtbGlzdC1pdGVte1xcbiAgICBwYWRkaW5nOi41ZW07XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgYm94LXNoYWRvdzogMCAwIDdweCAycHggI2QxZDVkYjtcXG4gICAgJjpob3ZlcntcXG4gICAgICAgIGN1cnNvcjpwb2ludGVyO1xcbiAgICB9XFxufVxcbi5mYS1iYXJzLC5mYS1leWUtc2xhc2h7XFxuICAgIGZvbnQtc2l6ZToycmVtO1xcbn1cXG4uYWRkLXByb2plY3QtYnRue1xcbiAgICBtYXJnaW46LjRlbTtcXG59XFxuXFxuLyogTUVESUEgUVVBRVJJRVMgKi9cXG5AbWVkaWEgKG1pbi13aWR0aDogMTAwMXB4KSB7XFxuICAgIC5mYS1iYXJzIHtcXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIH0uZmEtZXllLXNsYXNoe1xcbiAgICAgICAgZGlzcGxheTogbm9uZTtcXG4gICAgfVxcbn1cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjE1OTBweCl7XFxuICAgIGJvZHl7XFxuICAgICAgICBmb250LXNpemU6MThweDtcXG4gICAgfVxcbiAgICAuZnVuY3Rpb25zLWRpdntcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBpe1xcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OjFlbTtcXG4gICAgICAgICAgICAmOmhvdmVye1xcbiAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgfVxcbiAgICB9XFxuICAgIC5wcm9qZWN0LXRhc2stbGlzdD5saXtcXG4gICAgICAgIHBhZGRpbmc6LjVyZW07XFxuICAgIH1cXG5cXG59XFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDoxMjgwcHgpe1xcbiAgICBib2R5e1xcbiAgICAgICAgZm9udC1zaXplOjE2cHg7XFxuICAgICAgICB3aWR0aDoxMDB2dztcXG4gICAgfVxcbiAgICAucHJvamVjdHMtY29udGFpbmVye1xcbiAgICAgICAgcGFkZGluZzoycmVtO1xcbiAgICB9XFxuICAgXFxuICAgIC5wcm9qZWN0LWxpc3QtaXRlbXtcXG4gICAgICAgIHBhZGRpbmc6LjVyZW07XFxuICAgIH1cXG4gICAgLmFkZC1wcm9qZWN0LWZvcm17XFxuICAgICAgICBwYWRkaW5nOi4xcmVtO1xcbiAgICB9XFxuICAgIC5uZXctcHJvamVjdC1pbnB1dHtcXG4gICAgICAgIHdpZHRoOjlyZW07XFxuICAgIH1cXG59XFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDoxMDAwcHgpe1xcbiAgICBib2R5e1xcbiAgICAgICAgcGFkZGluZzouNXJlbTtcXG4gICAgfVxcbiAgICAuY29udGVudHtcXG4gICAgICAgIG1pbi1oZWlnaHQ6IDk5dmg7XFxuICAgICAgICBwYWRkaW5nOjA7XFxuICAgIH1cXG4gICAgLnByb2plY3RzLWNvbnRhaW5lcntcXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7IFxcbiAgICAgICAgd2lkdGg6IDMwJTtcXG4gICAgICAgIGhlaWdodDogMTAwJTtcXG4gICAgICAgIHotaW5kZXg6IDEwOyBcXG4gICAgfVxcbiAgICAucHJvamVjdHMtY29udGFpbmVyLnNob3cge1xcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XFxuICAgIH1cXG4gICAgLnRvZ2dsZS1wcm9qZWN0cywudG9nZ2xlLXRhc2tzIHtcXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrOyBcXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgfVxcbiAgICAucHJvamVjdC1uYW1lLC5wcm9qZWN0cy1oZWFkZXJ7XFxuICAgICAgICBwYWRkaW5nOjFyZW07XFxuICAgIH1cXG4gICAgLnByb2plY3RzLWNvbnRhaW5lciwucHJvamVjdC10YXNrcy1jb250YWluZXJ7XFxuICAgICAgICBtaW4taGVpZ2h0Ojkwdmg7XFxuICAgIH1cXG4gICAgLnByb2plY3QtdGFza3MtY29udGFpbmVye1xcbiAgICAgICAgd2lkdGg6OTl2dztcXG4gICAgfVxcbiBcXG4gICAgLmhlYWRlcntcXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIH1cXG4gICBcXG59XFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDo2MzBweCkge1xcbiAgICBib2R5e1xcbiAgICAgICAgd2lkdGg6MTAwdnc7XFxuICAgICAgICBwYWRkaW5nOi4xcmVtO1xcbiAgICAgICAgZm9udC1zaXplOjEzcHg7XFxuICAgIH1cXG4gICAgLmNvbnRlbnR7XFxuICAgICAgICBwYWRkaW5nOi41cmVtO1xcbiAgICAgICAgcGFkZGluZzowO1xcbiAgICAgICAgbWFyZ2luOjA7XFxuICAgIH1cXG4gICAgLnByb2plY3QtdGFza3MtY29udGFpbmVye1xcbiAgICAgICAgd2lkdGg6OTB2dztcXG4gICAgICAgIFxcbiAgICB9XFxuICAgIC5wcm9qZWN0cy1jb250YWluZXJ7IFxcbiAgICAgICAgd2lkdGg6IDUwJTtcXG4gICAgICAgIGhlaWdodDogMTAwJTtcXG4gICAgICAgIHotaW5kZXg6IDEwOyBcXG4gICAgICAgIHBhZGRpbmc6LjhyZW07XFxuICAgIH1cXG4gICAgLmZhLWV5ZS1zbGFzaHtcXG4gICAgICAgIGZvbnQtc2l6ZToxLjVyZW07XFxuICAgIH1cXG4gICAgLnByb2plY3RzLWhlYWRlcntcXG4gICAgICAgIHBhZGRpbmc6LjVyZW0gLjFyZW07XFxuICAgIH1cXG4gICAgLnRvZ2dsZS1mb3JtLWJ0bntcXG4gICAgICAgIG1hcmdpbi1sZWZ0OjFyZW07XFxuICAgIH1cXG4gICAgI21vZGFse1xcbiAgICAgICAgdG9wOjUwJTtcXG4gICAgICAgIGxlZnQ6NSU7XFxuICAgIH1cXG4gICAgLm5ldy1wcm9qZWN0LWlucHV0e1xcbiAgICAgICAgd2lkdGg6N3JlbTtcXG4gICAgfVxcbiAgICAucHJvamVjdC10YXNrLWxpc3Q+bGksLnByb2plY3RzLWxpc3Q+bGl7XFxuICAgICAgICBtYXJnaW46LjJyZW0gLjVyZW0gLjZyZW0gLjVyZW07XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgIGl7XFxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0Oi4zZW07XFxuICAgICAgICB9XFxuICAgIH0gIFxcbiAgICAudGFza3MtY29udGFpbmVye1xcbiAgICAgICAgcGFkZGluZzowO1xcbiAgICB9XFxuICAgIC5wcm9qZWN0LWxpc3QtaXRlbXtcXG4gICAgICAgIHBhZGRpbmc6LjJyZW07XFxuICAgIH1cXG4gICAgLnByb2plY3QtdGFza3MtY29udGFpbmVye1xcbiAgICAgICAgcGFkZGluZzoxcmVtO1xcbiAgICAgICAgd2lkdGg6OTh2dztcXG4gICAgfVxcbiAgICAudG9nZ2xlLXRhc2tmb3JtLWJ0bntcXG4gICAgICAgIHBhZGRpbmc6LjJyZW07XFxuICAgIH1cXG4gICAgLmRlc2NyaXB0aW9uLWhlYWRlcntcXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIH1cXG4gICAgLnRhc2sta2V5cywucHJvamVjdC10YXNrLWxpc3Q+bGl7XFxuICAgICAgICBwYWRkaW5nOi41cmVtO1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgfVxcbiAgICAuZGVzYy1rZXl7XFxuICAgICAgICBkaXNwbGF5OiBub25lO1xcbiAgICB9XFxuICAgIC5sb3d7XFxuICAgICAgICBib3JkZXItbGVmdDoxMHB4IHNvbGlkICNkYzI2MjY7XFxuICAgIH1cXG4gICAgLm1lZGl1bXtcXG4gICAgICAgIGJvcmRlci1sZWZ0OiAxMHB4IHNvbGlkICNmNTllMGI7XFxuICAgIH1cXG4gICAgLmhpZ2h7XFxuICAgICAgICBib3JkZXItbGVmdDogMTBweCBzb2xpZCBncmVlbjtcXG4gICAgfVxcblxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbmRleC5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcbm9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbmRleC5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7IHNlbGVjdGVkUHJvamVjdElkLFByb2plY3RzLHNhdmVUb0xvY2FsU3RvcmFnZSxkZWxldGVQcm9qZWN0LHNldFByb2plY3RJZCB9IGZyb20gXCIuL3Byb2plY3QtbWFuYWdlclwiO1xuaW1wb3J0IHsgcHJvamVjdEZvcm0scHJvamVjdHNMaXN0IH0gZnJvbSBcIi4vZm9ybXNcIjtcbmltcG9ydCB7IGVkaXRUYXNrLGRlbGV0ZVRhc2ssY29tcGxldGVUYXNrIH0gZnJvbSBcIi4vdGFza3NcIjtcblxuXG5jb25zdCB0b2dnbGVQcm9qZWN0c0ljb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9nZ2xlLXByb2plY3RzJyk7XG5jb25zdCBwcm9qZWN0c0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0cy1jb250YWluZXInKTtcbmNvbnN0IHRhc2tzSWNvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2dnbGUtdGFza3MnKTtcbmNvbnN0IHRvZ2dsZVByb2plY3RGb3JtQnRuID0gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2dnbGUtZm9ybS1idG4nKTtcbmV4cG9ydCBjb25zdCBwcm9qZWN0TmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LW5hbWUnKTtcbmV4cG9ydCBjb25zdCB0YXNrc0xpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdC10YXNrLWxpc3QnKTtcblxuXG5mdW5jdGlvbiByZW5kZXJQcm9qZWN0VGFza3Moc2VsZWN0ZWRQcm9qZWN0KXtcbiAgICBjbGVhckVsZW1lbnQodGFza3NMaXN0KTtcblxuICAgIGlmKHNlbGVjdGVkUHJvamVjdCl7XG4gICAgICAgIHByb2plY3ROYW1lLnRleHRDb250ZW50ID0gYCR7c2VsZWN0ZWRQcm9qZWN0Lm5hbWV9YDtcbiAgICAgICAgc2VsZWN0ZWRQcm9qZWN0LnRhc2tzLmZvckVhY2godGFzayA9PiB7XG4gICAgICAgICAgICBjb25zdCB0YXNrSXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgXG4gICAgICAgICAgICBjb25zdCB0YXNrTGlzdEl0ZW1TcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICAgICAgdGFza0xpc3RJdGVtU3Bhbi5jbGFzc0xpc3QuYWRkKCd0YXNrLWxpc3QtaXRlbScpO1xuICAgICAgICAgICAgdGFza0l0ZW0uZGF0YXNldC50YXNrSWQgPSB0YXNrLmlkO1xuICAgIFxuICAgICAgICAgICAgY29uc3QgaWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2knKTtcbiAgICAgICAgICAgIGljb24uY2xhc3NMaXN0LmFkZCgnZmEtcmVndWxhcicsIHRhc2suY29tcGxldGUgPyAnZmEtY2hlY2stc3F1YXJlJzogJ2ZhLXNxdWFyZScpO1xuICAgICAgICAgICAgaWNvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKGUpID0+IGNvbXBsZXRlVGFzayhlKSlcbiAgICAgICAgICAgIHRhc2tMaXN0SXRlbVNwYW4uYXBwZW5kQ2hpbGQoaWNvbik7XG4gICAgICAgICAgICB0YXNrTGlzdEl0ZW1TcGFuLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGAgJHt0YXNrLnRpdGxlfWApKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgY29uc3QgZGVzY3JpcHRpb25TcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICAgICAgZGVzY3JpcHRpb25TcGFuLmNsYXNzTGlzdC5hZGQoJ2Rlc2NyaXB0aW9uLWhlYWRlcicpO1xuICAgICAgICAgICAgZGVzY3JpcHRpb25TcGFuLnRleHRDb250ZW50ID0gYCR7dGFzay5kZXNjcmlwdGlvbn1gXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGNvbnN0IGR1ZURhdGVTcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICAgICAgZHVlRGF0ZVNwYW4uY2xhc3NMaXN0LmFkZCgnZHVlZGF0ZS1oZWFkZXInKTtcbiAgICAgICAgICAgIGNvbnN0IGR1ZURhdGUgPSBuZXcgRGF0ZSh0YXNrLmR1ZWRhdGUpO1xuICAgICAgICAgICAgZHVlRGF0ZVNwYW4udGV4dENvbnRlbnQgPSBkdWVEYXRlLnRvTG9jYWxlU3RyaW5nKCk7XG4gICAgXG4gICAgICAgICAgICB0YXNrSXRlbS5hcHBlbmRDaGlsZCh0YXNrTGlzdEl0ZW1TcGFuKTtcbiAgICAgICAgICAgIHRhc2tJdGVtLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uU3Bhbik7XG4gICAgICAgICAgICB0YXNrSXRlbS5hcHBlbmRDaGlsZChkdWVEYXRlU3Bhbik7XG4gICAgXG4gICAgICAgICAgICBpZiAodGFzay5jb21wbGV0ZSkge1xuICAgICAgICAgICAgICAgIHRhc2tJdGVtLmNsYXNzTGlzdC5hZGQoJ2NvbXBsZXRlJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGFzay5wcmlvcml0eSA9PSAnaGlnaCcpe1xuICAgICAgICAgICAgICAgIHRhc2tJdGVtLmNsYXNzTGlzdC5hZGQoJ2hpZ2gnKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGFzay5wcmlvcml0eSA9PSAnbWVkaXVtJyl7XG4gICAgICAgICAgICAgICAgdGFza0l0ZW0uY2xhc3NMaXN0LmFkZCgnbWVkaXVtJylcbiAgICAgICAgICAgIH0gZWxzZXtcbiAgICAgICAgICAgICAgICB0YXNrSXRlbS5jbGFzc0xpc3QuYWRkKCdsb3cnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGZ1bmN0aW9uc0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgICAgICBmdW5jdGlvbnNEaXYuY2xhc3NMaXN0LmFkZCgnZnVuY3Rpb25zLWRpdicpXG4gICAgICAgICAgICBjb25zdCBkZWxldGVJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaScpO1xuICAgICAgICAgICAgZGVsZXRlSWNvbi5jbGFzc0xpc3QuYWRkKCdmYS1zb2xpZCcsJ2ZhLXRyYXNoJyk7XG4gICAgICAgICAgICBkZWxldGVJY29uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoKT0+ZGVsZXRlVGFzayh0YXNrLmlkKSk7XG4gICAgICAgICAgICBjb25zdCBlZGl0SWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2knKTtcbiAgICAgICAgICAgIGVkaXRJY29uLmNsYXNzTGlzdC5hZGQoJ2ZhLXNvbGlkJywnZmEtcGVuJyk7XG4gICAgICAgICAgICBlZGl0SWNvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKCk9PmVkaXRUYXNrKHRhc2suaWQpKTtcbiAgICAgICAgICAgIGZ1bmN0aW9uc0Rpdi5hcHBlbmRDaGlsZChkZWxldGVJY29uKTtcbiAgICAgICAgICAgIGZ1bmN0aW9uc0Rpdi5hcHBlbmRDaGlsZChlZGl0SWNvbik7XG4gICAgICAgICAgICB0YXNrSXRlbS5hcHBlbmRDaGlsZChmdW5jdGlvbnNEaXYpO1xuICAgIFxuICAgICAgICAgICAgdGFza3NMaXN0LmFwcGVuZENoaWxkKHRhc2tJdGVtKTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiByZW5kZXJQcm9qZWN0cygpIHtcbiAgICBQcm9qZWN0cy5mb3JFYWNoKHByb2plY3QgPT4ge1xuICBcbiAgICAgICAgY29uc3QgcHJvamVjdEl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgICAgICBwcm9qZWN0SXRlbS5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LWxpc3QtaXRlbScpXG4gICAgICAgIHByb2plY3RJdGVtLmlkID0gYCR7cHJvamVjdC5pZH1gO1xuICAgICAgICBcbiAgICAgICBcbiAgICAgICAgY29uc3Qgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgc3Bhbi5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LWxpc3QtaWNvbicpO1xuICAgICAgICBcblxuICAgICAgICBpZiAocHJvamVjdEl0ZW0uaWQgPT0gc2VsZWN0ZWRQcm9qZWN0SWQpIHtcbiAgICAgICAgICAgIHByb2plY3RJdGVtLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgICAgICB9XG4gICAgICAgXG4gICAgICAgIHByb2plY3RJdGVtLmFwcGVuZENoaWxkKHNwYW4pO1xuICAgICAgICAvLyBBcHBlbmQgdGhlIHRleHQgbm9kZSB0byB0aGUgcHJvamVjdEl0ZW0gYWZ0ZXIgdGhlIHNwYW5cbiAgICAgICAgY29uc3QgdGV4dE5vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShgICR7cHJvamVjdC5uYW1lfWApO1xuICAgICAgICBwcm9qZWN0SXRlbS5hcHBlbmRDaGlsZCh0ZXh0Tm9kZSk7XG5cbiAgICAgICAgY29uc3QgZGVsSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2knKTtcbiAgICAgICAgZGVsSWNvbi5jbGFzc0xpc3QuYWRkKCdmYS1zb2xpZCcpO1xuICAgICAgICBkZWxJY29uLmNsYXNzTGlzdC5hZGQoJ2ZhLXRyYXNoJyk7XG4gICAgICAgIGRlbEljb24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCgpID0+IGRlbGV0ZVByb2plY3QocHJvamVjdC5pZCkpXG4gICAgICAgIHByb2plY3RJdGVtLmFwcGVuZChkZWxJY29uKTtcblxuICAgICAgICBwcm9qZWN0c0xpc3QuYXBwZW5kQ2hpbGQocHJvamVjdEl0ZW0pO1xuICAgIH0pO1xufVxuZnVuY3Rpb24gY2xlYXJFbGVtZW50KGVsZW0pe1xuICAgIHdoaWxlIChlbGVtLmZpcnN0Q2hpbGQpe1xuICAgICAgICBlbGVtLnJlbW92ZUNoaWxkKGVsZW0uZmlyc3RDaGlsZClcbiAgICAgICAgXG4gICAgfVxufVxuLy9MaXN0ZW4gZm9yIHNlbGVjdGVkIFByb2plY3RcbnByb2plY3RzTGlzdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsZSA9PiB7ICAgXG4gICAgaWYgKGUudGFyZ2V0LnRhZ05hbWUudG9Mb3dlckNhc2UoKSA9PSAnbGknKXtcbiAgICAgICAgc2V0UHJvamVjdElkKGUudGFyZ2V0LmlkKVxuICAgICAgICBzYXZlVG9Mb2NhbFN0b3JhZ2UoKTsgIFxuICAgICAgICBjbGVhckVsZW1lbnQocHJvamVjdHNMaXN0KTtcbiAgICAgICAgcmVuZGVyUHJvamVjdHMoKTtcbiAgICAgICAgY29uc3Qgc2VsZWN0ZWRQcm9qZWN0ID0gUHJvamVjdHMuZmluZChwcm9qZWN0ID0+IHByb2plY3QuaWQgPT0gc2VsZWN0ZWRQcm9qZWN0SWQpO1xuICAgICAgICBwcm9qZWN0TmFtZS50ZXh0Q29udGVudCA9IGAke3NlbGVjdGVkUHJvamVjdC5uYW1lfWBcbiAgICAgICAgcmVuZGVyUHJvamVjdFRhc2tzKHNlbGVjdGVkUHJvamVjdClcbiAgICB9XG59KVxuXG50b2dnbGVQcm9qZWN0Rm9ybUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKCk9PntcbiAgICBpZiAocHJvamVjdEZvcm0uc3R5bGUuZGlzcGxheSA9PT0gJ25vbmUnIHx8IHByb2plY3RGb3JtLnN0eWxlLmRpc3BsYXkgPT09ICcnKSB7XG4gICAgICAgIHByb2plY3RGb3JtLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgICBjb25zdCBpbnB1dCA9IHByb2plY3RGb3JtLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0Jyk7IFxuICAgICAgICBpbnB1dC5mb2N1cygpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHByb2plY3RGb3JtLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgfVxufSlcblxudG9nZ2xlUHJvamVjdHNJY29uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIHByb2plY3RzQ29udGFpbmVyLmNsYXNzTGlzdC50b2dnbGUoJ3Nob3cnKTtcbn0pO1xuXG50YXNrc0ljb24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgcHJvamVjdHNDb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZSgnc2hvdycpO1xufSk7XG5cbmV4cG9ydCB7IGNsZWFyRWxlbWVudCwgcmVuZGVyUHJvamVjdFRhc2tzLCByZW5kZXJQcm9qZWN0cyB9IiwiaW1wb3J0IHsgUHJvamVjdHMsc2VsZWN0ZWRQcm9qZWN0SWQsc2F2ZVRvTG9jYWxTdG9yYWdlLGNyZWF0ZVByb2plY3QsIHNldFByb2plY3RJZCB9IGZyb20gXCIuL3Byb2plY3QtbWFuYWdlclwiXG5pbXBvcnQgeyBjbGVhckVsZW1lbnQscmVuZGVyUHJvamVjdFRhc2tzLHJlbmRlclByb2plY3RzLHRhc2tzTGlzdCAscHJvamVjdE5hbWV9IGZyb20gXCIuL2RvbVwiO1xuaW1wb3J0IHsgY3JlYXRlVGFzayB9IGZyb20gXCIuL3Rhc2tzXCI7XG5cblxuLy9Gb3JtIHJlbGF0ZWQgLSBET00gdmFyaWFibGVzXG5leHBvcnQgY29uc3QgcHJvamVjdEZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLXByb2plY3QtZm9ybScpXG5leHBvcnQgY29uc3QgcHJvamVjdHNMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3RzLWxpc3QnKTtcbmNvbnN0IHRhc2tzRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrLWZvcm0nKTtcbmNvbnN0IGRpc3BsYXlGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZ2dsZS10YXNrZm9ybS1idG4nKTtcbmNvbnN0IGhpZGVGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhpZGUtZm9ybScpO1xuY29uc3QgbW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwnKTtcbmNvbnN0IG5ld1Byb2plY3RJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uZXctcHJvamVjdC1pbnB1dCcpO1xuXG5cbi8vcHJvamVjdCBmb3JtIFxucHJvamVjdEZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JyxlPT57XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IHByb2plY3RUaXRsZSA9IG5ld1Byb2plY3RJbnB1dC52YWx1ZTtcbiAgXG4gICAgLy92ZXJpZnkgaW5wdXRcbiAgICBpZiAocHJvamVjdFRpdGxlKSB7XG4gICAgICAgIC8vY3JlYXRlIHByb2plY3QgYW5kIGFkZCB0byBQcm9qZWN0cyBcbiAgICAgICAgY29uc3QgcHJvamVjdCA9IGNyZWF0ZVByb2plY3QocHJvamVjdFRpdGxlKSBcbiAgICAgICAgUHJvamVjdHMucHVzaChwcm9qZWN0KTtcbiAgICAgICAgc2V0UHJvamVjdElkKHByb2plY3QuaWQpXG4gICAgICAgIHNhdmVUb0xvY2FsU3RvcmFnZSgpO1xuICAgICAgICBjbGVhckVsZW1lbnQocHJvamVjdHNMaXN0KTtcbiAgICAgICAgcHJvamVjdEZvcm0uc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgcmVuZGVyUHJvamVjdHMoKTtcbiAgICAgICAgY29uc3Qgc2VsZWN0ZWRQcm9qZWN0ID0gUHJvamVjdHMuZmluZChwcm9qZWN0ID0+IHByb2plY3QuaWQgPT0gc2VsZWN0ZWRQcm9qZWN0SWQpO1xuICAgICAgICBjb25zb2xlLmxvZyhzZWxlY3RlZFByb2plY3QubmFtZSlcbiAgICAgICAgcHJvamVjdE5hbWUudGV4dENvbnRlbnQgPSBgJHtzZWxlY3RlZFByb2plY3QubmFtZX1gO1xuICAgICAgICByZW5kZXJQcm9qZWN0VGFza3Moc2VsZWN0ZWRQcm9qZWN0KVxuICAgICAgICBuZXdQcm9qZWN0SW5wdXQudmFsdWU9Jyc7XG4gICAgfVxufSlcblxuLy90YXNrcyBmb3JtIGZ1bmN0aW9uYWxpdGllc1xudGFza3NGb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsZT0+e1xuICAgIGNvbnN0IHNlbGVjdGVkUHJvamVjdCA9IFByb2plY3RzLmZpbmQocHJvamVjdCA9PiBwcm9qZWN0LmlkID09IHNlbGVjdGVkUHJvamVjdElkKTtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGl0bGUnKS52YWx1ZTtcbiAgICBjb25zdCBkdWVkYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2R1ZWRhdGUnKS52YWx1ZVxuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Rlc2NyaXB0aW9uJykudmFsdWVcbiAgICBjb25zdCBwcmlvcml0eSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcmlvcml0eScpLnZhbHVlXG4gICAgY29uc3QgdGFza0lkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rhc2tJZCcpLnZhbHVlO1xuICAgIFxuICAgIGlmICh0YXNrSWQpIHtcbiAgICAgICAgLy9lZGl0IGV4aXNpdG5nIHRhc2tcbiAgICAgICAgY29uc3Qgc2VsZWN0ZWRQcm9qZWN0ID0gUHJvamVjdHMuZmluZChwcm9qZWN0ID0+IHByb2plY3QuaWQgPT0gc2VsZWN0ZWRQcm9qZWN0SWQpO1xuICAgICAgICBjb25zdCB0YXNrID0gc2VsZWN0ZWRQcm9qZWN0LnRhc2tzLmZpbmQodGFzayA9PiB0YXNrLmlkID09IHRhc2tJZCk7XG4gICAgICAgIHRhc2sudGl0bGUgPSB0aXRsZTtcbiAgICAgICAgdGFzay5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgICAgICB0YXNrLmR1ZWRhdGUgPSBkdWVkYXRlO1xuICAgICAgICB0YXNrLnByaW9yaXR5ID0gcHJpb3JpdHk7XG4gICAgICAgXG4gICAgfSBlbHNlIHtcbiAgICAgICAgLy9jcmVhdGUgbmV3IHRhc2tcbiAgICAgICAgY29uc3QgdGFzayA9IGNyZWF0ZVRhc2sodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVkYXRlLCBwcmlvcml0eSk7XG4gICAgICAgIHNlbGVjdGVkUHJvamVjdC50YXNrcy5wdXNoKHRhc2spO1xuICAgIH1cblxuICAgIHNhdmVUb0xvY2FsU3RvcmFnZSgpO1xuICAgIGNsZWFyRWxlbWVudCh0YXNrc0xpc3QpO1xuICAgIHRhc2tzRm9ybS5yZXNldCgpO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrSWQnKS52YWx1ZSA9ICcnO1xuICAgIG1vZGFsLmNsb3NlKCk7XG4gICAgcmVuZGVyUHJvamVjdFRhc2tzKHNlbGVjdGVkUHJvamVjdCk7XG59KVxuaGlkZUZvcm0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLChlKT0+e1xuICAgIG1vZGFsLmNsb3NlKCk7XG59KVxuZGlzcGxheUZvcm0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgaWYgKHNlbGVjdGVkUHJvamVjdElkID09PSBudWxsIHx8IHNlbGVjdGVkUHJvamVjdElkID09PSAnbnVsbCcpIHsgXG4gICAgICAgIGFsZXJ0KFwiQ2xpY2sgb24gYSBwcm9qZWN0IHRvIGF0dGFjaCB0YXNrcyB0by5cIik7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgdGFza3NGb3JtLnJlc2V0KCk7XG4gICAgICAgIG1vZGFsLnNob3dNb2RhbCgpO1xuICAgIH1cbn0pOyIsImltcG9ydCB7IHByb2plY3RzTGlzdCB9IGZyb20gXCIuL2Zvcm1zXCJcbmltcG9ydCB7IHJlbmRlclByb2plY3RzLHRhc2tzTGlzdCxjbGVhckVsZW1lbnQgfSBmcm9tIFwiLi9kb21cIlxuXG4vL21hbmFnZXMsY3JlYXRlcyBhbmQgZGVsZXRlcyBwcm9qZWN0cyBpbiBsb2NhbCBzdG9yYWdlXG5cbi8vID09PT09PT09PT09PT09PT09PSBHTE9CQUwgTE9DQUwgU1RPUkFHRSA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PS8vXG5jb25zdCBMT0NBTF9TVE9SQUdFX1BST0pFQ1RfS0VZID0gJ3Byb2plY3RzJ1xuY29uc3QgTE9DQUxfU1RPUkFHRV9TRUxFQ1RFRF9QUk9KRUNUX0tFWSA9ICdzZWxlY3RlZFByb2plY3QnXG5cbi8vZ2V0IHByb2plY3RzIGZyb20gbG9jYWwgc3RvcmFnZSBpbnN0ZWFkIG9mIGFycmF5IGJ1dCBpZiBuIGxvY2FsLCBnaXZlIGVtcHR5IGFycmF5XG5leHBvcnQgbGV0IFByb2plY3RzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShMT0NBTF9TVE9SQUdFX1BST0pFQ1RfS0VZKSkgfHwgW3tcIm5hbWVcIjpcIkRlZmF1bHQgUHJvamVjdFwiLFwiaWRcIjowLFwidGFza3NcIjpbXX1dXG4vL2dldCBzZWxlY3RlZCBwcm9qZWN0IGZyb20gcHJvamVjdHNcbmV4cG9ydCBsZXQgc2VsZWN0ZWRQcm9qZWN0SWQgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShMT0NBTF9TVE9SQUdFX1NFTEVDVEVEX1BST0pFQ1RfS0VZKSB8fCAwXG5cbmZ1bmN0aW9uIHNhdmVUb0xvY2FsU3RvcmFnZSgpe1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKExPQ0FMX1NUT1JBR0VfUFJPSkVDVF9LRVksSlNPTi5zdHJpbmdpZnkoUHJvamVjdHMpKVxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKExPQ0FMX1NUT1JBR0VfU0VMRUNURURfUFJPSkVDVF9LRVksc2VsZWN0ZWRQcm9qZWN0SWQpXG59XG5cbi8vZ2V0IGN1cnJlbnQgc2VsZWN0ZWQgcHJvamVjdCBhY2NvcmRpbmcgdG8gaXRzIGlkXG5leHBvcnQgbGV0IHNlbGVjdGVkUHJvamVjdCA9IFByb2plY3RzLmZpbmQocHJvamVjdCA9PiBwcm9qZWN0LmlkID09IHNlbGVjdGVkUHJvamVjdElkKVxuXG5mdW5jdGlvbiBzZXRQcm9qZWN0SWQgKGlkKXtcbiAgICBzZWxlY3RlZFByb2plY3RJZCA9IGlkXG59IFxuZnVuY3Rpb24gY3JlYXRlUHJvamVjdChuYW1lKXtcbiAgICBjb25zdCBwcm9qZWN0ID0ge1xuICAgICAgICBuYW1lOm5hbWUsXG4gICAgICAgIGlkOkRhdGUubm93KCkudG9TdHJpbmcoKSxcbiAgICAgICAgdGFza3M6W11cbiAgICB9XG4gICAgcmV0dXJuIHByb2plY3Rcbn1cbmZ1bmN0aW9uIGRlbGV0ZVByb2plY3QocHJvamVjdElkKXtcbiAgICBQcm9qZWN0cyA9IFByb2plY3RzLmZpbHRlcihwcm9qZWN0ID0+IHByb2plY3QuaWQgIT09IHByb2plY3RJZCk7XG4gICAgc2VsZWN0ZWRQcm9qZWN0SWQgPSBudWxsO1xuICAgIHNhdmVUb0xvY2FsU3RvcmFnZSgpO1xuICAgIGNsZWFyRWxlbWVudChwcm9qZWN0c0xpc3QpO1xuICAgIGNsZWFyRWxlbWVudCh0YXNrc0xpc3QpO1xuICAgIHJlbmRlclByb2plY3RzKCk7XG59XG5leHBvcnQge3NhdmVUb0xvY2FsU3RvcmFnZSxkZWxldGVQcm9qZWN0LGNyZWF0ZVByb2plY3Qsc2V0UHJvamVjdElkfSIsImltcG9ydCB7IHNlbGVjdGVkUHJvamVjdElkLHNhdmVUb0xvY2FsU3RvcmFnZSxQcm9qZWN0cyB9IGZyb20gXCIuL3Byb2plY3QtbWFuYWdlclwiO1xuaW1wb3J0IHsgcmVuZGVyUHJvamVjdFRhc2tzIH0gZnJvbSBcIi4vZG9tXCI7XG5cblxuZnVuY3Rpb24gY3JlYXRlVGFzayh0aXRsZSxkZXNjcmlwdGlvbixkdWVkYXRlLHByaW9yaXR5KXtcbiAgICByZXR1cm4ge3RpdGxlLGRlc2NyaXB0aW9uLGR1ZWRhdGUscHJpb3JpdHksY29tcGxldGU6ZmFsc2UsIGlkOiBEYXRlLm5vdygpLnRvU3RyaW5nKCl9XG59XG5cbmZ1bmN0aW9uIGNvbXBsZXRlVGFzayhlKXtcblxuICAgIGlmIChlLnRhcmdldC5jbG9zZXN0KCdsaScpKXtcbiAgICAgICAgY29uc3QgdGFza0lkID0gZS50YXJnZXQuY2xvc2VzdCgnbGknKS5kYXRhc2V0LnRhc2tJZDtcbiAgICAgICAgY29uc3Qgc2VsZWN0ZWRQcm9qZWN0ID0gUHJvamVjdHMuZmluZChwcm9qZWN0ID0+IHByb2plY3QuaWQgPT0gc2VsZWN0ZWRQcm9qZWN0SWQpO1xuICAgICAgICBjb25zdCB0YXNrID0gc2VsZWN0ZWRQcm9qZWN0LnRhc2tzLmZpbmQodGFzayA9PiB0YXNrLmlkID09IHRhc2tJZCk7XG4gICAgICAgIFxuICAgICAgICAvL2NvbnNvbGUubG9nKHRhc2spO1xuICAgICAgICBpZiAodGFzaykge1xuICAgICAgICAgICAgdGFzay5jb21wbGV0ZSA9ICF0YXNrLmNvbXBsZXRlOyBcbiAgICAgICAgICAgIHNhdmVUb0xvY2FsU3RvcmFnZSgpO1xuICAgICAgICAgICAgcmVuZGVyUHJvamVjdFRhc2tzKHNlbGVjdGVkUHJvamVjdCk7IFxuICAgICAgICB9XG4gICB9XG59XG5mdW5jdGlvbiBkZWxldGVUYXNrKHRhc2tJZCkge1xuICAgIGNvbnN0IHNlbGVjdGVkUHJvamVjdCA9IFByb2plY3RzLmZpbmQocHJvamVjdCA9PiBwcm9qZWN0LmlkID09IHNlbGVjdGVkUHJvamVjdElkKTtcbiAgICBzZWxlY3RlZFByb2plY3QudGFza3MgPSBzZWxlY3RlZFByb2plY3QudGFza3MuZmlsdGVyKHRhc2sgPT4gdGFzay5pZCAhPT0gdGFza0lkKTtcbiAgICBzYXZlVG9Mb2NhbFN0b3JhZ2UoKTtcbiAgICByZW5kZXJQcm9qZWN0VGFza3Moc2VsZWN0ZWRQcm9qZWN0KTtcbn1cbmZ1bmN0aW9uIGVkaXRUYXNrKGlkKXtcbiAgICBjb25zdCBzZWxlY3RlZFByb2plY3QgPSBQcm9qZWN0cy5maW5kKHByb2plY3QgPT4gcHJvamVjdC5pZCA9PSBzZWxlY3RlZFByb2plY3RJZCk7XG4gICAgY29uc3QgdGFzayA9IHNlbGVjdGVkUHJvamVjdC50YXNrcy5maW5kKHRhc2sgPT4gdGFzay5pZCA9PSBpZCk7XG4gICAgaWYgKCF0YXNrKSByZXR1cm47XG5cbiAgICAvLyBQb3B1bGF0ZSB0aGUgZm9ybSB3aXRoIHRoZSB0YXNrIHZhbHVlc1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0aXRsZScpLnZhbHVlID0gdGFzay50aXRsZTtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZHVlZGF0ZScpLnZhbHVlID0gdGFzay5kdWVEYXRlO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkZXNjcmlwdGlvbicpLnZhbHVlID0gdGFzay5kZXNjcmlwdGlvbjtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJpb3JpdHknKS52YWx1ZSA9IHRhc2sucHJpb3JpdHk7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rhc2tJZCcpLnZhbHVlID0gdGFzay5pZDtcblxuICAgIG1vZGFsLnNob3dNb2RhbCgpO1xufVxuXG5leHBvcnQge2VkaXRUYXNrLGRlbGV0ZVRhc2ssY29tcGxldGVUYXNrLGNyZWF0ZVRhc2t9IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL2luZGV4LmNzcyc7XG5pbXBvcnQgeyByZW5kZXJQcm9qZWN0VGFza3MscmVuZGVyUHJvamVjdHMgfSBmcm9tICcuL2RvbSc7XG5pbXBvcnQgeyBzZWxlY3RlZFByb2plY3QgfSBmcm9tICcuL3Byb2plY3QtbWFuYWdlcic7XG5cblxuLy9yZW5kZXIgcHJvamVjdHMgYW5kIHRoZWlyIHRhc2tzXG5yZW5kZXJQcm9qZWN0VGFza3Moc2VsZWN0ZWRQcm9qZWN0KTtcbnJlbmRlclByb2plY3RzKCk7XG5cblxuXG5cblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9