// import { component$, useSignal, $ } from "@builder.io/qwik";
// import { useNavigate } from "@builder.io/qwik-city";
// import { useGetServices, type Therapist, useGetTherapists } from "~/routes/layout";

// interface Props{
//     therapists: Therapist[]
// }

// export default component$((props: Props) => 
// {
//     const navigate = useNavigate()

//     const selectedService = useSignal('All Services')

//     const services = useGetServices()
//     const therapistsData = useGetTherapists()
//     const availableTherapists = useSignal(props.therapists)

//     const handleFilter = $(async (e: any) =>
//     {
//         const serviceTitle = e.target.value
//         selectedService.value = serviceTitle

//         const service = services.value.find(serviceItem => serviceItem.title === serviceTitle)

//         if(service)
//         {
//             const therapistsArray = [] as Therapist[]
//             service.therapists.map(therapist => 
//                 {
//                     const foundTherapist = therapistsData.value.find(data => data.id === therapist?.id)
//                     therapistsArray.push(foundTherapist as Therapist)
//                 })
//             availableTherapists.value = therapistsArray
//         }
//         else availableTherapists.value = therapistsData.value
//     })

//     const servicesOptions = services.value.map(service => (
//         <option
//             value={service.title}
//             key={service.title}
//         >
//             {service.title}
//         </option>
//     ))

//     const therapistsDisplay = availableTherapists.value.length === 1 && availableTherapists.value[0] === undefined
//     ?
//     (
//         <div class='NoTherapists'>
//             No Therapists Available
//         </div>
//     )
//     : availableTherapists.value.map((therapist, index) => <Therapist key={index} therapist={therapist} />)

//     return (
//         <div class='MeetTheTeamContainer'>
//             <div class='MeetTheTeamHeader'>
//                 <div class='MeetTheTeamHeaderContainer'>
//                     <div class='MeetTheTeamHeaderTitle'>
//                         <h1>MEET THE <span>TEAM</span></h1>
//                     </div>
//                     <div class='MeetTheTeamHeaderDesc'>
//                         Get to know our exceptional team of experienced and compassionate therapists. Each member is dedicated to supporting your well-being and helping you thrive on your journey toward personal growth and mental health.
//                     </div>
//                 </div>
//                 <div class='MeetTheTeamHeaderFilters'>
//                     <div class='MeetTheTeamHeaderFiltersInput'>
//                         <label for='filters'>FILTER BY:</label>
//                         <select onChange$={$((e: any) => handleFilter(e))} id='filters'>
//                             <option value='All Services'>All Services</option>
//                             {servicesOptions}
//                         </select>
//                     </div>
//                 </div>
//             </div>
//             <div class='MeetTheTeamItemsContainer'>
//                 {therapistsDisplay}
//             </div>
//             <div class='MeetTheTeamItemsButtons'>
//                     <button onClick$={() => navigate('/RequestASession')} class='MeetTheTeamItemBookButton'>REQUEST A BOOKING</button>
//                     {/* <button onClick={() => navigate('/ContactUs')} class='MeetTheTeamItemContactButton'>CONTACT US</button> */}
//             </div>
//         </div>
//     )
// })