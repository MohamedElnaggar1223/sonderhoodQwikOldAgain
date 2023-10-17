import { component$, useSignal, useVisibleTask$ } from "@builder.io/qwik";
import { useNavigate } from "@builder.io/qwik-city";
import { useGetServices } from "~/routes/layout";

const colors = ['#F9F3D0', '#FFDEB5', '#D6DCA2']

export default component$(() => 
{
    const services = useGetServices()

    const navigate = useNavigate()

    const ServicesRef = useSignal<Element>()

    useVisibleTask$(() => 
	{
		const isVisible = new IntersectionObserver((ref) => 
		{
			ref.forEach(test => {
				if(test.isIntersecting) 
                {
                    const length = test.target.children.length
                    for(let i = 0; i < length; i++)
                    {
                        test.target.children[i].classList.add('visible')
                    }
                }
				else 
                {
                    const length = test.target.children.length
                    for(let i = 0; i < length; i++)
                    {
                        test.target.children[i].classList.remove('visible')
                    }
                }
			})
		})

		isVisible.observe(ServicesRef.value as Element)
	})

    const displayServices = services.value.map((service, index) => 
    { 
        const number = Math.floor((index+1) / 10) === 0 ? `0${index+1}` : index+1
        return(
            <div 
                key={index} 
                onClick$={() => navigate(`/Services/${service.title.replace(/\s/g, '')}`)} 
                class='OurServicesItemContainer hidden' 
                style={{ background: colors[Math.floor(Math.random() * 3)] }}
            >
                <div class='OurServicesItemNumber'>
                    {number}
                </div>
                <div class='OurServicesItemTitle'>
                    {service.title}
                </div>
                <div class='OurServicesItemBody'>
                    {service.description}
                </div>
            </div>
        )
    })

    return(
        <div class='OurServicesContainer'>
            <div class='OurServicesHeader'>
                <h1>OUR SERVICES</h1>
            </div>
            <div ref={ServicesRef} class='OurServicesItems'>
                {displayServices}
            </div>
        </div>
    )
})