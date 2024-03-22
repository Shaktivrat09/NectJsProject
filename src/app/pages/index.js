import Sidebar from '../components/Sidebar';
import MarketStories from '../components/MarketStories';
import NewsInterview from '../components/NewsInterview';


const HomePage = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className="min-h-screen">
      <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
      <MarketStories />
      <NewsInterview />
    </div>
  );
};

export default HomePage;