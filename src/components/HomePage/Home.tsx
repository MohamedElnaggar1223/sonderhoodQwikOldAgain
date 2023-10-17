import { component$, useSignal, useVisibleTask$ } from "@builder.io/qwik";
import { useNavigate } from "@builder.io/qwik-city";
import HomeHeader from "./HomeHeader";

export default component$(() => 
{
    const navigate = useNavigate()

    const VectorRef = useSignal<Element>()
    const BookRef = useSignal<Element>()

    useVisibleTask$(() => 
	{
		const isVisible = new IntersectionObserver((ref) => 
		{
			ref.forEach(test => {
				if(test.isIntersecting) test.target.classList.add('visible')
				else test.target.classList.remove('visible')
			})
		})
		isVisible.observe(VectorRef.value as Element)
		isVisible.observe(BookRef.value as Element)
	})

    return (
        <div class='HomePageContainer'>
            <HomeHeader />
            <div class='HomePage'>
                <div class='IVectors'>
                    <div class='IVector'></div>
                    <div class='IVector'></div>
                    <div ref={VectorRef} class='IVectorTilted hidden'></div>
                </div>
                <div ref={BookRef} class='HomePageBookSession hidden'>
                    <div class='HomePageBookSessionText'>
                        <h6>Your</h6> <h6>Safe</h6> <h6>Haven</h6>
                    </div>
                    <div class='HomePageBookSessionButton'>
                        <button onClick$={() => navigate('/RequestASession')}>Request A Booking</button>
                    </div>
                </div>
            </div>
        </div>
    )
})