import { useState} from "react";
import RecipeOfTheDay from "./RecipeOfTheDay.js";

function Home({
  recipeOTD,
}) {


  return (
    <>
      <div className="container-fluid">
            <div className="row justify-content-center">
              <div className="col-12">
                <RecipeOfTheDay recipeOTD={recipeOTD} />
              </div>
              <br />
              <div className="foodLoop">
                <br />
                <br />
                {/* <img className = "homeImage" src = "https://i.ibb.co/gdFP2jy/foodloop.gif" alt = {"foodLoop"} /> */}
              </div>
            </div>
      </div>
    </>
  );
}

export default Home;
