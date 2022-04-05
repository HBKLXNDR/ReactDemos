import "./App.css"
import Actor from "./components/Actor"
import Users from "./components/Users";

const actors = [
    {id: 1, name: 'Tom', img: 'https://i.pinimg.com/474x/ba/74/6a/ba746a5ad203704cbac746f2c23314da.jpg'},
    {id: 2, name: 'Jerry', img: 'https://pngimg.com/uploads/tom_and_jerry/tom_and_jerry_PNG3.png'},
    {id: 3, name: 'Legs', img: 'https://static.wikia.nocookie.net/tomandjerry/images/0/0d/Mammytwoshoes-1-.jpg'},
    {id: 4, name: 'Spike', img: 'https://static.wikia.nocookie.net/thetomjerry/images/c/cb/Spike.gif'},
]

function App() {
    return (
        <div>
            {/*{actors.map(actor=><Actor key={actor.id} name={actor.name} img={actor.img}/>)}*/}


            {/*<Actor*/}
            {/*    name={"Tom"}*/}
            {/*    img={"https://w7.pngwing.com/pngs/682/859/png-transparent-tom-and-jerry-illustration-tom-cat-jerry-mouse-tom-and-jerry-cartoon-tom-and-jerry-mammal-cat-like-mammal-heroes.png"}*/}
            {/*/>*/}
            {/*<Actor*/}
            {/*    name={"Jerry"}*/}
            {/*    img={"https://www.meme-arsenal.com/memes/2774744123cafbceb2c1f2aa14c65d82.jpg"}*/}
            {/*/>*/}

            <Users/>

        </div>
    );
}

export default App;
