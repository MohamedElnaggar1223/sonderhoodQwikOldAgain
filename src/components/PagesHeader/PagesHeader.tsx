import { component$, useSignal, useVisibleTask$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";

export default component$(() => 
{
    const HeaderRef = useSignal<Element>()

    useVisibleTask$(() => 
    {
        const isVisible = new IntersectionObserver((ref) => 
		{
			ref.forEach(test => {
				if(!test.isIntersecting) HeaderRef.value?.scrollIntoView({ behavior: 'smooth' })
			})
		})

		isVisible.observe(HeaderRef.value as Element)
    })

    return(
        <div ref={HeaderRef} class='PagesHeaderContainer'>
            <div class='PagesHeaderContent'>
            {/*//@ts-ignore*/}
                <div ref={HeaderRef} class='PagesHeaderAnchor'><Link href='/'>HOME</Link></div>
                <div class='PagesHeaderAnchor'><Link href='/About'>ABOUT</Link></div>
                <div class='PagesHeaderAnchor'><Link href='/Blogs'>BLOG</Link></div>
                <div class='PagesHeaderAnchor'><Link href='/Services'>OUR SERVICES</Link></div>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" width="52" height="76" viewBox="0 0 52 76" fill="none">
                <path d="M22.7106 28.0581V27.8081H22.4606H20.9175H20.6675V28.0581V74.7204V74.9704H20.9175H22.4606H22.7106V74.7204V28.0581Z" fill="#464834" stroke="#464834" strokeWidth="0.5"/>
                <path d="M50.4778 27.2783V27.0283H50.2278H1.06226H0.812256V27.2783V28.8375V29.0875H1.06226H50.2278H50.4778V28.8375V27.2783Z" fill="#464834" stroke="#464834" strokeWidth="0.5"/>
                <path d="M11.414 28.0581V27.8081H11.164H9.62085H9.37085V28.0581V74.7204V74.9704H9.62085H11.164H11.414V74.7204V28.0581Z" fill="#464834" stroke="#464834" strokeWidth="0.5"/>
                <path d="M33.3318 27.3315L33.2431 27.0977L33.01 27.188L31.568 27.7467L31.3349 27.8371L31.4236 28.0708L49.2701 75.0949L49.3588 75.3286L49.5919 75.2383L51.0339 74.6796L51.267 74.5893L51.1783 74.3556L33.3318 27.3315Z" fill="#464834" stroke="#464834" strokeWidth="0.5"/>
                <path d="M0.75 75.5V75.75H1H50.7494H50.9994H51V75.5H51.2494V25.7597C51.2494 11.6959 39.9244 0.25 25.9997 0.25C12.075 0.25 0.75 11.6959 0.75 25.7597V75.5ZM49.2069 25.7597V73.6908H2.79313V25.7597C2.79313 12.8274 13.2062 2.30918 26.0003 2.30918C38.7944 2.30918 49.2069 12.8268 49.2069 25.7597Z" fill="#464834" stroke="#464834" strokeWidth="0.5"/>
                <path d="M16.3506 14.9016C16.3506 20.2738 20.6759 24.6484 25.9997 24.6484C31.3228 24.6484 35.6487 20.2738 35.6487 14.9016C35.6487 9.5294 31.3228 5.15479 25.9997 5.15479C20.6765 5.15479 16.3506 9.5294 16.3506 14.9016ZM18.3937 14.9016C18.3937 10.6603 21.8089 7.21396 25.9997 7.21396C30.1911 7.21396 33.6056 10.6603 33.6056 14.9016C33.6056 19.1429 30.1911 22.5892 25.9997 22.5892C21.8083 22.5892 18.3937 19.1429 18.3937 14.9016Z" fill="#464834" stroke="#464834" strokeWidth="0.5"/>
            </svg>
            <div class='PagesHeaderContent'>
                <div class='PagesHeaderAnchor'><Link href='/ContactUs'>CONTACT US</Link></div>
                {/* <div class='PagesHeaderAnchor'><Link href='/BookASession'>BOOK A SESSION</Link></div> */}
                <div class='PagesHeaderAnchor'><Link href='/RequestASession'>REQUEST A BOOKING</Link></div>
            </div>
        </div>
    )
})