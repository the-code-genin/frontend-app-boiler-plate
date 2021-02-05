import ListApp from "./list-app";

function AppInit(e: Event) {
    let listAppElement = document.querySelector('#list_app') as HTMLDivElement | null;
    if (listAppElement == null) return;

    let listApp = new ListApp(listAppElement, ['Hello', 'World']);
}

window.addEventListener('load', AppInit);