import { version } from "../../package.json";
import config from "../config";

const swaggerDef = {
  openapi: "3.0.0",
  info: {
    title: "Proshop API documentation",
    version,
    license: {
      name: "hamdiRH",
      url: "https://github.com/hamdiRH/Proshop-MERN",
    },
  },
  servers: [
    {
      url: `${config.host}:${config.port}/api`,
    },
  ],
};

export default swaggerDef;
