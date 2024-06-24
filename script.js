function speak() {
    const input = document.getElementById("input").value;
    let utterance = new SpeechSynthesisUtterance(input);
    speechSynthesis.speak(utterance)
}