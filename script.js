/* ==========================================================================
   EDIT YOUR CONTENT HERE
   --------------------------------------------------------------------------
   GAMES    = shipped Roblox games (thumbnail + play link).
              `visits` is a fallback; live counts load from Roblox using `universeId`.
   PROJECTS = systems/showcases with a YouTube video demo ("video" is the
              YouTube video ID — the part after watch?v= in the URL)
   To add a new entry, copy one block { ... }, and edit it.
   ========================================================================== */

const GAMES = [
  {
    name: "Dubai RP 🏡",
    role: "Contributor",
    contribution: "Shipped 1 update.",
    studio: "Crafty Savage",
    visits: 181000000,
    universeId: 6774320049,
    link: "https://www.roblox.com/games/122485613019196/Dubai-RP",
    image: "assets/games/Dubai-RP.png",
    desc: "A Role Playing game set in Dubai, where players can explore the city, own properties, and engage in various activities.",
  },
  {
    name: "+1 Magic Evolution",
    role: "Contributor",
    contribution: "Contributed gameplay systems with the studio team.",
    studio: "Sams Development",
    visits: 34300000,
    universeId: 10123898404,
    link: "https://www.roblox.com/games/116223724643557/1-Magic-Evolution",
    image: "assets/games/Magic-Evolution.png",
    desc: "Click to gain magical power, train, rebirth, defeat bosses, and collect loot and pets to grow stronger.",
  },
  {
    name: "Build to Survive a Nuke 💣",
    role: "Programmer",
    contribution: "Shipped gameplay systems with the studio team.",
    studio: "Sams Development",
    visits: 1247000,
    universeId: 10538550790,
    link: "https://www.roblox.com/games/104010318509542/Build-to-Survive-a-Nuke",
    image: "assets/games/Build-to-Survive-a-Nuke.png",
    desc: "Build a base on your plot and survive escalating events — soldiers, tanks, tornadoes, then the nuke.",
  },
  {
    name: "Steal a Bird Egg!",
    role: "Programmer",
    contribution: "Shipped gameplay systems with the studio team.",
    studio: "Sams Development",
    visits: 964000,
    universeId: 10765859606,
    link: "https://www.roblox.com/games/110196042723062/Steal-a-Bird-Egg",
    image: "assets/games/Steal-a-Bird-Egg.png",
    desc: "Find and steal bird eggs, hatch rare animals, and upgrade speed, wings, and plots.",
  },
  {
    name: "[New 🔥] Stump Duel",
    role: "Owner",
    contribution: "Created and developed as a solo project.",
    studio: "",
    visits: 33000,
    universeId: 10520107543,
    link: "https://www.roblox.com/games/115516660229234/Stump-Duel",
    image: "assets/games/Stump-Duel.png",
    desc: "",
  },

  {
    name: "Cart Ride for Brainrots 🛤️",
    role: "Programmer",
    contribution: "Developed by a team of 3 programmers.",
    studio: "Crafty Savage",
    visits: 6700000,
    universeId: 9712690368,
    link: "https://www.roblox.com/games/105301165956371/Cart-Ride-for-Brainrots",
    image: "assets/games/Cart-Ride-for-Brainrots.png",
    desc: "Ride a cart through a challenging obstacle course, collect Brainrots and earn cash for upgrades and rewards.",
  },
  {
    name: "[New] Asterix & Obelix: Village Defense",
    role: "Programmer",
    contribution: "Started as Lead Programmer, later co-led development.",
    studio: "Rocket Fuel",
    visits: 7000,
    universeId: 10032061242,
    link: "https://www.roblox.com/games/87404277461525/Asterix-Obelix-Village-Defense",
    image: "assets/games/Asterix-and-Obelix.png",
    desc: "A tower defense game where players defend their village from waves of enemies, featuring characters from the Asterix & Obelix universe.",
  },
  {
    name: "Escape Avalanche for Penguins 🐧",
    role: "Programmer",
    contribution: "Developed within 1 week.",
    studio: "Crafty Savage",
    visits: 1200000,
    universeId: 9628464884,
    link: "https://www.roblox.com/games/93957351921805/Escape-Avalanche-for-Penguins",
    image: "assets/games/Escape-Avalanche-for-Penguins.png",
    desc: "Escape an avalanche by running through a challenging obstacle course, collect penguins and earn cash for upgrades and rewards.",
  },
  {
    name: "Dig DEEP for Lucky Blocks",
    role: "Programmer",
    contribution: "Developed by a team of 3 programmers.",
    studio: "Crafty Savage",
    visits: 1000000,
    universeId: 10080947068,
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
    universeId: 7987065239,
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
    universeId: 8952687051,
    link: "https://www.roblox.com/games/73123009277593/Make-a-Plane-for-Treasure",
    image: "assets/games/make-a-plane-treasure.png",
    desc: "Make a plane and fly to find treasure, collect them and earn cash for upgrades and rewards.",
  },
  {
    name: "Train for Super Powers",
    role: "Programmer",
    contribution: "Shipped gameplay systems with the studio team.",
    studio: "Sams Development",
    visits: 54000,
    universeId: 10636531886,
    link: "https://www.roblox.com/games/107567766232490/Train-for-Super-Powers",
    image: "assets/games/Train-for-Super-Powers.png",
    desc: "Train power, endurance, mind, speed, and jump to unlock titles, auras, and multipliers.",
  },
  {
    name: "Aircraft Tycoon 🚀",
    role: "Owner",
    contribution: "Created and developed as a solo project.",
    studio: "",
    visits: 28000,
    universeId: 10691943058,
    link: "https://www.roblox.com/games/104656527433013/Aircraft-Tycoon",
    image: "assets/games/Aircraft-Tycoon.png",
    desc: "Collect aircraft that drop nukes, sell them for cash, merge for rarer planes, and rebirth to climb tiers.",
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

function formatHeroVisits(n) {
  if (n >= 1e6) return Math.floor(n / 1e6) + "M+";
  if (n >= 1e3) return Math.floor(n / 1e3) + "K+";
  return String(n);
}

/* ---- Hero stats from the GAMES list ---- */
const totalVisits = GAMES.reduce((sum, game) => sum + (Number(game.visits) || 0), 0);
const visitsEl = document.getElementById("statVisits");
const gamesEl = document.getElementById("statGames");
if (visitsEl) visitsEl.textContent = formatHeroVisits(totalVisits);
if (gamesEl) gamesEl.textContent = String(GAMES.length);

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
      <span class="visits-badge" data-universe="${game.universeId || ""}">▶ ${formatVisits(game.visits)} visits</span>
    </div>
    <div class="card-body">
      <h3>${game.name}</h3>
      ${game.studio ? `<p class="card-studio">${game.studio}</p>` : ""}
      ${game.contribution ? `<p class="card-contrib">${game.contribution}</p>` : ""}
      ${game.desc ? `<p class="card-desc">${game.desc}</p>` : ""}
    </div>`;
  gameGrid.appendChild(card);
}

/* ---- Live visit counts from Roblox ---- */
const VISIT_CACHE_KEY = "mushii-live-visits";
const VISIT_CACHE_TTL = 5 * 60 * 1000;

function placeIdFromLink(link) {
  const match = String(link || "").match(/\/games\/(\d+)/);
  return match ? match[1] : "";
}

async function fetchFirstJson(urls) {
  for (const url of urls) {
    try {
      const res = await fetch(url);
      if (!res.ok) continue;
      return await res.json();
    } catch {
      /* try the next endpoint */
    }
  }
  return null;
}

async function resolveUniverseId(game) {
  if (game.universeId) return Number(game.universeId);
  const placeId = placeIdFromLink(game.link);
  if (!placeId) return null;
  const data = await fetchFirstJson([
    `https://apis.roblox.com/universes/v1/places/${placeId}/universe`,
    `https://apis.roproxy.com/universes/v1/places/${placeId}/universe`,
  ]);
  return data && data.universeId ? Number(data.universeId) : null;
}

function readVisitCache() {
  try {
    const parsed = JSON.parse(localStorage.getItem(VISIT_CACHE_KEY) || "");
    if (parsed && parsed.visits && typeof parsed.at === "number") return parsed;
  } catch {
    /* ignore bad cache */
  }
  return null;
}

function writeVisitCache(visits) {
  try {
    localStorage.setItem(VISIT_CACHE_KEY, JSON.stringify({ at: Date.now(), visits }));
  } catch {
    /* private mode / quota */
  }
}

function applyLiveVisits(visitsByUniverse) {
  for (const game of GAMES) {
    const live = visitsByUniverse[game.universeId] ?? visitsByUniverse[String(game.universeId)];
    if (typeof live === "number") game.visits = live;
  }
  document.querySelectorAll(".visits-badge[data-universe]").forEach((badge) => {
    const id = badge.getAttribute("data-universe");
    const live = visitsByUniverse[id] ?? visitsByUniverse[Number(id)];
    if (typeof live === "number") badge.textContent = `▶ ${formatVisits(live)} visits`;
  });
  if (visitsEl) {
    const total = GAMES.reduce((sum, game) => sum + (Number(game.visits) || 0), 0);
    visitsEl.textContent = formatHeroVisits(total);
  }
}

async function refreshLiveVisits() {
  const cache = readVisitCache();
  if (cache && cache.visits) applyLiveVisits(cache.visits);
  if (cache && Date.now() - cache.at < VISIT_CACHE_TTL) return;

  const universeIds = [];
  for (const game of GAMES) {
    const id = await resolveUniverseId(game);
    if (id) {
      game.universeId = id;
      universeIds.push(id);
    }
  }
  if (!universeIds.length) return;

  const payload = await fetchFirstJson([
    `https://games.roblox.com/v1/games?universeIds=${universeIds.join(",")}`,
    `https://games.roproxy.com/v1/games?universeIds=${universeIds.join(",")}`,
  ]);
  const list = payload && payload.data;
  if (!list || !list.length) return;

  const visitsByUniverse = {};
  for (const entry of list) {
    if (typeof entry.visits === "number") {
      visitsByUniverse[entry.id] = entry.visits;
      visitsByUniverse[String(entry.id)] = entry.visits;
    }
  }
  writeVisitCache(visitsByUniverse);
  applyLiveVisits(visitsByUniverse);
}

refreshLiveVisits();

/* ---- Showcase cards ---- */
const workSection = document.getElementById("work");
const navShowcase = document.getElementById("navShowcase");
if (PROJECTS.length) {
  workSection.hidden = false;
  navShowcase.hidden = false;
}

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
