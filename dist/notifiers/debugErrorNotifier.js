"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = debugErrorNotifier;
function debugErrorNotifier(err, attempt) {
  console.log("Attempt #" + attempt + " failed with error: " + err);
}