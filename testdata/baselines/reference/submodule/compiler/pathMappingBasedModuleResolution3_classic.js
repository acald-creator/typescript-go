//// [tests/cases/compiler/pathMappingBasedModuleResolution3_classic.ts] ////

//// [file1.ts]
import {x} from "folder2/file2"
declare function use(a: any): void;
use(x.toExponential());

//// [file2.ts]
import {x as a} from "./file3"  // found with baseurl
import {y as b} from "file4"    // found with fallback
export var x = a + b;

//// [file3.ts]
export var x = 1;

//// [file4.ts]
export var y = 100;

//// [file1.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const file2_1 = require("folder2/file2");
use(file2_1.x.toExponential());
//// [file3.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.x = void 0;
exports.x = 1;
//// [file2.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.x = void 0;
const file3_1 = require("./file3"); // found with baseurl
const file4_1 = require("file4"); // found with fallback
exports.x = file3_1.x + file4_1.y;
//// [file4.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.y = void 0;
exports.y = 100;
