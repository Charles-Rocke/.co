// components/ButtonLinks.js

function ButtonLinks() {
    async function getQuote() {
      try {
        const response = await fetch('https://stoic-quotes.com/api/quote');
        const data = await response.json();
        console.log(data);
      } catch (error) {
        console.error('Error fetching quote:', error);
      }
    }
  
    function handleAddButtonClick() {
      // Implement the functionality for the 'Add' button here
    }
  
    return (
      <div className="mt-10 flex items-center gap-x-6">
        <button
          className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-lg font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          onClick={getQuote}
        >
          Get wisdom
        </button>
        <button
          className="text-lg font-semibold leading-6 text-gray-900"
          onClick={handleAddButtonClick}
        >
          Add <span aria-hidden="true">+</span>
        </button>
      </div>
    );
  }
  
  export default ButtonLinks;