/**
 *
 * Pierszy request HTTP
 *
 * napisz kod który robi zapytanie/request/(strzał do backu) HTTP typu GET pod następujący URL/endpoint
 * a następnie wyświetli resultat w konsoli. Do rozwiażania użyj konstruktora XMLHttpRequest
 *
 * btw XML vs JSON?
 *
 * https://jsonplaceholder.typicode.com/todos/1
 *
 * Co to jest jsonplaceholder.typicode.com❓
 * darmowe otwarte restowe (REST) API z którego można korzystać w celach edukacyjnych/testowych
 *
 */

/**
 * zadanie 2 
 * 
 * jako frontend deweloper będziesz pracować/ała z różnymi listami i filtrami które pozwolą na pobranie 
 * tylko intetresujących dla usera rekordów
 * 
 * np.
 * stwórz zmienną w global scopie na przechowywanie collectionName i userId
 * wykonaj request w momencie gdy user kliknie przycisk
 * 
 * zachęcam do skorzystania z guide https://jsonplaceholder.typicode.com/guide/
 * praca z dokumentacją to nieodłączona część pracy programisty
 * 
 */

const getUsersData = (userId, collectionName, callback) => {
    console.log(collectionName);
    const url = `https://jsonplaceholder.typicode.com/users/${userId}/${collectionName}`;

    const xhr = new XMLHttpRequest();

    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4) {
        callback(xhr.response);
        alert(`In the devtools console you can see a list of ${collectionName} by user number ${userId}`)
      }
    };

    xhr.open("GET", url);

    xhr.send();
}

let collectionName = "todos";
let userId = "1";

document.querySelector("#collectionSelect").addEventListener("change", (e) => { // тип Listener'а - "change", слушатель - ф-ция;
  let _collectionName = e.target.value; // todos || posts || albums
  collectionName = _collectionName;
});

document.querySelector("#userId").addEventListener("change", (e) => {
  const _userId = e.target.valueAsNumber;
  userId = _userId;
});

document.querySelector("#submit").addEventListener("click", () => {
  getUsersData(userId, collectionName, console.log);
});

/**
 *
 * No dobrze ale stety/niestety requestów za pomocą XMLHttpRequest już się nie robi w praktyce
 * powstaly do tego przyjemniejsze narzędzia i API jednym z nich jest fetch API które jest wbudowane w przeglądarke
 *
 *
 * funckja fetch umożliwia robienie requestów i ZWRACA PROMISE która ułatwia obsługę asynchroniczności
 *
 *
 * https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API
 *
 * https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
 *
 * fetch('https://jsonplaceholder.typicode.com/posts/1/comments') // новая запись промисса
 * .then((response) => response.json()) // это место резолва
 * .then((json) => console.log(json)); // это место реджекта
 *
 */


/**
 * utwórz funkcje getPosts która pobiera posty ze znanego Ci już API https://jsonplaceholder.typicode.com/posts
 * do wykonania zadania użyj nowo poznanej funkcji fetch
 *
 *
 * hint 1💡 niech funckja getPosts zwraca wywołanie funkcji fetch dzięki temu będzie można użyć then przy wywołaniu
 * funcji getPosts
 */

const createUser = (name, age) => {
  const newUser = {
    name,
    age,
  };

  return fetch(waszUrl, {
    method: "POST",
    body: JSON.stringify(newUser),
    headers: {
      "Content-Type": "application/json",
    },
  });
}; // то что он выслал

const danaMokowa = {
  userId: 7,
  id: 70,
  title: "voluptatem laborum magni",
  body: "sunt repellendus quae\nest asperiores aut deleniti esse accusamus repellendus quia aut\nquia dolorem unde\neum tempora esse dolore"
};

 /*
 * part 2
 * dodaj "opcjonalny" parametr do funkcji który może służyć do sparametryzowania requestu
 * czyli po ludzku dodaj parametr ifa który sprawdza czy ten parametr jest
 * jeżeli nie ma zrób request pod ten url https://jsonplaceholder.typicode.com/posts
 * jeżeli id jest to doklej tego IDka do końca adresu URL (konkatenacja stringów)
 * https://jsonplaceholder.typicode.com/posts/${parametr} // w tym przypadku id postu
 *
 */


/**
 * jak użyć fetcha do stworzenia rekordu?
 *
 * metoda POST + JSON.stringify(body) + nałówke content type
 *
 * przykład na nowym api
 */

/**
 * utwórz funkcje createPost która służy do swtorzenia postu w tym celu
 * będziesz musiał użyć zapytania typu POST oraz przekazać parametry do stworzenia postu
 * zerknijcie do dokumentacji jak to dokładnie zrobić
 * do wykonania zadania użyj nowo poznanej funkcji fetch
 *
 * https://jsonplaceholder.typicode.com/guide/  sekcja Creating a resource
 *
 * do wykonania zadania możesz użyć danych wypełnionych w formularzu lub też danych mockowych
 *
 * czym są dane mockowe ❓❓❓
 *
 */


document.querySelector("#createPost").addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  const formProps = Object.fromEntries(formData);
  console.log(formProps);
  alert(`
  Post created:
  author id: ${formProps.userSelect}, 
  tiile: "${formProps.title}", 
  content: "${formProps.content}"
  `);
  

});

/**
 *
 * czas na edycje rekordu - w tym celu stwórz funkcje editPost która będzie wykonywała zapytanie typu PUT
 * do funkcji editPost musisz podać pola obiektu które chcesz edytować
 *
 * po więcej informacji zerknij do dokumentacji API
 * https://jsonplaceholder.typicode.com/guide/   sekcja Updating a resource
 *
 * do wykonania zadania możesz użyć danych wypełnionych w formularzu lub też danych mockowych
 *
 *
 */

/**
 *
 * zasubmitowałeś/aś formularz ale zanim wykorzystasz dane do tworzenia rekordu
 * system musi wykonać request jest on już zrobiony przy pomocy funkcji processData
 * który zwraca dane w promise które możesz użyć do stworzenia requestu
 *
 * wykorzystaj dane które zwraca funkcja processData
 * i stwórz nowy post robiąc podoby request jak w jednym z poprzednich zadań
 *
 * potrzebny url💡
 * https://jsonplaceholder.typicode.com/posts
 *
 */


/**
 *
 * na ekranie mamy listę postów wyświetloną w tabelce z takimi kolumnami jak post id tytuł oraz przycisk
 * który potencjalnie może służyć do usuwania postów
 * żeby jednak usunąć go musimy zrobić request do usuwnia
 *
 * usuwanie ma się wykonywać po kliknieciu przycisku do tego celu stworzyłem funkcje która obsługuje
 * "przyciskanie przycisków" w tabelce przyjmuje ona funckje calback zachęcam do poexperymentowania
 * może jest tam ukryty parametr? spróbuj sprawdzić sam :)
 *
 * onDeleteClick(() => console.log('cześć'));
 *
 * hint 💡 do wykonania tego zadania będziesz musiał/ała stworzyć request DELETE po taki
 * https://jsonplaceholder.typicode.com/posts/:postId URL gdzie postId jest dynamiczny i ma być przekazywny
 * przez parametr
 *
 *
 */

onDeleteClick((id) => {
  fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    method: 'DELETE',
  })
    .then((response) => {
      if (response.ok) {
        alert(`Successful deletion of post number ${id}`, "green");
      } else {
        throw new Error("");
      }
    })
    .catch(() => {
      alert(`Post deletion number ${id} failed`);
    })
});

