import { component$ } from "@builder.io/qwik";
import { useGetFAQs } from "~/routes/layout";
import FAQItem from "./FAQItem";

interface Props{
    faqs: []
}

export default component$((props: Props) => 
{
    const faqsHomePage = useGetFAQs()

    //eslint-disable-next-line
    const faqsData = props.faqs.length !== 0 ? props.faqs : faqsHomePage.value[0].faqs

    const faqItems = faqsData.map((question, index) => <FAQItem key={index} faq={question} faqs={faqsData} index={index} />)

    return (
        <div class='FAQContainer'>
            <div class='FAQHeader'>
                <h1>FREQUENTLY ASKED QUESTIONS</h1>
            </div>
            <div class='FAQItems'>
                {faqItems}
            </div>
        </div>
    )
})