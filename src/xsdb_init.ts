// xsdb_init.ts

import xsdb_init_one from "./xsdb_init/xsdb_init_one.js";
import {get_config, display_config} from "./app_config.js";


console.log("Hello from xsdb_init.ts of sqlgit!");

const config_path = "./sqlgit_config.yml";
const app_cfg = await get_config(config_path);
display_config(app_cfg);

await xsdb_init_one(app_cfg.xsdb_main.path, app_cfg.xsdb_main.name);
await xsdb_init_one(app_cfg.xsdb_secondary.path, app_cfg.xsdb_secondary.name);

console.log("Bye from xsdb_init.ts of sqlgit!");

