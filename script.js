// DOM Document Object Model 
const image = document.querySelector('img')
const title = document.getElementById('title')
const artist = document.getElementById('artist')
const music = document.querySelector('audio')

const currentTimeEl = document.getElementById('current-time')
const durationEl = document.getElementById('duration')
const progress = document.getElementById('progress')
const progressContainer = document.getElementById('progress-container')

const prevBtn = document.getElementById('prev')
const playBtn = document.getElementById('play')
const nextBtn = document.getElementById('next')

// Musiqiler 

const songs = [

    {
        name: 'ibolipa-1',
        displayName: 'Dom-dom kurşunu',
        artist : 'Ibolipa'
    },

    {
        name: 'israil-1',
        displayName: 'Ay Cemo Cəmilə',
        artist : 'Israil Məmmədov'
    }, 

    {
        name: 'maral-1',
        displayName: 'Ale Alehandro',
        artist : 'Maral Tahirqızı'
    },

    {
        name: 'uzeyir-1',
        displayName: 'Mənə gəl',
        artist :'Üzeyir Mehdizadə'
    }
] 

// Eger mahni ifa olunmursa
let isPlaying = false;

//Play

function playSong() {
    isPlaying = true;
    playBtn.classList.replace('fa-play','fa-pause')
    playBtn.setAttribute('title', 'Pause')
    music.play()
}

function pauseSong() {
    isPlaying = false;
    playBtn.classList.replace('fa-pause','fa-play');
    playBtn.setAttribute('title', 'Play')
    music.pause()
}

// Play ya da Pause ucun Event listener // ternary operator
playBtn.addEventListener('click', () =>(isPlaying ? pauseSong() : playSong() ))

function loadSong(song) {
    title.textContent = song.displayName
    artist.textContent = song.artist
    // Proqramci mentiqi
    music.src = `music/${song.name}.mp3`
    image.src = `images/${song.name}.jpg`

}
// sehife yuklenedne birinci mahni gelsin
let songIndex = 0

// previous - evvelki mahni

function prevSong() {
// decrement
songIndex--
if (songIndex < 0) {
    songIndex = songs.length -1; // 3
}


loadSong(songs[songIndex]);
playSong()
}

function nextSong() {
    //increment real heyatda tetbiqi
    songIndex++ 
    if(songIndex > songs.length-1) {
        songIndex = 0
    }

    loadSong(songs[songIndex])
    playSong()
}


// ilk olaraq funksiyamiz ishe dushur proyekt acilanda
loadSong(songs[songIndex])












// event listener

prevBtn.addEventListener('click', prevSong)
nextBtn.addEventListener('click', nextSong)