import { Banner, ContentContainer } from '../components/Webpages'
import { useParams } from 'react-router';
import { useSearchParams } from 'react-router-dom'
import { RecipeCards } from '../components/RecipeCards'
import useRecipeSearch from '../data/useRecipeSearch'
import styled from '@emotion/styled/macro'
import { useEffect } from 'react';

const breakpoints = {
  sm: 768,
  med: 1024
}

const List = styled.ol`
    padding: 5px;
    columns: 2;
    list-style-type:none
`

const ListItem = styled.li`
    padding: 4px;
    @media (min-height: ${breakpoints.sm + 1}px) and (max-height: ${breakpoints.med}px) {
        font-size: 18px;
    }
    @media (max-height: ${breakpoints.sm}px) {
        font-size: 22px;
    }
    @media (min-width: ${breakpoints.sm + 1}px) and (max-width: ${breakpoints.med}px) {
        font-size: 24px;
    }
    @media (max-width: ${breakpoints.sm}px) {
        font-size: 32px;
    }
`

function CategoryResults() {
    const [ searchParams, setSearchParams ] = useSearchParams()
    const [ recipes ] = useRecipeSearch(searchParams)
    const { category } = useParams();

    useEffect(() => {
        setSearchParams({cuisine: category})
    })
    return(
    <>
        <Banner 
          url="/media/categoryBanner.webp"
          title={category}/> 
        <List>
          {recipes.map((recipe, index) => (
            <ListItem key={index}>
              <RecipeCards
                  url={recipe.image}
                  name={recipe.title}
                  id={recipe.id}
              />
            </ListItem>
          ))}
        </List> 
    </>
  )

}
export default CategoryResults