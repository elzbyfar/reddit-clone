const timeConverter = (utc) => {

  const diffInSeconds = (new Date / 1000) - utc
  
  const minute = 60
  const hour = minute * 60
  const day = hour * 24
  const year = day * 365

  if (Math.floor(diffInSeconds / year) > 0) {
    return `${Math.floor(diffInSeconds / year)}y`
  } 
  if (Math.floor(diffInSeconds / day) > 0) {
    return `${Math.floor(diffInSeconds / day)}d`
  } 
  if (Math.floor(diffInSeconds / hour) > 0) {
    return `${Math.floor(diffInSeconds / hour)}h`
  } 
  if (Math.floor(diffInSeconds / minute) > 0) {
    return `${Math.floor(diffInSeconds / minute)}m`
  } 
  return `${Math.floor(diffInSeconds)}s`
}

export default timeConverter