import React from 'react';
import './index.css';

function App() {


    return (
        <div className="app-wrapper">

            <header className='header'>
                <img src="https://cdn.pixabay.com/photo/2018/07/01/00/59/dog-3508706_960_720.jpg" alt="картинка" />
            </header>

            <nav className='sidebar'>
                <div>Profile</div>
                <div>Messages</div>
                <div>News</div>
                <div>Music</div>
                <div>Settings</div>
            </nav>


            <div className='content'>
                <img src="https://cdn.pixabay.com/photo/2017/10/03/17/53/nature-2813487_960_720.jpg" alt="картинка" />
                <div> Ava+decription</div>
                <div> my Posts
                    <div> new post</div>
                    <div> post 1</div>
                    <div>  post 2</div>

                </div>



            </div>

        </div>
    );
}

export default App;