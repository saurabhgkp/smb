import Footer1 from './Footer1'
import Navbar from './Navbar'
import Topdiv1 from './Topdiv1'
import Topdiv2 from './Topdiv2'
import Topdiv3 from './Topdiv3'
import Topdiv4 from './Topdiv4'
import Whattheysay from './Whattheysay'
export default function Layout({ children }) {
    return (
        <div >
            <Navbar />
            <Topdiv1 />
            <Topdiv2 />
            <Topdiv3 />
            <Topdiv4 />
            <Whattheysay />
            <Footer1 />
            <main>
                {children}
            </main>



        </div>
    )
}