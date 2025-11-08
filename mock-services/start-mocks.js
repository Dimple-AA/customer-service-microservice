// mock-services/start-mocks.js
const { spawn } = require("child_process");

function startMock(file, name) {
  const proc = spawn("node", [file], { stdio: "inherit" });
  proc.on("exit", (code) => console.log(`${name} exited with code ${code}`));
}

startMock("mock-services/mock-account.js", "Account Mock");
startMock("mock-services/mock-notification.js", "Notification Mock");
