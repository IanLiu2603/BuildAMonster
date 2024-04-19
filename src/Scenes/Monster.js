class Monster extends Phaser.Scene {
    constructor() {
        super("monsterScene");
        this.my = {sprite: {}};  // Create an object to hold sprite bindings

        //Create constants for the monster location
        this.bodyX = 300;
        this.bodyY = 350;
        
    }

    // Use preload to load art and sound assets before the scene starts running.
    preload() {
        // Assets from Kenny Assets pack "Monster Builder Pack"
        // https://kenney.nl/assets/monster-builder-pack
        this.load.setPath("./assets/");

        // Load sprite atlas
        this.load.atlasXML("monsterParts", "spritesheet_default.png", "spritesheet_default.xml");
        
        // update instruction text
        document.getElementById('description').innerHTML = '<h2>Monster.js<br>S - smile // F - show fangs<br>A - move left // D - move right</h2>'
    }

    create() {
        let my = this.my;   // create an alias to this.my for readability

        // Create the main body sprite
        //
        // this.add.sprite(x,y, "{atlas key name}", "{name of sprite within atlas}")
        //
        // look in spritesheet_default.xml for the individual sprite names
        // You can also download the asset pack and look in the PNG/default folder.
        my.sprite.body = this.add.sprite(this.bodyX, this.bodyY, "monsterParts", "body_yellowD.png");
        my.sprite.rightArm= this.add.sprite(this.bodyX+100, this.bodyY+50, "monsterParts", "arm_yellowA.png");
        my.sprite.leftArm= this.add.sprite(this.bodyX-100, this.bodyY+50, "monsterParts", "arm_yellowA.png")
        my.sprite.leftArm.flipX = true
        my.sprite.rightLeg= this.add.sprite(this.bodyX+50, this.bodyY+140, "monsterParts", "leg_yellowA.png");
        my.sprite.leftLeg= this.add.sprite(this.bodyX-50, this.bodyY+140, "monsterParts", "leg_yellowA.png");
        my.sprite.leftLeg.flipX = true
        my.sprite.eye= this.add.sprite(this.bodyX, this.bodyY-30, "monsterParts", "eye_human_green.png");
        my.sprite.leftAnt= this.add.sprite(this.bodyX-30, this.bodyY-100, "monsterParts", "detail_blue_antenna_small.png");
        my.sprite.leftAnt.flipX = true;
        my.sprite.rightAnt= this.add.sprite(this.bodyX+30, this.bodyY-100, "monsterParts", "detail_blue_antenna_small.png");
        
        my.sprite.noSmile= this.add.sprite(this.bodyX, this.bodyY+40, "monsterParts", "mouth_closed_sad.png");
        my.sprite.smile= this.add.sprite(this.bodyX, this.bodyY+40, "monsterParts", "mouthA.png");
        my.sprite.fangs= this.add.sprite(this.bodyX, this.bodyY+40, "monsterParts", "mouth_closed_fangs.png");
        my.sprite.smile.visible = false;
        my.sprite.fangs.visible = false;

        this.aKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        this.fKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.F);
        this.dKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
        this.sKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
        
    }

    update() {

        let my = this.my;    // create an alias to this.my for readability
        if (this.aKey.isDown){
            //Move Left
            my.sprite.body.x -= 1;
            my.sprite.rightArm.x -= 1;
            my.sprite.leftArm.x -= 1;
            my.sprite.rightLeg.x -= 1;
            my.sprite.leftLeg.x -= 1;
            my.sprite.eye.x -= 1;
            my.sprite.noSmile.x -= 1;
            my.sprite.smile.x -= 1;
            my.sprite.fangs.x -= 1;
            my.sprite.leftAnt.x -= 1;
            my.sprite.rightAnt.x -= 1;
        }
        if(this.dKey.isDown){
            //Move Right
            my.sprite.body.x += 1;
            my.sprite.rightArm.x += 1;
            my.sprite.leftArm.x += 1;
            my.sprite.rightLeg.x += 1;
            my.sprite.leftLeg.x += 1;
            my.sprite.eye.x += 1;
            my.sprite.noSmile.x += 1;
            my.sprite.smile.x += 1;
            my.sprite.fangs.x += 1;
            my.sprite.leftAnt.x += 1;
            my.sprite.rightAnt.x += 1;
        }

        this.fKey.on('down', (key, event)=>{
            //Show fangs
            my.sprite.fangs.visible = true;
            my.sprite.smile.visible = false;
            my.sprite.noSmile.visible = false;
            
        });
        this.sKey.on('down', (key, event)=>{
            //Smile
            my.sprite.smile.visible = true;
            my.sprite.noSmile.visible = false;
            my.sprite.fangs.visible = false;

        });
       
    }

}