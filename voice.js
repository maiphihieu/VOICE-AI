const synth = window.speechSynthesis;

// Lấy danh sách các giọng nói có sẵn trên hệ thống
synth.onvoiceschanged = function() {
  const voices = synth.getVoices();
  console.log(voices);
};

function speak(text) {
  // Tạo đối tượng SpeechSynthesisUtterance với nội dung văn bản cần chuyển đổi
  const utterance = new SpeechSynthesisUtterance(text);

  // Thiết lập giọng nói cho đối tượng SpeechSynthesisUtterance
  const voices = synth.getVoices();
  utterance.voice = voices[0];

  // Phát ra giọng nói
  synth.speak(utterance);
}

const textToSpeechForm = document.getElementById('text-to-speech-form');
const textToSpeechInput = document.getElementById('text-to-speech-input');
const textToSpeechButton = document.getElementById('text-to-speech-button');

if (textToSpeechForm && textToSpeechInput && textToSpeechButton) {
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
}
