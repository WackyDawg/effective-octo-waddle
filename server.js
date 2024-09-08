const express = require('express');
const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = 4000;

app.get('/', (req, res) => {
  res.send({ message: "Server running" });
});

app.listen(PORT, () => {
  console.log(`Test server is running on http://localhost:${PORT}`);
});

// Function to simulate a delay
function delay(time) {
  return new Promise(function(resolve) { 
      setTimeout(resolve, time);
  });
}

(async () => {
  // Launch a new browser instance with the no-sandbox option
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox']  // Add no-sandbox flag here
  });

  // Open a new page
  const page = await browser.newPage();

  // Go to a webpage
  await page.goto('https://placid-certain-wormhole.glitch.me/', {
    waitUntil: "networkidle0",
    timeout: 0
  });

  // Close the browser
  // await browser.close();
})();
