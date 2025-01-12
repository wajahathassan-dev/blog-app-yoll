import Navbar from './components/Navbar'
import BlogSection from './components/BlogSection'
import Footer from './components/Footer'
import Counter from './components/Counter'

export default function App(){
    return (
        <>
            <Navbar />
            <BlogSection />
            <Footer text="All Rights Pending." year="2025"/>
            {/* <Counter /> */}
        </>
    )
}