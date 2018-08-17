function showRepositories(event, data){
  console.log(this.responsText)
}

function getRepositories(){
  const req = new XMLHttpRequest()
  req.addEventListener("load", showRepositories);
  req.open("GET", 'https://api.github.com/users/octorcat/repos')
  req.send()
}
