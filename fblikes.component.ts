export class FBLikesComponent {
   
    constructor (private _likesCount: number, private _isSelected: boolean){
    }

    onClick(){
        if(this._isSelected){
            this._likesCount--;
            this._isSelected = false;
        }
        else{
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
    }

    get likesCount() {
        return this._likesCount;
    }
    //properties will keep component in valid state
    get isSelected() {
        return this._isSelected
    }
}



