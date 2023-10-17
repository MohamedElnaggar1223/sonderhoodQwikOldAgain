import { component$, useSignal, useTask$, $ } from "@builder.io/qwik";
import HelpButton from "./HelpButton";
import MatchingTherapists from "./MatchingTherapists";
import { useGetTherapists } from "~/routes/layout";
const buttons = ['Depression', 'Eating Disorder', 'Anxiety', 'Marriage', 'Body Dysmorphia', 'Relationship', 'Personality Disorder', 'Addiction', 'Self Esteem', 'Social Anxiety', 'OCD', 'Trauma', 'Codependency', 'Abusive parents', 'Family Problems']

export default component$(() => 
{
    const therapists = useGetTherapists()

    const search = useSignal<[]>([])
    const showResults = useSignal(false)

    useTask$(({ track }) => 
    {
        track(search)
        //eslint-disable-next-line
        if(search.value.length === 0) showResults.value = false
    })

    const handleClick = $((button: string) =>
    {
        const array = search.value
        //eslint-disable-next-line
        if(array.find(elem => elem === button) !== undefined && array.find(elem => elem === button) !== null)
        {
            const filteredArray = array.filter(elem => elem !== button)
            //@ts-ignore
            search.value = filteredArray
        }
        else
        {
            const finalArray = [...array, button]
            //@ts-ignore
            search.value = finalArray
        }
    })

    const buttonItems = buttons.map((button, index) => <HelpButton handleClick={$(() => handleClick(button))} key={index} button={button} />)

    return(
        <>
        <div class='LookingForHelpContainer'>
            <div class='LookingForHelpHeader'>
                <h1>I AM LOOKING FOR A THERAPIST TO HELP ME WITH MY:</h1>
            </div>
            {/* <form onSubmit={handleSubmit} class='LookingForHelpSearch'>
                <input
                    type='text'
                    placeholder='How are you feeling...'
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                />
                <img src={searchImage} alt='search'/>
            </form> */}
            <div class='LookingForHelpItemsContainer'>
                <div class='LookingForHelpItemsMostSearched'>
                    Most Searched:
                </div>
                <div class='LookingForHelpItems'>
                    {buttonItems}
                </div>
                <div class='LookingForHelpItemsButtons'>
                    <button onClick$={() => showResults.value = true} class='LookingForHelpItemsFindButton'>FIND A THERAPIST</button>
                    {/* <button onClick={() => navigate('/About')} class='LookingForHelpItemsAboutButton'>ABOUT US</button> */}
                    
                </div>
            </div>
        </div>
        { showResults.value && <MatchingTherapists therapists={therapists.value} search={search.value} /> }
        </>
    )
})