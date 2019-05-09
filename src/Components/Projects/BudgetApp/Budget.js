import React, { Component } from 'react';
import Sidebar from '../../Sidebar/Sidebar';
import Images from '../../Images/comingsoon.jpg'
import './budget.css'



class Budget extends Component {

    render() {

        return (
            <>
                <Sidebar />
                <div className="project-main">
                    <div className="project-main-inner">
                        <div className="main-section project-section">
                            <h1 className="main-title">Budget App</h1>
                            <h2 className="project-subtitle"><strong>See what you’re spending, where you can save money, and track your bills:</strong></h2>

                            <div className="project-descriptions">

                                <div className="project-description project-general_description">
                                    <p><strong>If you have decided to take control of your financial situation you will need a powerful finance software that will let you create monthly budget, track spending.</strong></p>

                                    <p>Throughout twenty six years, I've been very alert and attentive, to how and where my money is being spent. But sometimes i've gotten a little careless and forgot . Which i think every human can relate to !! So to help me out i decided to build a budget app to better help me manage that.</p>

                                    <p>In summary, what i built is:</p>

                                    <ul>
                                        <li>financial tracker app that helps you get ahead and stay ahead.</li>
                                        <li>huge single page application for Partners (built in React) to manage their finances;</li>
                                        <li>a platform for user, to manage their finances;</li>
                                        <li>management all your bills, from student loans, rent, all the way to your car notes.</li>
                                    </ul>

                                </div>



                                <div className="project-description project-tech_description">



                                    <h5 className="technologies-title">Technologies used</h5>

                                    <ul className="tech-tags">

                                        <li><a href="https://reactjs.org/" rel="nofollow">React</a></li>

                                        <li><a href="https://getbootstrap.com/" rel="nofollow">Bootstrap</a></li>
                                    </ul>

                                </div>

                            </div>


                            <a href="/home" className="button button-red">
                                <i className="fa fa-external-link"></i>
                                View online
                            </a>



                            <div className="project-image">

                                <img src={Images} alt="BudgetApp" />

                                <img src={Images} alt="BudgetApp" />

                                <img src={Images} alt="BudgetApp" />

                                <img src={Images}alt="BudgetApp" />

                                <img src={Images}alt="BudgetApp" />

                                <img src={Images}alt="BudgetApp" />

                                <img src={Images}alt="BudgetApp" />

                                <img src={Images}alt="BudgetApp" />

                                <img src={Images}alt="BudgetApp" />

                                <img src={Images}alt="BudgetApp" />

                                <img src={Images} alt="BudgetApp" />

                                <img src={Images} alt="BudgetApp" />

                                <img src={Images} alt="BudgetApp" />

                                <img src={Images} alt="BudgetApp" />

                            </div>

                        </div>

                    </div>
                </div>
            </>
        )
    }
}

export default Budget;


