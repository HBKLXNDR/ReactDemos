import "./App.css"
import Users from "./components/Users";
import Posts from "./components/Posts";
import Comments from "./components/Comments";

function App() {
    return (
        <div className={"wrap"}>
            <Users/>
            <hr/>
            <Posts/>
            <hr/>
            <Comments/>
        </div>
    );
}

export default App;

//
// {/*{actors.map(actor=><Actor key={actor.id} name={actor.name} img={actor.img}/>)}*/
// }


// {/*<Actor*/
// }
// {/*    name={"Tom"}*/
// }
// {/*    img={"https://w7.pngwing.com/pngs/682/859/png-transparent-tom-and-jerry-illustration-tom-cat-jerry-mouse-tom-and-jerry-cartoon-tom-and-jerry-mammal-cat-like-mammal-heroes.png"}*/
// }
// {/*/>*/
// }
// {/*<Actor*/
// }
// {/*    name={"Jerry"}*/
// }
// {/*    img={"https://www.meme-arsenal.com/memes/2774744123cafbceb2c1f2aa14c65d82.jpg"}*/
// }
// {/*/>*/
// }