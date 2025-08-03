const axios = require("axios");




  async function hacerPolling() {
  try {
    console.log("Polling en:", new Date().toLocaleTimeString());
    
    // Simulando una llamada asíncrona
const resultado = await axios.get("https://jsonplaceholder.typicode.com/todos/1");
    console.log("Resultado:", resultado.data);
  } catch (error) {
    console.error("Error en el polling:", error);
  }
}

setInterval(hacerPolling, 15000);
