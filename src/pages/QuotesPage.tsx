import { useQuotes } from '../hooks/quotes'
import { Loader } from '../components/Loader'
import { ErrorMessage } from '../components/ErrorMessage'
import { IQuote } from '../components/Quote'
import { Link } from 'react-router-dom';



export function QuotesPage() {
  const { loading, error, quotes, tags} = useQuotes()

  return (
    <div className="container mx-auto max-w-2xl pt-5">
      {loading && <Loader />}
      {error && <ErrorMessage error={error} />}
      {tags.map((tag) => (
        <div>
          {/* tag */}
          <Link className='text-center' to={`/tag/${tag.name}`} key={tag._id}>
            <h2 className="text-xl font-bold mb-2 bg-rose-600">{tag.name}</h2>
          </Link>
          {/* quote */}
          <div>{
            quotes
              .filter((quote) => quote.tags.includes(tag.name))
              .map((quote) => (
                <IQuote key={quote._id} quote={quote} />
              ))}
          </div>
        </div>
      ))}
    </div>
  )
}