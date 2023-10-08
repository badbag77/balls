module.exports = {
    apps : [
      {
        name: "balls-dev",
        script: "npm",
        args: "run dev"
      },
      {
        name: "balls-prod",
        script: "npm",
        args: "run start"
      }
    ]
  }