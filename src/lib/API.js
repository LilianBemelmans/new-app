export default class API {

    static fetchData = () => new Promise( ( resolve, reject ) => {

        fetch('https://api.dev-master.ninja/reactjs/slow/')
        .then(response => response.json() )
        .then(data => { resolve(data); })
        .catch(error => { reject(error) });
    });
}