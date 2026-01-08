const siteData = {
  rilamonastery: {
    id: "rilamonastery",
    name: "Рилски манастир",
    category: "Културно наследство",
    categoryKey: "cultural",
    year: 1983,
    location: "Югозападна България",
    summary: "Най-големият манастир в България и духовно средище, основано през X век.",
    description:
      "Рилският манастир е създаден от свети Иван Рилски и е най-значимият духовен и културен център на българите през вековете. Прочут е с уникалната си архитектура, изящни дърворезби и стенописи.",
    facts: [
      "Включен в списъка на ЮНЕСКО през 1983 г.",
      "Съхранява над 250 ръкописа и богат етнографски фонд.",
      "Главната манастирска църква е изографисана от Захарий Зограф.",
    ],
    galleryLabels: ["Каменни аркади", "Главна църква", "Манастирски двор"],
  },
  boyanachurch: {
    id: "boyanachurch",
    name: "Боянска църква",
    category: "Културно наследство",
    categoryKey: "cultural",
    year: 1979,
    location: "София",
    summary: "Средновековна църква с уникални стенописи от XIII век, предвещаващи Ренесанса.",
    description:
      "Боянската църква е триетажна структура, развивана на етапи между XI и XIX век. Стенописите от 1259 г. демонстрират високо майсторство и индивидуализирано изобразяване на лица, рядко срещано за епохата.",
    facts: [
      "Построена на три отделни етапа.",
      "Притежава 89 сцени с над 240 изображения.",
      "Призната за шедьовър на средновековното изкуство.",
    ],
    galleryLabels: ["Стенописи", "Камбанария", "Двор на църквата"],
  },
  pirinpark: {
    id: "pirinpark",
    name: "Национален парк \u201eПирин\u201c",
    category: "Природно наследство",
    categoryKey: "natural",
    year: 1983,
    location: "Югозападна България",
    summary: "Алпийски пейзажи, ледникови езера и древни бели мура в сърцето на планина Пирин.",
    description:
      "Национален парк \u201eПирин\u201c обхваща най-високите части на планината и е дом на богато биоразнообразие. Включва повече от 70 ледникови езера и вековни гори с реликтни видове.",
    facts: [
      "Площ от над 40 000 ха.",
      "Най-висок връх: Вихрен (2914 м).",
      "Дом на ендемични и реликтни растителни видове.",
    ],
    galleryLabels: ["Връх Вихрен", "Ледниково езеро", "Гора от бяла мура"],
  },
  srebarna: {
    id: "srebarna",
    name: "Биосферен резерват \u201eСребърна\u201c",
    category: "Природно наследство",
    categoryKey: "natural",
    year: 1983,
    location: "Североизточна България",
    summary: "Езеро с международно значение за редки и застрашени видове птици.",
    description:
      "Резерватът \u201eСребърна\u201c опазва крайдунавско езеро и влажни зони с ключово значение за размножаването на къдроглавия пеликан и десетки други редки птици.",
    facts: [
      "Разположен на миграционния път \"Виа Понтика\".",
      "Обявен за биосферен резерват през 1975 г.",
      "Дом на над 100 вида птици.",
    ],
    galleryLabels: ["Къдроглав пеликан", "Влажни зони", "Езерни тръстики"],
  },
  nestinarstvo: {
    id: "nestinarstvo",
    name: "Нестинарство",
    category: "Нематериално наследство",
    categoryKey: "intangible",
    year: 2009,
    location: "Странджански регион",
    summary: "Древен обичай с огнен танц, изпълняван на празника на св. св. Константин и Елена.",
    description:
      "Нестинарството е ритуал, в който танцьори боси върху жарава влизат в екстатично състояние. Символизира връзката между общността, вярата и природните сили.",
    facts: [
      "Включено в Представителния списък на нематериалното културно наследство през 2009 г.",
      "Ритуалът е съпроводен от гайди и тъпани.",
      "Изпълнява се в селата от Странджа и Източна Тракия.",
    ],
    galleryLabels: ["Огнен танц", "Ритуални икони", "Гайдари"],
  },
  surva: {
    id: "surva",
    name: "Фестивал \u201eСурва\u201c",
    category: "Нематериално наследство",
    categoryKey: "intangible",
    year: 2015,
    location: "Пернишки регион",
    summary: "Маскарадни игри с кукери за прогонване на злото и привличане на плодородие.",
    description:
      "Фестивалът \u201eСурва\u201c в Перник е най-голямото кукерско събитие в България, събиращо хиляди участници с богати костюми и звънци. Традицията има корени в древните езически вярвания.",
    facts: [
      "Част от нематериалното наследство на ЮНЕСКО от 2015 г.",
      "Поддържа общностната идентичност и солидарност.",
      "Участниците изработват костюмите си ръчно.",
    ],
    galleryLabels: ["Кукерски маски", "Звънци", "Костюм от кожа"],
  },
};

const quizQuestions = [
  {
    id: "q1",
    question: "Кой обект е най-старият български манастир в списъка на ЮНЕСКО?",
    options: [
      { value: "rilamonastery", label: "Рилски манастир" },
      { value: "boyanachurch", label: "Боянска църква" },
      { value: "pirinpark", label: "Национален парк \u201eПирин\u201c" },
    ],
    answer: "rilamonastery",
    explanation: "Рилският манастир е основан през X век и е духовно средище на България.",
  },
  {
    id: "q2",
    question: "Кой природен обект опазва местообитанието на къдроглавия пеликан?",
    options: [
      { value: "pirinpark", label: "Национален парк \u201eПирин\u201c" },
      { value: "srebarna", label: "Резерват \u201eСребърна\u201c" },
      { value: "nestinarstvo", label: "Нестинарство" },
    ],
    answer: "srebarna",
    explanation: "Резерват \u201eСребърна\u201c е ключов за размножаването на редки водолюбиви птици.",
  },
  {
    id: "q3",
    question: "Какво е характерно за обичая \u201eНестинарство\u201c?",
    options: [
      { value: "fireDance", label: "Танц върху жарава" },
      { value: "mountainPilgrimage", label: "Поклонение в планински храм" },
      { value: "maskParade", label: "Маскиран карнавал" },
    ],
    answer: "fireDance",
    explanation: "Нестинарството включва танц с боси нозе върху жарава като символ на духовно пречистване.",
  },
  {
    id: "q4",
    question: "В коя година фестивалът \u201eСурва\u201c е включен в списъка на ЮНЕСКО?",
    options: [
      { value: "2009", label: "2009" },
      { value: "2015", label: "2015" },
      { value: "1996", label: "1996" },
    ],
    answer: "2015",
    explanation: "През 2015 г. фестивалът \u201eСурва\u201c става част от нематериалното наследство на човечеството.",
  },
  {
    id: "q5",
    question: "Кой обект от списъка на ЮНЕСКО се отличава с ледникови езера и алпийски пейзажи?",
    options: [
      { value: "pirinpark", label: "Национален парк \u201eПирин\u201c" },
      { value: "boyanachurch", label: "Боянска църква" },
      { value: "srebarna", label: "Резерват \u201eСребърна\u201c" },
    ],
    answer: "pirinpark",
    explanation: "Планина Пирин е известна с алпийските си пейзажи и множество езера.",
  },
];

const timelineEntries = [
  { siteId: "boyanachurch", year: 1979, title: "Боянска църква", highlight: "Стенописи, предвещаващи Ренесанса." },
  { siteId: "rilamonastery", year: 1983, title: "Рилски манастир", highlight: "Символ на българската духовност." },
  { siteId: "pirinpark", year: 1983, title: "Нац. парк \u201eПирин\u201c", highlight: "Грандиозни алпийски пейзажи." },
  { siteId: "srebarna", year: 1983, title: "Резерват \u201eСребърна\u201c", highlight: "Международен орнитологичен център." },
  { siteId: "nestinarstvo", year: 2009, title: "Нестинарство", highlight: "Жив огнен ритуал от Странджа." },
  { siteId: "surva", year: 2015, title: "Фестивал \u201eСурва\u201c", highlight: "Най-голямото кукерско шествие." },
];

const categoryColors = {
  cultural: "rgba(197, 160, 89, 0.8)",
  natural: "rgba(120, 180, 140, 0.85)",
  intangible: "rgba(220, 140, 90, 0.8)",
};

const focusableSelectors =
  'a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])';
let activeModal = null;
let lastFocusedElement = null;
let modalFocusableElements = [];

function ready(callback) {
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", callback);
  } else {
    callback();
  }
}

ready(() => {
  const currentYearEl = document.getElementById("current-year");
  if (currentYearEl) {
    currentYearEl.textContent = new Date().getFullYear();
  }

  bindHeroScroll();
  initMapInteractions();
  initCategoryTriggers();
  initTimeline();
  initQuiz();
  setupModalBaseListeners();
});

function bindHeroScroll() {
  const heroButton = document.querySelector(".secondary-cta[data-scroll-target]");
  if (!heroButton) return;

  heroButton.addEventListener("click", (event) => {
    const targetSelector = event.currentTarget.getAttribute("data-scroll-target");
    const target = document.querySelector(targetSelector);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
}

function initMapInteractions() {
  const markers = document.querySelectorAll(".site-marker");
  const tooltip = document.getElementById("map-tooltip");
  const tooltipCategory = tooltip?.querySelector(".tooltip-category");
  const tooltipTitle = tooltip?.querySelector(".tooltip-title");
  const tooltipButton = tooltip?.querySelector(".tooltip-button");
  const mapWrapper = document.querySelector(".map-wrapper");

  if (!markers.length || !tooltip || !tooltipCategory || !tooltipTitle || !tooltipButton || !mapWrapper) {
    return;
  }

  let activeMarkerId = null;
  let hideTimeout = null;

  markers.forEach((marker) => {
    marker.setAttribute("tabindex", "0");

    marker.addEventListener("pointerenter", (event) => {
      clearTimeout(hideTimeout);
      const siteId = marker.getAttribute("data-site-id");
      positionTooltip(event, siteId);
    });

    marker.addEventListener("pointermove", (event) => {
      if (!tooltip.hasAttribute("hidden")) {
        positionTooltip(event, marker.getAttribute("data-site-id"));
      }
    });

    marker.addEventListener("pointerleave", () => scheduleHide());
    marker.addEventListener("focus", (event) => positionTooltip(event, marker.getAttribute("data-site-id")));
    marker.addEventListener("blur", scheduleHide);
    marker.addEventListener("click", () => openModal(marker.getAttribute("data-site-id")));
    marker.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        openModal(marker.getAttribute("data-site-id"));
      }
    });
  });

  tooltip.addEventListener("pointerenter", () => clearTimeout(hideTimeout));
  tooltip.addEventListener("pointerleave", () => scheduleHide());

  tooltipButton.addEventListener("click", () => {
    if (activeMarkerId) {
      openModal(activeMarkerId);
    }
  });

  function scheduleHide() {
    hideTimeout = setTimeout(() => {
      tooltip.setAttribute("hidden", "");
      activeMarkerId = null;
    }, 140);
  }

  function positionTooltip(event, siteId) {
    const site = siteData[siteId];
    if (!site) return;
    activeMarkerId = siteId;

    tooltipCategory.textContent = site.category.toUpperCase();
    tooltipCategory.style.color = categoryColors[site.categoryKey] || "";
    tooltipTitle.textContent = site.name;

    const target = event.currentTarget || event.target;
    const markerRect = target.getBoundingClientRect();
    const wrapperRect = mapWrapper.getBoundingClientRect();

    const left = markerRect.left + markerRect.width / 2 - wrapperRect.left;
    const top = markerRect.top - wrapperRect.top - 16;

    tooltip.style.left = `${left}px`;
    tooltip.style.top = `${top}px`;
    tooltip.removeAttribute("hidden");
  }
}

function initCategoryTriggers() {
  const triggers = document.querySelectorAll(".site-trigger");
  triggers.forEach((trigger) => {
    trigger.addEventListener("click", () => {
      const siteId = trigger.getAttribute("data-site-id");
      openModal(siteId);
    });
  });
}

function initTimeline() {
  const timeline = document.getElementById("timeline");
  const detailTitle = document.querySelector("#timeline-detail .timeline-title");
  const detailDescription = document.querySelector("#timeline-detail .timeline-description");
  const detailButton = document.querySelector("#timeline-detail .timeline-button");

  if (!timeline || !detailTitle || !detailDescription || !detailButton) {
    return;
  }

  timeline.innerHTML = "";

  timelineEntries
    .slice()
    .sort((a, b) => a.year - b.year)
    .forEach((entry) => {
      const site = siteData[entry.siteId];
      if (!site) return;

      const item = document.createElement("button");
      item.type = "button";
      item.className = "timeline-item";
      item.setAttribute("data-site-id", entry.siteId);
      item.innerHTML = `
        <span class="timeline-year">${entry.year}</span>
        <span class="timeline-meta">
          <strong>${entry.title}</strong><br />
          ${entry.highlight}
        </span>
      `;

      item.addEventListener("click", () => selectEntry(entry.siteId, item));
      item.addEventListener("keydown", (event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          selectEntry(entry.siteId, item);
        }
      });

      timeline.appendChild(item);
    });

  function selectEntry(siteId, item) {
    const site = siteData[siteId];
    if (!site) return;

    timeline.querySelectorAll(".timeline-item").forEach((el) => el.classList.remove("selected"));
    item.classList.add("selected");

    detailTitle.textContent = `${site.name} — ${site.year}`;
    detailDescription.textContent = site.summary;
    detailButton.hidden = false;
    detailButton.dataset.siteId = siteId;
  }

  detailButton.addEventListener("click", () => {
    const siteId = detailButton.dataset.siteId;
    if (siteId) {
      openModal(siteId);
    }
  });
}

function initQuiz() {
  const quizForm = document.getElementById("heritage-quiz");
  const summary = document.getElementById("quiz-summary");
  if (!quizForm || !summary) return;

  quizForm.innerHTML = "";

  quizQuestions.forEach((question, index) => {
    const fieldset = document.createElement("fieldset");
    fieldset.className = "quiz-question";
    fieldset.setAttribute("data-question-id", question.id);

    const legend = document.createElement("h4");
    legend.textContent = `${index + 1}. ${question.question}`;
    fieldset.appendChild(legend);

    const optionsWrapper = document.createElement("div");
    optionsWrapper.className = "quiz-options";

    question.options.forEach((option) => {
      const label = document.createElement("label");
      label.className = "quiz-option";

      const input = document.createElement("input");
      input.type = "radio";
      input.name = question.id;
      input.value = option.value;
      input.required = true;

      label.appendChild(input);
      label.append(` ${option.label}`);

      label.addEventListener("change", () => {
        evaluateQuestion(fieldset, question);
      });

      optionsWrapper.appendChild(label);
    });

    const feedback = document.createElement("p");
    feedback.className = "quiz-feedback";
    feedback.setAttribute("aria-live", "polite");
    fieldset.appendChild(optionsWrapper);
    fieldset.appendChild(feedback);

    quizForm.appendChild(fieldset);
  });

  const submitButton = document.createElement("button");
  submitButton.type = "submit";
  submitButton.className = "submit-quiz";
  submitButton.textContent = "Провери резултата";
  quizForm.appendChild(submitButton);

  quizForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const { score, total } = calculateScore();
    summary.textContent = `Вашият резултат е ${score} от ${total}.`; // accessible text
  });

  function evaluateQuestion(fieldset, question) {
    const selected = fieldset.querySelector("input:checked");
    if (!selected) return;

    fieldset.querySelectorAll(".quiz-option").forEach((label) => {
      label.classList.remove("correct", "incorrect");
    });

    const selectedLabel = selected.parentElement;
    const feedback = fieldset.querySelector(".quiz-feedback");

    if (selected.value === question.answer) {
      selectedLabel.classList.add("correct");
      feedback.textContent = "Верен отговор";
    } else {
      selectedLabel.classList.add("incorrect");
      feedback.textContent = `Грешно. ${question.explanation}`;
    }
  }

  function calculateScore() {
    let score = 0;
    quizQuestions.forEach((question) => {
      const fieldset = quizForm.querySelector(`fieldset[data-question-id="${question.id}"]`);
      const selected = fieldset?.querySelector("input:checked");
      if (selected && selected.value === question.answer) {
        score += 1;
      }
    });
    return { score, total: quizQuestions.length };
  }
}

function openModal(siteId) {
  const site = siteData[siteId];
  if (!site) return;

  const modal = document.getElementById("site-modal");
  if (!modal) return;

  const categoryEl = modal.querySelector(".modal-category");
  const titleEl = modal.querySelector(".modal-title");
  const descriptionEl = modal.querySelector(".modal-description");
  const factsList = modal.querySelector(".facts-list");
  const yearEl = modal.querySelector(".modal-year");
  const galleryFrames = modal.querySelectorAll(".gallery-frame");

  if (!categoryEl || !titleEl || !descriptionEl || !factsList || !yearEl || !galleryFrames.length) {
    return;
  }

  categoryEl.textContent = site.category.toUpperCase();
  categoryEl.style.color = categoryColors[site.categoryKey] || "";
  titleEl.textContent = site.name;
  descriptionEl.textContent = site.description;
  yearEl.textContent = `Включен в ЮНЕСКО: ${site.year}`;

  factsList.innerHTML = "";
  site.facts.forEach((fact) => {
    const li = document.createElement("li");
    li.textContent = fact;
    factsList.appendChild(li);
  });

  galleryFrames.forEach((frame, index) => {
    const label = site.galleryLabels[index] || "Плейсхолдър";
    frame.setAttribute("data-label", label);
  });

  lastFocusedElement = document.activeElement instanceof HTMLElement ? document.activeElement : null;
  activeModal = modal;

  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
  document.body.classList.add("no-scroll");

  refreshModalFocusableElements();

  const preferredFocus = modal.querySelector(".modal-close") || modalFocusableElements[0] || null;
  preferredFocus?.focus({ preventScroll: true });
}

function closeModal(modal) {
  if (!modal) return;

  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("no-scroll");

  if (lastFocusedElement && typeof lastFocusedElement.focus === "function") {
    lastFocusedElement.focus({ preventScroll: true });
  }

  lastFocusedElement = null;
  activeModal = null;
  modalFocusableElements = [];
}

function refreshModalFocusableElements() {
  if (!activeModal) {
    modalFocusableElements = [];
    return;
  }

  modalFocusableElements = Array.from(activeModal.querySelectorAll(focusableSelectors)).filter((element) => {
    const isDisabled = element.hasAttribute("disabled") || element.getAttribute("aria-hidden") === "true";
    const isHidden = element.offsetParent === null && element !== document.activeElement;
    return !isDisabled && !isHidden;
  });
}

function handleModalKeydown(event) {
  if (!activeModal) return;

  if (event.key === "Escape") {
    event.preventDefault();
    closeModal(activeModal);
    return;
  }

  if (event.key !== "Tab") {
    return;
  }

  refreshModalFocusableElements();
  if (!modalFocusableElements.length) {
    event.preventDefault();
    return;
  }

  const firstElement = modalFocusableElements[0];
  const lastElement = modalFocusableElements[modalFocusableElements.length - 1];
  const activeElement = document.activeElement;

  if (event.shiftKey) {
    if (activeElement === firstElement || !activeModal.contains(activeElement)) {
      event.preventDefault();
      lastElement.focus();
    }
  } else if (activeElement === lastElement || !activeModal.contains(activeElement)) {
    event.preventDefault();
    firstElement.focus();
  }
}

function setupModalBaseListeners() {
  const modal = document.getElementById("site-modal");
  if (!modal) return;

  const overlay = modal.querySelector(".modal-overlay");
  const closeButtons = modal.querySelectorAll("[data-close-modal]");

  const baseClose = () => closeModal(modal);

  overlay?.addEventListener("click", baseClose);
  closeButtons.forEach((button) => {
    button.addEventListener("click", baseClose);
  });

  document.addEventListener("keydown", handleModalKeydown);
}
