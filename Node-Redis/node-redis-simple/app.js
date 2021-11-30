// const express = require("express");
// const fetch = require("node-fetch");
// const redis = require("redis");

import express from "express";
import redis from "redis";
import fetch from "node-fetch";

const PORT = process.env.PORT || 5000;
const REDIS_PORT = process.env.REDIS_PORT || 6379;

const client = redis.createClient(REDIS_PORT);

const app = express();

// Set response
function setResponse(username, repos) {
  return `<h2>${username} has ${repos} Github repos.</h2>`;
}

// Make request to GitHub
async function getGitHub(req, res, next) {
  try {
    console.log("Fetching data...");

    const { username } = req.params;

    const response = await fetch(`http://api.github.com/users/${username}`);

    const data = await response.json();

    const repos = data.public_repos;

    // Set data to Redis
    client.setEx(username, 3600, repos);

    res.send(data);
  } catch (err) {
    console.error(err);
    res.status(500);
  }
}

// Make request to GitHub
async function getRepos(req, res, next) {
  try {
    console.log("Fetching data...");

    const { username } = req.params;

    const response = await fetch(`http://api.github.com/users/${username}`);

    const data = await response.json();

    const repos = data.public_repos;

    // Set data to Redis
    client.setEx(username, 3600, repos);

    res.send(setResponse(username, repos));
  } catch (err) {
    console.error(err);
    res.status(500);
  }
}

// Cache middleware
function cache(req, res, next) {
  const { username } = req.params;
  client.get(username, (err, data) => {
    if (err) {
      throw err;
    }
    if (data != null) {
      res.send(setResponse(username, data));
    } else {
      next();
    }
  });
}

app.get("/github/:username", getGitHub);

app.get("/repos/:username", getRepos);

app.listen(PORT, () => console.log(`Listening on ${PORT}`));
