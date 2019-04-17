
/**
 * This class create Instrucion Menu whcih should contain all Instructions that we will 
 * teach people. When people press these instructions long enough, it supposes to give
 * them the hint that what the instruction is and how to use them.
 *
 * @class InstructionMenu
 * @extends {GameScene}
 */
class InstructionMenu extends GameScene{
    
    /**
     *Creates an instance of InstructionMenu.
     * @memberof InstructionMenu
     */
    constructor() {
        super();
        this.init();
    }

    /**
     * This function initialized Instruction Menu. All components of instruction menu should
     * me delceared, and added to, here. 
     *
     * @memberof InstructionMenu
     */
    init(){
        console.log("Instruction Menu Initialized");
        var addInstruction = Button.getButton('Add_Ins',50,30,1,3,'Add');
        var AddHint= new HintEvent('IMHint');
        AddHint.setHintContent('Adds two registers and stores the result in a register \nadd $d, $s, $t');
        addInstruction.addLongPressEvent(AddHint);
        addInstruction.addClickEvent(AddHint);
        this.addComponent(addInstruction,-1);
        var return_button= Button.getButton('return',50,100,1,3,'return');
        return_button.addClickEvent(new ReturnEvent());
        this.addComponent(return_button,-1);
        
    }
}
