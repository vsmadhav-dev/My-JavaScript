const playlists = [
  [
    {
      trackId: "trk101",
      artist: "Velvet Comet",
      title: "Crimson Afterglow",
      votes: 5,
      bpm: 122
    },
    {
      trackId: "trk102",
      artist: "Neon Harbor",
      title: "Static Horizon",
      votes: 2,
      bpm: 108
    },
    {
      trackId: "trk103",
      artist: "Lunar Arcade",
      title: "Midnight Frequency",
      votes: 4,
      bpm: 128
    }
  ],
  [
    {
      trackId: "trk201",
      artist: "Solar Echo",
      title: "Glass Skyline",
      votes: 3,
      bpm: 115
    },
    {
      trackId: "trk202",
      artist: "Velvet Comet",
      title: "Satellite Hearts",
      votes: 6,
      bpm: 124
    }
  ]
];
function flattenPlaylists(playlist){
  let arr = [];
  if(!Array.isArray(playlist)){
    return arr;
  }
  else{
    for(let i =0; i < playlist.length; i++){
      
    for(let j = 0; j < playlist[i].length; j++){
      let currentTrack = playlist[i][j];
      let final = {
        ...currentTrack ,
        source: [i , j]
      };
          arr.push(final);
    }

  }}
  return arr;
}
function scoreTracks(array){
  let finalarr = [];
  if (!Array.isArray(array)) {
  return [];
}else{
  let arr;
  if (Array.isArray(array[0])) {
    
    arr = flattenPlaylists(array);
  } else {
    
    arr = array;
  }
  
 
  for(let i = 0; i < arr.length; i++ ){
    let a = arr[i];
    let bpm = arr[i].bpm;
    let votes = arr[i].votes;
    const s = votes * 10 - Math.abs(bpm - 120);
 let final = {
  ...arr[i] , 
  score: s
 };
 finalarr.push(final)
  }
return finalarr;
  }}

console.log( flattenPlaylists(playlists));
console.log(scoreTracks(playlists));