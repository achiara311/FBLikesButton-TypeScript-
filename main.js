"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fblikes_component_1 = require("./fblikes.component");
var component = new fblikes_component_1.FBLikesComponent(10, true);
component.onClick();
console.log("Likes Count: " + component.likesCount + ", Is Selected: " + component.isSelected);
//need back ticks `` to activate dollar sign
