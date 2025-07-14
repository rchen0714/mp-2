import styled from "styled-components";
import type {Artworks} from "../interfaces/Artworks.ts"

//Specific styling techniques not taught in class are
//explained within the mp-2 pdf!

const WrapperDiv=styled.div`
    display: flex;
    flex-direction: column;
    background-color: #FFF8ED;
    padding-bottom: 5%;
`;

const Styledh1 = styled.h1`
    text-align: center;
    font-family: 'Libre Baskerville', Helvetica, serif;
    font-size: calc(5px + 1vw);
    margin: 2%;
`;

const StyledSubtitle = styled.p`
    text-align: center;
    font-family: 'Montserrat', Arial, sans-serif;
    font-size: calc(2px + 0.75vw);
    margin-bottom: 3%;
`;

const StyleGrid = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    gap: 3%;
`;

const StyledCard=styled.div`
    display: flex;
    flex-direction: column;   
    justify-content: center;
    max-width: 20%;
    padding: 2%;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    background-color: white;
    text-align: left;
    
`;

const StyledImage = styled.img`
    width: 100%;
    object-fit: cover;
    border-radius: 8px;
    aspect-ratio: 1/1;
    margin-bottom: 10%;
`;

const ArtText = styled.p`
    font-family: 'Montserrat', Arial, sans-serif;
    font-size: calc(2px + 0.5vw);
    margin: 2%; 
`;

export default function VanGogh({data}: { data: Artworks[] }) {
    return (
        <>
            <WrapperDiv>
                <Styledh1>Van Gogh's Artworks</Styledh1>
                <StyledSubtitle>A collection of some of Van Gogh’s work that’s displayed in the Metropolitan Museum of Art </StyledSubtitle>
                <StyleGrid>
                    {data.map((art: Artworks) => (
                        <StyledCard key={art.id}>
                            <StyledImage src={art.image} alt={`Van Gogh's: ${art.title}`} />
                            <ArtText><strong>{art.title}</strong></ArtText>
                            <ArtText>{art.artist}</ArtText>
                            <ArtText>{art.date}</ArtText>
                            <ArtText>{art.medium}</ArtText>
                            <ArtText>{art.dimensions}</ArtText>
                        </StyledCard>
                    ))}
                </StyleGrid>
            </WrapperDiv>
        </>
    );
}


