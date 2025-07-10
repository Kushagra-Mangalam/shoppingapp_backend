// const dotEnv = require("dotenv");
// dotEnv.config();

// const express = require("express");

// const app = express();

// app.use(express.json());

// app.use((req, res, next) => {
//   console.log("------------------------------------");
//   console.log(new Date(), req.url);
//   console.log(req.method);
//   console.log("------------------------------------");
//   next();
// });
// app.get("/", (req, res) => {
//   res.json({
//     isSuccess: true,
//     message: "server is running",
//     data: {},
//   });
// });

// app.get("/hello", (req, res) => {
//   res.json({
//     isSuccess: true,
//     message: "server is saying hello",
//     data: {},
//   });
//   console.log("server is sayiing hi");
// });

// app.use((req, res, next) => {
//   console.log("!!!!!!!!!!!!!");
//   next();
// });

// app.listen(2900, () => {
//   console.log("------------------server is running------------------");
// });
