import { component$ } from "@builder.io/qwik";
// import { useGetTherapists } from "~/routes/layout";
import PagesHeader from "../PagesHeader/PagesHeader";
// import AboutMeetTheTeam from "./AboutMeetTheTeam";

export default component$(() => 
{
    // const therapists = useGetTherapists()

    return (
        <>
        <div class='AboutPageContainer'>
            <PagesHeader />
            <div class='AboutPage'>
                <div class='AboutPageOurStory'>
                    <div class='AboutPageOurStoryTitle'>
                        OUR STORY
                    </div>
                    <div class='AboutPageOurStoryDesc'>
                        <div class='AboutPageDescFirstPart'>
                            "The most valuable aspect of my undergraduate years was the university campus's 24/7 accessibility. It was the sole location where I felt truly accommodated at any hour. This place bore witness to my moments of reflection, intensive study, pivotal decision-making, genuine laughter with cherished companions, and much more. In contrast, all other environments seemed to exert pressure, preventing these activities from occurring with peace of mind. As a graduate student, I continued to frequent this place,  
                        </div>
                        <div class='AboutPageDescSecPart'>
                            but it wasn't until the COVID-19 pandemic forced campus closure that I recognized its profound significance. It was then that I realized everyone should have access to such a place.
                            <br/>A sanctuary accessible around the clock.
                            <br/>A haven devoid of external pressures.
                            <br/>A space where, for once, the focus is solely on oneself.
                            <br/>A place to feel, for once, that “it’s about me now, not others” A place to feel home…
                        </div>
                    </div>
                </div>
                <div class='AboutPageVideo'>
                    {/*//@ts-ignore*/}
                    {/* <iframe src="https://www.youtube.com/embed/-MKapbz0GIo?si=kxc7xo9Z2RFjCMsV&amp;controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
                    <div class='IFrameClone'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="98" height="97" viewBox="0 0 98 97" fill="none">
                            <circle cx="49.0001" cy="48.5001" r="48.1732" fill="#FFFDF4"/>
                            <path d="M61.2434 46.7679C62.5767 47.5377 62.5767 49.4622 61.2434 50.232L44.3784 59.969C43.0451 60.7388 41.3784 59.7765 41.3784 58.2369L41.3784 38.7629C41.3784 37.2233 43.0451 36.2611 44.3784 37.0309L61.2434 46.7679Z" fill="#464834"/>
                        </svg>
                    </div>
                    {/* <ReactPlayer
                        style={{ height: '100%', width: '100%'}} 
                        playIcon=
                        {
                            <svg xmlns="http://www.w3.org/2000/svg" width="98" height="97" viewBox="0 0 98 97" fill="none">
                                <circle cx="49.0001" cy="48.5001" r="48.1732" fill="#FFFDF4"/>
                                <path d="M61.2434 46.7679C62.5767 47.5377 62.5767 49.4622 61.2434 50.232L44.3784 59.969C43.0451 60.7388 41.3784 59.7765 41.3784 58.2369L41.3784 38.7629C41.3784 37.2233 43.0451 36.2611 44.3784 37.0309L61.2434 46.7679Z" fill="#464834"/>
                            </svg>
                        } 
                        stopOnUnmount={true}
                        url={'https://www.youtube.com/watch?v=-MKapbz0GIo'} 
                    /> */}
                </div>
            </div>
        </div>
        {/* <AboutMeetTheTeam therapists={therapists.value} /> */}
        {/* <AboutTherapistsPledge /> */}
        </>
    )
})