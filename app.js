/* =========================================================
   VIRAJ SOILTECH
   TABLET PRODUCT ADVISOR - V3
========================================================= */


/* =========================================================
   DATA
========================================================= */

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
      title: "Cleaning / Side Area",
      image: "assets/VVKL7466.JPG"
    },

    {
      title: "Side Gearbox",
      image: "assets/VVKL7473.JPG"
    },

    {
      title: "Strong Structure",
      image: "assets/VVKL7438.JPG"
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
        "Explain the working-width story visually.",

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

        "Physical demonstration"

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

        "4 spring support",

        "Rear structure",

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
        "What soil do you usually work in?",

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


/* =========================================================
   PROVISIONAL DEMO RECOMMENDATION
   Replace later with Viraj's approved matrix.
========================================================= */

const DEMO_WIDTH_RULES = {

  "45 HP": "5 FT",

  "50 HP": "5 FT",

  "55 HP": "6 FT",

  "60+ HP": "7 FT"

};


/* =========================================================
   STATE
========================================================= */

let currentPage = "home";

let heroIndex = 0;

let demoFeatureIndex = 0;

let recommendationStep = 0;

let recommendationAnswers = {};


let viewerScale = 1;

let viewerX = 0;

let viewerY = 0;

let dragging = false;

let dragStartX = 0;

let dragStartY = 0;

let dragOriginX = 0;

let dragOriginY = 0;


/* =========================================================
   NAVIGATION
========================================================= */

const NAV_ITEMS = [

  ["home", "Dashboard"],

  ["demo", "Customer Demo"],

  ["features", "Features"],

  ["compare", "Compare"],

  ["product", "Product View"],

  ["recommend", "Recommendation"],

  ["sales", "Salesman Mode"]

];


function navigation(active) {

  return NAV_ITEMS
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


/* =========================================================
   COMMON SHELL
========================================================= */

function contactSection() {

  return `

    <section class="section contact">

      <div>

        <h3>
          Viraj Agro Products
        </h3>

        <p>
          Product Demo • Written Guarantee • Local Support
        </p>

      </div>


      <div class="numbers">

        ${DATA.contacts
          .map(
            n =>
              `<span class="number">${n}</span>`
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

          ${navigation(active)}

        </nav>


        <div class="sidebar-note">

          Tablet-first customer
          presentation experience.

          Product specifications and
          comparative claims should be
          approved before public use.

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


/* =========================================================
   DASHBOARD
========================================================= */

function home() {

  const tiles =
    DATA.features
      .map(
        (feature) => `

          <article
            class="tile searchable">

            <div class="tile-number">

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

    "Premium tablet product presentation.",

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


          <p>

            Move the customer from
            problem → feature → benefit
            → comparison → recommendation.

          </p>


          <div class="actions">

            <button
              class="btn btn-primary"
              onclick="startDemo()">

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
          >


          <div
            id="heroDots"
            class="hero-dots">

            ${DATA.heroImages
              .map(
                (_, index) => `
                  <span
                    class="hero-dot ${
                      index === 0
                        ? "active"
                        : ""
                    }">
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
            Tap any point
          </span>

        </div>


        <div class="tile-grid">

          ${tiles}

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
            Gearbox bolt size
          </span>

        </div>


        <div class="stat">

          <strong>
            4
          </strong>

          <span>
            Spring supports
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


      ${contactSection()}

    `

  );

}


/* =========================================================
   CUSTOMER DEMO
========================================================= */

function demo() {

  const feature =
    DATA.features[
      demoFeatureIndex
    ];


  return shell(

    "demo",

    "Customer Demo",

    "A guided visual conversation for use beside the physical machine.",

    `

      <section class="section demo-layout">

        <div class="demo-card">

          <div class="demo-head">

            <div>

              <div class="demo-meta">

                CUSTOMER DEMO
                •
                ${demoFeatureIndex + 1}
                /
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
            id="demoImage"
            class="demo-image">

            <img
              src="${feature.image}"
              alt="${feature.title}"
            >


            <div class="image-tools">

              <button
                class="icon-btn"
                onclick="toggleDemoZoom()"
                title="Zoom">

                +

              </button>


              <button
                class="icon-btn"
                onclick="
                  openImage(
                    '${feature.image}',
                    '${escapeJs(feature.title)}'
                  )
                "
                title="Open larger">

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
                  b =>
                    `<div class="benefit">${b}</div>`
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

                Find Suitable Option →

              </button>

            </div>

          </div>

        </div>


        <aside class="demo-side">

          <h4>
            Product Walkthrough
          </h4>


          <p>

            Tap a feature while
            standing beside the machine.

          </p>


          <div class="feature-list">

            ${DATA.features
              .map(
                (item, index) => `

                  <button
                    class="${
                      index === demoFeatureIndex
                        ? "active"
                        : ""
                    }"

                    onclick="
                      selectDemoFeature(${index})
                    ">

                    <span>
                      ${index + 1}.
                      ${item.title}
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


      ${contactSection()}

    `

  );

}


function startDemo() {

  demoFeatureIndex = 0;

  go("demo");

}


function selectDemoFeature(index) {

  demoFeatureIndex = index;

  go("demo");

}


function toggleDemoZoom() {

  document
    .getElementById("demoImage")
    ?.classList.toggle("zoom");

}


/* =========================================================
   FEATURES
========================================================= */

function features() {

  return shell(

    "features",

    "Product Features",

    "Tap any feature to open the customer explanation.",

    `

      <section class="section">

        <div class="tile-grid">

          ${DATA.features
            .map(
              feature => `

                <article
                  class="tile searchable">

                  <div
                    class="tile-number">

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
                    onclick="
                      openFeature(
                        '${feature.id}'
                      )
                    ">

                    View visual explanation →

                  </button>

                </article>

              `
            )
            .join("")}

        </div>

      </section>


      ${contactSection()}

    `

  );

}


/* =========================================================
   FEATURE MODAL
========================================================= */

function openFeature(id) {

  const feature =
    DATA.features.find(
      x => x.id === id
    );


  if (!feature) {

    return;

  }


  document.getElementById(
    "modalBody"
  ).innerHTML = `

    <span class="tag">

      ${feature.tag}

    </span>


    <h2>

      ${feature.title}

    </h2>


    <p>

      ${feature.detail}

    </p>


    <div class="benefits">

      ${feature.benefits
        .map(
          b =>
            `<div class="benefit">${b}</div>`
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
            '${escapeJs(feature.title)}'
          )
        ">

        Open Larger Photo

      </button>

    </div>

  `;


  showModal();

}


/* =========================================================
   IMAGE VIEWER
========================================================= */

function openImage(
  source,
  title
) {

  viewerScale = 1;

  viewerX = 0;

  viewerY = 0;


  document.getElementById(
    "modalBody"
  ).innerHTML = `

    <span class="tag">
      VIRAJ SOILTECH
    </span>


    <h2>

      ${title}

    </h2>


    <p>

      Use zoom and drag to inspect
      the product detail.

    </p>


    <div
      class="viewer"
      id="viewer">

      <img
        id="viewerImage"
        src="${source}"
        alt="${title}"
        draggable="false"
      >


      <div class="viewer-label">

        ${title}

      </div>


      <div class="viewer-controls">

        <button
          class="viewer-btn"
          onclick="zoomViewer(.25)"
          title="Zoom in">

          +

        </button>


        <button
          class="viewer-btn"
          onclick="zoomViewer(-.25)"
          title="Zoom out">

          −

        </button>


        <button
          class="viewer-btn"
          onclick="resetViewer()"
          title="Reset">

          ⟳

        </button>


        <button
          class="viewer-btn"
          onclick="closeModal()"
          title="Close">

          ×

        </button>

      </div>

    </div>

  `;


  showModal();

  setupViewer();

}


function setupViewer() {

  const viewer =
    document.getElementById(
      "viewer"
    );


  const image =
    document.getElementById(
      "viewerImage"
    );


  if (!viewer || !image) {

    return;

  }


  viewer.addEventListener(
    "wheel",

    event => {

      event.preventDefault();

      zoomViewer(
        event.deltaY < 0
          ? .15
          : -.15
      );

    },

    {
      passive: false
    }

  );


  image.addEventListener(
    "pointerdown",

    event => {

      dragging = true;

      image.setPointerCapture(
        event.pointerId
      );


      image.classList.add(
        "dragging"
      );


      dragStartX =
        event.clientX;

      dragStartY =
        event.clientY;

      dragOriginX =
        viewerX;

      dragOriginY =
        viewerY;

    }

  );


  image.addEventListener(
    "pointermove",

    event => {

      if (!dragging) {

        return;

      }


      viewerX =
        dragOriginX +
        (
          event.clientX -
          dragStartX
        );

      viewerY =
        dragOriginY +
        (
          event.clientY -
          dragStartY
        );


      updateViewer();

    }

  );


  image.addEventListener(
    "pointerup",
    stopDragging
  );


  image.addEventListener(
    "pointercancel",
    stopDragging
  );

}


function stopDragging() {

  dragging = false;


  document
    .getElementById(
      "viewerImage"
    )
    ?.classList.remove(
      "dragging"
    );

}


function zoomViewer(
  amount
) {

  viewerScale += amount;


  viewerScale =
    Math.max(
      1,
      Math.min(
        4,
        viewerScale
      )
    );


  updateViewer();

}


function resetViewer() {

  viewerScale = 1;

  viewerX = 0;

  viewerY = 0;


  updateViewer();

}


function updateViewer() {

  const image =
    document.getElementById(
      "viewerImage"
    );


  if (!image) {

    return;

  }


  image.style.transform =
    `
      translate(
        ${viewerX}px,
        ${viewerY}px
      )
      scale(
        ${viewerScale}
      )
    `;

}


/* =========================================================
   COMPARE
========================================================= */

function compare() {

  return shell(

    "compare",

    "Quick Comparison",

    "Use this view when the customer wants a side-by-side explanation.",

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


      <section class="section warning">

        Numeric specifications and
        comparative statements should
        be approved by Viraj before public use.

      </section>


      ${contactSection()}

    `

  );

}


/* =========================================================
   PRODUCT VIEW
========================================================= */

function productView() {

  return shell(

    "product",

    "Product View",

    "Tap any image to inspect the product in detail.",

    `

      <section class="section gallery">

        ${DATA.gallery
          .map(
            (item, index) => `

              <div
                class="
                  gallery-item
                  ${index === 0 ? "big" : ""}
                "

                onclick="
                  openImage(
                    '${item.image}',
                    '${escapeJs(item.title)}'
                  )
                ">

                <img
                  src="${item.image}"
                  alt="${item.title}"
                >


                <div class="gallery-label">

                  ${item.title}

                </div>

              </div>

            `
          )
          .join("")}

      </section>


      ${contactSection()}

    `

  );

}


/* =========================================================
   RECOMMENDATION
========================================================= */

function recommendation() {

  if (
    recommendationStep >=
    DATA.questions.length
  ) {

    return recommendationResult();

  }


  const question =
    DATA.questions[
      recommendationStep
    ];


  const progress =
    (
      recommendationStep /
      DATA.questions.length
    ) * 100;


  return shell(

    "recommend",

    "Recommendation",

    "Capture the customer's requirement before suggesting a model.",

    `

      <section class="section recommendation">

        <div class="recommendation-top">

          <div>

            <div class="eyebrow">

              CUSTOMER PROFILING

            </div>


            <h2>

              Let's understand
              the requirement.

            </h2>


            <p>

              Answer four simple questions.
              The current demo uses provisional
              recommendation logic that can later
              be replaced with Viraj's approved
              compatibility matrix.

            </p>

          </div>


          <span class="tag">

            STEP
            ${recommendationStep + 1}
            /
            ${DATA.questions.length}

          </span>

        </div>


        <div class="progress">

          <span
            style="
              width:${progress}%
            ">
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
                    class="
                      option
                      ${
                        recommendationAnswers[
                          question.key
                        ] === option

                          ? "selected"

                          : ""
                      }
                    "

                    onclick="
                      selectRecommendation(
                        '${question.key}',
                        '${escapeJs(option)}'
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
            onclick="
              resetRecommendation()
            ">

            Reset

          </button>


          <button
            class="btn btn-primary"
            onclick="
              nextRecommendation()
            ">

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

  recommendationAnswers[
    key
  ] = value;


  renderRecommendation();

}


function nextRecommendation() {

  const question =
    DATA.questions[
      recommendationStep
    ];


  if (
    !recommendationAnswers[
      question.key
    ]
  ) {

    toast(
      "Please select an option first."
    );

    return;

  }


  recommendationStep++;

  renderRecommendation();

}


function resetRecommendation() {

  recommendationStep = 0;

  recommendationAnswers = {};

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


/* =========================================================
   RECOMMENDATION RESULT
========================================================= */

function recommendationResult() {

  const hp =
    recommendationAnswers.hp ||
    "Not specified";


  const soil =
    recommendationAnswers.soil ||
    "Not specified";


  const usage =
    recommendationAnswers.usage ||
    "Not specified";


  const width =
    recommendationAnswers.width ||
    "Not specified";


  const provisionalWidth =
    DEMO_WIDTH_RULES[hp] ||
    "6 FT";


  const finalWidth =
    width !== "Not sure" &&
    width !== "Not specified"

      ? width

      : provisionalWidth;


  let salesReason;


  if (
    usage === "Rental / Commercial" ||
    usage === "Both"
  ) {

    salesReason =
      "Focus the conversation on construction, gearbox support, field usage and service support.";

  } else {

    salesReason =
      "Focus the conversation on working width, blade design, construction and written guarantee.";

  }


  return shell(

    "recommend",

    "Customer Profile",

    "Provisional recommendation generated.",

    `

      <section class="section recommendation">

        <div class="recommendation-top">

          <div>

            <div class="eyebrow">

              PROFILE COMPLETE

            </div>


            <h2>

              Suggested SoilTech setup

            </h2>


            <p>

              The application has captured
              the customer's requirements and
              generated a starting point.

            </p>

          </div>


          <span class="tag">

            DEMO LOGIC

          </span>

        </div>


        <div class="recommended-model">

          <small>

            PROVISIONAL STARTING POINT

          </small>


          <strong>

            SoilTech ${finalWidth}

          </strong>


          <div class="pills">

            <span class="pill">
              Tractor: ${hp}
            </span>

            <span class="pill">
              Soil: ${soil}
            </span>

            <span class="pill">
              Usage: ${usage}
            </span>

            <span class="pill">
              Requested: ${width}
            </span>

          </div>

        </div>


        <div class="result-grid">

          <div class="result-box">

            <h4>

              Why this starting point?

            </h4>


            <p>

              ${salesReason}

            </p>

          </div>


          <div class="result-box">

            <h4>

              Salesperson next step

            </h4>


            <p>

              Show the ${finalWidth}
              product view, open the
              relevant feature cards,
              confirm the actual Viraj
              specification and then
              discuss price.

            </p>

          </div>

        </div>


        <div class="warning">

          <strong>
            DEMO ONLY:
          </strong>

          The current HP-to-width mapping
          is provisional. Replace it with
          Viraj's approved model/HP/width
          compatibility matrix before production use.

        </div>


        <div class="actions">

          <button
            class="btn btn-light"
            onclick="
              resetRecommendation()
            ">

            Start Again

          </button>


          <button
            class="btn btn-primary"
            onclick="
              go('product')
            ">

            Show Product →

          </button>

        </div>

      </section>


      ${contactSection()}

    `

  );

}


/* =========================================================
   SALESMAN MODE
========================================================= */

function sales() {

  return shell(

    "sales",

    "Salesman Mode",

    "A guided sequence for customer conversations.",

    `

      <section class="section hero">

        <div class="hero-copy">

          <div class="eyebrow">

            GUIDED SELLING

          </div>


          <h2>

            Let the tablet
            carry the explanation.

          </h2>


          <p>

            The salesperson can focus
            on the customer while the
            application handles the
            visual presentation.

          </p>


          <div class="actions">

            <button
              class="btn btn-primary"
              onclick="startDemo()">

              Launch Customer Demo →

            </button>

          </div>

        </div>


        <div class="hero-media">

          <img
            src="assets/VVKL7417.JPG"
            alt="Viraj SoilTech Rotavator"
          >

        </div>

      </section>


      <section class="section">

        <div class="tile-grid">

          ${[
            "Ask about the old rotavator.",

            "Open the relevant feature.",

            "Show the physical component.",

            "Use Compare if needed.",

            "Show the written guarantee.",

            "Ask tractor HP and soil.",

            "Confirm working width.",

            "Discuss price last."

          ]
            .map(
              (step, index) => `

                <article class="tile">

                  <div
                    class="tile-number">

                    ${index + 1}

                  </div>


                  <span class="tag">

                    STEP ${index + 1}

                  </span>


                  <h4>

                    ${step}

                  </h4>


                  <p>

                    Keep the explanation
                    short and visual.

                  </p>

                </article>

              `
            )
            .join("")}

        </div>

      </section>


      ${contactSection()}

    `

  );

}


/* =========================================================
   SEARCH
========================================================= */

function searchCards(
  query
) {

  query =
    (
      query || ""
    )
      .trim()
      .toLowerCase();


  document
    .querySelectorAll(
      ".searchable"
    )
    .forEach(
      card => {

        const text =
          card.innerText
            .toLowerCase();


        card.style.display =
          !query ||
          text.includes(query)

            ? ""

            : "none";

      }
    );

}


/* =========================================================
   MODAL
========================================================= */

function showModal() {

  const modal =
    document.getElementById(
      "modal"
    );


  modal.classList.add(
    "show"
  );


  modal.setAttribute(
    "aria-hidden",
    "false"
  );

}


function closeModal() {

  const modal =
    document.getElementById(
      "modal"
    );


  modal.classList.remove(
    "show"
  );


  modal.setAttribute(
    "aria-hidden",
    "true"
  );

}


/* =========================================================
   TOAST
========================================================= */

function toast(
  message
) {

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


/* =========================================================
   HELPERS
========================================================= */

function escapeJs(
  value
) {

  return String(value)
    .replace(
      /\\/g,
      "\\\\"
    )
    .replace(
      /'/g,
      "\\'"
    );

}


/* =========================================================
   PAGE ROUTER
========================================================= */

const PAGES = {

  home,

  demo,

  features,

  compare,

  product: productView,

  recommend: recommendation,

  sales

};


function go(
  page
) {

  currentPage =
    page;


  const renderer =
    PAGES[page] ||
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


/* =========================================================
   HERO AUTO SLIDE
========================================================= */

setInterval(

  () => {

    if (
      currentPage !== "home"
    ) {

      return;

    }


    heroIndex =
      (
        heroIndex + 1
      ) %
      DATA.heroImages.length;


    const image =
      document.getElementById(
        "heroImage"
      );


    if (!image) {

      return;

    }


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
          .querySelectorAll(
            ".hero-dot"
          )
          .forEach(
            (
              dot,
              index
            ) => {

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


/* =========================================================
   ESCAPE KEY
========================================================= */

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


/* =========================================================
   START APPLICATION
========================================================= */

go("home");