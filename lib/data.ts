export interface Post {
    title: string,
    slug: string,
    date: string,
    content: string
}




export const posts:Post[] =[
    {
        title: "My First Post",
        slug: "first",
        date: new Date().toLocaleDateString(),
        content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt, labore!"
    },
    {
        title: "My Second Post",
        slug: "second",
        date: new Date().toLocaleDateString(),
        content: "22222222222222222222222222222222222"
    },
    {
        title: "My Third Post",
        slug: "third",
        date: new Date().toString(),
        content: "3333333333333333333333 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt, labore!"
    },
    {
        title: "My Fourth Post",
        slug: "fourth",
        date: Date.now().toString(),
        content: "4444444444444444444444444444444 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt, labore!"
    },
]