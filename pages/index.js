
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Head from 'next/head'
import Post from '../components/Post'
import { sortByDate } from '../utils'

export default function Home({ posts }) {
  return (
    <div>
      <Head>
        <title>Dev Blog</title>
      </Head>

      <div className='posts'>
        {posts.map((post, index) => (
          <Post key={index} post={post} />
        ))}
      </div>
    </div>
  )
}

export async function getStaticProps() {
  // Get files from the posts dir
  const files = fs.readdirSync(path.join('posts'))

  // Get slug and frontmatter from posts
  const posts = files.map((filename) => {
    // Create slug
    const slug = filename.replace('.md', '')

    // Get frontmatter
    const markdownWithMeta = fs.readFileSync(
      path.join('posts', filename),
      'utf-8'
    )

    const { data: frontmatter } = matter(markdownWithMeta)

    return {
      slug,
      frontmatter,
    }
  })

  return {
    props: {
      posts: posts.sort(sortByDate),
    },
  }
}



// /* eslint-disable react/jsx-key */
// import fs from 'fs'
// import path from 'path'
// import matter from 'gray-matter'
// import Head from 'next/head'
// import Post from '../components/Post'
// import {sortByDate} from '../utils'

// //use data fetching method to fetc our Markdown post
// export default function Home({posts}) {
//   console.log(posts)
//   return (
//     <div>
//       <Head>
//         <title>Stories</title>
//       </Head>
//       <div className="posts">
//         {posts.map((post, index) => (
//           <Post key={index} post={post}/>
//         ))}

//       </div>
//     </div>
//   )
// }

// //use data fetching method for MD - getStaticProps
// //getStaticProps fetches data at build time
// export async function getStaticProps() {
//   //Get files from the posts directory
//   const files = fs.readdirSync(path.join('posts'))
//   console.log(files)

//   //Get slug and front matter from posts

//   const posts = files.map(filename => {
//     //create slug
//     const slug = filename.replace('.md', '') 

//     //Get frontmatter
//     const markdownWithMeta = fs.readFileSync(path.join('posts', filename), 'utf-8')

//     // console.log(markdownWithMeta)
//     const {data: frontmatter} = matter(markdownWithMeta)

//     return {
//       slug,
//       frontmatter
//     }
//   })

//   console.log(posts)

//   return {
//     props: {
//       posts: posts.sort(sortByDate),

//     },
//   }

// }