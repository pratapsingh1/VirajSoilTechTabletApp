const DATA = {

  contacts: [
    "9011773275",
    "7385760222",
    "9011773262"
  ],

  heroImages: [
    "assets/VVKL7416.JPG",
    "assets/VVKL7417.JPG",
    "assets/VVKL7438.JPG"
  ],

  gallery: [
    {
      title: "Full Machine",
      image: "assets/VVKL7416.JPG"
    },
    {
      title: "Blade Arrangement",
      image: "assets/VVKL7454.JPG"
    },
    {
      title: "Corner Blade",
      image: "assets/VVKL7455.JPG"
    },
    {
      title: "Side Gearbox",
      image: "assets/VVKL7473.JPG"
    },
    {
      title: "Strong Structure",
      image: "assets/VVKL7438.JPG"
    },
    {
      title: "Product Finish",
      image: "assets/VVKL7417.JPG"
    }
  ],

  features: [

    {
      id: "blade",
      icon: "6",
      tag: "BLADE SYSTEM",

      title:
        "Corner Blade Arrangement",

      summary:
        "Show the customer the working-width story visually.",

      detail:
        "The supplied Viraj sales material highlights a 6-blade arrangement at the corner to target more uniform full-width tillage and reduce unnecessary repeat work.",

      image:
        "assets/VVKL7454.JPG",

      benefits: [
        "Full-width focus",
        "Less repeat work",
        "Easy visual demo"
      ]
    },


    {
      id: "direction",
      icon: "↗",
      tag: "BLADE SYSTEM",

      title:
        "Outer-Facing Corner Blade",

      summary:
        "Explain the corner blade direction.",

      detail:
        "The supplied sales material positions the outer-facing corner blade design as a way to reduce residue, rope, cloth and straw sticking around the side.",

      image:
        "assets/VVKL7455.JPG",

      benefits: [
        "Residue focus",
        "Cleaner side area",
        "Simple physical demo"
      ]
    },


    {
      id: "gearbox",
      icon: "21",
      tag: "GEARBOX",

      title:
        "Side Gearbox Support",

      summary:
        "Highlight the gearbox support design.",

      detail:
        "The supplied script specifies 21-number high-tension lock nut-bolts, 6 support bolts and an outer check nut.",

      image:
        "assets/VVKL7473.JPG",

      benefits: [
        "21-number bolts",
        "6 support bolts",
        "Outer check nut"
      ]
    },


    {
      id: "springs",
      icon: "4",
      tag: "CONSTRUCTION",

      title:
        "Four-Spring Support",

      summary:
        "Show the rear support system.",

      detail:
        "The supplied product material highlights four spring supports instead of two.",

      image:
        "assets/VVKL7438.JPG",

      benefits: [
        "4 springs",
        "Rear support",
        "Physical inspection"
      ]
    },


    {
      id: "structure",
      icon: "▣",
      tag: "CONSTRUCTION",

      title:
        "Heavy Structure",

      summary:
        "Body, base plate and clamp support.",

      detail:
        "The supplied material highlights heavy body construction, a thicker base plate and double-clamp support.",

      image:
        "assets/VVKL7438.JPG",

      benefits: [
        "Heavy body",
        "Thick base",
        "Double clamp"
      ]
    },


    {
      id: "guarantee",
      icon: "✓",
      tag: "GUARANTEE",

      title:
        "Written Guarantee",

      summary:
        "Give the customer clarity before purchase.",

      detail:
        "The supplied material emphasizes written guarantee terms and piece-to-piece replacement where applicable.",

      image:
        "assets/VVKL7417.JPG",

      benefits: [
        "Written terms",
        "Clear conditions",
        "Customer confidence"
      ]
    }

  ],


  compare: [

    [
      "Corner blade",

      "Supplied script describes many market rotavators with 6 blades at center and fewer at corner.",

      "6-blade corner arrangement highlighted."
    ],


    [
      "Corner direction",

      "Supplied script states inward-facing corner blades may allow residue to collect.",

      "Outer-facing corner blade design highlighted."
    ],


    [
      "Gearbox support",

      "5 × 17-number support bolts mentioned in the supplied script.",

      "6 × 21-number high-tension lock nut-bolts + outer check nut mentioned."
    ],


    [
      "Rear springs",

      "2 springs mentioned in the supplied script.",

      "4 springs highlighted."
    ],


    [
      "Guarantee",

      "Verbal/unclear warranty is described as a pain point.",

      "Written guarantee terms highlighted."
    ]

  ],


  questions: [

    {
      key: "hp",

      question:
        "What tractor HP are you using?",

      options: [
        "45 HP",
        "50 HP",
        "55 HP",
        "60+ HP"
      ]
    },


    {
      key: "soil",

      question:
        "What type of soil do you usually work in?",

      options: [
        "Black Soil",
        "Medium Soil",
        "Mixed / Other",
        "Not sure"
      ]
    },


    {
      key: "usage",

      question:
        "How will you use the Rotavator?",

      options: [
        "Own Farm",
        "Rental / Commercial",
        "Both",
        "Not sure"
      ]
    },


    {
      key: "width",

      question:
        "What working width are you considering?",

      options: [
        "5 FT",
        "6 FT",
        "7 FT",
        "Not sure"
      ]
    }

  ]

};


const NAV = [

  ["home", "Dashboard"],

  ["demo", "Customer Demo"],

  ["features", "Features"],

  ["compare", "Compare"],

  ["product", "Product View"],

  ["recommend", "Recommendation"],

  ["sales", "Salesman Mode"]

];


let currentPage = "home";

let heroIndex = 0;

let demoFeatureIndex = 0;

let recoStep = 0;

let recoAnswers = {};


/* -------------------------------------
   COMMON
------------------------------------- */

function nav(active) {

  return NAV
    .map(
      ([id, label]) => `
        <button
          class="${active === id ? "active" : ""}"
          onclick="go('${id}')">
          ${label}
        </button>
      `
    )
    .join("");

}


function contactCard() {

  return `

    <section class="section contact">

      <div>

        <h3>
          Viraj Agro Products
        </h3>

        <p>
          Product Demo • Written Guarantee •
          Local Support
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

    </section>

  `;

}


function shell(
  active,
  title,
  subtitle,
  content
) {

  return `

    <div class="shell">

      <aside class="sidebar">

        <div class="brand">

          <div class="brand-mark">
            V
          </div>


          <div>

            <strong>
              VIRAJ
            </strong>

            <small>
              SoilTech Product Advisor
            </small>

          </div>

        </div>


        <nav class="nav">

          ${nav(active)}

        </nav>


        <div class="sidebar-note">

          Tablet-first customer
          presentation experience.

          Product specifications and
          comparison claims should be
          approved by Viraj before public use.

        </div>

      </aside>


      <main class="main">

        <div class="topbar">

          <div class="page-title">

            <h1>
              ${title}
            </h1>

            <p>
              ${subtitle}
            </p>

          </div>


          <input
            class="search"
            placeholder="Search features..."
            oninput="searchCards(this.value)"
          />

        </div>


        ${content}

      </main>

    </div>

  `;

}


/* -------------------------------------
   HOME
------------------------------------- */

function home() {

  const cards =
    DATA.features
      .map(
        feature => `

          <article
            class="tile searchable">

            <div class="number">
              ${feature.icon}
            </div>


            <span class="tag">
              ${feature.tag}
            </span>


            <h4>
              ${feature.title}
            </h4>


            <p>
              ${feature.summary}
            </p>


            <button
              class="tile-link"
              onclick="openFeature('${feature.id}')">

              Explore →

            </button>

          </article>

        `
      )
      .join("");


  return shell(
    "home",

    "Viraj SoilTech",

    "Premium tablet presentation for customers and sales teams.",

    `

      <section class="hero">

        <div class="hero-copy">

          <div class="eyebrow">
            Agricultural Machinery • Rotavator
          </div>


          <h2>
            Don't just show the machine.
            Explain why it is built this way.
          </h2>


          <p class="hero-description">

            Move the customer from
            problem → feature → benefit
            → comparison → recommendation.

          </p>


          <div class="actions">

            <button
              class="btn btn-primary"
              onclick="go('demo')">

              Start Customer Demo →

            </button>


            <button
              class="btn btn-light"
              onclick="go('product')">

              Explore Product

            </button>

          </div>

        </div>


        <div class="hero-media">

          <img
            id="heroImage"
            src="${DATA.heroImages[0]}"
            alt="Viraj SoilTech Rotavator"
          />


          <div class="dots">

            ${DATA.heroImages
              .map(
                (_, i) => `
                  <span
                    class="dot ${i === 0 ? "active" : ""}">
                  </span>
                `
              )
              .join("")}

          </div>


          <div class="hero-badge">

            Viraj SoilTech Rotavator

          </div>

        </div>

      </section>


      <section class="section">

        <div class="section-head">

          <h3>
            Explore the machine
          </h3>

          <span>
            Tap to open a visual explanation
          </span>

        </div>


        <div class="tile-grid">

          ${cards}

        </div>

      </section>


      <section class="section stats">

        <div class="stat">

          <strong>
            6
          </strong>

          <span>
            Corner blade focus
          </span>

        </div>


        <div class="stat">

          <strong>
            21
          </strong>

          <span>
            Gearbox bolt size in script
          </span>

        </div>


        <div class="stat">

          <strong>
            4
          </strong>

          <span>
            Spring supports highlighted
          </span>

        </div>


        <div class="stat">

          <strong>
            3
          </strong>

          <span>
            Contact numbers
          </span>

        </div>

      </section>


      ${contactCard()}

    `
  );

}


/* -------------------------------------
   CUSTOMER DEMO
------------------------------------- */

function demo() {

  const feature =
    DATA.features[demoFeatureIndex];


  return shell(
    "demo",

    "Customer Demo",

    "A guided product conversation for use beside the machine.",

    `

      <section class="demo-layout section">

        <div class="demo-card">

          <div class="demo-head">

            <div>

              <div class="demo-meta">

                CUSTOMER DEMO
                /
                ${demoFeatureIndex + 1}
                OF
                ${DATA.features.length}

              </div>


              <div class="demo-title">

                ${feature.title}

              </div>


              <div class="demo-subtitle">

                ${feature.summary}

              </div>

            </div>


            <span class="tag">

              ${feature.tag}

            </span>

          </div>


          <div
            class="demo-image"
            id="demoImage">

            <img
              src="${feature.image}"
              alt="${feature.title}"
            />


            <div class="image-tools">

              <button
                class="icon-button"
                onclick="toggleZoom()">

                +

              </button>


              <button
                class="icon-button"
                onclick="openImage('${feature.image}','${feature.title}')">

                ↗

              </button>

            </div>

          </div>


          <div class="demo-content">

            <h4>
              What to explain
            </h4>


            <p>
              ${feature.detail}
            </p>


            <div class="benefits">

              ${feature.benefits
                .map(
                  benefit =>
                    `<div class="benefit">${benefit}</div>`
                )
                .join("")}

            </div>


            <div class="actions">

              <button
                class="btn btn-soft"
                onclick="go('features')">

                All Features

              </button>


              <button
                class="btn btn-primary"
                onclick="go('recommend')">

                Find the right option →

              </button>

            </div>

          </div>

        </div>


        <aside class="demo-side">

          <h4>
            Product walkthrough
          </h4>


          <p>
            Tap a feature while standing
            beside the physical machine.
          </p>


          <div class="feature-list">

            ${DATA.features
              .map(
                (item, index) => `

                  <button
                    class="${index === demoFeatureIndex ? "active" : ""}"
                    onclick="selectDemoFeature(${index})">

                    <span>
                      ${index + 1}. ${item.title}
                    </span>

                    <span>
                      →
                    </span>

                  </button>

                `
              )
              .join("")}

          </div>

        </aside>

      </section>


      ${contactCard()}

    `
  );

}


function selectDemoFeature(index) {

  demoFeatureIndex = index;

  document.getElementById(
    "app"
  ).innerHTML = demo();

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

}


function toggleZoom() {

  document
    .getElementById("demoImage")
    ?.classList.toggle("zoom");

}


/* -------------------------------------
   FEATURES
------------------------------------- */

function features() {

  return shell(
    "features",

    "Product Features",

    "Tap a feature to see its visual explanation.",

    `

      <section class="section">

        <div class="tile-grid">

          ${DATA.features
            .map(
              feature => `

                <article
                  class="tile searchable">

                  <div class="number">
                    ${feature.icon}
                  </div>


                  <span class="tag">
                    ${feature.tag}
                  </span>


                  <h4>
                    ${feature.title}
                  </h4>


                  <p>
                    ${feature.detail}
                  </p>


                  <button
                    class="tile-link"
                    onclick="openFeature('${feature.id}')">

                    View explanation →

                  </button>

                </article>

              `
            )
            .join("")}

        </div>

      </section>


      ${contactCard()}

    `
  );

}


/* -------------------------------------
   COMPARE
------------------------------------- */

function compare() {

  return shell(
    "compare",

    "Quick Comparison",

    "A simple customer-facing comparison view.",

    `

      <section class="section compare">

        <table>

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

            ${DATA.compare
              .map(
                row => `

                  <tr>

                    <td>
                      <strong>
                        ${row[0]}
                      </strong>
                    </td>


                    <td>
                      ${row[1]}
                    </td>


                    <td class="good">
                      ${row[2]}
                    </td>

                  </tr>

                `
              )
              .join("")}

          </tbody>

        </table>

      </section>


      <section class="section notice">

        <strong>
          Approval before public use:
        </strong>

        Have Viraj confirm every numeric
        specification and comparative
        statement before customer deployment.

      </section>


      ${contactCard()}

    `
  );

}


/* -------------------------------------
   PRODUCT VIEW
------------------------------------- */

function productView() {

  return shell(
    "product",

    "Product View",

    "Use the actual Viraj images during customer discussions.",

    `

      <section class="section gallery">

        ${DATA.gallery
          .map(
            (item, index) => `

              <div
                class="gallery-item ${index === 0 ? "big" : ""}"
                onclick="openImage('${item.image}','${item.title}')">

                <img
                  src="${item.image}"
                  alt="${item.title}"
                />


                <div class="gallery-label">

                  ${item.title}

                </div>

              </div>

            `
          )
          .join("")}

      </section>


      ${contactCard()}

    `
  );

}


/* -------------------------------------
   RECOMMENDATION
------------------------------------- */

function recommendation() {

  if (recoStep >= DATA.questions.length) {

    return recommendationResult();

  }


  const question =
    DATA.questions[recoStep];


  const progress =
    (recoStep /
      DATA.questions.length) *
    100;


  return shell(
    "recommend",

    "Recommendation",

    "A first-step customer profiling flow.",

    `

      <section class="section recommendation">

        <div class="recommendation-head">

          <div>

            <div class="eyebrow">
              Customer Recommendation
            </div>


            <h2>
              Let's understand the requirement.
            </h2>


            <p>

              Ask a few simple questions
              before suggesting the appropriate
              product size or configuration.

            </p>

          </div>


          <span class="tag">

            STEP
            ${recoStep + 1}
            /
            ${DATA.questions.length}

          </span>

        </div>


        <div class="progress">

          <span
            style="width:${progress}%">
          </span>

        </div>


        <div class="question">

          <h4>
            ${question.question}
          </h4>


          <div class="options">

            ${question.options
              .map(
                option => `

                  <button
                    class="option ${
                      recoAnswers[question.key] === option
                        ? "selected"
                        : ""
                    }"

                    onclick="
                      selectRecommendation(
                        '${question.key}',
                        '${option}'
                      )
                    ">

                    <strong>
                      ${option}
                    </strong>

                    <span>
                      Tap to select
                    </span>

                  </button>

                `
              )
              .join("")}

          </div>

        </div>


        <div class="recommendation-actions">

          <button
            class="btn btn-light"
            onclick="resetRecommendation()">

            Reset

          </button>


          <button
            class="btn btn-primary"
            onclick="nextRecommendation()">

            Next →

          </button>

        </div>

      </section>

    `
  );

}


function selectRecommendation(
  key,
  value
) {

  recoAnswers[key] = value;

  renderRecommendation();

}


function nextRecommendation() {

  const question =
    DATA.questions[recoStep];


  if (!recoAnswers[question.key]) {

    toast(
      "Please select an option first."
    );

    return;

  }


  recoStep++;

  renderRecommendation();

}


function resetRecommendation() {

  recoStep = 0;

  recoAnswers = {};

  renderRecommendation();

}


function renderRecommendation() {

  document.getElementById(
    "app"
  ).innerHTML =
    recommendation();

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

}


function recommendationResult() {

  return shell(
    "recommend",

    "Customer Profile",

    "Review the requirement before suggesting a model.",

    `

      <section class="section recommendation">

        <div class="recommendation-head">

          <div>

            <div class="eyebrow">
              PROFILE COMPLETE
            </div>


            <h2>
              Customer requirement captured.
            </h2>


            <p>

              This first demo intentionally does
              not invent a model recommendation.
              The final version should use Viraj's
              approved tractor-HP/model matrix.

            </p>

          </div>

        </div>


        <div class="result">

          <div class="result-box">

            <h4>
              Customer profile
            </h4>


            <div class="pills">

              ${Object.entries(recoAnswers)
                .map(
                  ([key, value]) =>
                    `<span class="pill">${key.toUpperCase()}: ${value}</span>`
                )
                .join("")}

            </div>

          </div>


          <div class="result-box">

            <h4>
              Next action
            </h4>


            <p>

              Open the approved Viraj
              specification/model screen,
              confirm compatibility and
              then discuss the price.

            </p>


            <div class="warning">

              Model recommendations should
              come from Viraj's approved
              specification matrix rather than
              an invented rule.

            </div>

          </div>

        </div>


        <div class="actions">

          <button
            class="btn btn-light"
            onclick="resetRecommendation()">

            Start Again

          </button>


          <button
            class="btn btn-primary"
            onclick="go('features')">

            Explore Features →

          </button>

        </div>

      </section>


      ${contactCard()}

    `
  );

}


/* -------------------------------------
   SALESMAN
------------------------------------- */

function sales() {

  const steps = [

    "Ask the farmer what problems they face.",

    "Open the matching feature.",

    "Show the same component physically.",

    "Use Compare when required.",

    "Show written guarantee.",

    "Ask tractor HP and soil type.",

    "Confirm working width.",

    "Discuss size and price last."

  ];


  return shell(
    "sales",

    "Salesman Mode",

    "A guided conversation for the salesperson.",

    `

      <section class="section hero">

        <div class="hero-copy">

          <div class="eyebrow">
            Guided Selling
          </div>


          <h2>
            Let the tablet carry the long explanation.
          </h2>


          <p class="hero-description">

            The salesperson can focus on the
            customer while the application handles
            the product explanation visually.

          </p>


          <div class="actions">

            <button
              class="btn btn-primary"
              onclick="go('demo')">

              Launch Customer Demo →

            </button>

          </div>

        </div>


        <div class="hero-media">

          <img
            src="assets/VVKL7417.JPG"
            alt="Viraj SoilTech"
          />

        </div>

      </section>


      <section class="section">

        <div class="tile-grid">

          ${steps
            .map(
              (step, index) => `

                <div class="tile">

                  <div class="number">
                    ${index + 1}
                  </div>


                  <span class="tag">
                    STEP ${index + 1}
                  </span>


                  <h4>
                    ${step}
                  </h4>


                  <p>
                    Keep the explanation visual
                    and connected to the machine.
                  </p>

                </div>

              `
            )
            .join("")}

        </div>

      </section>


      ${contactCard()}

    `
  );

}


/* -------------------------------------
   MODALS
------------------------------------- */

function openFeature(id) {

  const feature =
    DATA.features.find(
      item => item.id === id
    );


  if (!feature) return;


  document.getElementById(
    "modalBody"
  ).innerHTML = `

    <span class="tag">
      ${feature.tag}
    </span>


    <h2 id="modalTitle">
      ${feature.title}
    </h2>


    <p>
      ${feature.detail}
    </p>


    <div class="benefits">

      ${feature.benefits
        .map(
          benefit =>
            `<div class="benefit">${benefit}</div>`
        )
        .join("")}

    </div>


    <div class="actions">

      <button
        class="btn btn-primary"
        onclick="
          closeModal();
          demoFeatureIndex =
            ${DATA.features.indexOf(feature)};
          go('demo');
        ">

        Use in Customer Demo →

      </button>


      <button
        class="btn btn-soft"
        onclick="
          openImage(
            '${feature.image}',
            '${feature.title}'
          );
        ">

        Open Product Photo

      </button>

    </div>

  `;


  showModal();

}


function openImage(
  src,
  title
) {

  document.getElementById(
    "modalBody"
  ).innerHTML = `

    <span class="tag">
      VIRAJ SOILTECH
    </span>


    <h2 id="modalTitle">
      ${title}
    </h2>


    <div class="modal-image">

      <img
        src="${src}"
        alt="${title}"
      />

    </div>

  `;


  showModal();

}


function showModal() {

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


/* -------------------------------------
   SEARCH
------------------------------------- */

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


/* -------------------------------------
   TOAST
------------------------------------- */

function toast(message) {

  const element =
    document.getElementById(
      "toast"
    );


  element.textContent =
    message;


  element.classList.add(
    "show"
  );


  clearTimeout(
    window.__toastTimer
  );


  window.__toastTimer =
    setTimeout(
      () => {

        element.classList.remove(
          "show"
        );

      },
      1800
    );

}


/* -------------------------------------
   ROUTING
------------------------------------- */

const pages = {

  home,

  demo,

  features,

  compare,

  product: productView,

  recommend: recommendation,

  sales

};


function go(page) {

  currentPage = page;

  const renderer =
    pages[page] ||
    home;


  document.getElementById(
    "app"
  ).innerHTML =
    renderer();


  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

}


/* -------------------------------------
   HERO CAROUSEL
------------------------------------- */

setInterval(
  () => {

    if (
      currentPage !== "home"
    ) {

      return;

    }


    heroIndex =
      (heroIndex + 1) %
      DATA.heroImages.length;


    const image =
      document.getElementById(
        "heroImage"
      );


    if (!image) return;


    image.style.opacity =
      "0";


    setTimeout(
      () => {

        image.src =
          DATA.heroImages[
            heroIndex
          ];


        image.style.opacity =
          "1";


        document
          .querySelectorAll(".dot")
          .forEach(
            (dot, index) => {

              dot.classList.toggle(
                "active",
                index === heroIndex
              );

            }
          );

      },
      220
    );

  },
  4500
);


/* -------------------------------------
   GLOBAL KEYBOARD
------------------------------------- */

document.addEventListener(
  "keydown",
  event => {

    if (
      event.key === "Escape"
    ) {

      closeModal();

    }

  }
);


/* START */

go("home");