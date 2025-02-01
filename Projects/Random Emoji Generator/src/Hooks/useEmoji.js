async function getRandomEmoji() {
    try {
      const apiKey = "cc358816d3138787e67366964d1f8da496935874";
      const response = await fetch(`https://emoji-api.com/emojis?access_key=${apiKey}`);
      const data = await response.json();
  
      if (data.length > 0) {
        const num = Math.floor(Math.random() * data.length + 1);
        return data[num].character;     
      } else {
        return "No Emoji Found";
      }
    } catch (error) {
      return "Error";
    }
  }
  
  export default getRandomEmoji;
  