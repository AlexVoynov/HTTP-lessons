function processData(e) {
  const formData = new FormData(e.target);
  const formProps = Object.fromEntries(formData);

  return new Promise((resolve) => resolve(formProps));
}
/**
 *
 * @param {*} list Lista userów
 */
function renderUsersList(list = []) {
  let tableRows = "";

  list.forEach((el) => {
    tableRows =
      tableRows +
      `<tr><td>${el.name}</td><td>${el.age}</td><td><button class="table-button" data-usertoeditid="${el.id}" data-usertoeditname="${el.name}"
      data-usertoeditage="${el.age}"
      >Edit</button></td><td><button  class="outline table-button" data-userid="${el.id}">Delete</button></td></tr>`;
  });

  document.querySelector("#usersTable").innerHTML = tableRows;
}

document.querySelector("#usersTable").addEventListener("click", (e) => {
  if (e.target.dataset.usertoeditid) {
    try {
      const id = e.target.dataset.usertoeditid;
      const name = e.target.dataset.usertoeditname;
      const age = e.target.dataset.usertoeditage;

      document.querySelector("#modal-example").setAttribute("open", true);
      document.querySelector("#id1").value = id;
      document.querySelector("#name1").value = name;
      document.querySelector("#age1").value = age;
    } catch (error) {
      console.log("zły user");
    }
  }
});

function onUserDeleteClick(callback = console.log) {
  document.querySelector("#usersTable").addEventListener("click", (e) => {
    if (e.target.dataset.userid) {
      callback(e.target.dataset.userid);
    }
  });
}

function onUpdateFormSubmit(callback = console.log) {
  document.querySelector("#updateUser").addEventListener("submit", (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const formProps = Object.fromEntries(formData);

    callback(formProps);

    document.querySelector("#modal-example").removeAttribute("open");
    document.querySelector("#name1").value = "";
    document.querySelector("#age1").value = "";
  });
}

document.querySelector("#updateUser").addEventListener("reset", (e) => {
  e.preventDefault();
  document.querySelector("#modal-example").removeAttribute("open");
  document.querySelector("#name1").value = "";
  document.querySelector("#age1").value = "";
});

function onCreateFormSubmit(callback = console.log) {
  document.querySelector("#createUser").addEventListener("submit", (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const formProps = Object.fromEntries(formData);
    const cleanFormFields = () => e.target.reset();

    callback(formProps);

    cleanFormFields();
  });
}
