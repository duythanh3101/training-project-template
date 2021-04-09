/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/entities/enums/FileEnum.ts":
/*!****************************************!*\
  !*** ./src/entities/enums/FileEnum.ts ***!
  \****************************************/
/*! exports provided: FileEnum */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileEnum", function() { return FileEnum; });
var FileEnum;

(function (FileEnum) {
  FileEnum["None"] = "NONE";
  FileEnum["File"] = "FILE";
  FileEnum["Folder"] = "FOLDER";
})(FileEnum || (FileEnum = {}));

/***/ }),

/***/ "./src/scripts/components/_grid.ts":
/*!*****************************************!*\
  !*** ./src/scripts/components/_grid.ts ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const renderGrid = () => {// TODO: implement code to Render grid
};

/* harmony default export */ __webpack_exports__["default"] = (renderGrid);

/***/ }),

/***/ "./src/scripts/components/tableHandler.ts":
/*!************************************************!*\
  !*** ./src/scripts/components/tableHandler.ts ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _entities_enums_FileEnum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../entities/enums/FileEnum */ "./src/entities/enums/FileEnum.ts");


const tableHandler = (list, container) => {
  console.log('data table', list);

  if (list && container) {
    let html = '';
    list.map(x => {
      html += `<tr data-id='${x.id}' data-type='${x.type}' data-row=''>
            <td data-label="File Type">
                ${x.type == _entities_enums_FileEnum__WEBPACK_IMPORTED_MODULE_0__["FileEnum"].File ? '<img src="https://img.icons8.com/color/50/000000/ms-excel.png" alt="excel-icon" class="excel-icon" />' : '<i class="far fa-folder"></i>'}
            </td>
            <td data-label="Name">${x.name}</td>
            <td data-label="Modified">${x.modified}</td>
            <td data-label="Modified By">${x.modifiedBy}</td>
            <td></td>
        </tr>`;
    });
    container.innerHTML = html; // Add event click after loading finish
    // -- Only add events when innerHTML overwrites are done.

    const targetRows = container.querySelectorAll('tr[data-row]');

    for (const row in targetRows) {
      targetRows[row].addEventListener('click', onRowClick, false);
    }
  }
};

const onRowClick = event => {
  console.log(event, 'aaaaaaaaaaaaaaaaaaaaaaaaa');
};

/* harmony default export */ __webpack_exports__["default"] = (tableHandler);

/***/ }),

/***/ "./src/scripts/pages/home-page.ts":
/*!****************************************!*\
  !*** ./src/scripts/pages/home-page.ts ***!
  \****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utilities_helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utilities/_helper */ "./src/scripts/utilities/_helper.ts");
/* harmony import */ var _components_grid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/_grid */ "./src/scripts/components/_grid.ts");
/* harmony import */ var _components_tableHandler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/tableHandler */ "./src/scripts/components/tableHandler.ts");
/* harmony import */ var _service_dataService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/dataService */ "./src/scripts/service/dataService.ts");
// import $ from 'jquery';




const tableHtml = document.querySelector('#table-list tbody');
Object(_utilities_helper__WEBPACK_IMPORTED_MODULE_0__["default"])(() => {
  Object(_components_grid__WEBPACK_IMPORTED_MODULE_1__["default"])();
  const dataService = new _service_dataService__WEBPACK_IMPORTED_MODULE_3__["default"]();
  dataService.getData().then(response => Object(_components_tableHandler__WEBPACK_IMPORTED_MODULE_2__["default"])(dataService.data, tableHtml)).catch(err => console.error(err));
});

/***/ }),

/***/ "./src/scripts/service/dataService.ts":
/*!********************************************!*\
  !*** ./src/scripts/service/dataService.ts ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _entities_enums_FileEnum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../entities/enums/FileEnum */ "./src/entities/enums/FileEnum.ts");

const dataFiles = [{
  id: 100,
  name: 'Hihi',
  modified: '03/03/2021',
  modifiedBy: 'Thanh Duy Pham',
  subFolders: [{
    id: 1,
    name: 'aaaa.exe',
    createDate: '09/04/2021',
    createBy: 'aaaa',
    type: 'FILE',
    modified: '09/03/2021',
    modifiedBy: 'Tran Minh Hoang'
  }, {
    id: 2,
    name: 'bbb.exe',
    createDate: '09/04/2021',
    createBy: 'bbb',
    type: 'FILE',
    modified: '09/03/2021',
    modifiedBy: 'Tran Minh Hoang'
  }, {
    subFolders: [{
      id: 3,
      name: 'cccc.exe',
      createDate: '09/04/2021',
      createBy: 'cccc',
      type: 'FILE',
      modified: '09/03/2021',
      modifiedBy: 'Tran Minh Hoang'
    }, {
      id: 4,
      name: 'dddd.exe',
      createDate: '09/04/2021',
      createBy: 'dddd',
      type: 'FILE',
      modified: '09/03/2021',
      modifiedBy: 'Tran Minh Hoang'
    }],
    type: 'FOLDER'
  }],
  type: 'FOLDER'
}, {
  id: 5,
  name: 'eeee.exe',
  createDate: '09/04/2021',
  createBy: 'eeee',
  type: 'FILE',
  modified: '09/03/2021',
  modifiedBy: 'Tran Minh Hoang'
}, {
  id: 6,
  name: 'ffff.exe',
  createDate: '09/04/2021',
  createBy: 'ffff',
  type: 'FILE',
  modified: '09/03/2021',
  modifiedBy: 'Tran Minh Hoang'
}];

class FileService {
  constructor() {
    this._data = [];

    this.getData = async () => {
      let jsonData = dataFiles;
      jsonData.forEach(obj => {
        try {
          switch (obj.type) {
            case _entities_enums_FileEnum__WEBPACK_IMPORTED_MODULE_0__["FileEnum"].File:
              this._data.push(obj);

              break;

            case _entities_enums_FileEnum__WEBPACK_IMPORTED_MODULE_0__["FileEnum"].Folder:
              this._data.push(obj);

              break;

            default:
              throw new Error(`Wrong file type ${JSON.stringify(obj)}`);
          }
        } catch (err) {
          console.error(err);
        }
      });
    };

    this.getData2 = async (jsonData, root = []) => {
      if (jsonData) {
        jsonData.forEach(obj => {
          try {
            switch (obj.type) {
              case _entities_enums_FileEnum__WEBPACK_IMPORTED_MODULE_0__["FileEnum"].File:
                root.push(obj);
                break;

              case _entities_enums_FileEnum__WEBPACK_IMPORTED_MODULE_0__["FileEnum"].Folder:
                root.push(obj);
                this.getData2(obj, root);
                break;

              default:
                throw new Error(`Wrong file type ${JSON.stringify(obj)}`);
            }
          } catch (err) {
            console.error(err);
          }
        });
      }
    };
  }

  get data() {
    return this._data;
  }

  set data(value) {
    this._data = value;
  }

}

/* harmony default export */ __webpack_exports__["default"] = (FileService);

/***/ }),

/***/ "./src/scripts/utilities/_helper.ts":
/*!******************************************!*\
  !*** ./src/scripts/utilities/_helper.ts ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const ready = fn => {
  if (document.readyState !== 'loading') {
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
};

/* harmony default export */ __webpack_exports__["default"] = (ready);

/***/ }),

/***/ "./src/styles/pages/home-page.scss":
/*!*****************************************!*\
  !*** ./src/styles/pages/home-page.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 0:
/*!********************************************************************************!*\
  !*** multi ./src/scripts/pages/home-page.ts ./src/styles/pages/home-page.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./src/scripts/pages/home-page.ts */"./src/scripts/pages/home-page.ts");
module.exports = __webpack_require__(/*! ./src/styles/pages/home-page.scss */"./src/styles/pages/home-page.scss");


/***/ })

/******/ });
//# sourceMappingURL=home-page.js.map