let i = 0;
let reviews = [
    {
        image:
        "https://img.freepik.com/premium-photo/portrait-of-successful-man-30s-with-bristle-wearing-casual-t-shirt-smiling-isolated-on-white_171337-91830.jpg",
        name: "Геннадий",
        advantage: "Мак просто великолепен! Удобный в использовании, быстрый и современный!",
        deficiency: "Без минусов вообще!",
        text: "Перешел с более устаревшей модели. Отлично работает, не испытываю недостатка мощности. Может быть открыто куча программ, редакторы, два браузера с вкладками, запущено потоковое видео и он даже и не думает тормозить. Класс!"
    },
    {
        image:
        "https://img.freepik.com/free-photo/portrait-of-beautiful-mature-blonde-bearded-guy-with-trendy-hairdo-in-casual-grey-shirt-smiling_176420-15741.jpg",
        name: "Евгений",
        advantage: "Невероятная производительность, за свою цену. Потрясающая автономность (просто забываешь, что такое - брать с собой зарядку). Дизайн выше всяких похвал. Отсутствие активного охлаждения (оно просто не требуется).)",
        deficiency: "Отсутствуют",
        text: 'Купил базовую модель в подарок жене. Что сказать? За эту цену просто нет аналогов и быть не может. Дизайн: очень аккуратный и эстетичный. Клавиатура и тачпад работают просто изумительно. Ни на одном ноутбуке с Windows я такого не видел. Если клавиатура еще может быть, но вот тачпад! Автономность: действительно забываешь, что такое носить с собой зарядку (просто ни к чему). Зарядил один раз и забыл на неделю при не очень частом использовании ноутбука (у нас именно такое). Производительность: в этой малютке столько мощи! Брали как печатную машинку и сёрф в интернете, но! Попробовал монтировать видео и даже с этим ноутбук прекрасно справляется. Я очень сильно удивлён. Все приложения открываются быстро, интерфейс максимально плавный. Чудо просто какое-то. За эту цену думал мне достанется какой-нибудь "Американец", но нет - мне достался РСТ и это просто прекрасно. '
    },
    {
        image:
        "https://img.freepik.com/free-photo/confident-attractive-caucasian-guy-in-beige-pullon-smiling-broadly-while-standing-against-gray_176420-44508.jpg",
        name: "Даниил",
        advantage: "Тачпад, дизайн, ОС, время автономной работы, производительность",
        deficiency: "2 Type C с одной стороны. Могли бы сделать по разные стороны",
        text: "Apple делает лучшие ноуты. У них просто нет конкурентов. Время автономной работы на высоте. Дизайн, вес, размеры - великолепно. Спасибо МВидео, удалось взять по хорошей цене и попался Ростест - очень мне повезло."
    },
    {
        image:
        "https://img.freepik.com/free-photo/portrait-of-handsome-brunet-unshaven-adult-man-looks-with-calm-confident-expression-has-serious-look-wears-casual-jumper-poses-for-making-photo-against-white-background-being-hard-to-impress_273609-57668.jpg",
        name: "Иван",
        advantage: "Ноутбук можно использовать для выполнения повседневных задач, а также для обработки ресурсоемких профессиональных приложений, для проведения досуга за популярными видеоиграми, обладающими высокими требованиями.",
        deficiency: "Нет",
        text: "Восьмиядерный процессор Apple M1, установленный в данном ноуте, обеспечивает оптимальное быстродействие. Дисплей отображает реалистичные оттенки, а интегрированный графический адаптер обеспечивает плавность воспроизведения потокового контента без эффекта разрыва кадров. Благодаря аудиосистеме Dolby Atmos обеспечивается качество, чистота пространственного звучания, позволяющего полностью погрузиться в происходящее на экране."
    }
]
const container = document.getElementById("container")
let reviewSum = document.getElementById("review-sum")

reviewSum.innerHTML = `<div>${reviews.length}</div>`

function renderReviews() {
    let review = reviews[i]
    container.innerHTML = `
      <div class="review">
                <div class="review__name-img">
                    <img class="review__img" src= "${review.image}"/>
                    <div class="review__item">${review.name}</div>
                </div>
                
                <div class="review__item">Плюсы</div>
                <div class="review__text">${review.advantage}</div>
                <div class="review__item">Минусы</div>
                <div class="review__text">${review.deficiency}</div>
                <div class="review__item">Отзыв</div>
                <div class="review__text">${review.text}</div>
            </div>`
  }

renderReviews()

const nextReview = document.getElementById ("next-review")
nextReview.addEventListener ("click", () => {
    i ++
    if (i === reviews.length){
        i = 0
    }
    renderReviews()
})

const backReview = document.getElementById ("back-review")
backReview.addEventListener ("click", () => {
    i --
    if (i === -1){
        i = reviews.length - 1
    }
    renderReviews()
})

const randomRewiew = document.getElementById ("random-rewiew")
randomRewiew.addEventListener ("click", () => {
    let randomIndex = Math.floor(Math.random() * reviews.length)
    i = randomIndex
    renderReviews()
})

const buttonOpenModal = document.getElementById("button-open-modal")
const openModal = document.getElementById("open-modal")
const cancelSave = document.getElementById("cancel-save")

buttonOpenModal.addEventListener("click", () => {
    openModal.classList.toggle("add-flex")
})

cancelSave.addEventListener("click", () => {
    openModal.classList.toggle("add-flex")
})

const safeReview = document.getElementById("safe-review")
safeReview.addEventListener("click", () => {
    const nameReview = document.getElementById("nameReview").value
    const advantageReview = document.getElementById("advantageReview").value
    const deficiencyReview = document.getElementById("deficiencyReview").value
    const textReview = document.getElementById("textReview").value

    const review = {
        image:
        "https://www.meme-arsenal.com/memes/13c54859c5ddde3bab2e50f534fcfb11.jpg",
        name: nameReview,
        advantage: advantageReview,
        deficiency: deficiencyReview,
        text: textReview
    }

    reviews.push(review)
    renderReviews()
    clearForm ()
    reviewSum = reviews.length

    openModal.classList.toggle("add-flex")
})

function clearForm () {
    document.getElementById("nameReview").value = ""
    document.getElementById("advantageReview").value = ""
    document.getElementById("deficiencyReview").value = ""
    document.getElementById("textReview").value = ""
  }