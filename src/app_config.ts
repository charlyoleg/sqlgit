// app_config.ts

import YAML from 'yaml';
import fs from "fs";


async function get_config (path: string) {
  try {
    const fdata = await fs.promises.readFile(path, 'utf8');
    const cfg = YAML.parse(fdata);
    return cfg;
  } catch(err) {
    console.log(`ERR713: Error by reading the config file ${path}!`);
    console.error(err);
    process.exit(61);
  }
}

function display_config (cfg:any) {
  // create an object constructor to use forEach with thisArg
  class RemoteInfo {
    remote_str:string;
    constructor() {
      this.remote_str = "";
    }
    add (remote_array:any) : void {
      remote_array.forEach( (remote: any, idx: number) => {
        this.remote_str += `
        remote-${idx+1}:
          url:    ${remote.url}
          branch: ${remote.branch}`;
        }, this);
    }
  }
  // the two instantiation
  const xsdb_main_remotes = new RemoteInfo();
  xsdb_main_remotes.add(cfg.xsdb_main.remotes);
  const xsdb_secondary_remotes = new RemoteInfo();
  xsdb_secondary_remotes.add(cfg.xsdb_secondary.remotes);
  const cfg_info = `sqlgit config:
  servers:
    http:
      enable:   ${cfg.http.enable}
      port:     ${cfg.http.port}
      hostname: ${cfg.http.hostname}
    https:
      enable:   ${cfg.https.enable}
      port:     ${cfg.https.port}
      hostname: ${cfg.https.hostname}
      ssl-key:  ${cfg.https.key}
      ssl-cert: ${cfg.https.cert}
  backend databases:
    xsdb_main:
      path:     ${cfg.xsdb_main.path}
      name:     ${cfg.xsdb_main.name}
      remotes:  ${xsdb_main_remotes.remote_str}
    xsdb_secondary:
      path:     ${cfg.xsdb_secondary.path}
      name:     ${cfg.xsdb_secondary.name}
      remotes:  ${xsdb_secondary_remotes.remote_str}
`;
  console.log(cfg_info);
}

export {get_config, display_config};

