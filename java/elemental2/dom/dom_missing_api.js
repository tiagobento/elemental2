/*
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @fileoverview Definitions for all standard api that are defined in specific
 * browsers extern files. We must eventually move these definition in one of
 * w3c_xyz.js files.
 *
 * @externs
 */


// Span element DOM interface
// This type is defined in //javascript/externs/gecko_dom.js
/**
 * @constructor
 * @extends {HTMLElement}
 */
function HTMLSpanElement() {}

// API definition for Location type.
// This type is defined in //javascript/externs/ie_dom.js and the standardized
// part of its definition should be moved to //javascript/externs/w3c_dom2.js
/**
 * @interface
 * @see https://www.w3.org/TR/html5/browsers.html#location
 */
function Location() {}

/**
 * Navigates to the given page.
 * @param {string} url
 * @return {undefined}
 * @see https://www.w3.org/TR/html5/browsers.html#dom-location-assign
 */
Location.prototype.assign = function(url) {};

/**
 * Reloads the current page.
 * @param {boolean=} opt_forceReload If true, reloads the page from
 *     the server. Defaults to false.
 * @return {undefined}
 * @see https://www.w3.org/TR/html5/browsers.html#dom-location-reload
 */
Location.prototype.reload = function(opt_forceReload) {};

/**
 * Removes the current page from the session history and navigates to the given
 * page.
 * @param {string} url
 * @return {undefined}
 * @see https://www.w3.org/TR/html5/browsers.html#dom-location-replace
 */
Location.prototype.replace = function(url) {};
// End of API definition for Location type.


// API definition for Selection type.
// This type is defined in //javascript/externs/gecko_dom.js
// but most of the method are supported by other browsers
// should be moved to a new file //javascript/externs/w3c-selection.js
/**
 * @constructor
 * @see http://w3c.github.io/selection-api/#selection-interface
 */
function Selection() {}

/**
 * @type {Node}
 * @see http://w3c.github.io/selection-api/#dom-selection-anchornode
 */
Selection.prototype.anchorNode;

/**
 * @type {number}
 * @see http://w3c.github.io/selection-api/#dom-selection-anchoroffset
 */
Selection.prototype.anchorOffset;

/**
 * @type {Node}
 * @see http://w3c.github.io/selection-api/#dom-selection-focusnode
 */
Selection.prototype.focusNode;

/**
 * @type {number}
 * @see http://w3c.github.io/selection-api/#dom-selection-focusoffset
 */
Selection.prototype.focusOffset;

/**
 * @type {boolean}
 * @see http://w3c.github.io/selection-api/#dom-selection-iscollapsed
 */
Selection.prototype.isCollapsed;

/**
 * @type {number}
 * @see http://w3c.github.io/selection-api/#dom-selection-rangecount
 */
Selection.prototype.rangeCount;

/**
 * @type {string}
 * @see http://w3c.github.io/selection-api/#dom-selection-type
 */
Selection.prototype.type;

/**
 * @param {Range} range
 * @return {undefined}
 * @see http://w3c.github.io/selection-api/#dom-selection-addrange
 */
Selection.prototype.addRange = function(range) {};

/**
 * @param {number} index
 * @return {Range}
 * @see http://w3c.github.io/selection-api/#dom-selection-getrangeat
 * @nosideeffects
 */
Selection.prototype.getRangeAt = function(index) {};

/**
 * @param {Node} node
 * @param {number=} index
 * @return {undefined}
 * @see http://w3c.github.io/selection-api/#dom-selection-collapse
 */
Selection.prototype.collapse = function(node, index) {};

/**
 * @return {undefined}
 * @see http://w3c.github.io/selection-api/#dom-selection-collapsetoend
 */
Selection.prototype.collapseToEnd = function() {};

/**
 * @return {undefined}
 * @see http://w3c.github.io/selection-api/#dom-selection-collapsetostart
 */
Selection.prototype.collapseToStart = function() {};

/**
 * @param {Node} node
 * @param {boolean=} partlyContained
 * @return {boolean}
 * @see http://w3c.github.io/selection-api/#dom-selection-containsnode
 * @nosideeffects
 */
Selection.prototype.containsNode = function(node, partlyContained) {};

/**
 * @see http://w3c.github.io/selection-api/#dom-selection-deletefromdocument
 * @return {undefined}
 */
Selection.prototype.deleteFromDocument = function() {};

/**
 * @param {Node} node
 * @param {number=} offset
 * @return {undefined}
 * @see http://w3c.github.io/selection-api/#dom-selection-extend
 */
Selection.prototype.extend = function(node, offset) {};

/**
 * @return {undefined}
 * @see http://w3c.github.io/selection-api/#dom-selection-empty
 */
Selection.prototype.empty = function() {};

/**
 * @return {undefined}
 * @see http://w3c.github.io/selection-api/#dom-selection-removeallranges
 */
Selection.prototype.removeAllRanges = function() {};

/**
 * @param {Range} range
 * @return {undefined}
 * @see http://w3c.github.io/selection-api/#dom-selection-removerange
 */
Selection.prototype.removeRange = function(range) {};

/**
 * @param {Node} node
 * @return {undefined}
 * @see http://w3c.github.io/selection-api/#dom-selection-selectallchildren
 */
Selection.prototype.selectAllChildren = function(node) {};

/**
 * @param {Node} anchorNode
 * @param {number} anchorOffset
 * @param {Node} focusNode
 * @param {number} focusOffset
 * @return {undefined}
 * @see http://w3c.github.io/selection-api/#dom-selection-setbaseandextent
 */
Selection.prototype.setBaseAndExtent = function(
    anchorNode, anchorOffset, focusNode, focusOffset) {};

/**
 * @param {Node} node
 * @param {number=} offset
 * @return {undefined}
 * @see http://w3c.github.io/selection-api/#dom-selection-setPosition
 */
Selection.prototype.setPosition = function(node, offset) {};
// End of API definition for Selection type.

// Access to the BatterystatusManager Object
// This is defined in //javascript/externs/gecko_dom.js
// should be moved to //javascript/externs/w3c_batterystatus.js
/**
 * @return {!Promise<!BatteryManager>}
 * @see http://www.w3.org/TR/battery-status/
 */
Navigator.prototype.getBattery = function() {};

// Console API.
// Defined in //javascript/externs/webkit_dom.js, the console api is now
// supported by all major browsers.
/**
 * @constructor
 * @see https://console.spec.whatwg.org/
 */
function Console() {}

/**
 * If condition is false, perform Logger("error", data).
 * @param {*} condition
 * @param {...*} var_args
 * @return {undefined}
 */
Console.prototype.assert = function(condition, var_args) {};

/**
 * @param {...*} var_args
 * @return {undefined}
 */
Console.prototype.error = function(var_args) {};

/**
 * @param {...*} var_args
 * @return {undefined}
 */
Console.prototype.info = function(var_args) {};

/**
 * @param {...*} var_args
 * @return {undefined}
 */
Console.prototype.log = function(var_args) {};

/**
 * @param {...*} var_args
 * @return {undefined}
 */
Console.prototype.warn = function(var_args) {};

/**
 * @param {...*} var_args
 * @return {undefined}
 */
Console.prototype.debug = function(var_args) {};

/**
 * @param {!Object} data
 * @param {*=} opt_columns
 * @return {undefined}
 */
Console.prototype.table = function(data, opt_columns) {};

/**
 * @param {...*} var_args
 * @return {undefined}
 */
Console.prototype.trace = function(var_args) {};

/**
 * @param {string=} label
 * @return {undefined}
 */
Console.prototype.count = function(label) {};

/**
 * @param {string} name
 * @return {undefined}
 */
Console.prototype.time = function(name) {};

/**
 * @param {string} name
 * @return {undefined}
 */
Console.prototype.timeEnd = function(name) {};

/**
 * @param {...*} var_args
 * @return {undefined}
 */
Console.prototype.group = function(var_args) {};

/**
 * @param {...*} var_args
 * @return {undefined}
 */
Console.prototype.groupCollapsed = function(var_args) {};

/**
 * @return {undefined}
 */
Console.prototype.groupEnd = function() {};

/**
 * @return {undefined}
 */
Console.prototype.clear = function() {};


/** @type {!Console} */
Window.prototype.console;

/**
 * @type {!Console}
 * @suppress {duplicate}
 */
var console;
// end of console API
