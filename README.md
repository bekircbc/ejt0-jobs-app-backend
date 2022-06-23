# Adding 404 Error Message to All Page (Except Our Paths)

      app.get("*", function (req, res) {
      res.status(404).send("404 Not Found");
      });

# fix key warning in browser console

      import React from "react"
      import React, {useState,useEffect} from "react"
      <React.Fragment key={i}></React.Fragment>

# implemented .env data

      create .env
      npm i dotenv

      ## in .env

      BASE_URL = http://localhost
      PORT:3321
      MODE:development

      ## in server.js

      import dotenv from 'dotenv';

      dotenv.config();
      const mode = process.env.MODE;
      const baseUrl = process.env.BASE_URL;
      const port = process.env.PORT;
      const url = mode === 'development' ? `${baseUrl}:${port}` : baseUrl;

      ## debug in hroku, if needed

      heroku login
      heroku logs -a howto-ejt-backend-dern002 --tail

      .gitignore __ add .env

      ##heroku_settings_revealconfigvars_add

      Key:BASE_URL, value:https://....heroku.app

      ##netlify_vite also in heroku

            Key:VITE_BACKEND_URL, value:https://....heroku.app
