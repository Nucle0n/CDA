async function beep(duration = 200, frequency = 440, volume = 0.5) {
    const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    const oscillator = audioCtx.createOscillator();
    const gainNode = audioCtx.createGain();

    oscillator.type = 'square'; // 'sine', 'square', 'sawtooth', 'triangle'
    oscillator.frequency.value = frequency;
    gainNode.gain.value = volume;

    oscillator.connect(gainNode);
    gainNode.connect(audioCtx.destination);

    oscillator.start();
    setTimeout(() => {
        oscillator.stop();
        audioCtx.close();
    }, duration);
}

document.addEventListener("keydown", () => { 
    modBeep(100, 500, 0.1) });

/**
 * 
 * @param {*} dur 
 * @param {*} freq 
 * @param {*} vol 
 */
async function modBeep(dur, freq, vol,) {
    const beepAmount = dur / 6;
    for (let i=beepAmount; i>0; i--){
        const mdvol = vol * i / beepAmount;
        beep(240, freq, mdvol);
        await new Promise(r => setTimeout(r, 40));
        console.log(i);
        console.log("vol: "+mdvol)
    }

}

async function modBeep2(dur, freq, vol,) {
    const beepAmount = dur / 6;
    for (let i=0; beepAmount>i; i++){
        const mdvol = vol * i / beepAmount;
        beep(240, freq, mdvol);
        await new Promise(r => setTimeout(r, 40));
        console.log(i);
        console.log("vol: "+mdvol)
    }

}

async function loop(d, f, v) {
    for (let i = 0; i < 10; i++) {
        await modBeep(d, f, v)
        await modBeep2(d, f, v)
        
    }
}

loop(100,500,0.1)