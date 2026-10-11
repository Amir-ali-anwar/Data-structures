const posts = [
  { title: "React Basics", tags: ["react", "javascript", "web"] },
  { title: "CSS Tricks", tags: ["css", "web", "design"] },
  { title: "JavaScript Tips", tags: ["javascript", "programming", "web"] },
  { title: "React Hooks", tags: ["react", "javascript", "hooks"] },
];

function getMostFrequentTags(posts, N) {
  let result = {};
  for (let i = 0; i < posts.length; i++) {
    const { tags } = posts[i];
    for (const tag of tags) {
      result[tag] = (result[tag] || 0) + 1;
    }
  }
  return Object.entries(result).sort((a,b)=>b[1]-a[1]).slice(0,N).map(([map])=> map)
}

console.log(getMostFrequentTags(posts,3));






function parseUrlParams(url) {
  const params = {};
  const queryString = new URL(url).search;
  const searchParams = new URLSearchParams(queryString);

  for (const [key, value] of searchParams.entries()) {
    params[key] = value;
  }

  return params;
}

// Example usage:
const url = "https://example.com/?name=John&age=30&job=developer";
const params = parseUrlParams(url);
console.log(params); 
// Output: { name: 'John', age: '30', job: 'developer' }
