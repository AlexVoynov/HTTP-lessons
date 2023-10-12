function processData(e) {
  const formData = new FormData(e.target);
  const formProps = Object.fromEntries(formData);

  return new Promise((resolve) => resolve(formProps));
}

function renderList() {
  axios.get("https://jsonplaceholder.typicode.com/posts").then((posts) => {
    let tableRows = "";

    posts.data.forEach((el, i) => {
      if (i < 6) {
        tableRows =
          tableRows +
          `<tr><td>${el.id}</td><td>${el.title}</td><td><button data-postId="${el.id}">Delete</button></td></tr>`;
      }
    });

    document.querySelector("#postsTable").innerHTML = tableRows;
  });
}

renderList();

function onDeleteClick(callback) {
  document.querySelector("#postsTable").addEventListener("click", (e) => {
    if (e.target.dataset.postid) {
      callback(e.target.dataset.postid);
    }
  });
}
