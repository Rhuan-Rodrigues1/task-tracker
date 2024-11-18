#!/usr/bin/env node

import { program } from "commander";
import packageVersion from "./package.json" assert { type: "json" };

program.version(packageVersion.version);

program
  .command("add [task]")
  .description("Adiciona uma task")
  .action((task) => {
    console.log(task);
  });

program.parse(process.argv);
