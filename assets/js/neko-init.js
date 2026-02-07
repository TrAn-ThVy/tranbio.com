function initNekoCats() {
  const mainNeko = new Neko({
    nekoName: "main-neko",
    nekoImageUrl: "./assets/cursor/neko.png",
    initialPosX: window.innerWidth / 2,
    initialPosY: window.innerHeight / 2
  });

  mainNeko.init();
  mainNeko.isFollowing = true;
}

document.addEventListener("DOMContentLoaded", () => {
  if (typeof Neko === "undefined") {
    console.error("Neko class not found. Make sure neko.js is loaded first.");
    return;
  }
  initNekoCats();
});
