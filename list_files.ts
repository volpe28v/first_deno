import { walk } from "https://deno.land/std@0.110.0/fs/mod.ts";

for await (const entry of walk('.', { includeDirs: false })){
    if (entry.path[0] != '.') {
        console.log(entry.path);
    }
}