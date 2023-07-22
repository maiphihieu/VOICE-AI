const synth = window.speechSynthesis;

function speak(text) {
    const utterance = new SpeechSynthesisUtterance(text);
    synth.speak(utterance);
}

const textToSpeechForm = document.getElementById('text-to-speech-form');
const textToSpeechInput = document.getElementById('text-to-speech-input');
const textToSpeechButton = document.getElementById('text-to-speech-button');

textToSpeechForm.addEventListener('submit', function (event) {
    event.preventDefault();
    const text = textToSpeechInput.value;
    if (text !== '') {
        speak(text);
    }
});

textToSpeechButton.addEventListener('click', function () {
    const text = textToSpeechInput.value;
    if (text !== '') {
        speak(text);
    }
});
