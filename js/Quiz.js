class Quiz {
  constructor(){
    this.heading= createElement('h1')

  }

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question()
      question.display();
    }
  }

  play(){
    //write code here to hide question elements
  //this.input1.hide();
   //this.input2.hide();

    //write code to change the background color here
    background("blue")

    //write code to show a heading for showing the result of Quiz
    
    //call getContestantInfo( ) here
    Contestant.getPlayerInfo();
    textSize(16);
fill("orange")
text("WINNER OF THE GAME",250,200)
    //write condition to check if contestantInfor is not undefined
    if (allContestants!==undefined){
      fill("Blue");
      textSize(20);
      text("*NOTE CONTESTANT WHO ANSWERED RIGHT ARE IN GREEN COLOUR ",130,230)
    var y =230

    //write code to add a note here


    //write code to highlight contest who answered correctly
    for (var plr in allContestants){
      var correctAns="2"
      if (correctAns===allContestants[plr].answer){
        fill("green")
        console.log("this")
        
      }
      else {
        fill("red ")
      }
      y=y+30
      text(allContestants[plr].name+": "+allContestants[plr].answer,250,y)
    } 
    
  }

}
}
