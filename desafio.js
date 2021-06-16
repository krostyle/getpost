const URL = 'https://jsonplaceholder.typicode.com/posts'
const postData = document.getElementById('post-data')
const request = async() => {
    try {
        const res = await fetch(URL);
        const data = await res.json();
        createPost(data);
    } catch (error) {
        console.error(error);
    }

}

const createPost = (data) => {
    postData.innerHTML = ''
    postData.innerHTML += /*HTML*/
        `
        <ul id ='list'>
        </ul>`;
    const list = document.getElementById('list')
    data.forEach(element => {
        list.innerHTML += /*HTML*/
            `<li><strong>${element.title}</strong>
                <p>${element.body}</p>    
            </li>
        `
    });
}

const getPosts = async() => {
    await request();
}