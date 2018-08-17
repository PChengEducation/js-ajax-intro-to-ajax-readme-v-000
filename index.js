function showRepositories(event, data){
  console.log(this.responsText)
  let repolist = "<ul>"
  for (var i=0; i < this.responseText.length; i++){
    repoList += "<li>" + this.responseText[i]["name"] + "</li>"
  }
  repoList += "</ul>"
  document.getElementById("respositories").innerHTML = repoList
  }

function getRepositories(){
  const req = new XMLHttpRequest()
  req.addEventListener("load", showRepositories);
  req.open("GET", 'https://api.github.com/users/octorcat/repos')
  req.send()
}
