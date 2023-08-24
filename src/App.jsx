// Import necessary dependencies
import BrandImage from "./components/BrandImage";
import Hero from "./components/Hero";
import Header from "./components/Header";

import { useState } from "react";
import ButtonLinks from "./components/ButtonLinks";

function App() {
  const [quote, setQuote] = useState("Innovation begins within");
  const [author, setAuthor] = useState("Charles Rocke");

  return (
    <div className="relative bg-white">
      <Header />
      <div className="mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8">
        <BrandImage />
        <Hero setQuote={setQuote} setAuthor={setAuthor} quote={quote} author={author} />
        {/* Pass the setQuote and setAuthor functions to ButtonLinks */}
        
      </div>
    </div>
  );
}

export default App;
