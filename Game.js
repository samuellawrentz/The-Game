$(document).ready(function(){
var score=50;
var highscore=0;
var alphabet= ("abcdefghijklmnopqrstuvwxyz").toUpperCase().split("");
var origText=$('#Welcome');
var scoreDiv=$('#score');
var missedDiv=$('#Fired');

var mainText=['Welcome!! Lets Get started', 'This game is so easy and interesting','Type the letter as it appears'];

$('#Welcome').text("A");


$('body').on('keydown', function( evt ) {
if(score>0){
var charCode = evt.which || evt.keyCode;
   var charStr = String.fromCharCode(charCode);
   
   if(origText.text()===charStr){
   alph=Math.floor(Math.random() * (26 - 0 + 1)) + 0;
   score=score+10;
origText.text(alphabet[alph]);
scoreDiv.text("Score: "+score);
   }
   else{
      score=score-10;
      scoreDiv.text("Score: "+score);
   missedDiv.show();
   missedDiv.hide(500);
   }
charcode='';
charStr='';

}
else{
score>highscore?highscore=score:'';
origText.text("Oops! I think the Game is Over :(")
$('body').off('keydown');
}
});
});




 
