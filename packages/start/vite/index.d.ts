import { Router } from "fs-router/router";
import type { Plugin, ResolvedBuildOptions, UserConfig, ViteDevServer } from "vite";
import type { Options } from "./plugin";

export type Builders = {
  islandsClient(path: string | URL): Promise<void>;
  server(path: string | URL): Promise<void>;
  client(path: string | URL): Promise<void>;
  spaClient(path: string | URL): Promise<void>;
  build(config: ResolvedBuildOptions): Promise<void>;
  debug(msg: string): void;
};

// TODO: type in start/dev/server.js once converted to TS
export type CreateDevHandler = (server: ViteDevServer, config: any, options: any) => any;

export type BuildConfig = UserConfig & { solidOptions: Options & { router: Router } };

export type Adapter = {
  start: ((options: Options, serverPort?: { port: string }) => Promise<void>) | ((options: Options, serverPort?: { port: string }) => void);
  build(config: BuildConfig, builder: Builders): Promise<void>;
  dev?: (options: Options, devServer: ViteDevServer, createDevHandler: CreateDevHandler) => Promise<void>;
  name: string;
};

export default function (opts?: Partial<Options>): Plugin[];
