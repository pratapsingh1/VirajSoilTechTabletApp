const DATA = {
  brand: "Viraj Agro Products",

  product: "Viraj SoilTech Rotavator",

  tagline: "Strong design. Clear guarantee. Farmer-focused.",

  contacts: [
    "9011773275",
    "7385760222",
    "9011773262"
  ],

  features: [
    {
      icon: "6",
      title: "Corner blade arrangement",
      short: "Full-width tillage focus",
      detail:
        "The supplied Viraj sales material highlights a 6-blade arrangement at the corner to target more uniform full-width tillage and reduce unnecessary repeat work.",
      section: "Blade"
    },

    {
      icon: "↗",
      title: "Outer-facing corner blade",
      short: "Residue handling focus",
      detail:
        "The supplied sales material positions the outer-facing corner blade design as a way to reduce residue, rope, cloth and straw sticking around the side.",
      section: "Blade"
    },

    {
      icon: "21",
      title: "Side gearbox support",
      short: "21-number lock nut-bolts",
      detail:
        "The supplied script specifies 21-number high-tension lock nut-bolts, 6 support bolts and an outer check nut.",
      section: "Gearbox"
    },

    {
      icon: "4",
      title: "Four-spring support",
      short: "Rear support",
      detail:
        "The supplied product material highlights four spring supports instead of two.",
      section: "Construction"
    },

    {
      icon: "▣",
      title: "Heavy structure",
      short: "Body and base plate",
      detail:
        "The supplied material highlights heavy body construction, a thicker base plate and double-clamp support.",
      section: "Construction"
    },

    {
      icon: "✓",
      title: "Written guarantee",
      short: "Clear terms",
      detail:
        "The supplied material emphasizes written guarantee terms and piece-to-piece replacement where applicable.",
      section: "Guarantee"
    }
  ],

  salesSteps: [
    "Ask the farmer about problems with the current rotavator.",
    "Open the relevant feature card.",
    "Show that component physically on the machine.",
    "Use Compare for a quick side-by-side explanation.",
    "Show the written guarantee.",
    "Ask tractor HP, soil type and required working width.",
    "Discuss size and price last."
  ]
};


/* -------------------------
   COMMON UI
------------------------- */

function icon(text) {
  return `<div class="icon">${text}</div>`;
}


function machineSvg() {
  return `
  <svg
    viewBox="0 0 720 360"
    role="img"
    aria-label="Rotavator illustration">

    <g
      fill="none"
      stroke-linecap="round"
      stroke-linejoin="round">

      <path
        d="M115 122h470l38 86H77z"
        fill="#d8532b"
        stroke="#7b3324"
        stroke-width="12"/>

      <path
        d="M150 122l45-60h310l45 60"
        fill="#e76535"
        stroke="#7b3324"
        stroke-width="12"/>

      <path
        d="M190 62h270M165 95h390"
        stroke="#7b3324"
        stroke-width="10"/>

      <path
        d="M95 208h530"
        stroke="#6d3323"
        stroke-width="13"/>

      <path
        d="
          M118 222l-13 68
          M175 222l-7 68
          M235 222l3 68
          M295 222l9 68
          M355 222l12 68
          M415 222l10 68
          M475 222l4 68
          M535 222l-8 68"
        stroke="#26332d"
        stroke-width="11"/>

      <circle
        cx="118"
        cy="296"
        r="28"
        fill="#1d2d26"
        stroke="none"/>

      <circle
        cx="565"
        cy="296"
        r="28"
        fill="#1d2d26"
        stroke="none"/>

      <path
        d="M330 62V30M330 30h115M445 30v34"
        stroke="#2d4339"
        stroke-width="11"/>
    </g>

    <g fill="#f5f4eb">
      <circle cx="118" cy="296" r="9"/>
      <circle cx="565" cy="296" r="9"/>
    </g>
  </svg>
  `;
}


/* -------------------------
   LAYOUT
------------------------- */

function navigation(active) {

  const items = [
    ["home", "Dashboard"],
    ["why", "Why SoilTech"],
    ["features", "Features"],
    ["compare", "Compare"],
    ["product", "Product View"],
    ["sales", "Salesman Mode"]
  ];

  return items
    .map(([id, label]) => `
      <button
        class="${active === id ? "active" : ""}"
        onclick="navigate('${id}')">
        ${label}
      </button>
    `)
    .join("");
}


function shell(content, active, title, subtitle) {

  return `
  <div class="shell">

    <aside class="sidebar">

      <div class="brand">
        <div class="brand-mark">V</div>

        <div>
          <strong>VIRAJ</strong>
          <small>SoilTech Product Advisor</small>
        </div>
      </div>

      <nav class="nav">
        ${navigation(active)}
      </nav>

      <div class="sidebar-note">
        Tablet-first sales demo.
        Product specifications and comparison claims
        are based on the sales material supplied for
        this project and should be approved by Viraj
        before public deployment.
      </div>

    </aside>


    <main class="main">

      <div class="topbar">

        <div class="title">
          <h1>${title}</h1>
          <p>${subtitle}</p>
        </div>

        <input
          id="search"
          class="search"
          placeholder="Search features..."
          oninput="searchCards(this.value)"
        />

      </div>

      ${content}

      <footer>
        Viraj SoilTech Product Advisor • Demo build v1
      </footer>

    </main>

  </div>
  `;
}


/* -------------------------
   DASHBOARD
------------------------- */

function home() {

  const cards = DATA.features
    .map(feature => `
      <div class="card searchable">

        <div class="feature">

          ${icon(feature.icon)}

          <div>

            <span class="badge">
              ${feature.section}
            </span>

            <h4>
              ${feature.title}
            </h4>

            <p>
              ${feature.short}
            </p>

            <button
              class="btn soft"
              style="margin-top:12px"
              onclick="showFeature('${escapeText(feature.title)}')">
              View detail
            </button>

          </div>

        </div>

      </div>
    `)
    .join("");


  return shell(`

    <section class="hero">

      <div>

        <div class="eyebrow">
          Agricultural Machinery • Rotavator
        </div>

        <h2>
          Make the customer understand
          the product before discussing the price.
        </h2>

        <p>
          This first version turns the Viraj SoilTech
          sales material into a guided tablet presentation:
          explain features, show benefits, compare design
          points and finish with guarantee and contact
          information.
        </p>

        <div class="actions">

          <button
            class="btn primary"
            onclick="navigate('why')">
            Start Presentation →
          </button>

          <button
            class="btn light"
            onclick="navigate('compare')">
            Quick Compare
          </button>

        </div>

      </div>


      <div class="product-art">
        ${machineSvg()}
      </div>

    </section>


    <section class="section">

      <div class="section-head">
        <h3>Key product points</h3>
        <span>Tap any point to open details</span>
      </div>

      <div class="grid grid-3">
        ${cards}
      </div>

    </section>


    <section class="section kpis">

      <div class="kpi">
        <strong>6</strong>
        <span>Corner blade focus</span>
      </div>

      <div class="kpi">
        <strong>21</strong>
        <span>Gearbox bolt size in script</span>
      </div>

      <div class="kpi">
        <strong>4</strong>
        <span>Spring supports highlighted</span>
      </div>

      <div class="kpi">
        <strong>3</strong>
        <span>Contact numbers</span>
      </div>

    </section>


    <section class="section contact">

      <div>
        <h3>${DATA.brand}</h3>
        <p>${DATA.tagline}</p>
      </div>

      <div class="numbers">
        ${DATA.contacts
          .map(number => `<span class="number">${number}</span>`)
          .join("")}
      </div>

    </section>

  `, "home",
     "Viraj SoilTech",
     "Interactive product presentation for customers and sales teams.");
}


/* -------------------------
   WHY SOILTECH
------------------------- */

function why() {

  return shell(`

    <section class="hero">

      <div>

        <div class="eyebrow">
          Why SoilTech
        </div>

        <h2>
          Turn product features into
          simple farmer benefits.
        </h2>

        <p>
          The salesperson can use the tablet
          as a visual guide instead of memorising
          the full sales presentation.
        </p>

      </div>

      <div class="product-art">
        ${machineSvg()}
      </div>

    </section>


    <section class="section grid grid-2">

      <div class="card">

        <span class="badge">
          01 • Tillage
        </span>

        <h4>
          Corner blade explanation
        </h4>

        <p>
          Use the actual product photograph in the
          production version and highlight the center
          and corner blade areas.
        </p>

        <div class="diagram">

          <div class="diagram-row">

            <span class="diagram-label">
              Center
            </span>

            <div class="bars">
              ${'<i class="bar on"></i>'.repeat(6)}
            </div>

          </div>


          <div class="diagram-row">

            <span class="diagram-label">
              Corner
            </span>

            <div class="bars">
              ${'<i class="bar on"></i>'.repeat(6)}
            </div>

          </div>

        </div>

      </div>


      <div class="card">

        <span class="badge">
          02 • Support
        </span>

        <h4>
          Gearbox explanation
        </h4>

        <p>
          Open the gearbox feature and show the
          bolt/support details on the physical machine.
        </p>

        <div class="diagram">

          <div class="diagram-row">

            <span class="diagram-label">
              Support
            </span>

            <div class="bars">
              ${'<i class="bar on"></i>'.repeat(6)}
            </div>

          </div>

        </div>

      </div>

    </section>


    <section class="section card">

      <h4>
        Farmer benefit language
      </h4>

      <div class="grid grid-3">

        ${[
          [
            "Time",
            "Explain how unnecessary repeat work can cost time."
          ],
          [
            "Diesel",
            "Explain the fuel implication of repeat passes."
          ],
          [
            "Confidence",
            "Show visible construction and written guarantee."
          ]
        ]
          .map(item => `
            <div class="feature searchable">

              ${icon("✓")}

              <div>

                <h4>${item[0]}</h4>

                <p>
                  ${item[1]}
                </p>

              </div>

            </div>
          `)
          .join("")}

      </div>

    </section>

  `, "why",
     "Why SoilTech?",
     "Explain the reason behind the design in farmer-friendly language.");
}


/* -------------------------
   FEATURES
------------------------- */

function features() {

  return shell(`

    <section class="section grid grid-2">

      ${DATA.features
        .map(feature => `
          <div class="card searchable">

            <div class="feature">

              ${icon(feature.icon)}

              <div>

                <span class="badge">
                  ${feature.section}
                </span>

                <h4>
                  ${feature.title}
                </h4>

                <p>
                  ${feature.detail}
                </p>

                <button
                  class="btn soft"
                  style="margin-top:12px"
                  onclick="showFeature('${escapeText(feature.title)}')">
                  Open explanation
                </button>

              </div>

            </div>

          </div>
        `)
        .join("")}

    </section>


    <section class="section card">

      <h4>
        Recommended customer flow
      </h4>

      <div class="grid grid-3">

        ${DATA.salesSteps
          .map((step, index) => `
            <div class="feature">

              ${icon(index + 1)}

              <div>

                <h4>
                  ${step}
                </h4>

                <p>
                  Use a short explanation and point
                  to the physical machine.
                </p>

              </div>

            </div>
          `)
          .join("")}

      </div>

    </section>

  `, "features",
     "Product Features",
     "Six core feature cards for the first Rotavator demo.");
}


/* -------------------------
   COMPARISON
------------------------- */

function compare() {

  return shell(`

    <section class="section card compare">

      <span class="badge">
        Demo comparison
      </span>

      <h3 style="margin:10px 0">
        Common market point vs. SoilTech positioning
      </h3>

      <p style="color:var(--muted)">
        Built from the supplied sales script.
        This is not an independent engineering test.
      </p>


      <table>

        <thead>

          <tr>
            <th>Point</th>
            <th>Common market point in supplied script</th>
            <th>Viraj SoilTech positioning</th>
          </tr>

        </thead>


        <tbody>

          <tr>

            <td>
              <strong>Corner blade</strong>
            </td>

            <td>
              Script describes many market rotavators
              with 6 blades at center and fewer at corner.
            </td>

            <td class="good">
              6-blade corner arrangement highlighted.
            </td>

          </tr>


          <tr>

            <td>
              <strong>Corner direction</strong>
            </td>

            <td>
              Script states inward-facing corner blades
              may allow residue to collect.
            </td>

            <td class="good">
              Outer-facing corner blade design highlighted.
            </td>

          </tr>


          <tr>

            <td>
              <strong>Gearbox support</strong>
            </td>

            <td>
              5 × 17-number support bolts mentioned.
            </td>

            <td class="good">
              6 × 21-number high-tension lock nut-bolts
              + outer check nut mentioned.
            </td>

          </tr>


          <tr>

            <td>
              <strong>Rear springs</strong>
            </td>

            <td>
              2 springs mentioned.
            </td>

            <td class="good">
              4 springs highlighted.
            </td>

          </tr>


          <tr>

            <td>
              <strong>Guarantee</strong>
            </td>

            <td>
              Verbal/unclear warranty is described
              as a pain point.
            </td>

            <td class="good">
              Written guarantee terms highlighted.
            </td>

          </tr>

        </tbody>

      </table>

    </section>


    <section class="section notice">

      <strong>Before public use:</strong>

      Have Viraj approve every numeric specification
      and comparative statement in this screen.

    </section>

  `, "compare",
     "Quick Comparison",
     "A visual comparison screen for the salesperson.");
}


/* -------------------------
   PRODUCT VIEW
------------------------- */

function productView() {

  const slots = [
    ["Hero / Full machine", "assets/viraj-hero.jpg"],
    ["Blade & corner", "assets/viraj-blades.jpg"],
    ["Side gearbox", "assets/viraj-gearbox.jpg"],
    ["Spring support", "assets/viraj-springs.jpg"],
    ["Base plate / clamps", "assets/viraj-base.jpg"],
    ["Guarantee / logo", "assets/viraj-guarantee.jpg"]
  ];


  return shell(`

    <section class="section photo-grid">

      ${slots
        .map(([name, image]) => `
          <div class="card">

            <div class="photo-box">

              <img
                src="${image}"
                alt="${name}"
                onerror="this.style.display='none'; this.nextElementSibling.style.display='block';"
              />

              <span class="photo-label">
                ${name}
              </span>

            </div>

            <h4>
              ${name}
            </h4>

            <p>
              Replace the placeholder path with the
              approved Viraj image in the assets folder.
            </p>

          </div>
        `)
        .join("")}

    </section>


    <section class="section notice">

      <strong>
        How to add your real photos:
      </strong>

      Put the approved JPG/PNG files in the
      <code>assets</code> folder using the filenames
      shown above.

    </section>

  `, "product",
     "Product View",
     "Photo slots prepared for approved Viraj images.");
}


/* -------------------------
   SALESMAN MODE
------------------------- */

function sales() {

  return shell(`

    <section class="section sales">

      <h3>
        Salesman Mode
      </h3>

      <p>
        Use this screen while standing with the customer.
        The salesperson can follow the flow without
        memorising the full speech.
      </p>

      <ol>

        ${DATA.salesSteps
          .map(step => `<li>${step}</li>`)
          .join("")}

      </ol>

    </section>


    <section class="section grid grid-3">

      ${[
        "Blade demo",
        "Gearbox demo",
        "Guarantee demo"
      ]
        .map((title, index) => `
          <div class="card searchable">

            <span class="badge">
              Step ${index + 1}
            </span>

            <h4>
              ${title}
            </h4>

            <p>
              Open the matching feature and show the
              same component on the physical Rotavator.
            </p>

          </div>
        `)
        .join("")}

    </section>


    <section class="section contact">

      <div>

        <h3>
          Close the conversation
        </h3>

        <p>
          Ask tractor HP, soil type and required width
          before giving the final recommendation.
        </p>

      </div>

      <div class="numbers">

        ${DATA.contacts
          .map(number => `<span class="number">${number}</span>`)
          .join("")}

      </div>

    </section>

  `, "sales",
     "Salesman Mode",
     "A simple guided sales flow for the tablet.");
}


/* -------------------------
   UTILITIES
------------------------- */

function escapeText(value) {
  return value.replace(/'/g, "\\'");
}


function searchCards(query) {

  query = (query || "")
    .toLowerCase()
    .trim();

  document
    .querySelectorAll(".searchable")
    .forEach(element => {

      const text =
        element.innerText.toLowerCase();

      element.style.display =
        !query || text.includes(query)
          ? ""
          : "none";
    });
}


function showFeature(title) {

  const feature =
    DATA.features.find(item => item.title === title);

  if (!feature) {
    return;
  }

  alert(
    `${feature.title}\n\n` +
    `${feature.detail}\n\n` +
    `For the production version, this can open ` +
    `the actual Viraj photograph, specification card ` +
    `and a short sales explanation.`
  );
}


/* -------------------------
   ROUTING
------------------------- */

const pages = {
  home,
  why,
  features,
  compare,
  product: productView,
  sales
};


function navigate(id) {

  document.getElementById("app").innerHTML =
    pages[id]();

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}


/* Start */
navigate("home");