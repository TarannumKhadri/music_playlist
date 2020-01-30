class Music{
    constructor(title,minutes){
    this.title =title;
    this.minutes = +minutes;
}}
class MusicPlayer{
    
    musicList = []
    playList = []

    selectMusic(){
        for(var j = 0 ; j < 10 ; j++){
            var randomMin = Math.floor(Math.random()*100);
            this.playList.push(this.musicList[randomMin]);
        }
        console.log(this.playList);    
    }
    playMusic(){
       
    }

    addMusic(musicList){
        this.musicList= musicList;
    }
}
var myMusicPlayer =new MusicPlayer()

var myArray = [];
for(var i = 0 ; i < 100 ; i++)
{
    var randomTitle = " music " + i ;
    var randomMinutes = Math.ceil(Math.random() * 10) ;
    var music = new Music( randomTitle , randomMinutes );
    myArray.push(music);
}
myMusicPlayer.addMusic(myArray);
console.log(myMusicPlayer.musicList);
myMusicPlayer.selectMusic(myArray);