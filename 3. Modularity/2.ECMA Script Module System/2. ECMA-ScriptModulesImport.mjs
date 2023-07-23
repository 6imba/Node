// 1:
import { myFirstFunc1 } from './1. ECMA-ScriptModulesExport.mjs';
myFirstFunc1()
import { myFirstFunc11 } from './1. ECMA-ScriptModulesExport.mjs';
myFirstFunc11()
import { myFirstFunc1, myFirstFunc11 } from './1. ECMA-ScriptModulesExport.mjs';
myFirstFunc1()
myFirstFunc11()



// 2
import { myFirstFunc2 } from './1. ECMA-ScriptModulesExport.mjs';
myFirstFunc2();
import { myFirstFunc22 } from './1. ECMA-ScriptModulesExport.mjs';
myFirstFunc22();
import { myFirstFunc222 as func2} from './1. ECMA-ScriptModulesExport.mjs';
func2();
import { myFirstFunc2, myFirstFunc22, myFirstFunc222 as func2 } from './1. ECMA-ScriptModulesExport.mjs';
myFirstFunc2();
myFirstFunc22();
func2();
import * as myModule from './1. ECMA-ScriptModulesExport.mjs';
myModule.myFirstFunc2();
myModule.myFirstFunc22();
myModule.myFirstFunc222();



// 3: named export need {} ==> {myFirstFunc3}
import myFirstFunc3 from './1. ECMA-ScriptModulesExport.mjs';
myFirstFunc3();
// import { myFirstFunc3 } from './1. ECMA-ScriptModulesExport.mjs';



// 4: default export doesnt need {}
import { myFirstFunc4 } from './1. ECMA-ScriptModulesExport.mjs';
myFirstFunc4();
import myFirstFunc4 from './1. ECMA-ScriptModulesExport.mjs';



// 5: multiple variable in a default export:
import myModule from './1. ECMA-ScriptModulesExport.mjs';
myModule.myFirstFunc5()
myModule.myFirstFunc55()
myModule.myFirstFunc555()

// import { myFirstFunc5, myFirstFunc55, myFirstFunc555 } from './1. ECMA-ScriptModulesExport.mjs';
// myFirstFunc5()
// myFirstFunc55()
// myFirstFunc555()

// import myModule as { myFirstFunc5, myFirstFunc55, myFirstFunc555 } from './1. ECMA-ScriptModulesExport.mjs';
// myFirstFunc5()
// myFirstFunc55()
// myFirstFunc555()
// // In ECMAScript modules, you cannot use the as keyword to assign an imported module to a variable directly. 

import myModule from './1. ECMA-ScriptModulesExport.mjs';
const { myFirstFunc5, myFirstFunc55, myFirstFunc555 } = myModule;
myFirstFunc5()
myFirstFunc55()
myFirstFunc555()