import 'tailwindcss/tailwind.css'

function MyApp({ Component, pageProps }) {
  return (<div className="container mx-auto w-2/3 mt-44">
    <Component {...pageProps} />
  </div>)
}

export default MyApp
