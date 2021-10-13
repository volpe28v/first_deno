const blob = new Blob(["Hello Deno!!"]);
const url = URL.createObjectURL(blob);

const resp = await fetch(url);
console.log(resp);
console.log(await resp.text());

URL.revokeObjectURL(url);
