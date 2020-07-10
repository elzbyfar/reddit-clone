class JSONAPIAdapter {

  constructor(baseURL) {
    this.baseURL = baseURL;
    this.headers = {
      Accept: "application/json", 
      "Content-Type": "application/json", 
    };
  }

  async redditPosts() {
    const response = await fetch(`${this.baseURL}`)
    const result = await response.json();
    return result
  }


}

export default JSONAPIAdapter