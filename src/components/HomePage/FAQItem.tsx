import { component$, useSignal } from "@builder.io/qwik";

interface Props{
    faq: {
        question: string,
        answer: string
    },
    faqs: [],
    index: number
}

export default component$((props: Props) => 
{
    const shown = useSignal(false)

    const openIcon = (
        <svg xmlns="http://www.w3.org/2000/svg" width="39" height="38" viewBox="0 0 39 38" fill="none">
            <path d="M19.1582 4.1792V32.6792" stroke="#90946B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M4.9082 18.4292H33.4082" stroke="#90946B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    )

    const closeIcon = (
        <svg xmlns="http://www.w3.org/2000/svg" width="39" height="38" viewBox="0 0 39 38" fill="none">
            <path d="M4.7627 33.25L33.2627 4.75" stroke="#90946B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M33.2627 33.25L4.7627 4.75" stroke="#90946B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    )

    return (
        <>
        <div style={ props.faqs.length === (props.index+1) ? {} : shown.value ? {} : {borderBottom: '1px solid #000'} } onClick$={() => shown.value = !shown.value} class='FAQItem'>
            <div class='FAQItemHeading'>
                <div class='FAQItemHeadingNumber'>
                    { Math.floor((props.index+1) / 10) === 0 ? `0${props.index+1}` : props.index+1 }
                </div>
                <div class='FAQItemHeadingQuestion'>
                    {props.faq.question}
                </div>
                <div class='FAQItemHeadingController'>
                    { shown.value ? closeIcon : openIcon }
                </div>
            </div>
        </div>
        <div class={shown.value ? 'FAQItemAnswerWrapper open' : 'FAQItemAnswerWrapper'}>
            {shown.value && 
                <div style={ props.faqs.length === (props.index+1) ? {} : {borderBottom: '1px solid #000'} } class={'FAQItemAnswerTemp'}>
                    {props.faq.answer}    
                </div>
            }
        </div>
        </>
    )
})