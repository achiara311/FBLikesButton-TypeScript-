import { FBLikesComponent } from "./fblikes.component";

let component = new FBLikesComponent(10,true);

component.onClick();
console.log(`Likes Count: ${component.likesCount}, Is Selected: ${component.isSelected}`); 
//need back ticks `` to activate dollar sign