import path from 'path'
import fs from 'fs'
import matter from "gray-matter"


const PATH_FILE = path.join(process.cwd(), 'Content')

export const getSlugs = (): string[] => {
    const paths = fs.readdirSync(PATH_FILE)
    return paths.map(path=>{
        const parts = path.split('.')
        const [slug,_extension] = parts
         return slug
    })
}

export const getAllPost = ()=>{
    const posts = getSlugs().map(slug=> getPostFromSlug(slug)).sort((a,b)=>{
        if(a>b) return 1
        if(a<b) return -1
        return 0
    }).reverse()

    return posts
}

export interface Post{
    content:string,
    meta:PostMeta
}

export interface PostMeta{
    title:string,
    slug:string,
    date:Date,
}

export const getPostFromSlug = (slug:string):Post =>{
    const postPath = path.join(PATH_FILE,`${slug}.md`)
    const source = fs.readFileSync(postPath)
    const {content,data} = matter(source)

    return{
        content,
        meta:{
            slug,
            title:data.title ?? slug,
            date: (data.date ?? new Date()).toLocaleDateString()
        }
    }
} 

