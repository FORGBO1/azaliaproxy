import express from "express";
import { createBareServer } from "@titaniumnetwork-dev/bare-server-node";
import { uvPath } from "@titaniumnetwork-dev/ultraviolet";

const app = express();
const bare = createBareServer("/bare/");

app.use(express.static("public"));
app.use("/uv/", express.static(uvPath));

app.use((req, res, next) => {
  if (bare.shouldRoute(req)) {
    bare.routeRequest(req, res);
  } else {
    next();
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Azalia running on port ${PORT}`);
});
