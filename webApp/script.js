let textActionArea = document.querySelector('#textArea')
let distanceActionArea = document.querySelector('#distanceArea')

let socket = new WebSocket('ws://twitterswipe-env.us-east-2.elasticbeanstalk.com:5001')

  socket.onmessage = function(event) {
    console.log('from web app: ' + event.data)
    if (/^distance > -?\d+/.test(event.data)){
      return distanceActionArea.innerText = 'Client X ' + event.data.toString();
    }
    switch(event.data) {
      case 'rightClick':
        return textActionArea.innerText = "You Clicked Right >>";
      case 'leftClick':
        return textActionArea.innerText = "<< You Clicked Left";
      default:
        return null
    }
  }
