function Food() {
    const food1 = "Pizza";
    const food2 = "Sushi";
    const food3 = "Tacos";

    return (
        <div>
            <h2>My Favorite Foods</h2>
            <ul>
                <li>Apple</li>
                <li>{food1}</li>
                <li>{food2}</li>
                <li>{food3}</li>
                <li>Ice Cream</li>
            </ul>
        </div>
    );
}
export default Food;