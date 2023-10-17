import { component$, useSignal, useVisibleTask$ } from "@builder.io/qwik";

export default component$(() => 
{
    const TitleRef = useSignal<Element>()
    const DescRef = useSignal<Element>()

    useVisibleTask$(() => 
	{
		const isVisible = new IntersectionObserver((ref) => 
		{
			ref.forEach(test => {
				if(test.isIntersecting) 
                {
                    test.target.parentElement?.parentElement?.classList.add('visible')
                    DescRef.value?.classList.add('visible')
                }
				else 
                {
                    test.target.parentElement?.parentElement?.classList.remove('visible')
                    DescRef.value?.classList.remove('visible')
                }
			})
		})
		isVisible.observe(TitleRef.value as Element)
	})

    return(
        <div style={{ overflowX: 'hidden' }} class='TherapyImportanceContainer'>
            <div class='TherapyImportanceTitle hidden'>
                <div><span ref={TitleRef}>WHAT IS </span><span style={{ fontFamily: 'Raglika' }}>THERAPY ?</span></div>
            </div>
            <div ref={DescRef} class='TherapyImportanceDesc hidden'>
                Therapy is a structured, confidential process facilitated by trained professionals. It provides individuals with a supportive environment to explore and address their emotional, psychological, and behavioral challenges. Through open dialogue, therapists offer guidance, insights, and evidence-based strategies to help clients improve their mental well-being, cope with difficulties, and achieve personal growth. It is a collaborative journey that fosters self-awareness, resilience, and the development of effective coping skills to enhance one's overall quality of life.
            </div>
        </div>
    )
})