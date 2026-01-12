/* --- ДАННИ ЗА ОБЕКТИТЕ С ГАЛЕРИИ --- */
const unescoSites = [
    { 
        id: 1, 
        title: "Национален парк „Пирин“", 
        type: "natural", 
        images: [
            "https://www.moew.government.bg/static/media/ups/cached/e838796f8755a337c3d017001cf126469fb0136d.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/3/3e/Todorka_peak_red.jpg",
            "https://dw7n6pv5zdng0.cloudfront.net/modules/0001/04/thumb_3256_modules_big.jpeg"
        ], 
        bgText: "Високопланински масив с суров алпийски релеф, оформен от ледници и слабо засегнат от човешка дейност.",
        mainText: "Паркът обхваща едни от най-високите върхове в България, десетки ледникови езера и уникални природни местообитания. Той е дом на редки и ендемични растителни и животински видове и е сред най-добре съхранените планински екосистеми в Европа."
    },
    { 
        id: 2, 
        title: "Резерват „Сребърна“", 
        type: "natural", 
        images: [
            "https://webnews.bg/uploads/images/38/1138/431138/768x432.jpg?_=1561637674",
            "https://tripsjournal.com/wp-content/uploads/2016/12/ezeroto-srebarna.jpg",
            "https://banker.bg/wp-content/uploads/93bdfe24-7cce-437a-be09-7db43e7f6284.jpg"
        ], 
        bgText: "Естествено дунавско езеро, което от векове служи като убежище за водолюбиви птици.",
        mainText: "Сребърна е световноизвестна с богатото си орнитологично разнообразие и най-вече с гнездящата колония на къдроглавия пеликан. Резерватът е ключов за миграционния път на птиците между Европа и Африка."
    },
    { 
        id: 3, 
        title: "Вековните букови гори", 
        type: "natural", 
        images: [
            "https://sevlievci.com/wp-content/uploads/2017/07/991-ratio-beech-forests.jpg",
            "https://travelbulgarianews.bg/wp-content/uploads/2023/06/beech-472095_1280.jpg",
            "https://p.medianews.bg/b/u/bukova-gora1-21392-1000x0.jpg"
        ], 
        bgText: "Девствени гори, съхранени почти без човешка намеса от хилядолетия, с голямо биологично разнообразие.",
        mainText: "Вековните букови гори в България са част от транснационалния обект „Старите и първични букови гори на Европа“ на ЮНЕСКО. Те представляват уникални екосистеми, където растат вековни дървета. Тези гори играят важна роля за опазването на европейското биоразнообразие."
    },
    { 
        id: 4, 
        title: "Старият град Несебър", 
        type: "cultural", 
        images: [
            "https://www.tourism.government.bg/sites/tourism.government.bg/files/pr14362_1.jpg",
            "https://sunrisinglife.com/wp-content/uploads/2016/06/IMG_1316.jpg",
            "https://imperialsunnybeach.com/wp-content/uploads/2024/10/image3-3.jpg"
        ], 
        bgText: "Крайморски град с хилядолетна история и запазена средновековна и възрожденска архитектура.",
        mainText: "Старият град Несебър е един от най-старите обитавани градове в Европа. Градът съчетава останки от антични храмове, средновековни църкви и традиционни възрожденски къщи. ЮНЕСКО го признава за културен паметник заради автентичната градска среда."
    },
    { 
        id: 5, 
        title: "Казанлъшка гробница", 
        type: "cultural", 
        images: [
            "https://img1.advisor.travel/1200x630px-Thracian_Tomb_of_Kazanlak_1.jpg",
            "https://vila.bg/blog/wp-content/uploads/2021/03/kazanlushka-trakiiska-grobnica-3-506.jpg",
            "https://i0.wp.com/historymuseum.org/wp-content/uploads/2022/10/size_x628_5afdc834ca10f.jpg?fit=941%2C628&ssl=1"
        ], 
        bgText: "Тракийска гробница с изключително добре запазени стенописи, разкриващи ритуалите на древните траки.",
        mainText: "Казанлъшката гробница е уникална с изящните си стенописи от IV–III в. пр. Хр. Те представят сцени от тракийските погребални ритуали, облеклото и вярванията за задгробния живот на тракийската аристокрация."
    },
    { 
        id: 6, 
        title: "Свещарска гробница", 
        type: "cultural", 
        images: [
            "https://www.globaltour.bg/img/POBEKTI/BIG_grobnicata-do-selo-sveshtari%20(5)_168663959887.jpg",
            "https://static.pochivka.bg/sights.bgstay.com/images/00/778/547e1ac061f73.jpg",
            "https://www.tourism.government.bg/sites/tourism.government.bg/files/105001sveshtarskagrobnica_1.jpg"
        ], 
        bgText: "Тракийски мавзолей, известен с каменните кариатиди и сложната си архитектура.",
        mainText: "Гробницата в Свещари е известна със своите релефни каменни фигури (кариатиди), които комбинират човешки и божествени черти. Тя разкрива религиозните вярвания на тракийското племе гети."
    },
    { 
        id: 7, 
        title: "Мадарски конник", 
        type: "cultural", 
        images: [
            "https://cdn.btv.bg/media/images/640x360/Jun2024/2113326553.webp",
            "https://bulgarianhistory.org/wp-content/uploads/2017/07/%D0%BF%D0%B5%D0%B9%D0%B7%D0%B0%D0%B6-%D0%BE%D1%82-%D0%9C%D0%B0%D0%B4%D1%80%D1%81%D0%BA%D0%B8%D1%8F-%D0%BA%D0%BE%D0%BD%D0%BD%D0%B8%D0%BA.jpg",
            "https://imgrabo.com/pics/guide/20160121174133_51095.jpeg"
        ], 
        bgText: "Скален релеф, изсечен високо в скалите като символ на държавна власт и победа.",
        mainText: "Релефът изобразява конник в тържествена композиция и е уникален за Европа. Свързва се с ранната българска държавност и хановете от Първото българско царство."
    },
    { 
        id: 8, 
        title: "Рилски манастир", 
        type: "cultural", 
        images: [
            "https://m3.netinfo.bg/media/images/43937/43937971/960-540-rilski-manastir.jpg",
            "https://static.pochivka.bg/sights.bgstay.com/images/00/427/545a8ed0c0ab7.jpg",
            "https://toppresa.com/wp-content/uploads/2023/09/Untitled-1-Recoveredrilski.jpg"
        ], 
        bgText: "Духовен център, възникнал около отшелническия живот на свети Иван Рилски.",
        mainText: "Манастирът е най-големият в България и играе ключова роля за съхраняване на вярата и националната идентичност през вековете. Архитектурата и стенописите му са шедьоври на българското Възраждане."
    },
    { 
        id: 9, 
        title: "Боянска църква", 
        type: "cultural", 
        images: [
            "https://boyanachurch.info/wp-content/uploads/2022/12/BoyanaChurch-Exterior_221.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/3/37/Boyana_Church_1.jpg",
            "https://i0.wp.com/historymuseum.org/wp-content/uploads/2022/07/thumb_940x628_5f9aa74b38067-1.jpg?fit=940%2C628&ssl=1"
        ], 
        bgText: "Малка средновековна църква, известна с изключително напредничавата си живопис.",
        mainText: "Стенописите от 1259 г. се отличават с реализъм и индивидуализъм, рядко срещани за времето си. Те са сред най-ценните паметници на европейското средновековно изкуство."
    },
    { 
        id: 10, 
        title: "Ивановски скални църкви", 
        type: "cultural", 
        images: [
            "https://www.gptravel.bg/img/uploads/tours/6324/45622_orig.webp",
            "https://www.daskalo.com/kaloyanstoyanov/files/2015/06/basarbovo_1.jpg",
            "https://static.pochivka.bg/sights.bgstay.com/images/00/104/5478ace19f7f1.jpg"
        ], 
        bgText: "Комплекс от манастири и църкви, издълбани в скалите над река Русенски Лом.",
        mainText: "Ивановските скални църкви са важен духовен център по време на Второто българско царство. Стенописите в тях показват сцени от Библията и са изключително добре запазени в скалната среда."
    }
];

/* --- ГЛОБАЛНИ ПРОМЕНЛИВИ ЗА ГАЛЕРИЯТА --- */
let currentImageIndex = 0;
let currentSiteImages = [];

/* --- 1. ТЪМНА ТЕМА --- */
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark-mode');
    themeToggle.innerText = '☀';
}

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    themeToggle.innerText = body.classList.contains('dark-mode') ? '☀' : '🌙';
    localStorage.setItem('theme', body.classList.contains('dark-mode') ? 'dark' : 'light');
});

/* --- 2. ГЕНЕРИРАНЕ НА КАРТИТЕ --- */
function renderTimeline() {
    const container = document.getElementById('timeline-container');
    container.innerHTML = '';
    unescoSites.forEach((site, index) => {
        const side = index % 2 === 0 ? 'left' : 'right';
        container.innerHTML += `
            <div class="timeline-item ${side}">
                <div class="card" onclick="openModal(${site.id})">
                    <img src="${site.images[0]}" class="card-img" alt="${site.title}">
                    <div class="card-content">
                        <h3>${site.title}</h3>
                        <p>${site.bgText}</p>
                    </div>
                </div>
            </div>
        `;
    });
    animateStats();
}

/* --- 3. МОДАЛЕН ПРОЗОРЕЦ СЪС СЛАЙДЪР --- */
const modal = document.getElementById('modal');

/* --- МОДАЛЕН ПРОЗОРЕЦ С ПРЕДВАРИТЕЛНО ЗАРЕЖДАНЕ --- */
window.openModal = function(id) {
    const site = unescoSites.find(s => s.id === id);
    currentSiteImages = site.images;
    currentImageIndex = 0;
    
    // ПРЕДВАРИТЕЛНО ЗАРЕЖДАНЕ: Браузърът кешира снимките веднага
    currentSiteImages.forEach(src => {
        const img = new Image();
        img.src = src;
    });

    updateModalImage();
    
    document.getElementById('modal-title').innerText = site.title;
    document.getElementById('modal-type').innerHTML = `<strong>Вид на обекта:</strong> ${site.type === 'cultural' ? 'Културен' : 'Природен'}`;
    document.getElementById('modal-desc').innerText = site.mainText;
    
    modal.style.display = "flex";
    document.body.style.overflow = "hidden";
};

function updateModalImage() {
    const imgElement = document.getElementById('modal-img');
    imgElement.src = currentSiteImages[currentImageIndex];
}

window.changeImage = function(direction) {
    currentImageIndex += direction;
    if (currentImageIndex < 0) currentImageIndex = currentSiteImages.length - 1;
    if (currentImageIndex >= currentSiteImages.length) currentImageIndex = 0;
    updateModalImage();
};

function closeModal() {
    modal.style.display = "none";
    document.body.style.overflow = "auto";
}

document.querySelector('.close-btn').onclick = closeModal;
window.onclick = (e) => { if (e.target == modal) closeModal(); };

/* --- СТАТИСТИКА И КУИЗ (Остават същите) --- */
function animateStats() {
    document.getElementById('count-cultural').innerText = unescoSites.filter(s => s.type === 'cultural').length;
    document.getElementById('count-natural').innerText = unescoSites.filter(s => s.type === 'natural').length;
    document.getElementById('count-total').innerText = unescoSites.length;
}

const questions = [
    { q: "Кой елемент прави Свещарската гробница уникална?", a: ["Златните съкровища", "Каменните кариатиди", "Римските мозайки", "Дървените колони"], correct: 1 },
    { q: "С коя колония от птици е световноизвестен резерватът „Сребърна“?", a: ["Розов фламинго", "Царски орел", "Къдроглав пеликан", "Черн щъркел"], correct: 2 },
    { q: "С какво се отличават стенописите в Боянската църква от 1259 г.?", a: ["С реализъм и хуманизъм", "С абстрактни форми", "С готически стил", "С липса на цветове"], correct: 0 },
    { q: "Част от какъв тип обект са Вековните букови гори?", a: ["Самостоятелен български обект", "Транснационален европейски обект", "Изкуствено създаден парк", "Градски парк"], correct: 1 }
];

let currentQ = 0; let score = 0;
function loadQuiz() {
    const qData = questions[currentQ];
    document.getElementById('question').innerText = qData.q;
    document.getElementById('q-number').innerText = `Въпрос ${currentQ + 1} от ${questions.length}`;
    const btnContainer = document.getElementById('answer-buttons');
    btnContainer.innerHTML = '';
    qData.a.forEach((ans, index) => {
        const btn = document.createElement('button');
        btn.innerText = ans; btn.classList.add('btn-answer');
        btn.onclick = () => checkAnswer(index, qData.correct, btn);
        btnContainer.appendChild(btn);
    });
    document.getElementById('next-btn').classList.add('hide');
}

function checkAnswer(selected, correct, btn) {
    const buttons = document.querySelectorAll('.btn-answer');
    buttons.forEach(b => b.disabled = true);
    if (selected === correct) { btn.classList.add('correct'); score += 10; } 
    else { btn.classList.add('wrong'); buttons[correct].classList.add('correct'); }
    document.getElementById('score-live').innerText = `Точки: ${score}`;
    const nextBtn = document.getElementById('next-btn');
    nextBtn.classList.remove('hide');
    nextBtn.innerText = currentQ < questions.length - 1 ? "Следващ" : "Рестарт";
    nextBtn.onclick = () => { if (currentQ < questions.length - 1) { currentQ++; loadQuiz(); } else { currentQ = 0; score = 0; loadQuiz(); } };
}

renderTimeline();
loadQuiz();