/* ==========================================================================
   EDIT YOUR CONTENT HERE
   --------------------------------------------------------------------------
   GAMES    = shipped Roblox games (thumbnail image + play link + visits)
   PROJECTS = systems/showcases with a YouTube video demo ("video" is the
              YouTube video ID — the part after watch?v= in the URL)
   To add a new entry, copy one block { ... }, and edit it.
   ========================================================================== */

const GAMES = [
  {
    name: "Dubai RP 🏡",
    role: "LiveOps · 1 update",
    contribution: "Shipped 1 update.",
    studio: "Crafty Savage",
    visits: 181000000,
    link: "https://www.roblox.com/games/122485613019196/Dubai-RP",
    image: "assets/games/Dubai-RP.png",
    desc: "A Role Playing game set in Dubai, where players can explore the city, own properties, and engage in various activities.",
  },
  {
    name: "Cart Ride for Brainrots 🛤️",
    role: "Programmer",
    contribution: "Developed by a team of 3 programmers.",
    studio: "Crafty Savage",
    visits: 6700000,
    link: "https://www.roblox.com/games/105301165956371/Cart-Ride-for-Brainrots",
    image: "assets/games/Cart-Ride-for-Brainrots.png",
    desc: "Ride a cart through a challenging obstacle course, collect Brainrots and earn cash for upgrades and rewards.",
  },
  {
    name: "Escape Avalanche for Penguins 🐧",
    role: "Programmer",
    contribution: "Developed within 1 week.",
    studio: "Crafty Savage",
    visits: 1200000,
    link: "https://www.roblox.com/games/93957351921805/Escape-Avalanche-for-Penguins",
    image: "assets/games/Escape-Avalanche-for-Penguins.png",
    desc: "Escape a avalanche by running through a challenging obstacle course, collect penguins and earn cash for upgrades and rewards.",
  },
  {
    name: "Dig DEEP for Lucky Blocks",
    role: "Programmer",
    contribution: "Developed by a team of 3 programmers.",
    studio: "Crafty Savage",
    visits: 1000000,
    link: "https://www.roblox.com/games/104119115051622/Dig-DEEP-for-Lucky-Blocks",
    image: "assets/games/Dig-for-lucky-block.png",
    desc: "Dig deep into the ground to find lucky blocks, collect them and earn cash for upgrades and rewards.",
  },
  {
    name: "Rodeo Rumble",
    role: "Programmer",
    contribution: "Led gameplay programming and systems.",
    studio: "Rocket Fuel",
    visits: 557000,
    link: "https://www.roblox.com/games/89866359586039/Rodeo-Rumble",
    image: "assets/games/rodeo-rumble.png",
    desc: "",
  },
  {
    name: "Make a Plane for Treasure",
    role: "Programmer",
    contribution: "Contributed to gameplay features.",
    studio: "Rocket Fuel",
    visits: 240000,
    link: "https://www.roblox.com/games/73123009277593/Make-a-Plane-for-Treasure",
    image: "assets/games/make-a-plane-treasure.png",
    desc: "Make a plane and fly to find treasure, collect them and earn cash for upgrades and rewards.",
  },
];

const PROJECTS = [
  // {
    // title: "system",
    // video: "bChsHZ9-Fqc",
    // desc: "A fully functional tank with a custom physics-based rig that simulates tank-like movement. Includes a working cannon and turret, and can be destroyed.",
  // },
];

/* ==========================================================================
   Site logic below — you shouldn't need to touch anything past this line.
   ========================================================================== */

function formatVisits(n) {
  if (n >= 1e6) return (n / 1e6).toFixed(1).replace(/\.0$/, "") + "M";
  if (n >= 1e3) return (n / 1e3).toFixed(0) + "K";
  return String(n);
}

/* ---- Shipped games ---- */
const gameGrid = document.getElementById("gameGrid");
for (const game of GAMES) {
  const card = document.createElement("a");
  card.className = "card game-card reveal";
  card.href = game.link;
  card.target = "_blank";
  card.rel = "noopener";
  card.innerHTML = `
    <div class="card-media">
      <img src="${game.image}" alt="${game.name} thumbnail" loading="lazy">
      <span class="role-badge">${game.role}</span>
      <span class="visits-badge">▶ ${formatVisits(game.visits)} visits</span>
    </div>
    <div class="card-body">
      <h3>${game.name}</h3>
      ${game.contribution ? `<p class="card-contrib">${game.contribution}</p>` : ""}
    </div>`;
  gameGrid.appendChild(card);
}

/* ---- Showcase cards ---- */
const projectGrid = document.getElementById("projectGrid");
for (const project of PROJECTS) {
  const card = document.createElement("article");
  card.className = "card reveal";

  let media;
  if (project.video) {
    media = document.createElement("button");
    media.className = "card-media video-facade";
    media.type = "button";
    media.setAttribute("aria-label", `Play video: ${project.title}`);

    const thumb = document.createElement("img");
    thumb.src = `https://i.ytimg.com/vi/${project.video}/maxresdefault.jpg`;
    thumb.alt = `${project.title} video preview`;
    thumb.loading = "lazy";
    thumb.onerror = () => {
      thumb.onerror = null;
      thumb.src = `https://i.ytimg.com/vi/${project.video}/hqdefault.jpg`;
    };

    const playBtn = document.createElement("span");
    playBtn.className = "play-button";
    playBtn.innerHTML = `<svg viewBox="0 0 24 24" width="26" height="26" aria-hidden="true"><path d="M8 5v14l11-7z" fill="currentColor"/></svg>`;

    media.append(thumb, playBtn);
    media.addEventListener("click", () => {
      const iframe = document.createElement("iframe");
      iframe.src = `https://www.youtube-nocookie.com/embed/${project.video}?autoplay=1&rel=0`;
      iframe.title = project.title;
      iframe.allow = "autoplay; encrypted-media; picture-in-picture";
      iframe.allowFullscreen = true;
      media.replaceWith(iframe);
      iframe.className = "card-media";
    });
  } else {
    media = document.createElement("div");
    media.className = "card-media placeholder-media";
    media.innerHTML = '<div class="placeholder-copy">Update soon</div>';
  }

  const body = document.createElement("div");
  body.className = "card-body";
  body.innerHTML = `<h3>${project.title}</h3><p class="card-desc">${project.desc}</p>`;

  card.append(media, body);
  projectGrid.appendChild(card);
}

/* ---- Copy Discord username ---- */
const copyBtn = document.getElementById("copyDiscord");
const copyHint = document.getElementById("copyHint");
copyBtn.addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText("mushii00");
    copyHint.textContent = "copied!";
  } catch {
    copyHint.textContent = "copy failed — it's: mushii00";
  }
  setTimeout(() => (copyHint.textContent = "click to copy"), 2000);
});

/* ---- Footer year ---- */
document.getElementById("year").textContent = new Date().getFullYear();

/* ---- Scroll-reveal animation (skipped if user prefers reduced motion) ---- */
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
if (!prefersReducedMotion && "IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      }
    },
    { threshold: 0.1 }
  );
  document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
} else {
  document.querySelectorAll(".reveal").forEach((el) => el.classList.add("visible"));
}

/* ---- Cursor glow on the background grid ---- */
if (!prefersReducedMotion) {
  const bgGrid = document.getElementById("bgGrid");
  window.addEventListener(
    "pointermove",
    (e) => {
      bgGrid.style.setProperty("--glow-x", e.clientX + "px");
      bgGrid.style.setProperty("--glow-y", e.clientY + "px");
    },
    { passive: true }
  );
}
