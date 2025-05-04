// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const synth = window.speechSynthesis;

  const faceImg = document.querySelector('#explore img');
  const textInput = document.getElementById('text-to-speak');
  const voiceSelect = document.getElementById('voice-select');
  const speakButton = document.querySelector('button');

  let voices = [];

  function populateVoiceList() {
    voices = synth.getVoices();
    for(let i = 0; i < voices.length; i++)
    {
      const option = document.createElement("option");
      option.textContent = `${voices[i].name} (${voices[i].lang})`;
      option.setAttribute("data-lang", voices[i].lang);
      option.setAttribute("data-name", voices[i].name);
      voiceSelect.appendChild(option);
    }
  }

  populateVoiceList();
  if(speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = populateVoiceList;
  }

  speakButton.addEventListener('click', () => {
    const text = textInput.value;
    const utterThis = new SpeechSynthesisUtterance(text);
    const selectedOption = voiceSelect.selectedOptions[0].getAttribute("data-name");
    for (let i = 0; i < voices.length; i++) {
      if (voices[i].name === selectedOption) {
        utterThis.voice = voices[i];
      }
    }

    utterThis.onstart = () => {
      faceImg.src = 'assets/images/smiling-open.png';
    };

    utterThis.onend = () => {
      faceImg.src = 'assets/images/smiling.png';
    };

    synth.speak(utterThis);
  });
}