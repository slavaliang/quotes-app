import { useQuotes } from '../hooks/quotes';
import { Loader } from '../components/Loader';
import { ErrorMessage } from '../components/ErrorMessage';
import { IQuote } from '../components/Quote';
import { useParams } from 'react-router-dom';


export function QuotesByTagPage() {
  const { tagname: tagParam } = useParams<{ tagname: string }>();
  const tagname = tagParam!;
  const { loading, error, quotes } = useQuotes();

  const tagQuotes = quotes.filter((quote) => quote.tags.includes(tagname));
  return (
    <div className="container mx-auto max-w-2xl pt-5">
      <h2 className="text-xl font-bold mb-2 bg-rose-600">{tagname}</h2>
      {loading && <Loader />}
      {error && <ErrorMessage error={error} />}
      {tagQuotes.map((quote) => (
        <div key={quote._id}>
          <IQuote key={quote._id} quote={quote} />
        </div>

      ))}
    </div>
  );
}
