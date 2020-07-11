import { useState, useEffect } from 'react'
import JSONAPIAdapter from './JSONAPIAdapter';

const addCommaAtEveryThirdCharacter = (n, i, arr) => (arr.length - i) % 3 === 0 ? `,${n}` : n

const adapter = new JSONAPIAdapter(`https://api.reddit.com/r`)

const useRedditPosts = (search, sortByValue) => {
  const [ redditPosts, setRedditPosts ] = useState([])

  useEffect(() => {
    adapter.redditPosts(search, sortByValue).then(resp => {
      setRedditPosts(resp.data.children)
    })
  }, [])

  const subscriberCount = redditPosts[0]?.data.subreddit_subscribers.toString().split('').map(addCommaAtEveryThirdCharacter).join('')

  return { redditPosts, subscriberCount }

}

export default useRedditPosts