# Adding 404 Error Message to All Page (Except Our Paths)

      app.get("*", function (req, res) {
      res.status(404).send("404 Not Found");
      });
