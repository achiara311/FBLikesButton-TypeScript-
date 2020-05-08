"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var FBLikesComponent = /** @class */ (function () {
    function FBLikesComponent(_likesCount, _isSelected) {
        this._likesCount = _likesCount;
        this._isSelected = _isSelected;
    }
    FBLikesComponent.prototype.onClick = function () {
        if (this._isSelected) {
            this._likesCount--;
            this._isSelected = false;
        }
        else {
            this._likesCount++;
            this._isSelected = true;
        }
        //Alternate
        //this.likesCount += (this.isSelected) ? -1: +1;
        //if true, we add -1; if not true, we add 1
        //basically, if "like" is already selected, we are unselecting it (-1)
        //if it's not selected, we select "like" button and add 1
        //this.isSelected = !this.isSelected; same thing
        //if you take out .isSelected = false/true from both
    };
    Object.defineProperty(FBLikesComponent.prototype, "likesCount", {
        get: function () {
            return this._likesCount;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FBLikesComponent.prototype, "isSelected", {
        //properties will keep component in valid state
        get: function () {
            return this._isSelected;
        },
        enumerable: true,
        configurable: true
    });
    return FBLikesComponent;
}());
exports.FBLikesComponent = FBLikesComponent;
