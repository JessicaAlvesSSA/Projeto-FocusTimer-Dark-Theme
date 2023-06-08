export default function() {
  
  const soundFlorest = new Audio("../assets/sounds/Floresta.wav")
  const soundRain = new Audio("../assets/sounds/Chuva.wav")
  const soundCoffee = new Audio("../assets/sounds/Cafeteria.wav")
  const soundFlame = new Audio("../assets/sounds/Lareira.wav")
  const kitchenTimer = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true")
  const bgAudio = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/bg-audio.mp3?raw=true")
  const buttonPressAudio = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true")


  bgAudio.loop = true

  function pressFlorest(action, vol) {
    if(action === "play"){
      soundFlorest.volume = vol
      soundFlorest.play()
      return;
    }
    soundFlorest.pause();
  }

  function pressRain(action, vol) {
    if(action === "play"){
      soundRain.volume = vol
      soundRain.play()
      return;
    }
    soundRain.pause()
  }

  function pressCoffee(action, vol) {
    if(action === "play"){
      soundCoffee.volume = vol
      soundCoffee.play()
      return;
    }
    soundCoffee.pause()
  }

  function pressFlame(action, vol) {
    if(action === "play"){
      soundFlame.volume = vol
      soundFlame.play()
      return;
    }
    soundFlame.pause()
  }

  function pressButton() {
    buttonPressAudio.play()
  }

  function timeEnd() {
    kitchenTimer.play()
  }

  return {
    pressFlorest,
    pressRain,
    pressCoffee,
    pressFlame,
    pressButton,
    timeEnd,
    bgAudio
  }

}