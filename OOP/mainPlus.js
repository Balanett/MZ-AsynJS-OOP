// Simple Blog with OOP:


// Post Class:

class Post {
    title
    body
    #id

    constructor(title, body, id) {
        this.title = title;
        this.body = body;
        if (id === 0) {
            this.#id = Math.floor(Math.random() * 10 + 100)
        } else {
            this.#id = id
        }
    }

    getPreview(lenght) {
        return this.body.substring(0,lenght)
    }

    get ID() {
        return this.#id
    }
}


// User Class:

class User {
    #firstName
    #lastName
    #email

    constructor(firstName, lastName, email) {
        this.#firstName = firstName;
        this.#lastName = lastName;
        this.#email = email
    }

    get fullName() {
        return `${this.#firstName} ${this.#lastName}`;
    }

    get emailAddress () {
        return this.#email
    }
}


// Blog Class:

class Blog {
    #title
    #author
    #posts

    constructor(title, author, posts) {
        this.#title = title
        this.#author = user1
        this.#posts = []
    }

    get posts () {
        return this.#posts
    }

    fetchPosts () {
        return fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                if (!response.ok) throw Error(response.statusText);
                else return response.json();
            })
            .then(data => {
                console.log("ORIG data hossz: "+data.length)
                for (let i=0; i<data.length; i++) {
                    this.#posts.push(new Post(data[i].title, data[i].body, data[i].id))
                }
            })
            .catch(error => {
                this.#posts = []
                console.error(this.#posts);
            })
    }

    addPost (newPost) {
        this.#posts.push(newPost)
        return this.#posts
    }

    deletePost (removeID) {

    }

    getPostByID (ID) {
        console.log("ÚJ blog hossz: "+this.#posts.length)
        for (let i=0; i<this.#posts.length; i++) {
            console.log("Megtalált poszt ID: "+this.#posts[i].ID)
            if (this.#posts[i].ID === ID) {
                return this.#posts[i]
            }
        }
    }
}


let lengthOfPost = 5
let user1 = new User("John", "Doe", "john@doe.com")
let blog1 = new Blog("Blog Title", user1.fullName);

/*
 * Anonymous async függvény, amit azonnal meg is hívunk
 * async függvény => await használhatóvá válik a Promise object esetében
 */
(async () => { // fgv start
    await blog1.fetchPosts();
    blog1.addPost(new Post("Post 1","Lorem Ipsum post 1",0))
    blog1.addPost(new Post("Post 2","Lorem Ipsum post 2",0))

    console.log("Blog posztok: "+blog1.posts)
    console.log("Get post ID: "+blog1.getPostByID(54))
} // fgv end
)(); // fgv meghívás

/*
blog1.fetchPosts().then(() => {
    blog1.addPost(new Post("Post 1","Lorem Ipsum post 1",0))
    blog1.addPost(new Post("Post 2","Lorem Ipsum post 2",0))

    console.log("Blog posztok: "+blog1.posts)
    console.log("Get post ID: "+blog1.getPostByID(54))
});
*/



