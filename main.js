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
/* harmony export */   domManager: () => (/* binding */ domManager)
/* harmony export */ });
/* harmony import */ var _project_manager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project-manager */ "./src/project-manager.js");
/* harmony import */ var _tasks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tasks */ "./src/tasks.js");




class DOMManager {
    constructor () {
        //DOM variables
        this.projectName = document.querySelector('.project-name');
        this.projectsList = document.querySelector('.projects-list');
        this.tasksList = document.querySelector('.project-task-list');
        this.projectContainer = document.querySelector('.projects-container');
        this.toggleProjectsIcon = document.querySelector('.toggle-projects');
        this.tasksIcon = document.querySelector('.toggle-tasks');
        this.toggleProjectFormBtn = document.querySelector('.toggle-form-btn');
        this.projectForm = document.querySelector('.add-project-form');
    }

    renderProjects () {
        this.clearElement(this.projectsList);
        _project_manager__WEBPACK_IMPORTED_MODULE_0__["default"].Projects.forEach(project => {
            const projectItem = document.createElement('li');
            projectItem.classList.add('project-list-item')
            projectItem.id = `${project.id}`;

            const span = document.createElement('span');
            span.classList.add('project-list-icon');
            
    
            if (projectItem.id == _project_manager__WEBPACK_IMPORTED_MODULE_0__["default"].selectedProjectId) {
                projectItem.classList.add('active');
            }
           
            projectItem.appendChild(span);
            // Append the text node to the projectItem after the span
            const textNode = document.createTextNode(` ${project.name}`);
            projectItem.appendChild(textNode);
    
            const delIcon = document.createElement('i');
            delIcon.classList.add('fa-solid');
            delIcon.classList.add('fa-trash');
            delIcon.addEventListener('click',() => {
                _project_manager__WEBPACK_IMPORTED_MODULE_0__["default"].deleteProject(project.id)
                this.renderProjects()
                this.renderProjectTasks(_project_manager__WEBPACK_IMPORTED_MODULE_0__["default"].selectedProject)
            })
    
            projectItem.append(delIcon);
    
           this.projectsList.appendChild(projectItem);

        })
    }

    renderProjectTasks (selectedProject) {
        this.clearElement(this.tasksList);

        if(selectedProject){
            this.projectName.textContent = `${selectedProject.name}`;
            selectedProject.tasks.forEach(task => {
                const taskItem = document.createElement('li');
        
                const taskListItemSpan = document.createElement('span');
                taskListItemSpan.classList.add('task-list-item');
                taskItem.dataset.taskId = task.id;
        
                const icon = document.createElement('i');
                icon.classList.add('fa-regular', task.complete ? 'fa-check-square': 'fa-square');
                icon.addEventListener('click',(e) => _tasks__WEBPACK_IMPORTED_MODULE_1__["default"].completeTask(e))
                taskListItemSpan.appendChild(icon);
                taskListItemSpan.appendChild(document.createTextNode(` ${task.title}`));
                
                const descriptionSpan = document.createElement('span');
                descriptionSpan.classList.add('description-header');
                descriptionSpan.textContent = (task.description!=='') ? `${task.description}` : ' - '
                
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
                deleteIcon.addEventListener('click', () => _tasks__WEBPACK_IMPORTED_MODULE_1__["default"].deleteTask(task.id))
                const editIcon = document.createElement('i');
                editIcon.classList.add('fa-solid','fa-pen');
                editIcon.addEventListener('click',()=>_tasks__WEBPACK_IMPORTED_MODULE_1__["default"].editTask(task.id));
                functionsDiv.appendChild(deleteIcon);
                functionsDiv.appendChild(editIcon);
                taskItem.appendChild(functionsDiv);
        
                this.tasksList.appendChild(taskItem);
            });
        } else {
            this.projectName.textContent = '';
        }
    }
    clearElement (elem){
        while (elem.firstChild){
            elem.removeChild(elem.firstChild)
            
        }
    }
    init() {
        //add event listeners

        //Listen for selected Project
        this.projectsList.addEventListener('click',(e)=>{
            if (e.target.tagName.toLowerCase() == 'li'){
                _project_manager__WEBPACK_IMPORTED_MODULE_0__["default"].setProjectId(e.target.id)
                _project_manager__WEBPACK_IMPORTED_MODULE_0__["default"].saveToLocalStorage();  
                

                const selectedProject = _project_manager__WEBPACK_IMPORTED_MODULE_0__["default"].selectedProject;
                this.projectName.textContent = `${selectedProject.name}`
        
                this.renderProjects();        
                this.renderProjectTasks(selectedProject)
            }
        })

        //listen for toggleProjectFormBtn
        this.toggleProjectFormBtn.addEventListener('click', () => {
            if (this.projectForm.style.display === 'none' || this.projectForm.style.display === '') {
                this.projectForm.style.display = 'block';
                const input = this.projectForm.querySelector('input'); 
                input.focus();
            } else {
                this.projectForm.style.display = 'none';
            }
        })
        this.toggleProjectsIcon.addEventListener('click', () => {
            this.projectContainer.classList.toggle('show');
        });
        
        this.tasksIcon.addEventListener('click', () => {
            this.projectContainer.classList.remove('show');
        });
    }
}

const domManager = new DOMManager();
domManager.init();



/***/ }),

/***/ "./src/forms.js":
/*!**********************!*\
  !*** ./src/forms.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _project_manager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project-manager */ "./src/project-manager.js");
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom */ "./src/dom.js");
/* harmony import */ var _tasks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tasks */ "./src/tasks.js");




class FormsHandler {
    constructor () {
        //Form related - DOM variables
        this.projectForm = document.querySelector('.add-project-form');
        this.newProjectInput = document.querySelector('.new-project-input');
        this.tasksForm = document.querySelector('.task-form');
        this.modal = document.querySelector('.modal');
        this.displayForm = document.querySelector('.toggle-taskform-btn');
        this.hideForm = document.querySelector('.hide-form');
        this.projectsList = document.querySelector('.projects-list');

        //current selected Project
        this.selectedProject = _project_manager__WEBPACK_IMPORTED_MODULE_0__["default"].selectedProject
    }
    //initialize project Form
    initProjectForm () {
        this.projectForm.addEventListener('submit',(e)=>{
            e.preventDefault();
            const projectTitle = this.newProjectInput.value;
            //verify input
            if (projectTitle) {
                //create project and add to Projects 
                _project_manager__WEBPACK_IMPORTED_MODULE_0__["default"].createProject(projectTitle) //project
                _project_manager__WEBPACK_IMPORTED_MODULE_0__["default"].saveToLocalStorage();
                
                //reset form input & hide form after input
                this.newProjectInput.value='';
                this.projectForm.style.display = 'none';

              
                //re-render projects and projectTasks section
                _dom__WEBPACK_IMPORTED_MODULE_1__.domManager.renderProjects();
                _dom__WEBPACK_IMPORTED_MODULE_1__.domManager.renderProjectTasks(_project_manager__WEBPACK_IMPORTED_MODULE_0__["default"].selectedProject) 
            }
        })
    }
    //initialize task form
    initTaskForm(){
        //task form functionality
        this.tasksForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const title = document.getElementById('title').value;
            const duedate = document.getElementById('duedate').value
            const description = document.getElementById('description').value
            const priority = document.getElementById('priority').value
            const taskId = document.getElementById('taskId').value;
            
            if (taskId) {
                //edit exisitng task
                const task = _project_manager__WEBPACK_IMPORTED_MODULE_0__["default"].selectedProject.tasks.find(task => task.id == taskId);
                task.title = title;
                task.description = description;
                task.duedate = duedate;
                task.priority = priority;
               
            } else {
                //create new task
                const task = _tasks__WEBPACK_IMPORTED_MODULE_2__["default"].createTask(title, description, duedate, priority);
                _project_manager__WEBPACK_IMPORTED_MODULE_0__["default"].selectedProject.tasks.push(task);
            }
        
            _project_manager__WEBPACK_IMPORTED_MODULE_0__["default"].saveToLocalStorage();
            
            //reset tasks form and close modal after input
            this.tasksForm.reset();
            document.getElementById('taskId').value = '';
            this.modal.close();
            _dom__WEBPACK_IMPORTED_MODULE_1__.domManager.renderProjectTasks(_project_manager__WEBPACK_IMPORTED_MODULE_0__["default"].selectedProject)
        })
        this.hideForm.addEventListener('click',(e)=>{
            modal.close();
        })
        this.displayForm.addEventListener('click', () => {
            console.log("clicked")
            if (_project_manager__WEBPACK_IMPORTED_MODULE_0__["default"].selectedProjectId == null || _project_manager__WEBPACK_IMPORTED_MODULE_0__["default"].selectedProjectId == 'null' ) {
                alert("Click on a project to attach tasks to.");
            } else {
                this.tasksForm.reset();
                this.modal.showModal();
            }
        });
    }
}
const formHandler = new FormsHandler();
formHandler.initProjectForm();
formHandler.initTaskForm();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formHandler);

/***/ }),

/***/ "./src/project-manager.js":
/*!********************************!*\
  !*** ./src/project-manager.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//manages,creates and deletes projects in local storage

// ================== GLOBAL LOCAL STORAGE ===============================================//
const LOCAL_STORAGE_PROJECT_KEY = 'projects'
const LOCAL_STORAGE_SELECTED_PROJECT_KEY = 'selectedProject'

class ProjectManager {
    constructor () {
        //get projects from local storage instead of array but if n local, give empty array
        this.Projects = JSON.parse(localStorage.getItem(LOCAL_STORAGE_PROJECT_KEY)) || [{"name":"Default Project","id":0,"tasks":[]}]
        //get selected project id from project or use default's id 0
        this.selectedProjectId = localStorage.getItem(LOCAL_STORAGE_SELECTED_PROJECT_KEY) || 0
    }
    saveToLocalStorage(){
        localStorage.setItem(LOCAL_STORAGE_PROJECT_KEY,JSON.stringify(this.Projects))
        localStorage.setItem(LOCAL_STORAGE_SELECTED_PROJECT_KEY,this.selectedProjectId)
    }
    get selectedProject(){
        return this.Projects.find(project => project.id == projectManager.selectedProjectId)
    }
    createProject(name){
        const project = {
            name: name,
            id: Date.now().toString(),
            tasks: []
        };
        this.Projects.push(project);
        this.setProjectId(project.id)
        this.saveToLocalStorage();
        return project;
    }
    deleteProject(projectId){
        this.Projects = this.Projects.filter(project => project.id !== projectId);
        // If remaining projects, select the first one.
        if (this.Projects.length > 0) {
            this.selectedProjectId = this.Projects[0].id;
        } else {
            this.selectedProjectId = null;
        }
        this.saveToLocalStorage();
    }
    setProjectId(id){
        this.selectedProjectId = id
    }
}

const projectManager = new ProjectManager();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (projectManager);

/***/ }),

/***/ "./src/tasks.js":
/*!**********************!*\
  !*** ./src/tasks.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _project_manager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project-manager */ "./src/project-manager.js");
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom */ "./src/dom.js");




class TaskManager {
    createTask(title, description, duedate, priority) {
        return {
            title,
            description,
            duedate,
            priority,
            complete: false,
            id: Date.now().toString()
        };
    }
    completeTask (e) {

        if (e.target.closest('li')){
            const taskId = e.target.closest('li').dataset.taskId;
            const selectedProject = _project_manager__WEBPACK_IMPORTED_MODULE_0__["default"].selectedProject;
            const task = selectedProject.tasks.find(task => task.id == taskId);
            
            if (task) {
                //toggle task complete status
                task.complete = !task.complete; 
                _project_manager__WEBPACK_IMPORTED_MODULE_0__["default"].saveToLocalStorage();
                _dom__WEBPACK_IMPORTED_MODULE_1__.domManager.renderProjectTasks(selectedProject); 
            }
       }    
    }
    deleteTask(taskId){
        const selectedProject = _project_manager__WEBPACK_IMPORTED_MODULE_0__["default"].selectedProject
        selectedProject.tasks = selectedProject.tasks.filter(task => task.id !== taskId);
        _project_manager__WEBPACK_IMPORTED_MODULE_0__["default"].saveToLocalStorage();
        _dom__WEBPACK_IMPORTED_MODULE_1__.domManager.renderProjectTasks(selectedProject);
    }
    editTask (taskId){
        const task = this.findTask(taskId)
        if (!task) return;

        // Populate the form with the exisitng task values
        document.getElementById('title').value = task.title;
        document.getElementById('duedate').value = task.dueDate;
        document.getElementById('description').value = task.description;
        document.getElementById('priority').value = task.priority;
        document.getElementById('taskId').value = task.id;

        modal.showModal();
        
    }
    findTask(taskId){
        return _project_manager__WEBPACK_IMPORTED_MODULE_0__["default"].selectedProject.tasks.find(task => task.id == taskId);
    }
}

const taskManager = new TaskManager();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (taskManager);

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
/* harmony import */ var _project_manager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project-manager */ "./src/project-manager.js");
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dom */ "./src/dom.js");
/* harmony import */ var _forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./forms */ "./src/forms.js");





//render projects and their tasks
_dom__WEBPACK_IMPORTED_MODULE_2__.domManager.renderProjects();
_dom__WEBPACK_IMPORTED_MODULE_2__.domManager.renderProjectTasks(_project_manager__WEBPACK_IMPORTED_MODULE_1__["default"].selectedProject);







})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxDQUFDLE9BQU8sZ0ZBQWdGLFVBQVUsVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsTUFBTSxLQUFLLFVBQVUsWUFBWSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksTUFBTSxZQUFZLE1BQU0sS0FBSyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLE1BQU0sVUFBVSxNQUFNLEtBQUssS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsTUFBTSxVQUFVLE1BQU0sS0FBSyxLQUFLLFVBQVUsVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLEtBQUssS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLEtBQUssS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLE1BQU0sVUFBVSxNQUFNLEtBQUssS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLEtBQUssS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLE1BQU0sVUFBVSxNQUFNLEtBQUssS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxLQUFLLEtBQUssS0FBSyxVQUFVLEtBQUssVUFBVSxNQUFNLEtBQUssS0FBSyxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxNQUFNLFlBQVksV0FBVyxLQUFLLFVBQVUsTUFBTSxNQUFNLEtBQUssS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsTUFBTSxVQUFVLE1BQU0sS0FBSyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxZQUFZLE1BQU0sS0FBSyxVQUFVLFdBQVcsVUFBVSxNQUFNLEtBQUssS0FBSyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsS0FBSyxVQUFVLEtBQUssV0FBVyxNQUFNLEtBQUssS0FBSyxLQUFLLFVBQVUsT0FBTyxLQUFLLEtBQUssS0FBSyxVQUFVLFVBQVUsS0FBSyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsS0FBSyxLQUFLLEtBQUssS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsS0FBSyxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxLQUFLLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE9BQU8sS0FBSyxLQUFLLEtBQUssVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxVQUFVLFVBQVUsS0FBSyxLQUFLLFVBQVUsS0FBSyxLQUFLLFlBQVksV0FBVyxZQUFZLE1BQU0sWUFBWSxNQUFNLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFV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QWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7Ozs7Ozs7O0FDQXFCO0FBQzBCO0FBQ1o7QUFDRDs7QUFFbEM7QUFDQSw0Q0FBVTtBQUNWLDRDQUFVLG9CQUFvQix3REFBYyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguY3NzP2NmZTQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvZG9tLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9mb3Jtcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvcHJvamVjdC1tYW5hZ2VyLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy90YXNrcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYCp7XG4gICAgcGFkZGluZzowO1xuICAgIG1hcmdpbjowO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5ib2R5e1xuICAgIGZvbnQtc2l6ZToyMHB4O1xuICAgIGhlaWdodDoxMDB2aDtcbiAgICBwYWRkaW5nOjJlbTtcbiAgICB3aWR0aDo5MHZ3O1xuICAgIG1hcmdpbjogYXV0bztcbn1cbi5oZWFkZXJ7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxubGkge1xuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbn1cbi5jb250ZW50e1xuICAgIHBhZGRpbmc6MS41ZW07XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAzZnI7XG4gICAgbWluLWhlaWdodDogODB2aDtcbn1cbi5wcm9qZWN0cy1jb250YWluZXIsLnByb2plY3QtdGFza3MtY29udGFpbmVye1xuICAgIHBhZGRpbmc6MmVtO1xuICAgIGJvcmRlci1yYWRpdXM6IC4yZW07XG59XG4ucHJvamVjdC10YXNrLWxpc3Q+bGksLnByb2plY3RzLWxpc3Q+bGl7XG4gICAgbWFyZ2luOi44ZW0gMmVtIDBlbSAyZW07XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGl7XG4gICAgICAgIG1hcmdpbi1yaWdodDouM2VtO1xuICAgIH1cbn0gICBcbi5wcm9qZWN0LXRhc2stbGlzdCBsaXtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHBhZGRpbmc6MWVtO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIGJvcmRlci1yYWRpdXM6IC41ZW07XG59XG4ucHJvamVjdHMtY29udGFpbmVye1xuICAgIGJhY2tncm91bmQtY29sb3I6IGFsaWNlYmx1ZTtcbn1cbi5wcm9qZWN0LXRhc2tzLWNvbnRhaW5lcntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOmxhdmVuZGVyYmx1c2g7XG59XG4ucHJvamVjdC10YXNrcy1jb250YWluZXIgaDMge1xuICAgIG1hcmdpbjoxZW0gMGVtO1xufVxuLnByb2plY3RzLWhlYWRlciwudGFza3MtaGVhZGVye1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG4udG9nZ2xlLWZvcm0tYnRue1xuICAgIGZvbnQtc2l6ZTogMmVtO1xuICAgIGNvbG9yOmJsYWNrO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xuICAgICY6aG92ZXJ7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB9XG59XG4udG9nZ2xlLXRhc2tmb3JtLWJ0bntcbiAgICBwYWRkaW5nOi41ZW07XG4gICAgZm9udC1zaXplOiAxZW07XG4gICAgYm9yZGVyLXJhZGl1czogLjJlbTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOmxhdmVuZGVyYmx1c2g7XG4gICAgYm9yZGVyOjFweCBzb2xpZCBjYWRldGJsdWU7XG4gICAgJjpob3ZlcntcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIH1cbn1cbi50YXNrLWtleXMsLnByb2plY3QtdGFzay1saXN0IGxpe1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ2FwOjFlbTtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg0LDFmcik7XG59XG4udGFzay1rZXlze1xuICAgIHBhZGRpbmc6MWVtO1xufVxuLm5ldy1wcm9qZWN0LWlucHV0IHtcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICBib3JkZXI6IDA7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGJsYWNrO1xuICAgIGZvbnQtc2l6ZTogaW5oZXJpdDtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIHBhZGRpbmc6IDAuMjVlbTtcbiAgICB3aWR0aDo5ZW07XG59XG4uYWRkLXByb2plY3QtZm9ybXtcbiAgICBtYXJnaW46MWVtO1xuICAgIGRpc3BsYXk6IG5vbmU7XG59ICBcbi5hZGQtcHJvamVjdC1idG57XG4gICAgcGFkZGluZzouM2VtO1xuICAgIGZvbnQtc2l6ZTogLjhlbTtcbiAgICBib3JkZXItcmFkaXVzOjVweDtcbiAgICAmOmhvdmVye1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgfVxufVxuLnRhc2stZm9ybXtcbiAgIGRpc3BsYXk6IGZsZXg7XG4gICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgcGFkZGluZzoxZW07XG4gICBtYXJnaW46YXV0bztcbn1cbi50YXNrLWZvcm0gaW5wdXQsI3ByaW9yaXR5e1xuICAgIHBhZGRpbmc6IC41ZW07XG4gICAgZm9udC1zaXplOiAuOGVtO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxZW07XG59XG4uYWRkLXRhc2stYnRue1xuICAgIHBhZGRpbmc6MWVtO1xuICAgIGZvbnQtc2l6ZToxZW07XG59XG4jbW9kYWwge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0b3A6IDYwJTsgICAgICAgIFxuICAgIGxlZnQ6NTAlOyAgICAgICAgXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlOyBcbiAgICBwYWRkaW5nOi41ZW07ICAgXG4gICAgd2lkdGg6MjVlbTtcbiAgICBib3JkZXI6IDVweCBzb2xpZCAjY2NmYmYxO1xufVxuLmhpZGUtZm9ybXtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG4gICAgY29sb3I6d2hpdGU7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDowO1xuICAgIHJpZ2h0OjA7XG4gICAgZm9udC1zaXplOjFlbTtcbiAgICBwYWRkaW5nOi41ZW07XG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xuICAgICY6aG92ZXJ7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB9XG59XG4ucHJvamVjdC1saXN0LWl0ZW0uYWN0aXZle1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICBib3JkZXI6MXB4IHNvbGlkIGdyZWVuO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcbn1cblxuLmZhLXJlZ3VsYXJ7XG4gICAgZm9udC1zaXplOjEuNmVtO1xufVxuLnByb2plY3QtdGFzay1saXN0Pi5jb21wbGV0ZXtcbiAgICB0ZXh0LWRlY29yYXRpb246bGluZS10aHJvdWdoO1xuICAgIGNvbG9yOmdyZXk7XG4gICAgb3BhY2l0eTouNTsgICBcbn1cbi5mdW5jdGlvbnMtZGl2e1xuICAgIGl7XG4gICAgICAgIG1hcmdpbi1sZWZ0OjNlbTtcbiAgICAgICAgJjpob3ZlcntcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgfVxuICAgIH1cbn1cbi5sb3d7XG4gICAgYm9yZGVyLWxlZnQ6MzBweCBzb2xpZCAjZGMyNjI2O1xufVxuLm1lZGl1bXtcbiAgICBib3JkZXItbGVmdDogMzBweCBzb2xpZCAjZjU5ZTBiO1xufVxuLmhpZ2h7XG4gICAgYm9yZGVyLWxlZnQ6IDMwcHggc29saWQgZ3JlZW47XG59XG4udGFzay1saXN0LWl0ZW17XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGl7XG4gICAgICAgIG1hcmdpbi1yaWdodDouNWVtO1xuICAgICAgICBmb250LXNpemU6MmVtO1xuICAgICAgICAmOmhvdmVye1xuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICB9XG4gICAgfVxuICAgXG59XG4ucHJvamVjdC1saXN0LWl0ZW17XG4gICAgcGFkZGluZzouNWVtO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgYm94LXNoYWRvdzogMCAwIDdweCAycHggI2QxZDVkYjtcbiAgICAmOmhvdmVye1xuICAgICAgICBjdXJzb3I6cG9pbnRlcjtcbiAgICB9XG59XG4uZmEtYmFycywuZmEtZXllLXNsYXNoe1xuICAgIGZvbnQtc2l6ZToycmVtO1xufVxuLmFkZC1wcm9qZWN0LWJ0bntcbiAgICBtYXJnaW46LjRlbTtcbn1cblxuLyogTUVESUEgUVVBRVJJRVMgKi9cbkBtZWRpYSAobWluLXdpZHRoOiAxMDAxcHgpIHtcbiAgICAuZmEtYmFycyB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfS5mYS1leWUtc2xhc2h7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDoxNTkwcHgpe1xuICAgIGJvZHl7XG4gICAgICAgIGZvbnQtc2l6ZToxOHB4O1xuICAgIH1cbiAgICAuZnVuY3Rpb25zLWRpdntcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgaXtcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OjFlbTtcbiAgICAgICAgICAgICY6aG92ZXJ7XG4gICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIC5wcm9qZWN0LXRhc2stbGlzdD5saXtcbiAgICAgICAgcGFkZGluZzouNXJlbTtcbiAgICB9XG5cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6MTI4MHB4KXtcbiAgICBib2R5e1xuICAgICAgICBmb250LXNpemU6MTZweDtcbiAgICAgICAgd2lkdGg6MTAwdnc7XG4gICAgfVxuICAgIC5wcm9qZWN0cy1jb250YWluZXJ7XG4gICAgICAgIHBhZGRpbmc6MnJlbTtcbiAgICB9XG4gICBcbiAgICAucHJvamVjdC1saXN0LWl0ZW17XG4gICAgICAgIHBhZGRpbmc6LjVyZW07XG4gICAgfVxuICAgIC5hZGQtcHJvamVjdC1mb3Jte1xuICAgICAgICBwYWRkaW5nOi4xcmVtO1xuICAgIH1cbiAgICAubmV3LXByb2plY3QtaW5wdXR7XG4gICAgICAgIHdpZHRoOjlyZW07XG4gICAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDoxMDAwcHgpe1xuICAgIGJvZHl7XG4gICAgICAgIHBhZGRpbmc6LjVyZW07XG4gICAgfVxuICAgIC5jb250ZW50e1xuICAgICAgICBtaW4taGVpZ2h0OiA5OXZoO1xuICAgICAgICBwYWRkaW5nOjA7XG4gICAgfVxuICAgIC5wcm9qZWN0cy1jb250YWluZXJ7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDsgXG4gICAgICAgIHdpZHRoOiAzMCU7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgei1pbmRleDogMTA7IFxuICAgIH1cbiAgICAucHJvamVjdHMtY29udGFpbmVyLnNob3cge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICB9XG4gICAgLnRvZ2dsZS1wcm9qZWN0cywudG9nZ2xlLXRhc2tzIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7IFxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgfVxuICAgIC5wcm9qZWN0LW5hbWUsLnByb2plY3RzLWhlYWRlcntcbiAgICAgICAgcGFkZGluZzoxcmVtO1xuICAgIH1cbiAgICAucHJvamVjdHMtY29udGFpbmVyLC5wcm9qZWN0LXRhc2tzLWNvbnRhaW5lcntcbiAgICAgICAgbWluLWhlaWdodDo5MHZoO1xuICAgIH1cbiAgICAucHJvamVjdC10YXNrcy1jb250YWluZXJ7XG4gICAgICAgIHdpZHRoOjk5dnc7XG4gICAgfVxuIFxuICAgIC5oZWFkZXJ7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuICAgXG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjYzMHB4KSB7XG4gICAgYm9keXtcbiAgICAgICAgd2lkdGg6MTAwdnc7XG4gICAgICAgIHBhZGRpbmc6LjFyZW07XG4gICAgICAgIGZvbnQtc2l6ZToxM3B4O1xuICAgIH1cbiAgICAuY29udGVudHtcbiAgICAgICAgcGFkZGluZzouNXJlbTtcbiAgICAgICAgcGFkZGluZzowO1xuICAgICAgICBtYXJnaW46MDtcbiAgICB9XG4gICAgLnByb2plY3QtdGFza3MtY29udGFpbmVye1xuICAgICAgICB3aWR0aDo5MHZ3O1xuICAgICAgICBcbiAgICB9XG4gICAgLnByb2plY3RzLWNvbnRhaW5lcnsgXG4gICAgICAgIHdpZHRoOiA1MCU7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgei1pbmRleDogMTA7IFxuICAgICAgICBwYWRkaW5nOi44cmVtO1xuICAgIH1cbiAgICAuZmEtZXllLXNsYXNoe1xuICAgICAgICBmb250LXNpemU6MS41cmVtO1xuICAgIH1cbiAgICAucHJvamVjdHMtaGVhZGVye1xuICAgICAgICBwYWRkaW5nOi41cmVtIC4xcmVtO1xuICAgIH1cbiAgICAudG9nZ2xlLWZvcm0tYnRue1xuICAgICAgICBtYXJnaW4tbGVmdDoxcmVtO1xuICAgIH1cbiAgICAjbW9kYWx7XG4gICAgICAgIHRvcDo1MCU7XG4gICAgICAgIGxlZnQ6NSU7XG4gICAgfVxuICAgIC5uZXctcHJvamVjdC1pbnB1dHtcbiAgICAgICAgd2lkdGg6N3JlbTtcbiAgICB9XG4gICAgLnByb2plY3QtdGFzay1saXN0PmxpLC5wcm9qZWN0cy1saXN0Pmxpe1xuICAgICAgICBtYXJnaW46LjJyZW0gLjVyZW0gLjZyZW0gLjVyZW07XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGl7XG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6LjNlbTtcbiAgICAgICAgfVxuICAgIH0gIFxuICAgIC50YXNrcy1jb250YWluZXJ7XG4gICAgICAgIHBhZGRpbmc6MDtcbiAgICB9XG4gICAgLnByb2plY3QtbGlzdC1pdGVte1xuICAgICAgICBwYWRkaW5nOi4ycmVtO1xuICAgIH1cbiAgICAucHJvamVjdC10YXNrcy1jb250YWluZXJ7XG4gICAgICAgIHBhZGRpbmc6MXJlbTtcbiAgICAgICAgd2lkdGg6OTh2dztcbiAgICB9XG4gICAgLnRvZ2dsZS10YXNrZm9ybS1idG57XG4gICAgICAgIHBhZGRpbmc6LjJyZW07XG4gICAgfVxuICAgIC5kZXNjcmlwdGlvbi1oZWFkZXJ7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuICAgIC50YXNrLWtleXMsLnByb2plY3QtdGFzay1saXN0Pmxpe1xuICAgICAgICBwYWRkaW5nOi41cmVtO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgfVxuICAgIC5kZXNjLWtleXtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG4gICAgLmxvd3tcbiAgICAgICAgYm9yZGVyLWxlZnQ6MTBweCBzb2xpZCAjZGMyNjI2O1xuICAgIH1cbiAgICAubWVkaXVte1xuICAgICAgICBib3JkZXItbGVmdDogMTBweCBzb2xpZCAjZjU5ZTBiO1xuICAgIH1cbiAgICAuaGlnaHtcbiAgICAgICAgYm9yZGVyLWxlZnQ6IDEwcHggc29saWQgZ3JlZW47XG4gICAgfVxuXG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvaW5kZXguY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksU0FBUztJQUNULFFBQVE7SUFDUixzQkFBc0I7QUFDMUI7QUFDQTtJQUNJLGNBQWM7SUFDZCxZQUFZO0lBQ1osV0FBVztJQUNYLFVBQVU7SUFDVixZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLHFCQUFxQjtBQUN6QjtBQUNBO0lBQ0ksYUFBYTtJQUNiLGFBQWE7SUFDYiw4QkFBOEI7SUFD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c0NvbnRlbnRcIjpbXCIqe1xcbiAgICBwYWRkaW5nOjA7XFxuICAgIG1hcmdpbjowO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5ib2R5e1xcbiAgICBmb250LXNpemU6MjBweDtcXG4gICAgaGVpZ2h0OjEwMHZoO1xcbiAgICBwYWRkaW5nOjJlbTtcXG4gICAgd2lkdGg6OTB2dztcXG4gICAgbWFyZ2luOiBhdXRvO1xcbn1cXG4uaGVhZGVye1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbmxpIHtcXG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcbn1cXG4uY29udGVudHtcXG4gICAgcGFkZGluZzoxLjVlbTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgM2ZyO1xcbiAgICBtaW4taGVpZ2h0OiA4MHZoO1xcbn1cXG4ucHJvamVjdHMtY29udGFpbmVyLC5wcm9qZWN0LXRhc2tzLWNvbnRhaW5lcntcXG4gICAgcGFkZGluZzoyZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IC4yZW07XFxufVxcbi5wcm9qZWN0LXRhc2stbGlzdD5saSwucHJvamVjdHMtbGlzdD5saXtcXG4gICAgbWFyZ2luOi44ZW0gMmVtIDBlbSAyZW07XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGl7XFxuICAgICAgICBtYXJnaW4tcmlnaHQ6LjNlbTtcXG4gICAgfVxcbn0gICBcXG4ucHJvamVjdC10YXNrLWxpc3QgbGl7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHBhZGRpbmc6MWVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgYm9yZGVyLXJhZGl1czogLjVlbTtcXG59XFxuLnByb2plY3RzLWNvbnRhaW5lcntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYWxpY2VibHVlO1xcbn1cXG4ucHJvamVjdC10YXNrcy1jb250YWluZXJ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6bGF2ZW5kZXJibHVzaDtcXG59XFxuLnByb2plY3QtdGFza3MtY29udGFpbmVyIGgzIHtcXG4gICAgbWFyZ2luOjFlbSAwZW07XFxufVxcbi5wcm9qZWN0cy1oZWFkZXIsLnRhc2tzLWhlYWRlcntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG4udG9nZ2xlLWZvcm0tYnRue1xcbiAgICBmb250LXNpemU6IDJlbTtcXG4gICAgY29sb3I6YmxhY2s7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcXG4gICAgJjpob3ZlcntcXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgfVxcbn1cXG4udG9nZ2xlLXRhc2tmb3JtLWJ0bntcXG4gICAgcGFkZGluZzouNWVtO1xcbiAgICBmb250LXNpemU6IDFlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogLjJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjpsYXZlbmRlcmJsdXNoO1xcbiAgICBib3JkZXI6MXB4IHNvbGlkIGNhZGV0Ymx1ZTtcXG4gICAgJjpob3ZlcntcXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgfVxcbn1cXG4udGFzay1rZXlzLC5wcm9qZWN0LXRhc2stbGlzdCBsaXtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ2FwOjFlbTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNCwxZnIpO1xcbn1cXG4udGFzay1rZXlze1xcbiAgICBwYWRkaW5nOjFlbTtcXG59XFxuLm5ldy1wcm9qZWN0LWlucHV0IHtcXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuICAgIGJvcmRlcjogMDtcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGJsYWNrO1xcbiAgICBmb250LXNpemU6IGluaGVyaXQ7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIHBhZGRpbmc6IDAuMjVlbTtcXG4gICAgd2lkdGg6OWVtO1xcbn1cXG4uYWRkLXByb2plY3QtZm9ybXtcXG4gICAgbWFyZ2luOjFlbTtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59ICBcXG4uYWRkLXByb2plY3QtYnRue1xcbiAgICBwYWRkaW5nOi4zZW07XFxuICAgIGZvbnQtc2l6ZTogLjhlbTtcXG4gICAgYm9yZGVyLXJhZGl1czo1cHg7XFxuICAgICY6aG92ZXJ7XFxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIH1cXG59XFxuLnRhc2stZm9ybXtcXG4gICBkaXNwbGF5OiBmbGV4O1xcbiAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgcGFkZGluZzoxZW07XFxuICAgbWFyZ2luOmF1dG87XFxufVxcbi50YXNrLWZvcm0gaW5wdXQsI3ByaW9yaXR5e1xcbiAgICBwYWRkaW5nOiAuNWVtO1xcbiAgICBmb250LXNpemU6IC44ZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMWVtO1xcbn1cXG4uYWRkLXRhc2stYnRue1xcbiAgICBwYWRkaW5nOjFlbTtcXG4gICAgZm9udC1zaXplOjFlbTtcXG59XFxuI21vZGFsIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB0b3A6IDYwJTsgICAgICAgIFxcbiAgICBsZWZ0OjUwJTsgICAgICAgIFxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlOyBcXG4gICAgcGFkZGluZzouNWVtOyAgIFxcbiAgICB3aWR0aDoyNWVtO1xcbiAgICBib3JkZXI6IDVweCBzb2xpZCAjY2NmYmYxO1xcbn1cXG4uaGlkZS1mb3Jte1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxuICAgIGNvbG9yOndoaXRlO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDowO1xcbiAgICByaWdodDowO1xcbiAgICBmb250LXNpemU6MWVtO1xcbiAgICBwYWRkaW5nOi41ZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcXG4gICAgJjpob3ZlcntcXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgfVxcbn1cXG4ucHJvamVjdC1saXN0LWl0ZW0uYWN0aXZle1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBib3gtc2hhZG93OiBub25lO1xcbiAgICBib3JkZXI6MXB4IHNvbGlkIGdyZWVuO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XFxufVxcblxcbi5mYS1yZWd1bGFye1xcbiAgICBmb250LXNpemU6MS42ZW07XFxufVxcbi5wcm9qZWN0LXRhc2stbGlzdD4uY29tcGxldGV7XFxuICAgIHRleHQtZGVjb3JhdGlvbjpsaW5lLXRocm91Z2g7XFxuICAgIGNvbG9yOmdyZXk7XFxuICAgIG9wYWNpdHk6LjU7ICAgXFxufVxcbi5mdW5jdGlvbnMtZGl2e1xcbiAgICBpe1xcbiAgICAgICAgbWFyZ2luLWxlZnQ6M2VtO1xcbiAgICAgICAgJjpob3ZlcntcXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgICAgICB9XFxuICAgIH1cXG59XFxuLmxvd3tcXG4gICAgYm9yZGVyLWxlZnQ6MzBweCBzb2xpZCAjZGMyNjI2O1xcbn1cXG4ubWVkaXVte1xcbiAgICBib3JkZXItbGVmdDogMzBweCBzb2xpZCAjZjU5ZTBiO1xcbn1cXG4uaGlnaHtcXG4gICAgYm9yZGVyLWxlZnQ6IDMwcHggc29saWQgZ3JlZW47XFxufVxcbi50YXNrLWxpc3QtaXRlbXtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgaXtcXG4gICAgICAgIG1hcmdpbi1yaWdodDouNWVtO1xcbiAgICAgICAgZm9udC1zaXplOjJlbTtcXG4gICAgICAgICY6aG92ZXJ7XFxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAgICAgfVxcbiAgICB9XFxuICAgXFxufVxcbi5wcm9qZWN0LWxpc3QtaXRlbXtcXG4gICAgcGFkZGluZzouNWVtO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGJveC1zaGFkb3c6IDAgMCA3cHggMnB4ICNkMWQ1ZGI7XFxuICAgICY6aG92ZXJ7XFxuICAgICAgICBjdXJzb3I6cG9pbnRlcjtcXG4gICAgfVxcbn1cXG4uZmEtYmFycywuZmEtZXllLXNsYXNoe1xcbiAgICBmb250LXNpemU6MnJlbTtcXG59XFxuLmFkZC1wcm9qZWN0LWJ0bntcXG4gICAgbWFyZ2luOi40ZW07XFxufVxcblxcbi8qIE1FRElBIFFVQUVSSUVTICovXFxuQG1lZGlhIChtaW4td2lkdGg6IDEwMDFweCkge1xcbiAgICAuZmEtYmFycyB7XFxuICAgICAgICBkaXNwbGF5OiBub25lO1xcbiAgICB9LmZhLWV5ZS1zbGFzaHtcXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIH1cXG59XFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDoxNTkwcHgpe1xcbiAgICBib2R5e1xcbiAgICAgICAgZm9udC1zaXplOjE4cHg7XFxuICAgIH1cXG4gICAgLmZ1bmN0aW9ucy1kaXZ7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgaXtcXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDoxZW07XFxuICAgICAgICAgICAgJjpob3ZlcntcXG4gICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgIH1cXG4gICAgfVxcbiAgICAucHJvamVjdC10YXNrLWxpc3Q+bGl7XFxuICAgICAgICBwYWRkaW5nOi41cmVtO1xcbiAgICB9XFxuXFxufVxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6MTI4MHB4KXtcXG4gICAgYm9keXtcXG4gICAgICAgIGZvbnQtc2l6ZToxNnB4O1xcbiAgICAgICAgd2lkdGg6MTAwdnc7XFxuICAgIH1cXG4gICAgLnByb2plY3RzLWNvbnRhaW5lcntcXG4gICAgICAgIHBhZGRpbmc6MnJlbTtcXG4gICAgfVxcbiAgIFxcbiAgICAucHJvamVjdC1saXN0LWl0ZW17XFxuICAgICAgICBwYWRkaW5nOi41cmVtO1xcbiAgICB9XFxuICAgIC5hZGQtcHJvamVjdC1mb3Jte1xcbiAgICAgICAgcGFkZGluZzouMXJlbTtcXG4gICAgfVxcbiAgICAubmV3LXByb2plY3QtaW5wdXR7XFxuICAgICAgICB3aWR0aDo5cmVtO1xcbiAgICB9XFxufVxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6MTAwMHB4KXtcXG4gICAgYm9keXtcXG4gICAgICAgIHBhZGRpbmc6LjVyZW07XFxuICAgIH1cXG4gICAgLmNvbnRlbnR7XFxuICAgICAgICBtaW4taGVpZ2h0OiA5OXZoO1xcbiAgICAgICAgcGFkZGluZzowO1xcbiAgICB9XFxuICAgIC5wcm9qZWN0cy1jb250YWluZXJ7XFxuICAgICAgICBkaXNwbGF5OiBub25lO1xcbiAgICAgICAgcG9zaXRpb246IGZpeGVkOyBcXG4gICAgICAgIHdpZHRoOiAzMCU7XFxuICAgICAgICBoZWlnaHQ6IDEwMCU7XFxuICAgICAgICB6LWluZGV4OiAxMDsgXFxuICAgIH1cXG4gICAgLnByb2plY3RzLWNvbnRhaW5lci5zaG93IHtcXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICB9XFxuICAgIC50b2dnbGUtcHJvamVjdHMsLnRvZ2dsZS10YXNrcyB7XFxuICAgICAgICBkaXNwbGF5OiBibG9jazsgXFxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIH1cXG4gICAgLnByb2plY3QtbmFtZSwucHJvamVjdHMtaGVhZGVye1xcbiAgICAgICAgcGFkZGluZzoxcmVtO1xcbiAgICB9XFxuICAgIC5wcm9qZWN0cy1jb250YWluZXIsLnByb2plY3QtdGFza3MtY29udGFpbmVye1xcbiAgICAgICAgbWluLWhlaWdodDo5MHZoO1xcbiAgICB9XFxuICAgIC5wcm9qZWN0LXRhc2tzLWNvbnRhaW5lcntcXG4gICAgICAgIHdpZHRoOjk5dnc7XFxuICAgIH1cXG4gXFxuICAgIC5oZWFkZXJ7XFxuICAgICAgICBkaXNwbGF5OiBub25lO1xcbiAgICB9XFxuICAgXFxufVxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NjMwcHgpIHtcXG4gICAgYm9keXtcXG4gICAgICAgIHdpZHRoOjEwMHZ3O1xcbiAgICAgICAgcGFkZGluZzouMXJlbTtcXG4gICAgICAgIGZvbnQtc2l6ZToxM3B4O1xcbiAgICB9XFxuICAgIC5jb250ZW50e1xcbiAgICAgICAgcGFkZGluZzouNXJlbTtcXG4gICAgICAgIHBhZGRpbmc6MDtcXG4gICAgICAgIG1hcmdpbjowO1xcbiAgICB9XFxuICAgIC5wcm9qZWN0LXRhc2tzLWNvbnRhaW5lcntcXG4gICAgICAgIHdpZHRoOjkwdnc7XFxuICAgICAgICBcXG4gICAgfVxcbiAgICAucHJvamVjdHMtY29udGFpbmVyeyBcXG4gICAgICAgIHdpZHRoOiA1MCU7XFxuICAgICAgICBoZWlnaHQ6IDEwMCU7XFxuICAgICAgICB6LWluZGV4OiAxMDsgXFxuICAgICAgICBwYWRkaW5nOi44cmVtO1xcbiAgICB9XFxuICAgIC5mYS1leWUtc2xhc2h7XFxuICAgICAgICBmb250LXNpemU6MS41cmVtO1xcbiAgICB9XFxuICAgIC5wcm9qZWN0cy1oZWFkZXJ7XFxuICAgICAgICBwYWRkaW5nOi41cmVtIC4xcmVtO1xcbiAgICB9XFxuICAgIC50b2dnbGUtZm9ybS1idG57XFxuICAgICAgICBtYXJnaW4tbGVmdDoxcmVtO1xcbiAgICB9XFxuICAgICNtb2RhbHtcXG4gICAgICAgIHRvcDo1MCU7XFxuICAgICAgICBsZWZ0OjUlO1xcbiAgICB9XFxuICAgIC5uZXctcHJvamVjdC1pbnB1dHtcXG4gICAgICAgIHdpZHRoOjdyZW07XFxuICAgIH1cXG4gICAgLnByb2plY3QtdGFzay1saXN0PmxpLC5wcm9qZWN0cy1saXN0Pmxpe1xcbiAgICAgICAgbWFyZ2luOi4ycmVtIC41cmVtIC42cmVtIC41cmVtO1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICBpe1xcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDouM2VtO1xcbiAgICAgICAgfVxcbiAgICB9ICBcXG4gICAgLnRhc2tzLWNvbnRhaW5lcntcXG4gICAgICAgIHBhZGRpbmc6MDtcXG4gICAgfVxcbiAgICAucHJvamVjdC1saXN0LWl0ZW17XFxuICAgICAgICBwYWRkaW5nOi4ycmVtO1xcbiAgICB9XFxuICAgIC5wcm9qZWN0LXRhc2tzLWNvbnRhaW5lcntcXG4gICAgICAgIHBhZGRpbmc6MXJlbTtcXG4gICAgICAgIHdpZHRoOjk4dnc7XFxuICAgIH1cXG4gICAgLnRvZ2dsZS10YXNrZm9ybS1idG57XFxuICAgICAgICBwYWRkaW5nOi4ycmVtO1xcbiAgICB9XFxuICAgIC5kZXNjcmlwdGlvbi1oZWFkZXJ7XFxuICAgICAgICBkaXNwbGF5OiBub25lO1xcbiAgICB9XFxuICAgIC50YXNrLWtleXMsLnByb2plY3QtdGFzay1saXN0Pmxpe1xcbiAgICAgICAgcGFkZGluZzouNXJlbTtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIH1cXG4gICAgLmRlc2Mta2V5e1xcbiAgICAgICAgZGlzcGxheTogbm9uZTtcXG4gICAgfVxcbiAgICAubG93e1xcbiAgICAgICAgYm9yZGVyLWxlZnQ6MTBweCBzb2xpZCAjZGMyNjI2O1xcbiAgICB9XFxuICAgIC5tZWRpdW17XFxuICAgICAgICBib3JkZXItbGVmdDogMTBweCBzb2xpZCAjZjU5ZTBiO1xcbiAgICB9XFxuICAgIC5oaWdoe1xcbiAgICAgICAgYm9yZGVyLWxlZnQ6IDEwcHggc29saWQgZ3JlZW47XFxuICAgIH1cXG5cXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5kZXguY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5vcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5kZXguY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgcHJvamVjdE1hbmFnZXIgZnJvbSBcIi4vcHJvamVjdC1tYW5hZ2VyXCJcbmltcG9ydCB0YXNrTWFuYWdlciBmcm9tIFwiLi90YXNrc1wiXG5cblxuY2xhc3MgRE9NTWFuYWdlciB7XG4gICAgY29uc3RydWN0b3IgKCkge1xuICAgICAgICAvL0RPTSB2YXJpYWJsZXNcbiAgICAgICAgdGhpcy5wcm9qZWN0TmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LW5hbWUnKTtcbiAgICAgICAgdGhpcy5wcm9qZWN0c0xpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdHMtbGlzdCcpO1xuICAgICAgICB0aGlzLnRhc2tzTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LXRhc2stbGlzdCcpO1xuICAgICAgICB0aGlzLnByb2plY3RDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdHMtY29udGFpbmVyJyk7XG4gICAgICAgIHRoaXMudG9nZ2xlUHJvamVjdHNJY29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZ2dsZS1wcm9qZWN0cycpO1xuICAgICAgICB0aGlzLnRhc2tzSWNvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2dnbGUtdGFza3MnKTtcbiAgICAgICAgdGhpcy50b2dnbGVQcm9qZWN0Rm9ybUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2dnbGUtZm9ybS1idG4nKTtcbiAgICAgICAgdGhpcy5wcm9qZWN0Rm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtcHJvamVjdC1mb3JtJyk7XG4gICAgfVxuXG4gICAgcmVuZGVyUHJvamVjdHMgKCkge1xuICAgICAgICB0aGlzLmNsZWFyRWxlbWVudCh0aGlzLnByb2plY3RzTGlzdCk7XG4gICAgICAgIHByb2plY3RNYW5hZ2VyLlByb2plY3RzLmZvckVhY2gocHJvamVjdCA9PiB7XG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgICAgICAgICBwcm9qZWN0SXRlbS5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LWxpc3QtaXRlbScpXG4gICAgICAgICAgICBwcm9qZWN0SXRlbS5pZCA9IGAke3Byb2plY3QuaWR9YDtcblxuICAgICAgICAgICAgY29uc3Qgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgICAgIHNwYW4uY2xhc3NMaXN0LmFkZCgncHJvamVjdC1saXN0LWljb24nKTtcbiAgICAgICAgICAgIFxuICAgIFxuICAgICAgICAgICAgaWYgKHByb2plY3RJdGVtLmlkID09IHByb2plY3RNYW5hZ2VyLnNlbGVjdGVkUHJvamVjdElkKSB7XG4gICAgICAgICAgICAgICAgcHJvamVjdEl0ZW0uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgIFxuICAgICAgICAgICAgcHJvamVjdEl0ZW0uYXBwZW5kQ2hpbGQoc3Bhbik7XG4gICAgICAgICAgICAvLyBBcHBlbmQgdGhlIHRleHQgbm9kZSB0byB0aGUgcHJvamVjdEl0ZW0gYWZ0ZXIgdGhlIHNwYW5cbiAgICAgICAgICAgIGNvbnN0IHRleHROb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoYCAke3Byb2plY3QubmFtZX1gKTtcbiAgICAgICAgICAgIHByb2plY3RJdGVtLmFwcGVuZENoaWxkKHRleHROb2RlKTtcbiAgICBcbiAgICAgICAgICAgIGNvbnN0IGRlbEljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJyk7XG4gICAgICAgICAgICBkZWxJY29uLmNsYXNzTGlzdC5hZGQoJ2ZhLXNvbGlkJyk7XG4gICAgICAgICAgICBkZWxJY29uLmNsYXNzTGlzdC5hZGQoJ2ZhLXRyYXNoJyk7XG4gICAgICAgICAgICBkZWxJY29uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoKSA9PiB7XG4gICAgICAgICAgICAgICAgcHJvamVjdE1hbmFnZXIuZGVsZXRlUHJvamVjdChwcm9qZWN0LmlkKVxuICAgICAgICAgICAgICAgIHRoaXMucmVuZGVyUHJvamVjdHMoKVxuICAgICAgICAgICAgICAgIHRoaXMucmVuZGVyUHJvamVjdFRhc2tzKHByb2plY3RNYW5hZ2VyLnNlbGVjdGVkUHJvamVjdClcbiAgICAgICAgICAgIH0pXG4gICAgXG4gICAgICAgICAgICBwcm9qZWN0SXRlbS5hcHBlbmQoZGVsSWNvbik7XG4gICAgXG4gICAgICAgICAgIHRoaXMucHJvamVjdHNMaXN0LmFwcGVuZENoaWxkKHByb2plY3RJdGVtKTtcblxuICAgICAgICB9KVxuICAgIH1cblxuICAgIHJlbmRlclByb2plY3RUYXNrcyAoc2VsZWN0ZWRQcm9qZWN0KSB7XG4gICAgICAgIHRoaXMuY2xlYXJFbGVtZW50KHRoaXMudGFza3NMaXN0KTtcblxuICAgICAgICBpZihzZWxlY3RlZFByb2plY3Qpe1xuICAgICAgICAgICAgdGhpcy5wcm9qZWN0TmFtZS50ZXh0Q29udGVudCA9IGAke3NlbGVjdGVkUHJvamVjdC5uYW1lfWA7XG4gICAgICAgICAgICBzZWxlY3RlZFByb2plY3QudGFza3MuZm9yRWFjaCh0YXNrID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCB0YXNrSXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgICAgIFxuICAgICAgICAgICAgICAgIGNvbnN0IHRhc2tMaXN0SXRlbVNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAgICAgICAgICAgdGFza0xpc3RJdGVtU3Bhbi5jbGFzc0xpc3QuYWRkKCd0YXNrLWxpc3QtaXRlbScpO1xuICAgICAgICAgICAgICAgIHRhc2tJdGVtLmRhdGFzZXQudGFza0lkID0gdGFzay5pZDtcbiAgICAgICAgXG4gICAgICAgICAgICAgICAgY29uc3QgaWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2knKTtcbiAgICAgICAgICAgICAgICBpY29uLmNsYXNzTGlzdC5hZGQoJ2ZhLXJlZ3VsYXInLCB0YXNrLmNvbXBsZXRlID8gJ2ZhLWNoZWNrLXNxdWFyZSc6ICdmYS1zcXVhcmUnKTtcbiAgICAgICAgICAgICAgICBpY29uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoZSkgPT4gdGFza01hbmFnZXIuY29tcGxldGVUYXNrKGUpKVxuICAgICAgICAgICAgICAgIHRhc2tMaXN0SXRlbVNwYW4uYXBwZW5kQ2hpbGQoaWNvbik7XG4gICAgICAgICAgICAgICAgdGFza0xpc3RJdGVtU3Bhbi5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShgICR7dGFzay50aXRsZX1gKSk7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgY29uc3QgZGVzY3JpcHRpb25TcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uU3Bhbi5jbGFzc0xpc3QuYWRkKCdkZXNjcmlwdGlvbi1oZWFkZXInKTtcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvblNwYW4udGV4dENvbnRlbnQgPSAodGFzay5kZXNjcmlwdGlvbiE9PScnKSA/IGAke3Rhc2suZGVzY3JpcHRpb259YCA6ICcgLSAnXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgY29uc3QgZHVlRGF0ZVNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAgICAgICAgICAgZHVlRGF0ZVNwYW4uY2xhc3NMaXN0LmFkZCgnZHVlZGF0ZS1oZWFkZXInKTtcbiAgICAgICAgICAgICAgICBjb25zdCBkdWVEYXRlID0gbmV3IERhdGUodGFzay5kdWVkYXRlKTtcbiAgICAgICAgICAgICAgICBkdWVEYXRlU3Bhbi50ZXh0Q29udGVudCA9IGR1ZURhdGUudG9Mb2NhbGVTdHJpbmcoKTtcbiAgICAgICAgXG4gICAgICAgICAgICAgICAgdGFza0l0ZW0uYXBwZW5kQ2hpbGQodGFza0xpc3RJdGVtU3Bhbik7XG4gICAgICAgICAgICAgICAgdGFza0l0ZW0uYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb25TcGFuKTtcbiAgICAgICAgICAgICAgICB0YXNrSXRlbS5hcHBlbmRDaGlsZChkdWVEYXRlU3Bhbik7XG4gICAgICAgIFxuICAgICAgICAgICAgICAgIGlmICh0YXNrLmNvbXBsZXRlKSB7XG4gICAgICAgICAgICAgICAgICAgIHRhc2tJdGVtLmNsYXNzTGlzdC5hZGQoJ2NvbXBsZXRlJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh0YXNrLnByaW9yaXR5ID09ICdoaWdoJyl7XG4gICAgICAgICAgICAgICAgICAgIHRhc2tJdGVtLmNsYXNzTGlzdC5hZGQoJ2hpZ2gnKTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRhc2sucHJpb3JpdHkgPT0gJ21lZGl1bScpe1xuICAgICAgICAgICAgICAgICAgICB0YXNrSXRlbS5jbGFzc0xpc3QuYWRkKCdtZWRpdW0nKVxuICAgICAgICAgICAgICAgIH0gZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgdGFza0l0ZW0uY2xhc3NMaXN0LmFkZCgnbG93Jyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbnN0IGZ1bmN0aW9uc0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgICAgICAgICAgZnVuY3Rpb25zRGl2LmNsYXNzTGlzdC5hZGQoJ2Z1bmN0aW9ucy1kaXYnKVxuICAgICAgICAgICAgICAgIGNvbnN0IGRlbGV0ZUljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJyk7XG4gICAgICAgICAgICAgICAgZGVsZXRlSWNvbi5jbGFzc0xpc3QuYWRkKCdmYS1zb2xpZCcsJ2ZhLXRyYXNoJyk7XG4gICAgICAgICAgICAgICAgZGVsZXRlSWNvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHRhc2tNYW5hZ2VyLmRlbGV0ZVRhc2sodGFzay5pZCkpXG4gICAgICAgICAgICAgICAgY29uc3QgZWRpdEljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJyk7XG4gICAgICAgICAgICAgICAgZWRpdEljb24uY2xhc3NMaXN0LmFkZCgnZmEtc29saWQnLCdmYS1wZW4nKTtcbiAgICAgICAgICAgICAgICBlZGl0SWNvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKCk9PnRhc2tNYW5hZ2VyLmVkaXRUYXNrKHRhc2suaWQpKTtcbiAgICAgICAgICAgICAgICBmdW5jdGlvbnNEaXYuYXBwZW5kQ2hpbGQoZGVsZXRlSWNvbik7XG4gICAgICAgICAgICAgICAgZnVuY3Rpb25zRGl2LmFwcGVuZENoaWxkKGVkaXRJY29uKTtcbiAgICAgICAgICAgICAgICB0YXNrSXRlbS5hcHBlbmRDaGlsZChmdW5jdGlvbnNEaXYpO1xuICAgICAgICBcbiAgICAgICAgICAgICAgICB0aGlzLnRhc2tzTGlzdC5hcHBlbmRDaGlsZCh0YXNrSXRlbSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMucHJvamVjdE5hbWUudGV4dENvbnRlbnQgPSAnJztcbiAgICAgICAgfVxuICAgIH1cbiAgICBjbGVhckVsZW1lbnQgKGVsZW0pe1xuICAgICAgICB3aGlsZSAoZWxlbS5maXJzdENoaWxkKXtcbiAgICAgICAgICAgIGVsZW0ucmVtb3ZlQ2hpbGQoZWxlbS5maXJzdENoaWxkKVxuICAgICAgICAgICAgXG4gICAgICAgIH1cbiAgICB9XG4gICAgaW5pdCgpIHtcbiAgICAgICAgLy9hZGQgZXZlbnQgbGlzdGVuZXJzXG5cbiAgICAgICAgLy9MaXN0ZW4gZm9yIHNlbGVjdGVkIFByb2plY3RcbiAgICAgICAgdGhpcy5wcm9qZWN0c0xpc3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLChlKT0+e1xuICAgICAgICAgICAgaWYgKGUudGFyZ2V0LnRhZ05hbWUudG9Mb3dlckNhc2UoKSA9PSAnbGknKXtcbiAgICAgICAgICAgICAgICBwcm9qZWN0TWFuYWdlci5zZXRQcm9qZWN0SWQoZS50YXJnZXQuaWQpXG4gICAgICAgICAgICAgICAgcHJvamVjdE1hbmFnZXIuc2F2ZVRvTG9jYWxTdG9yYWdlKCk7ICBcbiAgICAgICAgICAgICAgICBcblxuICAgICAgICAgICAgICAgIGNvbnN0IHNlbGVjdGVkUHJvamVjdCA9IHByb2plY3RNYW5hZ2VyLnNlbGVjdGVkUHJvamVjdDtcbiAgICAgICAgICAgICAgICB0aGlzLnByb2plY3ROYW1lLnRleHRDb250ZW50ID0gYCR7c2VsZWN0ZWRQcm9qZWN0Lm5hbWV9YFxuICAgICAgICBcbiAgICAgICAgICAgICAgICB0aGlzLnJlbmRlclByb2plY3RzKCk7ICAgICAgICBcbiAgICAgICAgICAgICAgICB0aGlzLnJlbmRlclByb2plY3RUYXNrcyhzZWxlY3RlZFByb2plY3QpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG5cbiAgICAgICAgLy9saXN0ZW4gZm9yIHRvZ2dsZVByb2plY3RGb3JtQnRuXG4gICAgICAgIHRoaXMudG9nZ2xlUHJvamVjdEZvcm1CdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcm9qZWN0Rm9ybS5zdHlsZS5kaXNwbGF5ID09PSAnbm9uZScgfHwgdGhpcy5wcm9qZWN0Rm9ybS5zdHlsZS5kaXNwbGF5ID09PSAnJykge1xuICAgICAgICAgICAgICAgIHRoaXMucHJvamVjdEZvcm0uc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICAgICAgICAgICAgY29uc3QgaW5wdXQgPSB0aGlzLnByb2plY3RGb3JtLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0Jyk7IFxuICAgICAgICAgICAgICAgIGlucHV0LmZvY3VzKCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMucHJvamVjdEZvcm0uc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgdGhpcy50b2dnbGVQcm9qZWN0c0ljb24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnByb2plY3RDb250YWluZXIuY2xhc3NMaXN0LnRvZ2dsZSgnc2hvdycpO1xuICAgICAgICB9KTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMudGFza3NJY29uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5wcm9qZWN0Q29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoJ3Nob3cnKTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5jb25zdCBkb21NYW5hZ2VyID0gbmV3IERPTU1hbmFnZXIoKTtcbmRvbU1hbmFnZXIuaW5pdCgpO1xuXG5leHBvcnQgeyBkb21NYW5hZ2VyIH0iLCJpbXBvcnQgcHJvamVjdE1hbmFnZXIgZnJvbSBcIi4vcHJvamVjdC1tYW5hZ2VyXCI7XG5pbXBvcnQgeyBkb21NYW5hZ2VyIH0gZnJvbSAnLi9kb20nO1xuaW1wb3J0IHRhc2tNYW5hZ2VyIGZyb20gXCIuL3Rhc2tzXCJcblxuY2xhc3MgRm9ybXNIYW5kbGVyIHtcbiAgICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgICAgIC8vRm9ybSByZWxhdGVkIC0gRE9NIHZhcmlhYmxlc1xuICAgICAgICB0aGlzLnByb2plY3RGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC1wcm9qZWN0LWZvcm0nKTtcbiAgICAgICAgdGhpcy5uZXdQcm9qZWN0SW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmV3LXByb2plY3QtaW5wdXQnKTtcbiAgICAgICAgdGhpcy50YXNrc0Zvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFzay1mb3JtJyk7XG4gICAgICAgIHRoaXMubW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwnKTtcbiAgICAgICAgdGhpcy5kaXNwbGF5Rm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2dnbGUtdGFza2Zvcm0tYnRuJyk7XG4gICAgICAgIHRoaXMuaGlkZUZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGlkZS1mb3JtJyk7XG4gICAgICAgIHRoaXMucHJvamVjdHNMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3RzLWxpc3QnKTtcblxuICAgICAgICAvL2N1cnJlbnQgc2VsZWN0ZWQgUHJvamVjdFxuICAgICAgICB0aGlzLnNlbGVjdGVkUHJvamVjdCA9IHByb2plY3RNYW5hZ2VyLnNlbGVjdGVkUHJvamVjdFxuICAgIH1cbiAgICAvL2luaXRpYWxpemUgcHJvamVjdCBGb3JtXG4gICAgaW5pdFByb2plY3RGb3JtICgpIHtcbiAgICAgICAgdGhpcy5wcm9qZWN0Rm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLChlKT0+e1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgY29uc3QgcHJvamVjdFRpdGxlID0gdGhpcy5uZXdQcm9qZWN0SW5wdXQudmFsdWU7XG4gICAgICAgICAgICAvL3ZlcmlmeSBpbnB1dFxuICAgICAgICAgICAgaWYgKHByb2plY3RUaXRsZSkge1xuICAgICAgICAgICAgICAgIC8vY3JlYXRlIHByb2plY3QgYW5kIGFkZCB0byBQcm9qZWN0cyBcbiAgICAgICAgICAgICAgICBwcm9qZWN0TWFuYWdlci5jcmVhdGVQcm9qZWN0KHByb2plY3RUaXRsZSkgLy9wcm9qZWN0XG4gICAgICAgICAgICAgICAgcHJvamVjdE1hbmFnZXIuc2F2ZVRvTG9jYWxTdG9yYWdlKCk7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgLy9yZXNldCBmb3JtIGlucHV0ICYgaGlkZSBmb3JtIGFmdGVyIGlucHV0XG4gICAgICAgICAgICAgICAgdGhpcy5uZXdQcm9qZWN0SW5wdXQudmFsdWU9Jyc7XG4gICAgICAgICAgICAgICAgdGhpcy5wcm9qZWN0Rm9ybS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIC8vcmUtcmVuZGVyIHByb2plY3RzIGFuZCBwcm9qZWN0VGFza3Mgc2VjdGlvblxuICAgICAgICAgICAgICAgIGRvbU1hbmFnZXIucmVuZGVyUHJvamVjdHMoKTtcbiAgICAgICAgICAgICAgICBkb21NYW5hZ2VyLnJlbmRlclByb2plY3RUYXNrcyhwcm9qZWN0TWFuYWdlci5zZWxlY3RlZFByb2plY3QpIFxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH1cbiAgICAvL2luaXRpYWxpemUgdGFzayBmb3JtXG4gICAgaW5pdFRhc2tGb3JtKCl7XG4gICAgICAgIC8vdGFzayBmb3JtIGZ1bmN0aW9uYWxpdHlcbiAgICAgICAgdGhpcy50YXNrc0Zvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGUpID0+IHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAgICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGl0bGUnKS52YWx1ZTtcbiAgICAgICAgICAgIGNvbnN0IGR1ZWRhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZHVlZGF0ZScpLnZhbHVlXG4gICAgICAgICAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkZXNjcmlwdGlvbicpLnZhbHVlXG4gICAgICAgICAgICBjb25zdCBwcmlvcml0eSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcmlvcml0eScpLnZhbHVlXG4gICAgICAgICAgICBjb25zdCB0YXNrSWQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFza0lkJykudmFsdWU7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGlmICh0YXNrSWQpIHtcbiAgICAgICAgICAgICAgICAvL2VkaXQgZXhpc2l0bmcgdGFza1xuICAgICAgICAgICAgICAgIGNvbnN0IHRhc2sgPSBwcm9qZWN0TWFuYWdlci5zZWxlY3RlZFByb2plY3QudGFza3MuZmluZCh0YXNrID0+IHRhc2suaWQgPT0gdGFza0lkKTtcbiAgICAgICAgICAgICAgICB0YXNrLnRpdGxlID0gdGl0bGU7XG4gICAgICAgICAgICAgICAgdGFzay5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgICAgICAgICAgICAgIHRhc2suZHVlZGF0ZSA9IGR1ZWRhdGU7XG4gICAgICAgICAgICAgICAgdGFzay5wcmlvcml0eSA9IHByaW9yaXR5O1xuICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vY3JlYXRlIG5ldyB0YXNrXG4gICAgICAgICAgICAgICAgY29uc3QgdGFzayA9IHRhc2tNYW5hZ2VyLmNyZWF0ZVRhc2sodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVkYXRlLCBwcmlvcml0eSk7XG4gICAgICAgICAgICAgICAgcHJvamVjdE1hbmFnZXIuc2VsZWN0ZWRQcm9qZWN0LnRhc2tzLnB1c2godGFzayk7XG4gICAgICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAgICAgcHJvamVjdE1hbmFnZXIuc2F2ZVRvTG9jYWxTdG9yYWdlKCk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vcmVzZXQgdGFza3MgZm9ybSBhbmQgY2xvc2UgbW9kYWwgYWZ0ZXIgaW5wdXRcbiAgICAgICAgICAgIHRoaXMudGFza3NGb3JtLnJlc2V0KCk7XG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFza0lkJykudmFsdWUgPSAnJztcbiAgICAgICAgICAgIHRoaXMubW9kYWwuY2xvc2UoKTtcbiAgICAgICAgICAgIGRvbU1hbmFnZXIucmVuZGVyUHJvamVjdFRhc2tzKHByb2plY3RNYW5hZ2VyLnNlbGVjdGVkUHJvamVjdClcbiAgICAgICAgfSlcbiAgICAgICAgdGhpcy5oaWRlRm9ybS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKGUpPT57XG4gICAgICAgICAgICBtb2RhbC5jbG9zZSgpO1xuICAgICAgICB9KVxuICAgICAgICB0aGlzLmRpc3BsYXlGb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJjbGlja2VkXCIpXG4gICAgICAgICAgICBpZiAocHJvamVjdE1hbmFnZXIuc2VsZWN0ZWRQcm9qZWN0SWQgPT0gbnVsbCB8fCBwcm9qZWN0TWFuYWdlci5zZWxlY3RlZFByb2plY3RJZCA9PSAnbnVsbCcgKSB7XG4gICAgICAgICAgICAgICAgYWxlcnQoXCJDbGljayBvbiBhIHByb2plY3QgdG8gYXR0YWNoIHRhc2tzIHRvLlwiKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy50YXNrc0Zvcm0ucmVzZXQoKTtcbiAgICAgICAgICAgICAgICB0aGlzLm1vZGFsLnNob3dNb2RhbCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG59XG5jb25zdCBmb3JtSGFuZGxlciA9IG5ldyBGb3Jtc0hhbmRsZXIoKTtcbmZvcm1IYW5kbGVyLmluaXRQcm9qZWN0Rm9ybSgpO1xuZm9ybUhhbmRsZXIuaW5pdFRhc2tGb3JtKCk7XG5cbmV4cG9ydCBkZWZhdWx0IGZvcm1IYW5kbGVyOyIsIi8vbWFuYWdlcyxjcmVhdGVzIGFuZCBkZWxldGVzIHByb2plY3RzIGluIGxvY2FsIHN0b3JhZ2VcblxuLy8gPT09PT09PT09PT09PT09PT09IEdMT0JBTCBMT0NBTCBTVE9SQUdFID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ly9cbmNvbnN0IExPQ0FMX1NUT1JBR0VfUFJPSkVDVF9LRVkgPSAncHJvamVjdHMnXG5jb25zdCBMT0NBTF9TVE9SQUdFX1NFTEVDVEVEX1BST0pFQ1RfS0VZID0gJ3NlbGVjdGVkUHJvamVjdCdcblxuY2xhc3MgUHJvamVjdE1hbmFnZXIge1xuICAgIGNvbnN0cnVjdG9yICgpIHtcbiAgICAgICAgLy9nZXQgcHJvamVjdHMgZnJvbSBsb2NhbCBzdG9yYWdlIGluc3RlYWQgb2YgYXJyYXkgYnV0IGlmIG4gbG9jYWwsIGdpdmUgZW1wdHkgYXJyYXlcbiAgICAgICAgdGhpcy5Qcm9qZWN0cyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oTE9DQUxfU1RPUkFHRV9QUk9KRUNUX0tFWSkpIHx8IFt7XCJuYW1lXCI6XCJEZWZhdWx0IFByb2plY3RcIixcImlkXCI6MCxcInRhc2tzXCI6W119XVxuICAgICAgICAvL2dldCBzZWxlY3RlZCBwcm9qZWN0IGlkIGZyb20gcHJvamVjdCBvciB1c2UgZGVmYXVsdCdzIGlkIDBcbiAgICAgICAgdGhpcy5zZWxlY3RlZFByb2plY3RJZCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKExPQ0FMX1NUT1JBR0VfU0VMRUNURURfUFJPSkVDVF9LRVkpIHx8IDBcbiAgICB9XG4gICAgc2F2ZVRvTG9jYWxTdG9yYWdlKCl7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKExPQ0FMX1NUT1JBR0VfUFJPSkVDVF9LRVksSlNPTi5zdHJpbmdpZnkodGhpcy5Qcm9qZWN0cykpXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKExPQ0FMX1NUT1JBR0VfU0VMRUNURURfUFJPSkVDVF9LRVksdGhpcy5zZWxlY3RlZFByb2plY3RJZClcbiAgICB9XG4gICAgZ2V0IHNlbGVjdGVkUHJvamVjdCgpe1xuICAgICAgICByZXR1cm4gdGhpcy5Qcm9qZWN0cy5maW5kKHByb2plY3QgPT4gcHJvamVjdC5pZCA9PSBwcm9qZWN0TWFuYWdlci5zZWxlY3RlZFByb2plY3RJZClcbiAgICB9XG4gICAgY3JlYXRlUHJvamVjdChuYW1lKXtcbiAgICAgICAgY29uc3QgcHJvamVjdCA9IHtcbiAgICAgICAgICAgIG5hbWU6IG5hbWUsXG4gICAgICAgICAgICBpZDogRGF0ZS5ub3coKS50b1N0cmluZygpLFxuICAgICAgICAgICAgdGFza3M6IFtdXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuUHJvamVjdHMucHVzaChwcm9qZWN0KTtcbiAgICAgICAgdGhpcy5zZXRQcm9qZWN0SWQocHJvamVjdC5pZClcbiAgICAgICAgdGhpcy5zYXZlVG9Mb2NhbFN0b3JhZ2UoKTtcbiAgICAgICAgcmV0dXJuIHByb2plY3Q7XG4gICAgfVxuICAgIGRlbGV0ZVByb2plY3QocHJvamVjdElkKXtcbiAgICAgICAgdGhpcy5Qcm9qZWN0cyA9IHRoaXMuUHJvamVjdHMuZmlsdGVyKHByb2plY3QgPT4gcHJvamVjdC5pZCAhPT0gcHJvamVjdElkKTtcbiAgICAgICAgLy8gSWYgcmVtYWluaW5nIHByb2plY3RzLCBzZWxlY3QgdGhlIGZpcnN0IG9uZS5cbiAgICAgICAgaWYgKHRoaXMuUHJvamVjdHMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgdGhpcy5zZWxlY3RlZFByb2plY3RJZCA9IHRoaXMuUHJvamVjdHNbMF0uaWQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnNlbGVjdGVkUHJvamVjdElkID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNhdmVUb0xvY2FsU3RvcmFnZSgpO1xuICAgIH1cbiAgICBzZXRQcm9qZWN0SWQoaWQpe1xuICAgICAgICB0aGlzLnNlbGVjdGVkUHJvamVjdElkID0gaWRcbiAgICB9XG59XG5cbmNvbnN0IHByb2plY3RNYW5hZ2VyID0gbmV3IFByb2plY3RNYW5hZ2VyKCk7XG5leHBvcnQgZGVmYXVsdCBwcm9qZWN0TWFuYWdlcjsiLCJpbXBvcnQgcHJvamVjdE1hbmFnZXIgZnJvbSBcIi4vcHJvamVjdC1tYW5hZ2VyXCI7XG5pbXBvcnQgeyBkb21NYW5hZ2VyIH0gZnJvbSBcIi4vZG9tXCI7XG5cblxuY2xhc3MgVGFza01hbmFnZXIge1xuICAgIGNyZWF0ZVRhc2sodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVkYXRlLCBwcmlvcml0eSkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdGl0bGUsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbixcbiAgICAgICAgICAgIGR1ZWRhdGUsXG4gICAgICAgICAgICBwcmlvcml0eSxcbiAgICAgICAgICAgIGNvbXBsZXRlOiBmYWxzZSxcbiAgICAgICAgICAgIGlkOiBEYXRlLm5vdygpLnRvU3RyaW5nKClcbiAgICAgICAgfTtcbiAgICB9XG4gICAgY29tcGxldGVUYXNrIChlKSB7XG5cbiAgICAgICAgaWYgKGUudGFyZ2V0LmNsb3Nlc3QoJ2xpJykpe1xuICAgICAgICAgICAgY29uc3QgdGFza0lkID0gZS50YXJnZXQuY2xvc2VzdCgnbGknKS5kYXRhc2V0LnRhc2tJZDtcbiAgICAgICAgICAgIGNvbnN0IHNlbGVjdGVkUHJvamVjdCA9IHByb2plY3RNYW5hZ2VyLnNlbGVjdGVkUHJvamVjdDtcbiAgICAgICAgICAgIGNvbnN0IHRhc2sgPSBzZWxlY3RlZFByb2plY3QudGFza3MuZmluZCh0YXNrID0+IHRhc2suaWQgPT0gdGFza0lkKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYgKHRhc2spIHtcbiAgICAgICAgICAgICAgICAvL3RvZ2dsZSB0YXNrIGNvbXBsZXRlIHN0YXR1c1xuICAgICAgICAgICAgICAgIHRhc2suY29tcGxldGUgPSAhdGFzay5jb21wbGV0ZTsgXG4gICAgICAgICAgICAgICAgcHJvamVjdE1hbmFnZXIuc2F2ZVRvTG9jYWxTdG9yYWdlKCk7XG4gICAgICAgICAgICAgICAgZG9tTWFuYWdlci5yZW5kZXJQcm9qZWN0VGFza3Moc2VsZWN0ZWRQcm9qZWN0KTsgXG4gICAgICAgICAgICB9XG4gICAgICAgfSAgICBcbiAgICB9XG4gICAgZGVsZXRlVGFzayh0YXNrSWQpe1xuICAgICAgICBjb25zdCBzZWxlY3RlZFByb2plY3QgPSBwcm9qZWN0TWFuYWdlci5zZWxlY3RlZFByb2plY3RcbiAgICAgICAgc2VsZWN0ZWRQcm9qZWN0LnRhc2tzID0gc2VsZWN0ZWRQcm9qZWN0LnRhc2tzLmZpbHRlcih0YXNrID0+IHRhc2suaWQgIT09IHRhc2tJZCk7XG4gICAgICAgIHByb2plY3RNYW5hZ2VyLnNhdmVUb0xvY2FsU3RvcmFnZSgpO1xuICAgICAgICBkb21NYW5hZ2VyLnJlbmRlclByb2plY3RUYXNrcyhzZWxlY3RlZFByb2plY3QpO1xuICAgIH1cbiAgICBlZGl0VGFzayAodGFza0lkKXtcbiAgICAgICAgY29uc3QgdGFzayA9IHRoaXMuZmluZFRhc2sodGFza0lkKVxuICAgICAgICBpZiAoIXRhc2spIHJldHVybjtcblxuICAgICAgICAvLyBQb3B1bGF0ZSB0aGUgZm9ybSB3aXRoIHRoZSBleGlzaXRuZyB0YXNrIHZhbHVlc1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGl0bGUnKS52YWx1ZSA9IHRhc2sudGl0bGU7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkdWVkYXRlJykudmFsdWUgPSB0YXNrLmR1ZURhdGU7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkZXNjcmlwdGlvbicpLnZhbHVlID0gdGFzay5kZXNjcmlwdGlvbjtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ByaW9yaXR5JykudmFsdWUgPSB0YXNrLnByaW9yaXR5O1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFza0lkJykudmFsdWUgPSB0YXNrLmlkO1xuXG4gICAgICAgIG1vZGFsLnNob3dNb2RhbCgpO1xuICAgICAgICBcbiAgICB9XG4gICAgZmluZFRhc2sodGFza0lkKXtcbiAgICAgICAgcmV0dXJuIHByb2plY3RNYW5hZ2VyLnNlbGVjdGVkUHJvamVjdC50YXNrcy5maW5kKHRhc2sgPT4gdGFzay5pZCA9PSB0YXNrSWQpO1xuICAgIH1cbn1cblxuY29uc3QgdGFza01hbmFnZXIgPSBuZXcgVGFza01hbmFnZXIoKTtcbmV4cG9ydCBkZWZhdWx0IHRhc2tNYW5hZ2VyOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9pbmRleC5jc3MnO1xuaW1wb3J0IHByb2plY3RNYW5hZ2VyIGZyb20gJy4vcHJvamVjdC1tYW5hZ2VyJztcbmltcG9ydCB7IGRvbU1hbmFnZXIgfSBmcm9tICcuL2RvbSc7XG5pbXBvcnQgZm9ybUhhbmRsZXIgZnJvbSAnLi9mb3Jtcyc7XG5cbi8vcmVuZGVyIHByb2plY3RzIGFuZCB0aGVpciB0YXNrc1xuZG9tTWFuYWdlci5yZW5kZXJQcm9qZWN0cygpO1xuZG9tTWFuYWdlci5yZW5kZXJQcm9qZWN0VGFza3MocHJvamVjdE1hbmFnZXIuc2VsZWN0ZWRQcm9qZWN0KTtcblxuXG5cblxuXG5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==