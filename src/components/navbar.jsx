import { Link } from "react-router-dom";
    export default function Navbar(props) {
        return (
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode} text-${props.mode==='light'?'dark':'light'}`}>

        <div className="container-fluid">
            <Link className="navbar-brand" to="/">{props.title}</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" to="/about">{props.aboutText}</Link>
                </li>
            </ul>
                <button onClick={() => {props.color('#808080')}}  className="btn mx-2" style={{backgroundColor: '#808080'}}></button>
                <button onClick={() => {props.color('#c5c6d0')}} className="btn mx-2" style={{backgroundColor: '#c5c6d0'}}></button>
                <button onClick={() => {props.color('#787276')}} className="btn mx-2" style={{backgroundColor: '#787276'}}></button>
            <div className="form-check form-switch d-flex">
                <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckChecked" />
                <label className={`form-check-label text-light mx-2 text-${props.mode==='light'?'dark':'light'}`}  htmlFor="flexSwitchCheckChecked">Enable Dark Mode</label>
            </div>
            </div>
        </div>
        </nav>
        );





    }

