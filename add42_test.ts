import { assertEquals } from "https://deno.land/std@0.110.0/testing/asserts.ts";
import { add42 } from "./add42.ts";

Deno.test("add42(0) is 42", () => {
    const result = add42(0);
    assertEquals(result, 42);
});

Deno.test("add42(4) is 46", () => {
    const result = add42(4);
    assertEquals(result, 46);
});
