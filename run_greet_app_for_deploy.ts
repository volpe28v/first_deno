import { createApp } from "./create_greet_app.ts";

const app = createApp();

// Deno Deploy 用のコード
addEventListener("fetch", app.fetchEventHandler());