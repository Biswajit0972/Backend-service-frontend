
import { Outlet } from 'react-router-dom'

const HomeLayout = () => {
  return (
    <div>
        <header>I am Header</header>
        <main>
            <Outlet/>
        </main>
        <footer>
            i am footer
        </footer>
    </div>
  )
}

export default HomeLayout