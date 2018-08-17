function getRepositories(){
  const req = new XMLHttpRequest()
  req.open("GET", 'https://api.github.com/user/octocat/repos')
  req.send()
}