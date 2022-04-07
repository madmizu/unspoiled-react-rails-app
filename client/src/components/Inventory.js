import { Link } from "react-router-dom";
import GroceryItem from "./GroceryItem";

function Inventory({
  itemsToRender,
  body,
  handleItemDelete,
  allIngredients,
}) {
  console.log(itemsToRender);
  return (
    <div className="inventory">
      <div class="row justify-content-md-center">
        <div className="col-sm-3">
          <Link className="navbar-links" to="/">
            Return Home
          </Link>
        </div>
      </div>
      <br />
      <table className="table" id="inventoryTable">
        <thead>
          <tr>
            <th scope="col"></th>
            {body === "inventory" ? <th scope="col">Spoil Date</th> : null}
            <th scope="col">Item Name</th>
            <th scope="col">Quantity</th>
            <th scope="col">Recipes</th>
          </tr>
        </thead>
        <tbody>
          {itemsToRender.map((item) => (
            <GroceryItem
              item={item}
              key={item.id}
              body={body}
              handleDelete={handleItemDelete}
              allIngredients={allIngredients}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Inventory;
