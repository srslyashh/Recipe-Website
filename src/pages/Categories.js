import { CategoryCards } from '../components/CategoryCards'
import { Banner, ContentContainer } from '../components/Webpages'
import categories from '../data/categories.json'
import styled from '@emotion/styled/macro'

const breakpoints = {
  sm: 768,
  med: 1024
}

const List = styled.ol`
    padding: 5px 10px 5px 10px;
    columns: 4;
    list-style-type:none;
    margin-left: 5%;
    margin-right: 5%;

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

function Categories() {
  return(
    <>
      <Banner 
        url="/media/categoryBanner.webp"
        title="Categories"/>   
        <List>
          {categories.map((category, index) => (
            <ListItem key={index}>
              <CategoryCards
                  url={category.img}
                  name={category.name}
              />
            </ListItem>
          ))}
        </List>
    </>
  )

}
export default Categories
