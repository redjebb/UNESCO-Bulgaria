/* --- ДАННИ ЗА ОБЕКТИТЕ --- */
const unescoSites = [
    { 
        id: 1, 
        title: "Национален парк „Пирин“", 
        type: "natural", 
        img: "https://www.moew.government.bg/static/media/ups/cached/e838796f8755a337c3d017001cf126469fb0136d.jpg", 
        bgText: "Високопланински масив с суров алпийски релеф, оформен от ледници и слабо засегнат от човешка дейност.",
        mainText: "Паркът обхваща едни от най-високите върхове в България, десетки ледникови езера и уникални природни местообитания. Той е дом на редки и ендемични растителни и животински видове и е сред най-добре съхранените планински екосистеми в Европа."
    },
    { 
        id: 2, 
        title: "Резерват „Сребърна“", 
        type: "natural", 
        img: "https://webnews.bg/uploads/images/38/1138/431138/768x432.jpg?_=1561637674", 
        bgText: "Естествено дунавско езеро, което от векове служи като убежище за водолюбиви птици.",
        mainText: "Сребърна е световноизвестна с богатото си орнитологично разнообразие и най-вече с гнездящата колония на къдроглавия пеликан. Резерватът е ключов за миграционния път на птиците между Европа и Африка."
    },
    { 
        id: 3, 
        title: "Вековните букови гори", 
        type: "natural", 
        img: "https://sevlievci.com/wp-content/uploads/2017/07/991-ratio-beech-forests.jpg", 
        bgText: "Девствени гори, съхранени почти без човешка намеса от хилядолетия, с голямо биологично разнообразие.",
        mainText: "Вековните букови гори в България са част от транснационалния обект „Старите и първични букови гори на Европа“ на ЮНЕСКО. Те представляват уникални екосистеми, където растат вековни дървета, а под короните им се развиват редки растения и животински видове. Тези гори играят важна роля за опазването на европейското биоразнообразие, предлагат изключително чисти водни ресурси и са ключови за научни изследвания в екологията и климатичните промени."
    },
    { 
        id: 4, 
        title: "Старият град Несебър", 
        type: "cultural", 
        img: "https://www.tourism.government.bg/sites/tourism.government.bg/files/pr14362_1.jpg", 
        bgText: "Крайморски град с хилядолетна история и запазена средновековна и възрожденска архитектура.",
        mainText: "Старият град Несебър е един от най-старите обитавани градове в Европа, с история, започваща от тракийско време и античността. Градът съчетава останки от антични храмове, средновековни църкви и традиционни възрожденски къщи. ЮНЕСКО го признава за културен паметник заради многобройните църкви, които отразяват духовния живот през вековете, както и заради автентичната градска среда."
    },
    { 
        id: 5, 
        title: "Казанлъшка гробница", 
        type: "cultural", 
        img: "https://img1.advisor.travel/1200x630px-Thracian_Tomb_of_Kazanlak_1.jpg", 
        bgText: "Тракийска гробница с изключително добре запазени стенописи, разкриващи ритуалите на древните траки.",
        mainText: "Казанлъшката гробница е куполно погребално съоръжение, датирано от IV–III в. пр. Хр., и е уникална с изящните си стенописи. Те представят сцени от тракийските погребални ритуали, облеклото и вярванията за задгробния живот. Гробницата дава ценна информация за културата, изкуството и религиозните практики на тракийската аристокрация и е сред най-добре запазените антични паметници в България."
    },
    { 
        id: 6, 
        title: "Свещарска гробница", 
        type: "cultural", 
        img: "https://www.globaltour.bg/img/POBEKTI/BIG_grobnicata-do-selo-sveshtari%20(5)_168663959887.jpg", 
        bgText: "Тракийски мавзолей, известен с каменните кариатиди и сложната си архитектура.",
        mainText: "Гробницата в Свещари е построена през III в. пр. Хр. и е известна със своите релефни каменни фигури, които комбинират човешки и божествени черти. Тя разкрива социалната структура и религиозните вярвания на тракийското племе гети, като служи като култово и погребално съоръжение. Архитектурата и декоративните елементи я правят уникален паметник на тракийската култура."
    },
    { 
        id: 7, 
        title: "Мадарски конник", 
        type: "cultural", 
        img: "https://cdn.btv.bg/media/images/640x360/Jun2024/2113326553.webp", 
        bgText: "Скален релеф, изсечен високо в скалите като символ на държавна власт и победа.",
        mainText: "Релефът изобразява конник в тържествена композиция и е уникален за Европа. Свързва се с ранната българска държавност и хановете от Първото българско царство."
    },
    { 
        id: 8, 
        title: "Рилски манастир", 
        type: "cultural", 
        img: "https://m3.netinfo.bg/media/images/43937/43937971/960-540-rilski-manastir.jpg", 
        bgText: "Духовен център, възникнал около отшелническия живот на свети Иван Рилски.",
        mainText: "Манастирът е най-големият и най-влиятелният в България и играе ключова роля за съхраняване на вярата, образованието и националната идентичност през вековете."
    },
    { 
        id: 9, 
        title: "Боянска църква", 
        type: "cultural", 
        img: "https://boyanachurch.info/wp-content/uploads/2022/12/BoyanaChurch-Exterior_221.jpg", 
        bgText: "Малка средновековна църква, известна с изключително напредничавата си живопис.",
        mainText: "Стенописите от 1259 г. се отличават с реализъм, емоционалност и индивидуализъм, рядко срещани за времето си. Те са сред най-ценните паметници на европейското средновековно изкуство."
    },
    { 
        id: 10, 
        title: "Ивановски скални църкви", 
        type: "cultural", 
        img: "https://www.gptravel.bg/img/uploads/tours/6324/45622_orig.webp", 
        bgText: "Комплекс от манастири и църкви, издълбани в скалите над река Русенски Лом, с богати средновековни стенописи.",
        mainText: "Ивановските скални църкви са комплекс от параклиси, килии и църкви, датирани XIII–XIV век, които представляват важен духовен и културен център по време на Второто българско царство. Стенописите в тях показват сцени от Библията, живота на светци и духовници. Комплексът е изключителен с начина, по който природата и човешкото творчество се сливат – църквите са издълбани в скалите, а стенописите са удивително добре запазени."
    }
];

/* --- 1. ТЪМНА ТЕМА --- */
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark-mode');
    themeToggle.innerText = '☀';
}

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    if (body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
        themeToggle.innerText = '☀';
    } else {
        localStorage.setItem('theme', 'light');
        themeToggle.innerText = '🌙';
    }
});

/* --- 2. ГЕНЕРИРАНЕ НА ГАЛЕРИЯТА (TIMELINE) --- */
const timelineContainer = document.getElementById('timeline-container');

function renderTimeline() {
    timelineContainer.innerHTML = '';
    unescoSites.forEach((site, index) => {
        const side = index % 2 === 0 ? 'left' : 'right';
        
        const html = `
            <div class="timeline-item ${side}">
                <div class="card" onclick="openModal(${site.id})">
                    <img src="${site.img}" class="card-img" alt="${site.title}">
                    <div class="card-content">
                        <h3>${site.title}</h3>
                        <p>${site.bgText}</p>
                    </div>
                </div>
            </div>
        `;
        timelineContainer.innerHTML += html;
    });
    animateStats(); 
}

/* --- 3. СТАТИСТИКА --- */
function animateStats() {
    const cultCount = unescoSites.filter(s => s.type === 'cultural').length;
    const natCount = unescoSites.filter(s => s.type === 'natural').length;
    
    document.getElementById('count-cultural').innerText = cultCount;
    document.getElementById('count-natural').innerText = natCount;
    document.getElementById('count-total').innerText = unescoSites.length;
}

/* --- 4. МОДАЛЕН ПРОЗОРЕЦ (ДЕТАЙЛИ) --- */
const modal = document.getElementById('modal');
const closeBtn = document.querySelector('.close-btn');

window.openModal = function(id) {
    const site = unescoSites.find(s => s.id === id);
    document.getElementById('modal-img').src = site.img;
    document.getElementById('modal-title').innerText = site.title;
    
    // Форматиране на вида на обекта с удебелен шрифт
    const typeLabel = site.type === 'cultural' ? 'Културен' : 'Природен';
    document.getElementById('modal-type').innerHTML = `<strong>Вид на обекта:</strong> ${typeLabel}`;
    
    // Зареждане на подробното описание
    document.getElementById('modal-desc').innerText = site.mainText;
    
    modal.style.display = "flex";
    document.body.style.overflow = "hidden"; 
};

function closeModal() {
    modal.style.display = "none";
    document.body.style.overflow = "auto"; 
}

closeBtn.onclick = closeModal;
window.onclick = (e) => { if (e.target == modal) closeModal(); };

/* --- 5. КУИЗ ИГРА (С НОВИ ВЪПРОСИ ОТ ОПИСАНИЯТА) --- */
const questions = [
    { 
        q: "Кой елемент прави Свещарската гробница уникална?", 
        a: ["Златните съкровища", "Каменните кариатиди", "Римските мозайки", "Дървените колони"], 
        correct: 1 // Каменните кариатиди
    },
    { 
        q: "С коя колония от птици е световноизвестен резерватът „Сребърна“?", 
        a: ["Розов фламинго", "Царски орел", "Къдроглав пеликан", "Черн щъркел"], 
        correct: 2 // Къдроглав пеликан
    },
    { 
        q: "С какво се отличават стенописите в Боянската църква от 1259 г.?", 
        a: ["С реализъм и хуманизъм", "С абстрактни форми", "С готически стил", "С липса на цветове"], 
        correct: 0 // Реализъм и хуманизъм
    },
    { 
        q: "Част от какъв тип обект са Вековните букови гори?", 
        a: ["Самостоятелен български обект", "Транснационален европейски обект", "Изкуствено създаден парк", "Градски парк"], 
        correct: 1 // Транснационален обект
    }
];

let currentQ = 0;
let score = 0;

function loadQuiz() {
    const qData = questions[currentQ];
    document.getElementById('question').innerText = qData.q;
    document.getElementById('q-number').innerText = `Въпрос ${currentQ + 1} от ${questions.length}`;
    const btnContainer = document.getElementById('answer-buttons');
    btnContainer.innerHTML = '';
    document.getElementById('next-btn').classList.add('hide');

    qData.a.forEach((ans, index) => {
        const btn = document.createElement('button');
        btn.innerText = ans;
        btn.classList.add('btn-answer');
        btn.onclick = () => checkAnswer(index, qData.correct, btn);
        btnContainer.appendChild(btn);
    });
}

function checkAnswer(selected, correct, btn) {
    const buttons = document.querySelectorAll('.btn-answer');
    buttons.forEach(b => b.disabled = true);

    if (selected === correct) {
        btn.classList.add('correct');
        score += 10;
        document.getElementById('score-live').innerText = `Точки: ${score}`;
    } else {
        btn.classList.add('wrong');
        buttons[correct].classList.add('correct');
    }
    
    const nextBtn = document.getElementById('next-btn');
    nextBtn.classList.remove('hide');
    
    if (currentQ < questions.length - 1) {
        nextBtn.innerText = "Следващ";
        nextBtn.onclick = () => { currentQ++; loadQuiz(); };
    } else {
        nextBtn.innerText = "Рестарт";
        nextBtn.onclick = () => { currentQ = 0; score = 0; document.getElementById('score-live').innerText = 'Точки: 0'; loadQuiz(); };
    }
}

// Стартиране
renderTimeline();
loadQuiz();