class Food{
    constructor(){
        this.foodStock = 0;
        this.lastFed;
        this.image = loadImage("Milk.png");
    }
    updateFoodStock(foodStock){
        this.foodStock = foodStock;
    }
    getFeedTime(lastFed){
        this.lastFed = lastFed;
    }
    getFoodStock(){
        return this.foodStock;
    }
    display(){
        var x = 80, y = 100;
        imageMode(CENTER);
        if(this.foodStock!=0){
            for(var i =0;i<this.foodStock;i=i+1){
                if(i%10===0){
                    x = 80;
                    y = y+50;
                }
                image(this.image,x,y,50,50);
                x=x+30;
            }
        }
    }
}
