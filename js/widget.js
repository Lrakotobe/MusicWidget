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
		var player =  AV.Player.fromFile ( 'test.mp3' );
		var volume= player.volume;
	console.log(volume)
		var isplayed= player.playing;
		console.log(isplayed);
	}

	p

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


    	this.random = HH.create("b");
    	SS.style(this.random, {
    		"position":"absolute",
			"top":"38px",
			"left":"16px",
    		"width":"25px",
			"height":"25px",
			"background":"#D4E0CE",
			"border-radius":"50%",
			
		});
    	this.display.appendChild(this.random);

    	this.previous = HH.create("c");
    	SS.style(this.previous, {
    		"position":"absolute",
			"top":"30px",
			"left":"59px",
    		"width":"40px",
			"height":"40px",
			"background":"#414B49",
			"border-radius":"50%",
		});
    	this.display.appendChild(this.previous);

    	this.play = HH.create("d");
    	//play.textContent = Play;
    	SS.style(this.play, {
    		"color":"#FFFFFF",
    		"position":"absolute",
			"top":"26px",
			"right":"125px",
    		"width":"50px",
			"height":"50px",
			"background":"#414B49",
			"border-radius":"50%",
			"text":"play",
		});
    	this.display.appendChild(this.play);

    	this.next = HH.create("e");
    	SS.style(this.next, {
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
    	this.display.appendChild(this.next);

		this.repeat = HH.create("f");
    	SS.style(this.repeat, {
    		"position":"absolute",
			"top":"38px",
			"right":"16px",
    		"width":"25px",
			"height":"25px",
			"background":"#D4E0CE",
			"border-radius":"50%",
		});
    	this.display.appendChild(this.repeat);

    	this.picture = HH.create("g");
    	SS.style(this.picture, {
    	  "position":"absolute",
		  "top":"85px",
		  "left":"6px",
    	  "width": "54px",
    	  "height": "54px",
    	  "backgroundColor": "#66ACAE",
    	});
    	this.stage.appendChild(this.picture);

    	this.infos = HH.create("i");
    	SS.style(this.infos, {
    	  "position":"absolute",
		  "top":"85px",
		  "left":"65px",
    	  "width": "230px",
    	  "height": "25px",
    	  "backgroundColor": "#66ACAE",
    	});
    	this.stage.appendChild(this.infos);

    	this.barre = HH.create("i");
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

    	this.barreLoad = HH.create("j");
    	SS.style(this.barreLoad, {
    	  "float": "left",
    	  "width": "200px",
    	  "height": "6px",
    	  "backgroundColor": "#D4E0CE",
    	  "border-radius":"12px",
    	});
    	this.barre.appendChild(this.barreLoad);

    	this.barreMusic = HH.create("k");
    	SS.style(this.barreMusic, {
    	  "float": "left",
    	  "width": "150px",
    	  "height": "6px",
    	  "backgroundColor": "#414B49",
    	  "border-radius":"12px",
    	});
    	this.barreLoad.appendChild(this.barreMusic);

    	this.barreVolume = HH.create("k");
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

    	this.volume = HH.create("k");
    	SS.style(this.volume, {
    	  "float": "left",
    	  "width": "80px",
    	  "height": "4px",
    	  "backgroundColor": "#414B49",
    	  "border-radius":"12px",
    	});
    	this.barreVolume.appendChild(this.volume);



					
	}
	
	update(title, link) {
	}
	
}

class MusicController extends WidgetController {
	
	constructor() {
		super();
	}
	
	setUp() {
		super.setUp();
		
	}
	
	
}