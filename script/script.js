let header = {
    data() {
        return {

        }
    },

    methods: {

    },
}
const app = Vue.createApp(header)

app.component('ready-header1', {
    template: `
    <div class="container">
    <nav class="nav1">
        <div class="logo">
            <a href="./index.html"><img src="./img/logo.png" alt=""></a>
            <p>Интернет- агентство
            </p>
        </div>
        <div class="nav1_list">
            <a href="#!" class="nav1_list-links">Акции</a> <span>/</span>
            <a href="#!" class="nav1_list-links">О компании</a> <span>/</span>
            <a href="#!" class="nav1_list-links">Контекстная реклама</a>
        </div>
        <div class="nav1_contacts">
            <a href="#!"><i class=" whatsapp_i fab fa-whatsapp"></i></a>
            <a href="#!"><i class=" viber_i fab fa-viber"></i></a>
            <a class="tel_link" href="tel:+998331000774">+998(33)1000-774</a>
        </div>
    </nav>
</div>
    `
})

app.component('ready-header2', {
    template: `
 <div class="header2_box">
<ul class="header2_list">
<a href="./promotion.html"><li class="hvlinks">Продвижение сайтов</li></a> 
<a href="./createsite.html"><li class="hvlinks">Создание сайтов</li></a>
<a href="./contact.html"><li class="hvlinks">Контакты</li></a>
</ul>
</div> 
`
})
app.component('ready-menu', {
    template: `
     <div class="offcanvas offcanvas-start" style="background-color: #333;" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
     <div class="offcanvas-header">
         <div class="logo">
             <a href="./index.html"><img src="./img/logo.png" alt=""></a>
             <p style="color: white;">Интернет- агентство
             </p>
         </div>
         <i data-bs-dismiss="offcanvas" aria-label="Close" class="fal header_close_btn fa-times"></i>
         <!-- <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button> -->
     </div>
     <div class="offcanvas-body">


         <ul class="headerm2_list1">
         <a href="./promotion.html"><li class="headerm2_list">Продвижение сайтов</li></a> 
         <a href="./createsite.html"><li class="headerm2_list">Создание сайтов</li></a>
         <a href="./contact.html"><li class="headerm2_list">Контакты</li></a>
         </ul>
         <div style="width: 100%; height: 2px; background-color: #fff; opacity: 0.2; margin: 40px 0;" class=""></div>
         <ul class="headerm2_list2">
             <li>Акции</li>
             <li>Реклама</li>
             <li>О компании</li>
         </ul>
         <div class="headerm2_contacts">
             <div style="display: flex; gap: 7px;" class="">
                 <a href="#!"><i class=" whatsapp_i fab fa-whatsapp"></i></a>
                 <a href="#!"><i class=" viber_i fab fa-viber"></i></a>
             </div>
             <a class="tel_link2" href="tel:+998331000774">+998(33)1000-774</a>
         </div>
     </div>

 </div>

     `
})

app.mount(".header")

let footer = {
    data() {
        return {

        }
    },
    methods: {

    },
}
const app3 = Vue.createApp(footer)

app3.component('ready-footer', {
    template: `
     <div class="footer-cover">
    <div class="container">
        <div class="footer_box">
            <div class="footer_logo">   
                <a href="./index.html"><img src="./img/logo.png" alt=""></a>
                <p class="footer_logo-text">Интернет- агентство</p> 
            </div>
            <div class="footer_item">
                <h3 class="footer_item-title">Продвижение сайтов</h3>
                <div class="footer_item-line"></div>
                <ul class="footer_item-list">
                    <li><img class="footer_list-arrow" src="./img/listArrow.png" alt=""> По позициям</li>
                    <li><img class="footer_list-arrow" src="./img/listArrow.png" alt=""> По трафику</li>
                </ul>
            </div>
            <div class="footer_item">
                <h3 class="footer_item-title">Создание сайтов</h3>
                <div class="footer_item-line"></div>
                <ul class="footer_item-list">
                    <li><img class="footer_list-arrow" src="./img/listArrow.png" alt=""> Визитки</li>
                    <li><img class="footer_list-arrow" src="./img/listArrow.png" alt=""> Каталог</li>
                </ul>
            </div>
            <div class="footer_item">
                <h3 class="footer_item-title">Контекстная реклама</h3>
                <div class="footer_item-line"></div>
                <ul class="footer_item-list">
                    <li><img class="footer_list-arrow" src="./img/listArrow.png" alt=""> Яндекс Директ</li>
                    <li><img class="footer_list-arrow" src="./img/listArrow.png" alt=""> Google Adwords</li>
                </ul>
            </div>
        </div>
        <div class="bottom_footer">
            <p class="bottom_footer-text">с 2021. ALKK</p>
            <p class="bottom_footer-text">Карта сайта</p>
        </div>
    </div>
   </div>
    `
})

app3.mount(".footer")








let body = {
    data() {
        return {

        }
    },
    methods: {

    },
}

const app2 = Vue.createApp(body)

app2.component('bg-dot', {
    template: `
    <div class="bg">
    <div class="dotWrapper dotWrapper-1">
        <div class="dot dot-1"></div>
    </div>
    <div class="dotWrapper dotWrapper-2">
        <div class="dot dot-2"></div>
    </div>
    <div class="dotWrapper dotWrapper-3">
        <div class="dot dot-3"></div>
    </div>
    <div class="dotWrapper dotWrapper-4">
        <div class="dot dot-4"></div>
    </div>
    <div class="dotWrapper dotWrapper-5">
        <div class="dot dot-5"></div>
    </div>
    <div class="dotWrapper dotWrapper-6">
        <div class="dot dot-6"></div>
    </div>
    <div class="dotWrapper dotWrapper-7">
        <div class="dot dot-7"></div>
    </div>
    <div class="dotWrapper dotWrapper-8">
        <div class="dot dot-8"></div>
    </div>
    <div class="dotWrapper dotWrapper-9">
        <div class="dot dot-9"></div>
    </div>
    <div class="dotWrapper dotWrapper-10">
        <div class="dot dot-10"></div>
    </div>
    <div class="dotWrapper dotWrapper-11">
        <div class="dot dot-11"></div>
    </div>
    <div class="dotWrapper dotWrapper-12">
        <div class="dot dot-12"></div>
    </div>
    <div class="dotWrapper dotWrapper-13">
        <div class="dot dot-13"></div>
    </div>
    <div class="dotWrapper dotWrapper-14">
        <div class="dot dot-14"></div>
    </div>
    <div class="dotWrapper dotWrapper-15">
        <div class="dot dot-15"></div>
    </div>
    <div class="dotWrapper dotWrapper-16">
        <div class="dot dot-16"></div>
    </div>
    <div class="dotWrapper dotWrapper-17">
        <div class="dot dot-17"></div>
    </div>
    <div class="dotWrapper dotWrapper-18">
        <div class="dot dot-18"></div>
    </div>
    <div class="dotWrapper dotWrapper-19">
        <div class="dot dot-19"></div>
    </div>
    <div class="dotWrapper dotWrapper-20">
        <div class="dot dot-20"></div>
    </div>
    <div class="dotWrapper dotWrapper-21">
        <div class="dot dot-21"></div>
    </div>
    <div class="dotWrapper dotWrapper-22">
        <div class="dot dot-22"></div>
    </div>
    <div class="dotWrapper dotWrapper-23">
        <div class="dot dot-23"></div>
    </div>
    <div class="dotWrapper dotWrapper-24">
        <div class="dot dot-24"></div>
    </div>
    <div class="dotWrapper dotWrapper-25">
        <div class="dot dot-25"></div>
    </div>
    <div class="dotWrapper dotWrapper-26">
        <div class="dot dot-26"></div>
    </div>
    <div class="dotWrapper dotWrapper-27">
        <div class="dot dot-27"></div>
    </div>
    <div class="dotWrapper dotWrapper-28">
        <div class="dot dot-28"></div>
    </div>
    <div class="dotWrapper dotWrapper-29">
        <div class="dot dot-29"></div>
    </div>
    <div class="dotWrapper dotWrapper-30">
        <div class="dot dot-30"></div>
    </div>
    <div class="dotWrapper dotWrapper-31">
        <div class="dot dot-31"></div>
    </div>
    <div class="dotWrapper dotWrapper-32">
        <div class="dot dot-32"></div>
    </div>
    <div class="dotWrapper dotWrapper-33">
        <div class="dot dot-33"></div>
    </div>
    <div class="dotWrapper dotWrapper-34">
        <div class="dot dot-34"></div>
    </div>
    <div class="dotWrapper dotWrapper-35">
        <div class="dot dot-35"></div>
    </div>
    <div class="dotWrapper dotWrapper-36">
        <div class="dot dot-36"></div>
    </div>
    <div class="dotWrapper dotWrapper-37">
        <div class="dot dot-37"></div>
    </div>
    <div class="dotWrapper dotWrapper-38">
        <div class="dot dot-38"></div>
    </div>
    <div class="dotWrapper dotWrapper-39">
        <div class="dot dot-39"></div>
    </div>
    <div class="dotWrapper dotWrapper-40">
        <div class="dot dot-40"></div>
    </div>
    <div class="dotWrapper dotWrapper-41">
        <div class="dot dot-41"></div>
    </div>
    <div class="dotWrapper dotWrapper-42">
        <div class="dot dot-42"></div>
    </div>
    <div class="dotWrapper dotWrapper-43">
        <div class="dot dot-43"></div>
    </div>
    <div class="dotWrapper dotWrapper-44">
        <div class="dot dot-44"></div>
    </div>
    <div class="dotWrapper dotWrapper-45">
        <div class="dot dot-45"></div>
    </div>
    <div class="dotWrapper dotWrapper-46">
        <div class="dot dot-46"></div>
    </div>
    <div class="dotWrapper dotWrapper-47">
        <div class="dot dot-47"></div>
    </div>
    <div class="dotWrapper dotWrapper-48">
        <div class="dot dot-48"></div>
    </div>
    <div class="dotWrapper dotWrapper-49">
        <div class="dot dot-49"></div>
    </div>
    <div class="dotWrapper dotWrapper-50">
        <div class="dot dot-50"></div>
    </div>
    <div class="dotWrapper dotWrapper-51">
        <div class="dot dot-51"></div>
    </div>
    <div class="dotWrapper dotWrapper-52">
        <div class="dot dot-52"></div>
    </div>
    <div class="dotWrapper dotWrapper-53">
        <div class="dot dot-53"></div>
    </div>
    <div class="dotWrapper dotWrapper-54">
        <div class="dot dot-54"></div>
    </div>
    <div class="dotWrapper dotWrapper-55">
        <div class="dot dot-55"></div>
    </div>
    <div class="dotWrapper dotWrapper-56">
        <div class="dot dot-56"></div>
    </div>
    <div class="dotWrapper dotWrapper-57">
        <div class="dot dot-57"></div>
    </div>
    <div class="dotWrapper dotWrapper-58">
        <div class="dot dot-58"></div>
    </div>
    <div class="dotWrapper dotWrapper-59">
        <div class="dot dot-59"></div>
    </div>
    <div class="dotWrapper dotWrapper-60">
        <div class="dot dot-60"></div>
    </div>
    <div class="dotWrapper dotWrapper-61">
        <div class="dot dot-61"></div>
    </div>
    <div class="dotWrapper dotWrapper-62">
        <div class="dot dot-62"></div>
    </div>
    <div class="dotWrapper dotWrapper-63">
        <div class="dot dot-63"></div>
    </div>
    <div class="dotWrapper dotWrapper-64">
        <div class="dot dot-64"></div>
    </div>
    <div class="dotWrapper dotWrapper-65">
        <div class="dot dot-65"></div>
    </div>
    <div class="dotWrapper dotWrapper-66">
        <div class="dot dot-66"></div>
    </div>
    <div class="dotWrapper dotWrapper-67">
        <div class="dot dot-67"></div>
    </div>
    <div class="dotWrapper dotWrapper-68">
        <div class="dot dot-68"></div>
    </div>
    <div class="dotWrapper dotWrapper-69">
        <div class="dot dot-69"></div>
    </div>
    <div class="dotWrapper dotWrapper-70">
        <div class="dot dot-70"></div>
    </div>
    <div class="dotWrapper dotWrapper-71">
        <div class="dot dot-71"></div>
    </div>
    <div class="dotWrapper dotWrapper-72">
        <div class="dot dot-72"></div>
    </div>
    <div class="dotWrapper dotWrapper-73">
        <div class="dot dot-73"></div>
    </div>
    <div class="dotWrapper dotWrapper-74">
        <div class="dot dot-74"></div>
    </div>
    <div class="dotWrapper dotWrapper-75">
        <div class="dot dot-75"></div>
    </div>
</div>
    `
})

app2.mount(".body")


function updateTextInput(val) {
    document.getElementById('textInput').value = val;
}


const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,
    autoplay: {
        delay: 000,
    },
    slidesPerView: 4,
    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 1,
            spaceBetween: 20
        },
        // when window width is >= 480px
        520: {
            slidesPerView: 2,

        },
        // when window width is >= 640px
        780: {
            slidesPerView: 3,

        },
        1000: {
            slidesPerView: 4
        }
    }





});

// const tiBox = document.querySelector('.tariffs_box'),
//     ti1 = document.querySelector('.ti1'),
//     ti2 = document.querySelector('.ti2'),
//     ti3 = document.querySelector('.ti3'),
//     ti4 = document.querySelector('.ti4')
// window.addEventListener('scroll', () => {
//     if (pageYOffset > tiBox.offsetTop - tiBox.clientHeight) {
//         ti1.style = `transform: translateY(0%) !important`
//         ti2.style = `transform: translateY(${0}%) !important`
//         ti3.style = `transform: translateY(${0}%) !important`
//         ti4.style = `transform: translateY(${0}%) !important`
//     }

// })