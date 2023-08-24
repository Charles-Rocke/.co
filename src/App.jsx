// Import necessary dependencies
import BrandImage from "./components/BrandImage";
import VisibleContent from "./components/VisibleContent";
import Header from "./components/Header";

function App() {
  return (
    <div className="relative bg-white">
      {/* Include the Header component */}
      <Header />
      {/* Main content container */}
      <div className="mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8">
        <BrandImage />
        <VisibleContent />
      </div>
    </div>
  );
}

export default App;
