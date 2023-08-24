function Quote({ quote, author }) {
  return (
    <div className="mt-5 grid grid-flow-col grid-rows-2 gap-4">
      <p className="italic">{quote}</p>
      <p className="flex justify-items-end italic"> - {author}</p>
    </div>
  );
}

export default Quote;
