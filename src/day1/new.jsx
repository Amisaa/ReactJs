import React from "react";
const data = [{ category: "Fruits", price: "$1", stocked: "yes", name: "Apple" },
        { category: "Fruits", price: "$1", stocked: "yes", name: "Dragonfruit" },
        { category: "Fruits", price: "$2", stocked: "no", name: "Passionfruit" },
        { category: "Vegetables", price: "$2", stocked: "yes", name: "Spinach" },
        { category: "Vegetables", price: "$4", stocked: "no", name: "Pumpkin" },
        { category: "Vegetables", price: "$1", stocked: "yes", name: "Peas" }];
        const Shop = () => {
            return (
                <table>
                    <tr>
                        <th>Category</th>
                        <th>Price</th>
                        <th>Stocked</th>
                        <th>Name</th>
                    </tr>
                    {data.map((fruit, index) =>
                        <tr key={index}>
                            <td>{fruit.category}</td>
                            <td>{fruit.price}</td>
                            <td>{fruit.stocked}</td>
                            <td>{fruit.name}</td>
                        </tr>
                    )}
                </table>
            )
        }
        export default Shop;