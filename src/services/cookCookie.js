var cooking = false;

export function cookCookie() {
  if (cooking) {
    throw new Error("TOO MANY COOKIE!");
  }
  cooking = true;
  return new Promise((resolve) => {
    setTimeout(() => {
      cooking = false;
      resolve("🍪");
    }, 1000);
  });
}
