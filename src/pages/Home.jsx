import Sidebar from "../components/home/Sidebar"
import MainContent from "../components/home/MainContent"

function Home() {
    return (
        <div style={{ display: 'flex', flexGrow: 1 }}>
            <Sidebar />
            <MainContent />
        </div>
    );
}

export default Home;
