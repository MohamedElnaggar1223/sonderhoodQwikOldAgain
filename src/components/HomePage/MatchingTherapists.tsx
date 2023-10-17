import { component$ } from "@builder.io/qwik";
import { useNavigate } from "@builder.io/qwik-city";
import type { Therapist } from "~/routes/layout";
import MeetTheTeamTherapist from "./MeetTheTeamTherapist";

interface Props{
    therapists: Therapist[],
    search: []
}

export default component$((props: Props) => 
{
    const navigate = useNavigate()

    const filteredTherapists = props.therapists.filter(therapist => 
    {
        let counter = 0
        props.search.forEach(searchElem => 
        {
            if(therapist.search.includes(searchElem)) counter++
        })
        return counter === props.search.length
    })

    const therapistsDisplay = filteredTherapists.map((therapist, index) => <MeetTheTeamTherapist key={therapist.id} index={index} therapist={therapist} />)

    return (
        <div class='MeetTheTeamContainer'>
            <div class='MeetTheTeamHeader'>
                <h1>SEARCH RESULTS:</h1>
            </div>
            <div class='MeetTheTeamItemsContainer'>
                { therapistsDisplay }
            </div>
            <div class='MeetTheTeamItemsButtons'>
                    <button onClick$={() => navigate('/RequestASession')} class='MeetTheTeamItemBookButton'>REQUEST A BOOKING</button>
                    <button onClick$={() => navigate('/ContactUs')} class='MeetTheTeamItemContactButton'>CONTACT US</button>
            </div>
        </div>
    )
})