//var AV = require('av');
//require('mp3');

class MusicWidget extends Widget {
	
	constructor(id, app) {
		super(id, MusicModel, MusicView, MusicController, app);
	}
	
	setUp() {
		super.setUp();
		this.header = true;
		this.footer = false;
		this.sizeX = 2;
		this.sizeY = 1;
		this.radius = 15;
	}
	
	async ready() {
		super.ready();
		//this.mvc.controller.load();
	}
	
}



class MusicModel extends WidgetModel {
	

	constructor() {
		super();
	}
	
	setUp() {
		super.setUp();
	}



}

class MusicView extends WidgetView {
	
	constructor() {
		super();
	}
	
	setUp() {
		super.setUp();
		
	}

	draw() {
		super.draw();
		this.display = HH.create("a");
    	SS.style(this.display, {
    	  "float": "left",
    	  "width": "100%",
    	  "height": "54px",
    	  "backgroundColor": "#66ACAE",
    	});
    	this.stage.appendChild(this.display);


    	this.random = HH.create("button");
    	SS.style(this.random, {
    		"color":"#FFFFFF",
    		"position":"absolute",
			"top":"38px",
			"left":"16px",
    		"width":"25px",
			"height":"25px",
			"background":"#D4E0CE",
			"border-radius":"50%",
			"textAlign": "center",
			"cursor": "pointer"
		});
		Events.on(this.random, "click", (event) => this.mvc.controller.randomClick());
    	this.display.appendChild(this.random);

    	this.previous = HH.create("button");
    	this.previous.innerHTML = "\n<<";
    	SS.style(this.previous, {
    		"color":"#FFFFFF",
    		"position":"absolute",
			"top":"30px",
			"left":"59px",
    		"width":"40px",
			"height":"40px",
			"background":"#414B49",
			"border-radius":"50%",
			"textAlign": "center",
			"cursor": "pointer"
		});
		Events.on(this.previous, "click", (event) => this.mvc.controller.previousClick());
    	this.display.appendChild(this.previous);

    	this.stop = HH.create("button");
    	this.stop.innerHTML = "\nstop";
    	SS.style(this.stop, {
    			"color":"#FFFFFF",
    			"position":"absolute",
			"top":"26px",
			"right":"125px",
    			"width":"50px",
			"height":"50px",
			"background":"#414B49",
			"border-radius":"50%",
			"textAlign": "center",
			 "cursor": "pointer",
		});
		Events.on(this.stop, "click", (event) => this.mvc.controller.stopClick());
    	this.display.appendChild(this.stop);

    	this.next = HH.create("button");
	this.next.innerHTML = "\n>>"
    	SS.style(this.next, {
    		"color":"#FFFFFF",
    		"position":"absolute",
			"top":"30px",
			"right":"59px",
    		"width":"40px",
			"height":"40px",
			"background":"#414B49",
			"border-radius":"50%",
			"textAlign": "center",
      		"cursor": "pointer",
		});
		Events.on(this.next, "click", (event) => this.mvc.controller.nextClick());
    	this.display.appendChild(this.next);

		this.repeat = HH.create("button");
    	SS.style(this.repeat, {
    		"position":"absolute",
		"top":"38px",
		"right":"16px",
    		"width":"25px",
		"height":"25px",
		"background":"#D4E0CE",		
		"border-radius":"50%",
		"cursor": "pointer",
		"textAlign": "center",
		});
		Events.on(this.repeat, "click", (event) => this.mvc.controller.repeatClick());
    	this.display.appendChild(this.repeat);

    	this.play = HH.create("button");
    	this.play.innerHTML = "play\npause";
    	SS.style(this.play, {
    		"color":"#FFFFFF",
    	  "position":"absolute",
		  "top":"85px",
		  "left":"6px",
    	  "width": "54px",
    	  "height": "54px",
    	  "backgroundColor": "#66ACAE",
    	  "border-radius":"50%",
    	  "textAlign": "center",
		  "cursor": "pointer",
    	});
    	Events.on(this.play, "click", (event) => this.mvc.controller.playClick());
    	this.stage.appendChild(this.play);

    	this.infos = HH.create("button");
    	this.infos.innerHTML = "Unknow title";
    	SS.style(this.infos, {
    	  "color":"#FFFFFF",
    	  "textAlign": "center",
    	  "position":"absolute",
		  "top":"85px",
		  "left":"65px",
    	  "width": "230px",
    	  "height": "25px",
    	  "backgroundColor": "#66ACAE",
    	});
    	this.stage.appendChild(this.infos);

    	this.barre = HH.create("div");
    	SS.style(this.barre, {
    	  "position":"absolute",
		  "top":"115px",
		  "left":"65px",
    	  "width": "230px",
    	  "height": "6px",
    	  "backgroundColor": "#66ACAE",
    	  "border-radius":"12px",
    	});
    	this.stage.appendChild(this.barre);

    	this.barreLoad = HH.create("div");
    	SS.style(this.barreLoad, {
    	  "float": "left",
    	  "width": "200px",
    	  "height": "6px",
    	  "backgroundColor": "#D4E0CE",
    	  "border-radius":"12px",
    	});
    	this.barre.appendChild(this.barreLoad);

    	this.barreMusic = HH.create("div");
    	SS.style(this.barreMusic, {
    	  "float": "left",
    	  "width": "10px",
    	  "height": "100%",
    	  "backgroundColor": "#414B49",
    	  "border-radius":"12px",
    	  "transition-duration":"1s"
    	});
    	this.barreLoad.appendChild(this.barreMusic);

    	this.barreVolume = HH.create("div");
    	SS.style(this.barreVolume, {
    	  "position":"absolute",
		  "top":"128px",
		  "left":"67px",
    	  "width": "100px",
    	  "height": "4px",
    	  "backgroundColor": "#D4E0CE",
    	  "border-radius":"12px",
    	});
    	this.stage.appendChild(this.barreVolume);

    	this.volume = HH.create("div");
    	SS.style(this.volume, {
    	  "float": "left",
    	  "width": "relative",
    	  "height": "4px",
    	  "backgroundColor": "#414B49",
    	  "border-radius":"12px",
    	});
    	Events.on(this.volume, "click", (event) => this.mvc.controller.volumeClick());
    	this.barreVolume.appendChild(this.volume);



					
	}
	
	update(title, link) {
	}
	
}

var player =  AV.Player.fromFile ( 'test.mp3' );
var pourcentage = 0;
var song= document.querySelector('audio');
class MusicController extends WidgetController {
	
	constructor() {
		super();

	}
	

    playClick(event){
		this.play;
		this._playing = true;
    }

    stopClick(event){
		this.stop;
    }



	setUp() {
		super.setUp();
		
	}
	
	
}


