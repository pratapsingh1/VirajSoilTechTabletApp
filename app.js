const DATA = {

  brand: "Viraj Agro Products",

  product: "Viraj SoilTech Rotavator",

  tagline:
    "Strong design. Clear guarantee. Farmer-focused.",

  contacts: [
    "9011773275",
    "7385760222",
    "9011773262"
  ],

  heroImage:
    "assets/VVKL7416.JPG",

  features: [

    {
      id: "blade",
      icon: "6",
      category: "Blade",
      title: "Corner Blade Arrangement",

      short:
        "Full-width tillage focus.",

      detail:
        "The supplied Viraj sales material highlights a 6-blade arrangement at the corner to target more uniform full-width tillage and reduce unnecessary repeat work.",

      image:
        "assets/VVKL7454.JPG"
    },

    {
      id: "direction",
      icon: "↗",
      category: "Blade",
      title: "Outer-Facing Corner Blade",

      short:
        "Residue handling focus.",

      detail:
        "The supplied sales material positions the outer-facing corner blade design as a way to reduce residue, rope, cloth and straw sticking around the side.",

      image:
        "assets/VVKL7455.JPG"
    },

    {
      id: "gearbox",
      icon: "21",
      category: "Gearbox",
      title: "Side Gearbox Support",

      short:
        "21-number lock nut-bolts.",

      detail:
        "The supplied script specifies 21-number high-tension lock nut-bolts, 6 support bolts and an outer check nut.",

      image:
        "assets/VVKL7473.JPG"
    },

    {
      id: "springs",
      icon: "4",
      category: "Construction",
      title: "Four-Spring Support",

      short:
        "Rear support system.",

      detail:
        "The supplied material highlights four spring supports instead of two.",

      image:
        "assets/VVKL7438.JPG"
    },

    {
      id: "structure",
      icon: "▣",
      category: "Construction",
      title: "Heavy Structure",

      short:
        "Body, base plate and clamps.",

      detail:
        "The supplied material highlights heavy body construction, a thicker base plate and double-clamp support.",

      image:
        "assets/VVKL7438.JPG"
    },

    {
      id: "guarantee",
      icon: "✓",
      category: "Guarantee",
      title: "Written Guarantee",

      short:
        "Clear terms for the customer.",

      detail:
        "The supplied material emphasizes written guarantee terms and piece-to-piece replacement where applicable.",

      image:
        "assets/VVKL7417.JPG"
    }

  ],

  comparison: [

    {
      point: "Corner blade",
      market:
        "Supplied script describes many market rotavators with 6 blades at center and fewer at corner.",
      viraj:
        "6-blade corner arrangement highlighted."
    },

    {
      point: "Corner direction",
      market:
        "Supplied script states inward-facing corner blades may allow residue to collect.",
      viraj:
        "Outer-facing corner blade design highlighted."
    },

    {
      point: "Gearbox support",
      market:
        "5 × 17-number support bolts mentioned in the supplied script.",
      viraj:
        "6 × 21-number high-tension lock nut-bolts + outer check nut mentioned."
    },

    {
      point: "Rear springs",
      market:
        "2 springs mentioned in the supplied script.",
      viraj:
        "4 springs highlighted."
    },

    {
      point: "Guarantee",
      market:
        "Verbal/unclear warranty is described as a customer pain point.",
      viraj:
        "Written guarantee terms highlighted."
    }

  ],

  salesFlow: [

    "Ask about the farmer's current rotavator.",

    "Open the relevant feature.",

    "Show the same component physically.",

    "Use Compare for quick explanation.",

    "Show the written guarantee.",

    "Ask tractor HP and soil type.",

    "Confirm required working width.",

    "Discuss size and price last."

  ]

};


/* --------------------------------
   MACHINE PLACEHOLDER
-------------------------------- */

function machineGraphic() {

  return `

  <svg
    viewBox="0 0 720 360"
    aria-label="Rotavator illustration">

    <g
      fill="none"
      stroke-linecap="round"
      stroke-linejoin="round">

      <path
        d="M115 122h470l38 86H77z"
        fill="#d8532b"
        stroke="#703020"
        stroke-width="12"/>

      <path
        d="M150 122l45-60h310l45 60"
        fill="#e86b38"
        stroke="#703020"
        stroke-width="12"/>

      <path
        d="M190 62h270M165 95h390"
        stroke="#703020"
        stroke-width="10"/>

      <path
        d="M95 208h530"
        stroke="#673021"
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
        stroke="#26342e"
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
        stroke="#2d463b"
        stroke-width="11"/>
    </g>

    <g fill="#f5f4eb">
      <circle cx="118" cy="296" r="9"/>
      <circle cx="565" cy="296" r="9"/>
    </g>

  </svg>

  `;
}


/* --------------------------------
   NAVIGATION
-------------------------------- */

const NAV_ITEMS = [

  ["home", "Dashboard"],

  ["why", "Why SoilTech"],

  ["features", "Features"],

  ["compare", "Compare"],

  ["product", "Product View"],

  ["sales", "Salesman Mode"]

];


function nav(active) {

  return NAV_ITEMS
    .map(([id, label]) => `

      <button
        class="nav-button ${active === id ? "active" : ""}"
        onclick="go('${id}')">

        ${label}

      </button>

    `)
    .join("");

}


/* --------------------------------
   SHELL
-------------------------------- */

function shell(
  content,
  active,
  title,
  subtitle
) {

  return `

  <div class="shell">

    <aside class="sidebar">

      <div class="brand">

        <div class="brand-mark">
          V
        </div>

        <div class="brand-text">

          <strong>VIRAJ</strong>

          <span>
            SoilTech Product Advisor
          </span>

        </div>

      </div>


      <nav class="nav">

        ${nav(active)}

      </nav>


      <div class="sidebar-bottom">

        Designed as a tablet-first
        customer presentation tool.

        Product specifications and
        comparison claims should be
        approved by Viraj before
        public deployment.

      </div>

    </aside>


    <main class="main">

      <div class="topbar">

        <div class="title-area">

          <h1>
            ${title}
          </h1>

          <p>
            ${subtitle}
          </p>

        </div>


        <input
          class="search-box"
          placeholder="Search features..."
          oninput="searchCards(this.value)"
        />

      </div>


      ${content}


      <div class="contact-card">

        <div>

          <h3>
            ${DATA.brand}
          </h3>

          <p>
            Demo • Written Guarantee •
            Product Explanation • Local Support
          </p>

        </div>


        <div class="numbers">

          ${DATA.contacts
            .map(
              number =>
                `<span class="number">${number}</span>`
            )
            .join("")}

        </div>

      </div>

    </main>

  </div>

  `;

}


/* --------------------------------
   DASHBOARD
-------------------------------- */

function home() {

  return shell(

    `

    <section class="hero">

      <div class="hero-content">

        <div class="eyebrow">
          Agricultural Machinery • Rotavator
        </div>


        <h2>
          A smarter way to
          explain SoilTech.
        </h2>


        <p class="hero-description">

          Help the customer understand
          the blade system, gearbox,
          construction and guarantee
          visually before discussing price.

        </p>


        <div class="actions">

          <button
            class="btn btn-primary"
            onclick="go('why')">

            Start Customer Demo →

          </button>


          <button
            class="btn btn-light"
            onclick="go('compare')">

            Compare

          </button>

        </div>

      </div>


      <div class="hero-product">

        <img
          src="${DATA.heroImage}"
          alt="Viraj SoilTech Rotavator"

          onerror="
            this.style.display='none';
            this.parentElement.innerHTML +=
            '${machineGraphic()
              .replace(/'/g, "\\'")}';
          "
        />

      </div>

    </section>



    <section class="section">

      <div class="section-head">

        <h3>
          Explore SoilTech
        </h3>

        <span>
          Tap a point to explain it
        </span>

      </div>


      <div class="feature-grid">

        ${DATA.features
          .map(
            feature => `

              <article
                class="feature-card searchable">

                <div class="feature-number">

                  ${feature.icon}

                </div>


                <span class="tag">

                  ${feature.category}

                </span>


                <h4>
                  ${feature.title}
                </h4>


                <p>
                  ${feature.short}
                </p>


                <button
                  class="feature-open"
                  onclick="openFeature('${feature.id}')">

                  Explore →

                </button>

              </article>

            `
          )
          .join("")}

      </div>

    </section>



    <section class="section stats">

      <div class="stat">

        <span class="stat-value">
          6
        </span>

        <span class="stat-label">
          Corner blade focus
        </span>

      </div>


      <div class="stat">

        <span class="stat-value">
          21
        </span>

        <span class="stat-label">
          Gearbox bolt size in script
        </span>

      </div>


      <div class="stat">

        <span class="stat-value">
          4
        </span>

        <span class="stat-label">
          Spring supports highlighted
        </span>

      </div>


      <div class="stat">

        <span class="stat-value">
          3
        </span>

        <span class="stat-label">
          Contact numbers
        </span>

      </div>

    </section>

    `,

    "home",

    "Viraj SoilTech",

    "Interactive product presentation for customers and sales teams."

  );

}


/* --------------------------------
   WHY SOILTECH
-------------------------------- */

function why() {

  return shell(

    `

    <section class="hero">

      <div class="hero-content">

        <div class="eyebrow">
          Customer Conversation
        </div>


        <h2>
          Show the reason.
          Then show the machine.
        </h2>


        <p class="hero-description">

          The salesperson can use this
          tablet as a visual guide instead
          of memorising the entire sales speech.

        </p>


        <div class="actions">

          <button
            class="btn btn-primary"
            onclick="go('features')">

            Explore Features

          </button>

        </div>

      </div>


      <div class="hero-product">

        <img
          src="assets/VVKL7417.JPG"
          alt="Viraj SoilTech Rotavator"
        />

      </div>

    </section>


    <section class="section feature-layout">

      <div class="large-card">

        <span class="badge">
          Tillage
        </span>

        <h3>
          Corner blade arrangement
        </h3>

        <p>

          Use the real Viraj product
          photograph and highlight the
          center and corner blade areas.

        </p>


        <div
          class="diagram"
          style="
            margin-top:20px;
            padding:18px;
            border-radius:16px;
            background:#f0f5f1;
          ">

          <div
            style="
              display:flex;
              gap:5px;
              margin-bottom:18px;
            ">

            ${'<span style="height:12px;flex:1;background:#0b3d2e;border-radius:4px"></span>'.repeat(6)}

          </div>


          <div
            style="
              color:#68766e;
              font-size:11px;
              font-weight:800;
            ">

            CENTER / CORNER VISUAL EXPLANATION

          </div>

        </div>

      </div>


      <div class="visual-panel">

        <img
          src="assets/VVKL7454.JPG"
          alt="Viraj blade arrangement"
        />

      </div>

    </section>


    <section class="section">

      <div class="section-head">

        <h3>
          Farmer-friendly benefits
        </h3>

      </div>


      <div class="feature-grid">

        ${[
          [
            "TIME",
            "Explain unnecessary repeat work and the time impact."
          ],
          [
            "DIESEL",
            "Explain the fuel implication of repeat passes."
          ],
          [
            "CONFIDENCE",
            "Show visible construction and written terms."
          ]
        ]
          .map(
            item => `

              <div class="feature-card">

                <div class="feature-number">
                  ✓
                </div>

                <span class="tag">
                  Benefit
                </span>

                <h4>
                  ${item[0]}
                </h4>

                <p>
                  ${item[1]}
                </p>

              </div>

            `
          )
          .join("")}

      </div>

    </section>

    `,

    "why",

    "Why SoilTech?",

    "Turn technical details into a simple customer conversation."

  );

}


/* --------------------------------
   FEATURES
-------------------------------- */

function features() {

  return shell(

    `

    <section class="section">

      <div class="section-head">

        <h3>
          Product Features
        </h3>

        <span>
          ${DATA.features.length} core points
        </span>

      </div>


      <div class="feature-grid">

        ${DATA.features
          .map(
            feature => `

              <article
                class="feature-card searchable">

                <div class="feature-number">

                  ${feature.icon}

                </div>


                <span class="tag">

                  ${feature.category}

                </span>


                <h4>
                  ${feature.title}
                </h4>


                <p>
                  ${feature.detail}
                </p>


                <button
                  class="feature-open"
                  onclick="openFeature('${feature.id}')">

                  View visual explanation →

                </button>

              </article>

            `
          )
          .join("")}

      </div>

    </section>


    <section class="section">

      <div class="section-head">

        <h3>
          Sales flow
        </h3>

      </div>


      <div class="flow">

        ${DATA.salesFlow
          .map(
            (step, index) => `

              <div class="flow-step">

                <div class="flow-number">

                  ${index + 1}

                </div>


                <h4>
                  ${step}
                </h4>


                <p>
                  Keep it short, visual and
                  connected to the physical machine.
                </p>

              </div>

            `
          )
          .join("")}

      </div>

    </section>

    `,

    "features",

    "Product Features",

    "Show the feature, explain the reason, then show the physical component."

  );

}


/* --------------------------------
   FEATURE MODAL
-------------------------------- */

function openFeature(id) {

  const feature =
    DATA.features.find(
      item => item.id === id
    );

  if (!feature) return;


  document.getElementById(
    "modalContent"
  ).innerHTML = `

    <div class="modal-content-grid">

      <div class="modal-icon">

        ${feature.icon}

      </div>


      <div>

        <span class="badge">

          ${feature.category}

        </span>


        <h2>
          ${feature.title}
        </h2>


        <p>
          ${feature.detail}
        </p>


        <button
          class="btn btn-primary"
          onclick="go('product')">

          Open Product View

        </button>

      </div>

    </div>

  `;


  const modal =
    document.getElementById("modal");

  modal.classList.add("show");

  modal.setAttribute(
    "aria-hidden",
    "false"
  );

}


function closeModal() {

  const modal =
    document.getElementById("modal");

  modal.classList.remove("show");

  modal.setAttribute(
    "aria-hidden",
    "true"
  );

}


/* --------------------------------
   COMPARE
-------------------------------- */

function compare() {

  return shell(

    `

    <section class="section">

      <div class="section-head">

        <h3>
          Quick Comparison
        </h3>

        <span>
          Sales presentation view
        </span>

      </div>


      <div class="compare-wrap">

        <table class="compare-table">

          <thead>

            <tr>

              <th>
                Point
              </th>

              <th>
                Common market point
              </th>

              <th>
                SoilTech positioning
              </th>

            </tr>

          </thead>


          <tbody>

            ${DATA.comparison
              .map(
                item => `

                  <tr>

                    <td>
                      <strong>
                        ${item.point}
                      </strong>
                    </td>


                    <td>
                      ${item.market}
                    </td>


                    <td class="good">
                      ${item.viraj}
                    </td>

                  </tr>

                `
              )
              .join("")}

          </tbody>

        </table>

      </div>

    </section>


    <section class="section notice">

      <strong>
        Approval note:
      </strong>

      Numeric specifications and
      comparative language should be
      approved by Viraj before public use.

    </section>

    `,

    "compare",

    "Quick Comparison",

    "A customer-friendly comparison screen for the salesperson."

  );

}


/* --------------------------------
   PRODUCT VIEW
-------------------------------- */

function productView() {

  const images = [

    [
      "Full Machine",
      "assets/VVKL7416.JPG"
    ],

    [
      "Blade Arrangement",
      "assets/VVKL7454.JPG"
    ],

    [
      "Corner Blade",
      "assets/VVKL7455.JPG"
    ],

    [
      "Side Gearbox",
      "assets/VVKL7473.JPG"
    ],

    [
      "Strong Structure",
      "assets/VVKL7438.JPG"
    ],

    [
      "Final Product",
      "assets/VVKL7417.JPG"
    ]

  ];


  return shell(

    `

    <section class="section">

      <div class="section-head">

        <h3>
          Product View
        </h3>

        <span>
          Real Viraj product imagery
        </span>

      </div>


      <div class="gallery">

        ${images
          .map(
            ([label, image]) => `

              <div
                class="gallery-card"
                onclick="openImage('${image}','${label}')">

                <img
                  src="${image}"
                  alt="${label}"
                  onerror="
                    this.style.display='none';
                  "
                />


                <span class="gallery-label">

                  ${label}

                </span>

              </div>

            `
          )
          .join("")}

      </div>

    </section>


    <section class="section notice">

      <strong>
        Production asset step:
      </strong>

      Replace the six asset files with
      the approved original Viraj images.
      No changes are required to the UI.

    </section>

    `,

    "product",

    "Product View",

    "A visual gallery for customer-facing demonstrations."

  );

}


/* --------------------------------
   IMAGE MODAL
-------------------------------- */

function openImage(image, label) {

  document.getElementById(
    "modalContent"
  ).innerHTML = `

    <div>

      <span class="badge">
        Viraj SoilTech
      </span>


      <h2>
        ${label}
      </h2>


      <div
        style="
          margin-top:15px;
          border-radius:17px;
          overflow:hidden;
          background:#e8ede9;
        ">

        <img
          src="${image}"
          alt="${label}"
          style="
            width:100%;
            display:block;
            max-height:65vh;
            object-fit:contain;
          "
        />

      </div>

    </div>

  `;


  document
    .getElementById("modal")
    .classList.add("show");

}


/* --------------------------------
   SALESMAN MODE
-------------------------------- */

function sales() {

  return shell(

    `

    <section class="section">

      <div class="hero">

        <div class="hero-content">

          <div class="eyebrow">
            Salesman Mode
          </div>


          <h2>
            Let the tablet
            carry the conversation.
          </h2>


          <p class="hero-description">

            The employee doesn't need to
            memorise the complete script.
            Follow the sequence and show
            the machine physically.

          </p>

        </div>


        <div class="hero-product">

          <img
            src="assets/VVKL7417.JPG"
            alt="Viraj SoilTech"
          />

        </div>

      </div>

    </section>


    <section class="section">

      <div class="flow">

        ${DATA.salesFlow
          .map(
            (step, index) => `

              <div class="flow-step">

                <div class="flow-number">
                  ${index + 1}
                </div>

                <h4>
                  ${step}
                </h4>

                <p>
                  Use the corresponding
                  screen or physical component.
                </p>

              </div>

            `
          )
          .join("")}

      </div>

    </section>

    `,

    "sales",

    "Salesman Mode",

    "A guided flow for customer conversations."

  );

}


/* --------------------------------
   SEARCH
-------------------------------- */

function searchCards(query) {

  query =
    (query || "")
      .trim()
      .toLowerCase();


  document
    .querySelectorAll(".searchable")
    .forEach(card => {

      card.style.display =
        !query ||
        card.innerText
          .toLowerCase()
          .includes(query)

          ? ""

          : "none";

    });

}


/* --------------------------------
   ROUTER
-------------------------------- */

const pages = {

  home,

  why,

  features,

  compare,

  product: productView,

  sales

};


function go(page) {

  const render =
    pages[page] || home;

  document.getElementById(
    "app"
  ).innerHTML = render();

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

}


/* --------------------------------
   KEYBOARD
-------------------------------- */

document.addEventListener(
  "keydown",
  event => {

    if (event.key === "Escape") {

      closeModal();

    }

  }
);


/* --------------------------------
   START
-------------------------------- */

go("home");