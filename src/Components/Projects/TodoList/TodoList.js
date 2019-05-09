import React, { Component } from 'react';
import Sidebar from '../../Sidebar/Sidebar';
import Image1 from '../../Images/todolist1.png'
import Image2 from '../../Images/todolist2.png'
import Image3 from '../../Images/todolist3.png'
import Image4 from '../../Images/todolist4.png'
import './todolist.css'



class TodoList extends Component {

    render() {

        return (
            <>
                <Sidebar />
                <div className="project-main">
                    <div className="project-main-inner">
                        <div className="main-section project-section">
                            <h1 className="main-title">TodoList</h1>
                            <h2 className="project-subtitle"><strong>The best way to task out your day, week, month, or even year !!</strong></h2>

                            <div className="project-descriptions">

                                <div className="project-description project-general_description">
                                    <p><strong>With Todoist, you can keep track of everything – from simple errands like grocery shopping, to your most ambitious projects.</strong></p>

                                    <p> – so you can start getting things done and enjoy more peace-of-mind along the way.</p>

                                    <p>In summary, what we built is:</p>

                                    <ul>
                                        <li>Responsive web application (React);</li>
                                        <li> When you don’t have to worry about forgetting to-dos, you’ll feel more calm, in control and motivated to accomplish your goals</li>
                                        <li> TodoList helps get all your tasks and thoughts out of your head and onto your to-do list anytime</li>
                                    </ul>

                                </div>



                                <div className="project-description project-tech_description">



                                    <h5 className="technologies-title">Technologies used</h5>

                                    <ul className="tech-tags">
                                        <li>
                                            <a href='https://reactjs.org/'>React</a>
                                        </li>

                                        <li>
                                            <a href='https://nodejs.org/en/'>Node Js</a>
                                        </li>

                                        <li>
                                            <a href='https://expressjs.com/'>Express</a>
                                        </li>

                                        <li>
                                            <a href='https://graphql.org/'>GraphQL</a>
                                        </li>

                                        <li>
                                            <a href='https://www.mongodb.com/'>Mongo DB</a>
                                        </li>

                                    </ul>

                                </div>

                            </div>


                            <a href="/home" className="button button-red">
                                <i className="fa fa-external-link"></i>
                                View online
                            </a>



                            <div className="project-image">

                                <img src={Image1} alt="TodoList" />

                                <img src={Image2} alt="TodoList" />

                                <img src={Image3} alt="TodoList" />

                                <img src={Image4} alt="TodoList" />

                            </div>

                        </div>

                    </div>
                </div>
            </>
        )
    }
}

export default TodoList;


