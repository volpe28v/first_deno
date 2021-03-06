import { createApp } from "./create_greet_app.ts";
import { superoak } from "https://deno.land/x/superoak@4.4.0/mod.ts";

const app = createApp();

Deno.test({
  name: 'GET /greet に対して、ステータス・コード200で "Hello anonymous!!" が返ってくること',
  fn: async () => {
    const request = await superoak(app);
    await request.get("/greet").expect(200).expect("Hello anonymous!!");
  },
  sanitizeResources: false,
  sanitizeOps: false,
});

Deno.test({
  name: 'GET /greet?name=hoge に対して、ステータス・コード200で "Hello hoge!!" が返ってくること',
  fn: async () => {
    const request = await superoak(app);
    await request.get("/greet?name=hoge").expect(200).expect("Hello hoge!!");
  },
  sanitizeResources: false,
  sanitizeOps: false,
});

Deno.test({
    name: 'GET / に対して、ステータス・コード404が返ってくること',
    fn: async () => {
      const request = await superoak(app);
      await request.get("/").expect(404);
    },
    sanitizeResources: false,
    sanitizeOps: false,
  });
  