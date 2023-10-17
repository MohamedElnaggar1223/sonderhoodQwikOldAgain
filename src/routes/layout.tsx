import { component$, Slot, noSerialize, type NoSerialize } from "@builder.io/qwik";
import { routeLoader$ } from "@builder.io/qwik-city";
import type { RequestHandler } from "@builder.io/qwik-city";
import { collection, DocumentReference, getDocs, orderBy, query } from "firebase/firestore";
import { db } from "../components/Config/firebaseConfig";
import Footer from "~/components/Footer/Footer";
import { useImageProvider } from "qwik-image";

export interface Service{
	id: string,
	description: string,
	faqs: [],
	order: number,
	points: [],
	therapists: NoSerialize<DocumentReference>[],
	title: string
}

export interface Therapist{
	id: string,
	blogs: [],
	certificates: [],
	clientele: [],
	image: string,
	name: string,
	position: string,
	quote: string,
	search: []
}

export interface Blog{
	id: string,
	body: string,
	description: string,
	duration: string,
	image: string,
	therapist: string,
	title: string,
	topic: string
}

export interface FAQ{
	id: string
	faqs: []
}

export interface Testimonial{
	id: string
	testimonial: string
}

export const onGet: RequestHandler = async ({ cacheControl }) => {
  // Control caching for this request for best performance and to reduce hosting costs:
  // https://qwik.builder.io/docs/caching/
  cacheControl({
    // Always serve a cached response by default, up to a week stale
    staleWhileRevalidate: 60 * 60 * 24 * 7,
    // Max once every 5 seconds, revalidate on the server to get a fresh version of this page
    maxAge: 5,
  });
};

export const useServerTimeLoader = routeLoader$(() => {
  return {
    date: new Date().toISOString(),
  };
});

export const useGetServices = routeLoader$(async () => 
{
	const servicesCollection = collection(db, "services")
	const servicesData = await getDocs(query(servicesCollection, orderBy('order')))

	const initialState = servicesData.docs.map(service => 
	{
		const data = 
		{
			description: service.data().description,
			faqs: service.data().faqs,
			order: service.data().order,
			points: service.data().points,
			therapists: noSerialize(service.data().therapists),
			title: service.data().title
		}
		return ({ ...data, id: service.id })
	})

	return initialState as Service[]
})

export const useGetTherapists = routeLoader$(async () => 
{
	const therapistsCollection = collection(db, "therapists")
	const therapistsData = await getDocs(therapistsCollection)
	const initialState = therapistsData.docs.map(therapist => ({ ...therapist.data(), id: therapist.id }))

	return initialState as Therapist[]
})

export const useGetBlogs = routeLoader$(async () => 
{
	const blogsCollection = collection(db, "blogs")
	const blogsData = await getDocs(blogsCollection)
	const initialState = blogsData.docs.map(blog => ({ ...blog.data(), id: blog.id }))

	return initialState as Blog[]
})

export const useGetTestimonials = routeLoader$(async () => 
{
	const testimonialsCollection = collection(db, "testimonials")
	const testimonialsData = await getDocs(testimonialsCollection)
	const initialState = testimonialsData.docs.map(testimonial => ({ ...testimonial.data(), id: testimonial.id }))

	return initialState as Testimonial[]
})

export const useGetFAQs = routeLoader$(async () => 
{
	const homepageFaqsCollection = collection(db, 'homepageFaqs')
	const homepageFaqsData = await getDocs(homepageFaqsCollection)
	const initialState = homepageFaqsData.docs.map(faq => ({ ...faq.data(), id: faq.id }))

	return initialState as FAQ[]
})


export default component$(() => {

	useImageProvider({
        // You can set this prop to overwrite default values [3840, 1920, 1280, 960, 640]
        resolutions: [1280],
        });
	return (
		<>
			<Slot />
			<Footer />
		</>
	);
});
