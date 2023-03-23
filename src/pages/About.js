import { Banner, ContentContainer } from '../components/Webpages'
import { PageHeader } from '../components/Texts'

import { ProfileCards, FlexProfile } from '../components/ProfileCards'

function About() {
  return(
    <>
      <ContentContainer>
        <PageHeader>About Us</PageHeader>
          <ProfileCards
            url="/media/dummy-pic.jpeg"
            name="Dummy data"
            work="front-end"
            recipe="Lasagna"
          />
          <ProfileCards
            url="/media/dummy-pic.jpeg"
            name="Dummy data"
            work="front-end"
            recipe="Lasagna"
          />
          <ProfileCards
            url="/media/ashley_k.png"
            name="Kathleen Ashley"
            work="Front-end development"
            recipe="Chicken and waffles!"
          />
          <ProfileCards
            url="/media/jermaine.jpg"
            name="Jermaine Lara"
            work="Front-end development"
            recipe="Homemade Guacamole"
          />
      </ContentContainer>
    </>
  )
}
export default About
