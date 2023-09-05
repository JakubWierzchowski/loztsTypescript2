module.exports = {
  apps: [
    {
      name: "website",
      script: "npm",
      args: "start",
      watch: ["public/downloadFiles/Sezon23-24"],
      watch_options: {
        followSymlinks: false,
      },
      ignore_watch: ["node_modules", "logs"],
    },
  ],
};
