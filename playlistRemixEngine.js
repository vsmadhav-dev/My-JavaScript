const playlists = [
  [
    { trackId: "trk101", artist: "Velvet Comet", title: "Crimson Afterglow", votes: 5, bpm: 122 },
    { trackId: "trk102", artist: "Neon Harbor", title: "Static Horizon", votes: 2, bpm: 108 },
    { trackId: "trk103", artist: "Lunar Arcade", title: "Midnight Frequency", votes: 4, bpm: 128 }
  ],
  [
    { trackId: "trk201", artist: "Solar Echo", title: "Glass Skyline", votes: 3, bpm: 115 },
    { trackId: "trk202", artist: "Velvet Comet", title: "Satellite Hearts", votes: 6, bpm: 124 }
  ]
];

function flattenPlaylists(playlist){
  let arr = [];
  if(!Array.isArray(playlist)){
    return arr;
  }
  else {
    for(let i = 0; i < playlist.length; i++){
      for(let j = 0; j < playlist[i].length; j++){
        let currentTrack = playlist[i][j];
        let final = {
          ...currentTrack,
          source: [i, j]
        };
        arr.push(final);
      }
    }
  }
  return arr;
}

function scoreTracks(array){
  let finalarr = [];
  if (!Array.isArray(array)) {
    return [];
  } else {
    let arr = Array.isArray(array[0]) ? flattenPlaylists(array) : array;
    
    for(let i = 0; i < arr.length; i++ ){
      let bpm = arr[i].bpm;
      let votes = arr[i].votes;
      const s = votes * 10 - Math.abs(bpm - 120);
      let final = { ...arr[i], score: s };
      finalarr.push(final);
    }
    return finalarr;
  }
}

function dedupeTracks(arr){
  let finalarr = [];
  if (!Array.isArray(arr)) {
    return [];
  }
  else {

    for(let i = 0; i < arr.length; i++){
      if(!Object.hasOwn(arr[i], 'score')){
        let bpm = arr[i].bpm || 120;
        let votes = arr[i].votes || 0;
        arr[i].score = votes * 10 - Math.abs(bpm - 120);
      }
    }

  
    for(let i = 0; i < arr.length; i++){
      let currentTrack = arr[i];
      let isDuplicate = false;

      for (let j = 0; j < finalarr.length; j++) {
        if (finalarr[j].trackId === currentTrack.trackId) {
          isDuplicate = true;
          break; 
        }
      }

      if (!isDuplicate) {
        finalarr.push(currentTrack); 
      }
    }
  }
  return finalarr;
}
function enforceArtistQuota(arr , maxPerArtist){
  let dedupe;
  let artist;
   let finalarr = [];
  if (!Array.isArray(arr)) {
    return [];
  }
  
    dedupe = dedupeTracks(arr);
 
  const artistcounts = {};
  for( const i of dedupe){
   artist = i.artist;
  if (artistcounts[artist] === undefined) {
  artistcounts[artist] = 0;
}
  
   if(artistcounts[artist] < maxPerArtist ){
 finalarr.push(i);
 artistcounts[artist]++;
   }else{
    continue;
   }
  }
  return finalarr;

  }
  function buildSchedule(arr){
    let returnarr = [];
     if (!Array.isArray(arr)) { return []; }
     for(let i = 0; i < arr.length; i++){
      returnarr.push(
        {
          slot: i + 1 ,
          trackId: arr[i].trackId

        }
      );
     }
     return returnarr;
  }
 function remixPlaylist(arr , allow){
  let flat = flattenPlaylists(arr);
  let score = scoreTracks(flat);
  let dedupe = dedupeTracks(score);
  let artistquota = enforceArtistQuota(dedupe , allow);
  let build = buildSchedule(artistquota);
  return build;
 } 
