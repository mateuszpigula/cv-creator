const express = require("express");
const puppeteer = require("puppeteer");
const app = express();
const port = 8000;

app.use(express.json());
app.use((req, res, next) => {
  //allow cross origin requests
  res.setHeader(
    "Access-Control-Allow-Methods",
    "POST, PUT, OPTIONS, DELETE, GET"
  );
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Credentials", true);
  next();
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/pdf", async (req, res) => {
  const url = "http://localhost:3000/resume";
  const browser = await puppeteer.launch({
    headless: true,
  });
  const page = await browser.newPage();
  await page.goto(url);

  await page.evaluate((data) => {
    localStorage.setItem("data", data);
  }, JSON.stringify(req.body));

  await page.goto(url, {
    waitUntil: "networkidle2",
  });

  const pdf = await page.pdf({
    path: "resume.pdf",
    pageRanges: "1",
    printBackground: true,
    format: "A4",
  });
  await browser.close();
  res.contentType("application/pdf");
  res.send(pdf);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
