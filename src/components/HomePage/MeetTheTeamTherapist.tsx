/* eslint-disable qwik/jsx-img */
import { component$, useSignal } from "@builder.io/qwik";
import { useNavigate } from "@builder.io/qwik-city";
import type { Therapist } from "~/routes/layout";
import { Image } from 'qwik-image'

interface Props{
    index: number,
    therapist: Therapist
}

export default component$((props: Props) => 
{
    const navigate = useNavigate()
    const ref = useSignal<Element>()

    const services = props.therapist.clientele.map((service) => <div key={service} class='MeetTheTeamItemProfItem'>{service}</div>)

    return (
        <div 
            onClick$={() => navigate(`/Therapists/${props.therapist.name.split(" ").join("")}`)} 
            class='MeetTheTeamItem'
            ref={ref}
        >
            <div class='MeetTheTeamItemImage'>
                <Image layout='constrained' src={props.therapist.image} alt='t4' />
            </div>
            <div class='MeetTheTeamItemInfo'>
                <div class='MeetTheTeamItemName'>
                    {props.therapist.name}
                </div>
                <div class='MeetTheTeamItemDesc'>
                    {props.therapist.position}
                </div>
            </div>
            <div class='MeetTheTeamItemProf'>
                {services}
            </div>
        </div>
    )
})