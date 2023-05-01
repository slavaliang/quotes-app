import {useEffect, useState} from 'react'
import {Quote, Tag} from '../models'
import axios from 'axios'
const API= "https://api.quotable.io"
export function useQuotes() {
  const [tags,setTags]=useState<Tag[]>([])
  const [quotes, setQuotes] = useState<Quote[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  async function fetchQuotes() {

    try {
      setLoading(true);
      const tagsResponse = await axios.get<Tag[]>(`${API}/tags`);
      const allTags = tagsResponse.data;
      setTags(allTags);

      const allQuotes: Quote[] = [];
      let count = 0;
      for (const tag of allTags) {
        const quotesResponse = await axios.get<Quote[]>(
          `${API}/quotes/random?limit=5&tags=${tag.name}`
        );
        allQuotes.push(...quotesResponse.data);
        count++;
      }
      console.log(count)
      setQuotes(allQuotes);
      setLoading(false);
    } catch (e: unknown) {
      const error = e as Error;
      setLoading(false);
      setError(error.message);
    }
  }
  useEffect(() => {
    fetchQuotes()
  }, [])

  return { quotes, error, loading, tags}
}