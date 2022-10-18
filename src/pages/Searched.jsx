import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Grid, Card } from "./Cuisine";
import styled from "styled-components";
import { Link } from "react-router-dom";
const Searched = () => {
  const [searchedRecipes, setSearchedRecipes] = useState([]);
  let params = useParams();
  const getSearched = async (query) => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${query}`
    );

    const recipes = await data.json();
    setSearchedRecipes(recipes.results);
  };

  useEffect(() => {
    getSearched(params.search);
  }, [params.search]);

  return (
    <Grid>
      {searchedRecipes?.length === 0 && <NoRecipe>No recipes found!</NoRecipe>}
      {searchedRecipes?.map((recipe) => (
        <Link to={`/recipe/${recipe.id}`}>
          <Card key={recipe.id}>
            <img src={recipe.image} alt={recipe.title} />
            <h4>{recipe.title}</h4>
          </Card>
        </Link>
      ))}
    </Grid>
  );
};

const NoRecipe = styled.p`
  font-size: 1.4rem;
  text-align: center;
  margin-top: 2rem;
`;

export default Searched;
