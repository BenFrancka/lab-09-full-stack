import React, { Component } from 'react'
import {
    deleteMeal,
    getAllCategories,
    getOneMeal,
    updateMeal
} from './utils';

export default class MealDetailPage extends Component {
    state = {
        name: '',
        description: '',
        difficulty: '',
        price: 1,
        category_id: 1,
        category: '',
        categories: []
    }

    componentDidMount = async () => {
        const id = this.props.match.params.id;

        const meal = await getOneMeal(id);
        const categories = await getAllCategories();

        this.setState({
            name: meal.name,
            description: meal.description,
            difficulty: meal.difficulty,
            price: meal.price,
            category: meal.category,
            category_id: meal.category_id,
            categories: categories
        })
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

        await updateMeal(this.props.match.params.id, {
            name: this.state.name,
            description: this.state.description,
            difficulty: this.state.difficulty,
            price: this.state.price,
            category_id: this.state.category_id
        });

        this.props.history.push('/');
    }

    handleDelete = async () => {
        await deleteMeal(this.props.match.params.id);
        this.props.history.push('/');
    }

    render() {
        return (
            <div>
                <h2>
                    Update Meal
                </h2>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Name
                        <input
                        value={this.state.name} 
                        onChange={this.handleNameChange}
                        />
                    </label>
                    <label>
                        Description
                        <input 
                        value={this.state.description} 
                        onChange={this.handleDescriptionChange}
                        />
                    </label>
                    <label>
                        Price
                        <input 
                        value={this.state.price} 
                        type='number' 
                        onChange={this.handlePriceChange}
                        />
                    </label>
                    <label>
                        Difficulty
                        <select
                        onChange={this.handleDifficultyChange}>
                            <option value={this.state.difficulty} defaultValue>
                                {this.state.difficulty}
                            </option>
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
                        Category
                        <select 
                        onChange={this.handleCategoryChange}
                        >   
                            <option value={this.state.category}>
                                {this.state.category}
                            </option>
                            {this.state.categories.map(category =>
                                <option
                                selected={
                                    category.id === 
                                    this.state.category_id
                                }
                                value={category.id}
                                >
                                {category.name}
                                </option>
                                )}
                        </select>
                    </label>
                    <button>
                        Update Meal
                    </button>
                </form>
                <button onChange={this.handleDelete}>
                    Delete Meal
                </button>
            </div>
        )
    }
}
