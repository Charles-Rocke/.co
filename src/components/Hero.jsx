// components/VisibleContent.js
import ButtonLinks from "./ButtonLinks";
import Quote from "./Quote";

function Hero({ setQuote, setAuthor, quote, author }) {
  return (
    <div className="px-6 pb-24 pt-10 sm:pb-32 lg:col-span-7 lg:px-0 lg:pb-56 lg:pt-48 xl:col-span-6">
      <h1 className="mt-24 text-4xl font-bold tracking-tight text-gray-900 sm:mt-10 sm:text-6xl">
        Stoic Christianity
      </h1>
      <p className="mt-6 text-lg leading-8 text-gray-600">
        Traverse the Sands of Wisdom: Unveiling Stoic Quotes and Proverbs –
        Embark on a Journey Guided by the Ancients, Ignite Your Inner
        Resilience, and Embrace the Path of Charles Rocke. Add to Engrave Your
        Proverb or Stoic Quote, and Leave Your Mark on the Eternal Sands of
        Insight.
      </p>
      <Quote quote={quote} author={author} />
      <ButtonLinks setQuote={setQuote} setAuthor={setAuthor} />
    </div>
  );
}

export default Hero;
