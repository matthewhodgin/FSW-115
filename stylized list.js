var hikaruStats = [   
{
    "avatar": "https://images.chesscomfiles.com/uploads/v1/user/15448422.90503d66.200x200o.f323efa57fd0.jpeg",
    "player_id": 15448422,
    "@id": "https://api.chess.com/pub/player/hikaru",
    "url": "https://www.chess.com/member/Hikaru",
    "name": "Hikaru Nakamura",
    "username": "hikaru",
    "title": "GM",
    "followers": 936754,
    "country": "https://api.chess.com/pub/country/US",
    "location": "Sunrise, Florida",
    "last_online": 1648830075,
    "joined": 1389043258,
    "status": "premium",
    "is_streamer": true,
    "twitch_url": "https://twitch.tv/gmhikaru"
}
]

var hikaruList = document.getElementById("hikaru") 
    
var arrayofproperties = Object.entries(hikaruStats[0])
    for (var i = 0; i < arrayofproperties.length; i++) {

var property = arrayofproperties[i]
    hikaruList.innerHTML += "<li>" + property[0] + ": " + property[1] + "</li>" 
}


console.log (typeof hikaruStats)

// https://api.chess.com/pub/player/hikaru


