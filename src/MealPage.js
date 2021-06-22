import React, { Component } from 'react'
import { getAllMeals } from './utils';
import { Link } from 'react-router-dom';

export default class MealPage extends Component {

    state = {
        mealKits: []
    }

    componentDidMount = async () => {
        const meals = await getAllMeals();
        console.log(meals);
        this.setState({ mealKits: meals });
    }
    render() {
        console.log(this.state);
        return (
            <div className="meals">
                 {
                    this.state.mealKits.map(meal => <Link to={`/meals/${meal.id}`}>
                    <div className="meal">
                        <p>
                            {meal.name}
                        </p>
                        <p>
                            {meal.description}
                        </p>
                        <p>
                            {meal.category}
                        </p>
                        <p>
                            Difficulty: {meal.difficulty}
                        </p>
                        <p>
                            Price: ${meal.price}
                        </p>
                    </div>
                    </Link>)
                }
            </div>
        )
    }
}
