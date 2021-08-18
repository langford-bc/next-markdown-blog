import Header from '../components/Header'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <main className='container'>
        <Component {...pageProps} />
      </main>
    </>
  )
}

export default MyApp





// //wraps around all of page components
// import Header from '../components/Header'
// import '../styles/globals.css'


// function MyApp({ Component, pageProps }) {
//   return (
//     <>
//     <Header />
//     <main className= "container">
//     <Component {...pageProps} />
//     </main>
//   </>
//   )
  
// }

// export default MyApp
