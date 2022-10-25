import { getPostFromSlug, getSlugs } from '../../lib/api';
import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote } from 'next-mdx-remote'
import { GetStaticProps } from 'next';
import { ParsedUrlQuery } from 'querystring';


const Blog = ({posts}) => {
    // console.log(posts.meta,posts.source)
    return (
        <div className='flex flex-col items-center space-y-8 my-20'>
            <div>
                <h1 className='text-blue-500 text-5xl font-semibold'>{posts.meta.title}</h1>
            </div>
            <div className='w-1/2'>
                <div className='w-full prose'>
                    <MDXRemote {...posts.source} />
                </div>
            </div>
        </div>
    );
}

export default Blog;

export const getStaticPaths = ()=>{
    const paths = getSlugs().map(slug=>({params:{slug}}))
    return {
        paths,
        fallback:false
    }
}

export const getStaticProps = async({params})=>{
    const {slug} = params
    const {content,meta} = getPostFromSlug(slug)

    const mdSource = await serialize(content) 
    return {
        props:{
            posts:{
                source:mdSource,
                meta
            }
        }
    }
}
