import React, { Component } from 'react'
import { createMeal } from './utils';


export default class CreateMealPage extends Component {

    state = {
        name: '',
        description: '',
        category_id: 1,
        difficulty: '',
        price: 1,
    }

    handleNameChange = e => {
        this.setState({ name: e.target.value });
    }

    handleDescriptionChange = e => {
        this.setState({ description: e.target.value });
    }

    handleCategoryChange = e => {
        this.setState({ category_id: e.target.value });
    }

    handleDifficultyChange = e => {
        this.setState({ difficulty: e.target.value });
    }

    handlePriceChange = e => {
        this.setState({ price: e.target.value });
    }

    handleSubmit = async e => {
        e.preventDefault();

        await createMeal({
            name: this.state.name,
            description: this.state.description,
            category_id: this.state.category_id,
            difficulty: this.state.difficulty,
            price: this.state.price
        });

        this.props.history.push('/')
    }

    render() {
        return (
            <div>
                <h2>Add A MealKit</h2>
                <form className="form" onSubmit={this.handleSubmit}>
                    <label>
                        Name<br></br>
                        <input 
                        onChange={this.handleNameChange}/>
                    </label>
                    <label>
                        Description<br></br>
                        <input 
                        onChange={this.handleDescriptionChange}
                        />
                    </label>
                    <label>
                        Price<br></br>
                        <input 
                        type='number' 
                        onChange={this.handlePriceChange}
                        />
                    </label>
                    <label>
                        Difficulty Level<br></br>
                        <select onChange={this.handleDifficultyChange}>
                            <option value="easy">
                                Easy
                            </option>
                            <option value="medium">
                                Medium
                            </option>
                            <option value="hard">
                                Hard
                            </option>
                        </select>
                    </label>
                    <label>
                        Category<br></br>
                        <select onChange={this.handleCategoryChange}>
                                <option value="1">
                                    Mexican
                                </option>
                                <option value="2">
                                    Italian
                                </option>
                                <option value="3">
                                    American
                                </option>
                                <option value="4">
                                    Japanese
                                </option>
                                <option value="5">
                                    American/Italian
                                </option>
                        </select>
                    </label>
                    <button>
                        Add Meal
                    </button>
                </form>
            </div>
        )
    }
}
