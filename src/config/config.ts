type Config = {
  env: "development" | "production";
};

const config: Config = {
  // env: (process.env.NODE_ENV ?? "production") as Config["env"],
  env: "production",
};

export default config;
