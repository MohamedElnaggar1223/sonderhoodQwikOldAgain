/* eslint-disable qwik/jsx-img */
import { component$ } from "@builder.io/qwik";
import { useNavigate } from "@builder.io/qwik-city";
import { useGetBlogs } from "~/routes/layout";
import { Image } from 'qwik-image'

export default component$(() => 
{
    const blogs = useGetBlogs()

    const navigate = useNavigate()

    const displayedBlogs = blogs.value.map(blog => 
        (
            <div onClick$={() => navigate(`/ArticlePage/${blog.title.split(" ").join("")}`)} key={blog.id} class='OurBlogItemContainer'>
                <div class='OurBlogItemImage'>
                    <Image layout="constrained" objectFit='fill' width={400} height={500} src={blog.image} alt='c1' />
                </div>
                <div class='OurBlogItemInfo'>
                    <div class='OurBlogItemAuthor'>
                        Author: {blog.therapist}
                    </div>
                    <div class='OurBlogItemTitle'>
                        {blog.title}
                    </div>
                    <div class='OurBlogItemBody'>
                        {blog.description}
                    </div>
                </div>
            </div>
        ))

    return (
        <div class='OurBlogContainer'>
            <div class='OurBlogHeader'>
                <h1>OUR BLOG</h1>
            </div>
            <div class='OurBlogItems'>
                {displayedBlogs}
            </div>
            <div class='OurBlogItemsButtons'>
                <button onClick$={() => navigate('/Blogs')} class='OurBlogItemBookButton'>SEE ALL BLOGS</button>
                {/* <button onClick={() => navigate('/ContactUs')} class='OurBlogItemContactButton'>CONTACT US</button> */}
            </div>
        </div>
    )
})