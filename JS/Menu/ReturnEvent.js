class ReturnEvent extends GameEvent{
    constructor(){
        super();

    }
    excute(x,y){
        
        GAME.current_scene=GAME.current_scene-1;

    }
}