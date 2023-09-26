import { useState, useEffect } from "react";

function Home(){
    return (
        <div>
            <UsarEstado/>
            <br />
            <UsarEffect/>
            <br />

        </div>
    )
}

function UsarEstado(){
    const [contador, setContador] = useState(0);
    const user = {
        name: 'Hedy Lamarr',
        imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
        imageSize: 90,
      };

    const adicionarContador = () =>{
        setContador(prevState => prevState + 1);
    }

    return (
        <div>
            <h1 style={{color:"#a28aff"}}>Exemplo de UseState</h1>
            <h3>{contador}</h3>
            <button onClick={adicionarContador}>Adicionar</button>

            <h1>{user.name}</h1>
            <img
                className="avatar"
                src={user.imageUrl}
                alt={'Photo of ' + user.name}
                style={{
                width: user.imageSize,
                height: user.imageSize
                }}
            />
        </div>
    )
}

const UsarEffect = () => {
    const [resourceType, setResourceType] = useState("posts");

    useEffect (() =>{
        fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
        .then((response) => response.json())
        .then((json) => console.log(json));
    },[resourceType]);

    const changeResourceType = (resourceType) =>{
        setResourceType(resourceType)
    }

    return (
        <div>
            <h1 style={{color:"#a28aff"}}> Exemplo de UseEffect</h1>
            <h3>{resourceType}</h3>
            <div style={{display: "flex", alignItems: "center"}}>
                <button onClick={() => changeResourceType("posts")}>Posts</button>
                <button onClick={() => changeResourceType("comments")}>Comments</button>
                <button onClick={() => changeResourceType("todos")}>Todos</button>
            </div>
            
        </div>
    );

}

const UsarRef = () =>{
    
}

export default Home