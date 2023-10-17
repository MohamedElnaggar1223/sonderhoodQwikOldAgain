import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import ClientsSay from "~/components/HomePage/ClientsSay";
import FAQ from "~/components/HomePage/FAQ";
import Home from "~/components/HomePage/Home";
import LookingForHelp from "~/components/HomePage/LookingForHelp";
import MeetTheTeam from "~/components/HomePage/MeetTheTeam";
import OurBlog from "~/components/HomePage/OurBlog";
import OurServices from "~/components/HomePage/OurServices";
import TherapyImportance from "~/components/HomePage/TherapyImportance";
import WhySonderHood from "~/components/HomePage/WhySonderHood";

export default component$(() => 
{
	return (
		<>
            <Home />
            <TherapyImportance />
            <OurServices />
            <LookingForHelp />
            <WhySonderHood />
            <MeetTheTeam />
            <OurBlog />
            <ClientsSay />
            <FAQ faqs={[]} />
        </>
	);
});

export const head: DocumentHead = {
  title: "Home",
  meta: [
    {
      name: "description",
      content: "The Sonderhood Website",
    },
  ],
  links: [
	{
		rel: 'preconnect',
		href: "https://fonts.googleapis.com"
	},
	{
		rel: 'preconnect',
		href: "https://fonts.gstatic.com",
		crossorigin: 'true'
	},
	{
		rel: 'stylesheet',
		href: "https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@9..40,100;9..40,200;9..40,300;9..40,400;9..40,500;9..40,600;9..40,700&display=swap"
	}
  ]
};
