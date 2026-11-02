import './App.css';

function App() {
    const coffeediff = [
        {
            id: 1,
            name: 'Supreme Beans',
            info: 'Our Coffee prices are easy to afford',
            img: './src/assets/coffee-beans 1.png',
        },
        {
            id: 2,
            name: 'High Quality',
            info: 'Coffee like you have never tasted',
            img: './src/assets/badge 1.png',
        },
        {
            id: 3,
            name: 'Extraordinary',
            info: 'We provide the highest quality',
            img: './src/assets/coffee-cup 1.png',
        },
        {
            id: 4,
            name: 'Affordable Price',
            info: 'Beans that provides great taste',
            img: './src/assets/best-price 1.png',
        },
    ];
    const coffee = [
        {
            id: 1,
            name: 'Cappuccino',
            img: './src/assets/coffee.jpg',
            price: '$8.50',
        },
        {
            id: 2,
            name: 'Chai Latte',
            img: './src/assets/latte.jpg',
            price: '$8.50',
        },
        {
            id: 3,
            name: 'Macchiato',
            img: './src/assets/macchiato.jpg',
            price: '$8.50',
        },
        {
            id: 4,
            name: 'Expresso',
            img: './src/assets/expresso.jpg',
            price: '$8.50',
        },
    ];
return (
<>
<header className="w-full h-screen bg-[url(./assets/header.jpg)] bg-no-repeat bg-cover bg-center">NKJHGIYGTUYI</header>
<section className="w-full py-12 md:py-16 flex items-center justify-center bg-[url(./src/assets/coffeeBlast_bg.png)] bg-no-repeat bg-left-bottom">
    <div className="w-full max-w-[1160px] px-4 md:px-6 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="w-full md:w-1/2 flex flex-col items-start gap-6">
            <h2 className="text-[#603809] text-3xl md:text-4xl lg:text-[54px] font-bold font-playfair">
                Discover the best coffee
            </h2>
            <p className="text-[#707070] text-base md:text-xl font-normal">
                Bean Scene is a coffee shop that provides you with quality coffee that
                helps boost your productivity and helps build your mood. Having a cup of
                coffee is good, but having a cup of real coffee is greater. There is no
                doubt that you will enjoy this coffee more than others you have ever
                tasted.
            </p>
            <button className="w-[134px] h-[44px] shrink-0 bg-[#F9C05A] rounded-[24px] font-playfair font-bold text-base hover:bg-[#e0ab5f] transition">
                Learn More
            </button>
        </div>
        <img
            className="w-full max-w-[500px]" src="./src/assets/coffeDiscover.png "alt="Coffee cup"/>
    </div>
</section>

<section className="w-full py-12 md:py-16 flex items-center justify-center">
    <div className="w-full max-w-[1200px] px-4 flex flex-col items-center gap-6">
        <h2 className="text-[#603809] text-3xl md:text-5xl lg:text-7xl font-bold font-playfair text-center">
            Enjoy a new blend of coffee style
        </h2>
        <h3 className="text-[#707070] text-base md:text-xl font-playfair text-center"> Explore all flavours of coffee with us. There is always a new cup worth experiencing</h3>
        <div className="w-full flex flex-wrap justify-center gap-4 mt-4">
            {coffee.map((item) => (
                <div key={item.id} className="w-full max-w-[260px] flex relative group">
                    <div className="w-full min-h-[364px] flex flex-col justify-between items-center gap-2 bg-[#FFF9F1] border border-[rgba(249,192,106,0.42)] shadow-lg transition-transform duration-300 group-hover:-translate-y-2">
                        <img className="w-full h-[222px] object-cover" src={item.img} alt={item.name}/>
                        <div className="flex flex-col items-center h-[118px]">
                            <p className="text-[#603809] text-xl font-bold font-playfair">
                                {item.name}
                            </p>
                            <p className="font-playfair text-base text-[#1E1E1E]">
                                Coffee 50% | Milk 50%
                            </p>
                            <p className="font-playfair text-lg font-bold text-[#603809]">
                                {item.price}
                            </p>
                        </div>
                    </div>
                    <span className="w-[134px] h-[48px] font-playfair absolute left-1/2 -translate-x-1/2 bottom-0 translate-y-1/2 bg-[#F9C06A] flex items-center justify-center rounded-[24px] font-bold text-base shadow-md transition hover:bg-[#e0ab5f] cursor-pointer">
                        Order now
                    </span>

                </div>


            ))}

        </div>
    </div>
</section>



<section className="w-full py-12 md:py-20 flex flex-col items-center justify-center font-playfair">
    <div className="w-full max-w-[1200px] px-4 flex flex-col items-center">
        <h2 className="text-[#603809] text-3xl md:text-5xl font-bold text-center">Why are we different?</h2>

        <p className="text-[#707070] text-base md:text-xl text-center mt-4 mb-8"> Explore all flavours of coffee with us. There is always a new cup worth experiencing
        </p>
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 p-2 md:p-4">
            {coffeediff.map((item) => (
                <div
                    key={item.id}
                    className="w-full max-w-[280px] min-h-[284px] mx-auto flex flex-col items-center justify-center transition-transform duration-300 hover:-translate-y-2 group bg-[#FFF9F1] border border-[#F9C06A]/40">
                    <div className="w-full h-[120px] flex items-center justify-center overflow-hidden">
                        <img src={item.img} alt={item.name} className="w-[88px] h-[88px] object-contain transition-transform duration-500 group-hover:scale-105"/>
                    </div>
                    <div className="w-full min-h-[142px] flex flex-col items-center justify-center p-4">
                        <p className="text-[#603809] text-xl md:text-2xl font-bold text-center"> {item.name}</p>
                        <p className="text-[#1E1E1E] text-base md:text-lg text-center mt-2"> {item.info}</p>
                    </div>
                </div>
            ))}
        </div>
        <div className="w-full max-w-[980px] flex flex-col items-center gap-4 mt-8">
            <p className="text-[#707070] text-base md:text-xl text-center">Great ideas start with great coffee, Lets help you achieve that</p>
            <h2 className="text-[#603809] text-2xl md:text-3xl font-bold text-center">Get started today.</h2>
            <button className="min-w-[134px] min-h-[48px] px-6 flex items-center justify-center bg-[#F9C06A] rounded-[24px] transition-all duration-300 hover:bg-[#e0ab5f] active:scale-95 cursor-pointer">
                <span className="text-[#1E1E1E] text-base font-bold">Order Now</span>
            </button>
        </div>
    </div>
</section>
<section className="w-full py-12 md:py-20 flex flex-col items-center justify-center font-playfair">
<div className="w-full max-w-[1200px] px-4 flex flex-col items-center">
    <h2 className="text-[#603809] text-3xl md:text-5xl font-bold text-center">Why are we different?</h2>
    <p className="text-[#707070] text-base md:text-xl text-center mt-4 mb-8">Explore all flavours of coffee with us. There is always a new cup worth experiencing</p>
    <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 p-2 md:p-4">
        {coffeediff.map((item) => (
            <div
                key={item.id}
                className="w-full max-w-[280px] min-h-[284px] mx-auto flex flex-col items-center justify-center transition-transform duration-300 hover:-translate-y-2 group bg-[#FFF9F1] border border-[#F9C06A]/40">
                <div className="w-full h-[120px] flex items-center justify-center overflow-hidden">
                    <img src={item.img}alt={item.name}className="w-[88px] h-[88px] object-contain transition-transform duration-500 group-hover:scale-105"/>
                </div>
                <div className="w-full min-h-[142px] flex flex-col items-center justify-center p-4">
                    <p className="text-[#603809] text-xl md:text-2xl font-bold text-center">{item.name}</p>
                    <p className="text-[#1E1E1E] text-base md:text-lg text-center mt-2">{item.info}</p>
                </div>
            </div>
        ))}
    </div>
    <div className="w-full max-w-[980px] flex flex-col items-center gap-4 mt-8">
        <p className="text-[#707070] text-base md:text-xl text-center">Great ideas start with great coffee, Lets help you achieve that</p>
        <h2 className="text-[#603809] text-2xl md:text-3xl font-bold text-center">Get started today.</h2>
        <button className="min-w-[134px] min-h-[48px] px-6 flex items-center justify-center bg-[#F9C06A] rounded-[24px] transition-all duration-300 hover:bg-[#e0ab5f] active:scale-95 cursor-pointer">
            <span className="text-[#1E1E1E] text-base font-bold">Order Now</span>
        </button>
    </div>
</div>
</section>

<section className="w-full min-h-[500px] py-12 md:py-16 bg-[url(./src/assets/reklamaBg.jpg)] bg-no-repeat bg-cover bg-center flex items-center justify-center">
<div className="w-full max-w-[1160px] px-4 md:px-6 flex flex-col md:flex-row justify-between items-center gap-8">
    <div className="w-full md:w-1/2 flex flex-col items-start gap-6">
        <h2 className="font-playfair font-bold text-3xl md:text-5xl lg:text-6xl text-white">Get a chance to have an Amazing morning</h2>
        <p className="font-playfair text-base md:text-xl text-white">We are giving you are one time opportunity to experience a better life with coffee.</p>
        <button className="w-[134px] h-[48px] shrink-0 font-playfair bg-[#F9C06A] flex items-center justify-center rounded-[24px] font-bold text-base shadow-md transition hover:bg-[#e0ab5f]">Order now</button>
    </div>
        <img className="w-[180px] md:w-[250px] lg:w-[300px] h-auto" src="./src/assets/cup.png" alt="Coffee cup"/>
    </div>
</section>

<section className="w-full py-12 md:py-20 flex flex-col items-center justify-center relative overflow-hidden">
<div className="w-full px-4 text-center mb-10 md:mb-12">
    <h3 className="text-[#603809] text-3xl md:text-5xl font-bold font-playfair">Our coffee perfection feedback</h3><p className="text-[#707070] text-base md:text-xl mt-3">Our customers has amazing things to say about us</p>
</div>

<div className="relative w-[calc(100%-40px)] max-w-[980px] min-h-[400px] md:min-h-[524px] bg-[#FFF9F1] border border-[#F9C06A]/40 flex flex-col items-center justify-center px-5 py-12 md:px-20">
    <div className="absolute top-4 left-4 md:top-10 md:left-10 text-[#603809] text-6xl md:text-8xl font-serif leading-none opacity-80 select-none">“</div>

    <p className="text-[#707070] text-base md:text-lg font-semibold text-center leading-relaxed mb-8 relative z-10">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        Lorem Ipsum has been the industry's standard dummy text ever since the
        1500s, when an unknown printer took a galley of type and scrambled it to
        make a type specimen book. It has survived not only five centuries, but also
        the leap into electronic typesetting, remaining essentially unchanged. It
        was popularised in the 1960s with the release of Letraset.....
    </p>

    <div className="text-center mb-8 md:mb-12 relative z-10">
        <p className="text-[#603809] text-2xl md:text-[32px] font-bold font-playfair">
            Mickhael Starchukov
        </p>
        <p className="text-[#707070] text-base md:text-xl">Project Manager</p>
    </div>
    <div className="absolute -bottom-10 md:-bottom-14 left-1/2 -translate-x-1/2 w-[80px] h-[80px] md:w-[112px] md:h-[112px]">
        <img className="w-full h-full object-cover" src="./src/assets/negrinikapuchini.png" alt="Customer"/>
    </div>

    <button
        aria-label="Previous review"
        className="absolute top-1/2 -translate-y-1/2 -left-3 md:-left-6 w-10 h-10 md:w-[60px] md:h-[60px] bg-[#F9C06A] rounded-xl flex items-center justify-center shadow-lg hover:bg-[#e0ab5f] transition">
        <span className="text-xl md:text-2xl text-[#603809]">←</span>
    </button>
    <button
        aria-label="Next review"
        className="absolute top-1/2 -translate-y-1/2 -right-3 md:-right-6 w-10 h-10 md:w-[60px] md:h-[60px] bg-[#F9C06A] rounded-xl flex items-center justify-center shadow-lg hover:bg-[#e0ab5f] transition">
        <span className="text-xl md:text-2xl text-[#603809]">→</span>
    </button>
</div>
</section>
<footer className="w-full min-h-[650px] relative flex items-center justify-center bg-[#442808] py-12">
    <div className="absolute inset-0 bg-[url('./src/assets/fotterImage.png')] bg-cover bg-center opacity-60"></div>
    <div className="absolute inset-0 bg-[#442808]/50"></div>
    <div className="relative z-10 w-full max-w-[1160px] px-4 md:px-6 flex flex-wrap justify-between gap-10 items-start text-white font-playfair">
        <div className="w-full sm:w-[380px] flex flex-col gap-6">
            <h2 className="font-clicker text-[44px] md:text-[54px] leading-none text-white">
                Bean Scene
            </h2>
            <p className="text-sm leading-relaxed text-white/90">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s, when an unknown printer took a galley of type and
                scrambled it to make a type specimen book.
            </p>
            <div className="flex flex-wrap gap-6 mt-2">
                <a href="#" aria-label="Facebook">
                    <img
                        className="w-8 h-8"
                        src="./src/assets/facebook.svg"
                        alt="Facebook"
                    />
                </a>
                <a href="#" aria-label="Instagram">
                    <img
                        className="w-8 h-8"
                        src="./src/assets/instagramm.svg"
                        alt="Instagram"
                    />
                </a>
                <a href="#" aria-label="YouTube">
                    <img
                        className="w-8 h-8"
                        src="./src/assets/youtube.svg"
                        alt="YouTube"
                    />
                </a>
                <a href="#" aria-label="Twitter">
                    <img
                        className="w-8 h-8"
                        src="./src/assets/twitter.svg"
                        alt="Twitter"
                    />
                </a>
            </div>
        </div>

        <div className="w-full sm:w-auto flex flex-col gap-4">
            <h3 className="font-bold text-2xl md:text-[26px] mb-2">About</h3>

            <ul className="flex flex-col gap-3 text-base md:text-lg text-white/90">
                <li>
                    <a href="#" className="hover:text-[#F9C06A] transition">
                        Menu
                    </a>
                </li>
                <li>
                    <a href="#" className="hover:text-[#F9C06A] transition">
                        Features
                    </a>
                </li>
                <li>
                    <a href="#" className="hover:text-[#F9C06A] transition">
                        News & Blogs
                    </a>
                </li>
                <li>
                    <a href="#" className="hover:text-[#F9C06A] transition">
                        Help & Supports
                    </a>
                </li>
            </ul>
        </div>
        <div className="w-full sm:w-auto flex flex-col gap-4">
            <h3 className="font-bold text-2xl md:text-[26px] mb-2">Company</h3>

            <ul className="flex flex-col gap-3 text-base md:text-lg text-white/90">
                <li>
                    <a href="#" className="hover:text-[#F9C06A] transition">
                        How we work
                    </a>
                </li>
                <li>
                    <a href="#" className="hover:text-[#F9C06A] transition">
                        Terms of service
                    </a>
                </li>
                <li>
                    <a href="#" className="hover:text-[#F9C06A] transition">
                        Pricing
                    </a>
                </li>
                <li>
                    <a href="#" className="hover:text-[#F9C06A] transition">
                        FAQ
                    </a>
                </li>
            </ul>
        </div>

        <div className="w-full sm:w-auto flex flex-col gap-4">
            <h3 className="font-bold text-2xl md:text-[26px] mb-2">Contact Us</h3>

                    <ul className="flex flex-col gap-4 text-base md:text-lg text-white/90">
                        <li className="max-w-[250px] break-words">
                            Akshya Nagar 1st Block 1st Cross, Rammurthy nagar, Bangalore-560016
                        </li>
                        <li>
                            <a
                                href="tel:+12029182132"
                                className="hover:text-[#F9C06A] transition">
                                +1 202-918-2132
                            </a>
                        </li>
                        <li>
                            <a
                                href="mailto:beanscene@mail.com"
                                className="hover:text-[#F9C06A] transition">
                                beanscene@mail.com
                            </a>
                        </li>
                        <li>
                            <a
                                href="http://www.beanscene.com"
                                className="hover:text-[#F9C06A] transition">
                                www.beanscene.com
                            </a>
                        </li>
                    </ul>
        </div>
    </div>
</footer>
</>);}

export default App;
