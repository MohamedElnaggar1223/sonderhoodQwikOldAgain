import { component$, useSignal, useVisibleTask$ } from "@builder.io/qwik";
import { useNavigate } from "@builder.io/qwik-city";
import { useGetTherapists } from "~/routes/layout";
import MeetTheTeamTherapist from "./MeetTheTeamTherapist";

export default component$(() => 
{
    const therapists = useGetTherapists()

    const navigate = useNavigate()

    const MeetRef = useSignal<Element>()

    useVisibleTask$(() => 
	{
		const isVisible = new IntersectionObserver((ref) => 
		{
			ref.forEach(test => {
				if(test.isIntersecting) test.target.classList.add('visible')
			})
		})

		isVisible.observe(MeetRef.value as Element)
	})

    const therapistsDisplay = therapists.value.map((therapist, index) => <MeetTheTeamTherapist key={therapist.id} index={index} therapist={therapist} />)

    return (
        <div class='MeetTheTeamContainer'>
            <div class='MeetTheTeamHeader'>
                <h1>MEET THE <span>TEAM</span></h1>
            </div>
            <div 
                ref={MeetRef} 
                class='MeetTheTeamItemsContainer hidden'
            >
                {therapistsDisplay}
            </div>
            <div class='MeetTheTeamItemsButtons'>
                    <button onClick$={() => navigate('/RequestASession')} class='MeetTheTeamItemBookButton'>REQUEST A BOOKING</button>
                    {/* <button onClick={() => navigate('/ContactUs')} class='MeetTheTeamItemContactButton'>CONTACT US</button> */}
            </div>
        </div>
    )
})