import React, { Component } from 'react'
import { getAllMeals } from './utils';
import { Link } from 'react-router-dom';

export default class MealPage extends Component {

    state = {
        mealKits: []
    }

    componentDidMount = async () => {
        const meals = await getAllMeals();
        this.setState({ mealKits: meals });
    }
    render() {
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
