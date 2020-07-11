class JSONAPIAdapter {

  constructor(baseURL) {
    this.baseURL = baseURL;
    this.headers = {
      Accept: "application/json", 
      "Content-Type": "application/json", 
    };
  }

  async redditPosts(search, sortByValue) {
    const response = await fetch(`${this.baseURL}/${search}/${sortByValue.toLowerCase()}.json`)
    const result = await response.json();
    return result
  }


}

export default JSONAPIAdapter