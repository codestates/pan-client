import Header from '../components/Header'
import routes from "../routes";

function Home() {
    return (
        <>
        <Header home={routes.randing} login={routes.login}></Header>
        <h3>와 우리 홈이다</h3>
        </>
    )
}

export default Home;