module.exports = {
  apps: [
    {
      name: "CrewPlan",
      script: "npm",
      args: "run dev",
      env: {
        NODE_ENV: "development",
      },
    },
  ],
};
