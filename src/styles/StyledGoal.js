import styled from 'styled-components';

// separate style files for different styles on site
const StyledGoal = styled.div`
    padding: 1rem;
    margin-bottom: 2rem;

    // can do nested styling
    h2 {
        display: inline;
        font-size: 3rem;
        padding: 1rem 5rem;
    }

    h3 {
        font-size: 1.5rem;
    }

    h3:last-of-type {
        margin-top: 1rem;
    }
`;

export default StyledGoal;
