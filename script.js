// script here

const button = document.getElementById('button');
const audioElement = document.getElementById('audio');

// toggling buttons
function disableEnableButton(){
    button.disabled = !button.disabled;
}

// speech code
function test(){
    VoiceRSS.speech({
        key: '3958b8e6243f4a538ed943f46e1cbbdc',
        src: realJoke,
        hl: 'en-us',
        v: 'Linda',
        r: 0, 
        c: 'mp3',
        f: '44khz_16bit_stereo',
        ssml: false
    });
}

// getting jokes via jokeapi and managing jokes according to setup and delivery
async function getJokes(){
    try{
        realJoke = '';
        apiURL = 'https://v2.jokeapi.dev/joke/Programming,Dark';
        const response = await fetch(apiURL);
        const data = await response.json();
        if (data.setup) {
            realJoke = `${data.setup}.......${data.delivery}`;
        } else{
            realJoke = data.joke;
        }      
        test();
        audio.hidden=true;
        disableEnableButton();
    } catch(error) {
        console.log('fck error')
    }  
}


// event listerners
button.addEventListener('click', getJokes);
audioElement.addEventListener('ended', disableEnableButton)

// run function to get jokes
getJokes();