"use strict";

// Pull in our modules
const chalk = require("chalk");
const boxen = require("boxen");
const fs = require("fs");
const path = require("path");

// Define options for Boxen
const options = {
  padding: 1,
  margin: 1,
  borderStyle: "round",
};

// Text + chalk definitions
const data = {
  name: chalk.white("               Rithik Gandhi"),
  handle: chalk.white("Business Card"),
  work: chalk.white("Freelancer and open source developer"),
  twitter: chalk.gray("https://twitter.com/") + chalk.cyan("Rithi_ikG"),
  // npm: chalk.gray("https://npmjs.com/") + chalk.red("~rithgan"),

  behance: chalk.gray("https://behance.net") + chalk.white("rithgan"), // to be added soon
  github: chalk.gray("https://github.com/") + chalk.green("rithgan"),
  linkedin:
    chalk.gray("https://linkedin.com/in/") +
    chalk.blue("rithik-gandhi-0012ab178/"),
  web: chalk.cyan(""), //to be added soon
  npx: chalk.red("npx") + " " + chalk.white("rithikgandhi"),
  labelWork: chalk.white.bold("       Work:"),
  labelTwitter: chalk.white.bold("    Twitter:"),
  // labelnpm: chalk.white.bold("        npm:"),

  labelBehance: chalk.white.bold("    Behance:"),
  labelGitHub: chalk.white.bold("     GitHub:"),
  labelLinkedIn: chalk.white.bold("   LinkedIn:"),
  labelWeb: chalk.white.bold("        Web:"), //to be added soon
  labelCard: chalk.white.bold("       Card:"),
};

// Actual strings we're going to output
const newline = "\n";
const heading = `${data.name} / ${data.handle}`;
const working = `${data.labelWork}  ${data.work}`;
const twittering = `${data.labelTwitter}  ${data.twitter}`;
// const npming = `${data.labelnpm}  ${data.npm}`;
const behancing = `${data.labelBehance} ${data.behance}`;
const githubing = `${data.labelGitHub}  ${data.github}`;
const linkedining = `${data.labelLinkedIn}  ${data.linkedin}`;
const webing = `${data.labelWeb}  ${data.web}`;
const carding = `${data.labelCard}  ${data.npx}`;

// Put all our output together into a single variable so we can use boxen effectively
const output =
  heading + // data.name + data.handle
  newline +
  newline + // Add one whole blank line
  working +
  newline + // data.labelWork + data.work
  webing +
  newline + // data.labelWeb + data.web
  newline + //extra line for good luck
  twittering +
  newline + // data.labelTwitter + data.twitter
  // npming +
  // newline + // data.labelnpm + data.npm
  behancing +
  newline + //data.labelBehance + data.behance
  githubing +
  newline + // data.labelGitHub + data.github
  linkedining +
  newline + // data.labelLinkedIn + data.linkedin
  newline + // data.labelWeb + data.web
  carding; // data.labelCard + data.npx

fs.writeFileSync(
  path.join(__dirname, "bin/output"),
  chalk.green(boxen(output, options))
);
