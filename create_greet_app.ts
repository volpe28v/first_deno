import {
  Application,
  helpers,
  Router,
} from "https://deno.land/x/oak@v7.7.0/mod.ts";

export function createApp(): Application {
  const app = new Application();
  const router = new Router();

  router.get("/greet", (ctx) => {
    const { greet = "Hello" } = helpers.getQuery(ctx);
    const { name = "anonymous" } = helpers.getQuery(ctx);
    ctx.response.body = `${greet} ${name}!!`;
  });
  app.use(router.routes());
  return app;
}
