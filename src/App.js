import React, {useEffect, useState} from 'react';
import Airtable from 'airtable';
import Goal from './components/Goal';
import styled from 'styled-components';
import { GlobalStyle } from './styles/Global.style';

const base =  new Airtable({ apiKey: "keyh8E1bYG95PEPwQ" }).base('appR5WRFdgQmCEgfb');

const StyledH1 = styled.h1`
  text-align: center;
  font-size: 4rem;
  margin: 1rem 0;
`;

function App() {
  const [ goals, setGoals ] = useState([]);
  const [ updates, setUpdates ] = useState([]);

  useEffect(() => {
    base("goals")
      .select({ view: "Grid view" })
      .eachPage((records, fetchNextPage) => {
        setGoals(records);
        fetchNextPage();
        console.log(records);
      });
    base("updates")
      .select({ view: "Grid view" })
      .eachPage((records, fetchNextPage) => {
        setUpdates(records);
        fetchNextPage();
      });
    }, []);
    return (
      // fragment
      <> 
        <GlobalStyle />
        <StyledH1>My Goals</StyledH1>
        {goals.map((goal) => (
          <Goal 
            key={goal.id}
            goal={goal}
            updates={updates.filter(
              (update) => update.fields.goalid[0] === goal.id
            )} // updates specific to current goal
          />
        ))}
      </>
    );
}

export default App;
