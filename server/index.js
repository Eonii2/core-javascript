const liveServer = require("live-server");

const parms = {
  host: "localhost",
  port: 3000,
  open: false,
  root: "./client",
};

liveServer.start(parms);
