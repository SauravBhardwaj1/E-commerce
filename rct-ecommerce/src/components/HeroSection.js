import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../styles/Button";

const HeroSection = ({ myData }) => {
  const { name } = myData;

  return (
    <Wrapper>
      <div className="container">
        <div className="grid grid-two-column">
          <div className="hero-section-data">
            <p className="intro-data">Welcome to </p>
            <h1> {name} </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
              atque temporibus veniam
            </p>
            <NavLink>
              <Button>shop now</Button>
            </NavLink>
          </div>
          {/* our homepage image  */}
          <div className="hero-section-image">
           <figure>
                <img src="https://images.unsplash.com/photo-1578916171728-46686eac8d58?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmV0YWlsJTIwc3RvcmV8ZW58MHx8MHx8&w=1000&q=80" 
                  alt="hero-section image" 
                  className='image-style' />
            </figure>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper=styled.section`
    padding: 5rem 0;
    img {
        min-width: 10rem;
        height: 10rem;
    }
    .container{
        margin:auto;
    }
    .hero-section-data {
    p{
        margin: 1rem 0;
        margin-left:250px
    }
    h1{
        text-transform: capitalize;
        font-weight: bold;
        margin-left:250px;
        font-size: 30px
    }
    Button{
        padding:10px;
        margin-left:250px
    }
    .intro-data{
        margin-bottom: 0;
    }
}
    .hero-section-image{
        width: 100%;
        height: auto;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    figure{
        position: relative;
        &::after{
            content: "";
            width: 60%;
            height: 80%;
            background-color: rgba(81, 56, 238, 0.4);
            position: absolute;
            left: 10%;
            top: -4rem;
            z-index: -1;
        }
    }
    .image-style{
        width: 70%;
        height: auto;
        margin-left:-60px
    }
    @media (max-width: ${({theme })=> theme.media.mobile}){
        .grid{
            gap:5rem;
        }
        figure::after {
            content: "";
            width: 50%;
            height: 100%;
            left: 0;
            top: 10%;
            background-color: rgba(81, 56, 238, 0.4);
        }
    }

`;

export default HeroSection;
