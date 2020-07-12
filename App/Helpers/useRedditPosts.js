import { useState, useEffect } from 'react'
import JSONAPIAdapter from './JSONAPIAdapter';

const addCommaAtEveryThirdCharacter = (n, i, arr) => {
  if ((arr.length - i) % 3 === 0 && i > 0) {
    return `,${n}` 
  } 
  return n
}

const adapter = new JSONAPIAdapter(`https://api.reddit.com/r`)

const useRedditPosts = (search, sortByValue) => {
  const [ redditPosts, setRedditPosts ] = useState([])

  useEffect(() => {
    adapter.redditPosts(search, sortByValue).then(resp => {

      setRedditPosts(resp.data ? resp.data.children.map((post) => {
        return ({
          subscriberCount: post.data.subreddit_subscribers,
          commentCount: post.data.num_comments, 
          description: post.data.selfText, 
          largeImage: post.data.url_overridden_by_dest,
          createdAt: post.data.created_utc, 
          thumbnail: post.data.thumbnail, 
          upVotes: post.data.ups, 
          author: post.data.author, 
          title: post.data.title, 
          url: `http://reddit.com${post.data.permalink}?&utm_name=iossmf`,
          id: post.data.id
        }
        )
      }) 
      : 
      []
      )
    })
  }, [search, sortByValue])

  const subscriberCount = redditPosts[0]?.subscriberCount?.toString().split('').map(addCommaAtEveryThirdCharacter).join('')

  return { redditPosts, subscriberCount }

}

export default useRedditPosts