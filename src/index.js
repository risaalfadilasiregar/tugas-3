import  ReactDOM  from "react-dom/client";

function Welcome(props){
    return <h1>Selamat Datang {props.nama}</h1>;
}

let nama = "Risa Alfadila";

function App(){
    if(nama){
        return <Welcome nama = {nama}/>
    }else{
        return <button>Login</button>
    }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>);