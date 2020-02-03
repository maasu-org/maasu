import React from 'react';
import { Page, Type } from '../../components';

class Awards extends React.Component {
  componentDidMount() {
    document.title = 'Awards - The Midwest Asian American Students Union';
  }

  render() {
    return (
      <Page>
        <Type variant='h2'>Awards</Type>
        <p>
          MAASU gives out three types of awards at the annual Spring Conference: the Charles Chang Leadership 
          Award, the Midwestern Star Leadership Award, and the MAASU Board of Advisors Award. Winners for all 
          awards are announced annually at the MAASU Spring Conference.
        </p>
        <ul>
          <li>
            <Type variant='sub4'>Charles Chang Leadership Award</Type>
            <p>
              The Charles Chang Leadership Award was created in 1993 in honor of the MAASU’s founder Charles 
              Chang. Each academic year, the award is presented to a student who demonstrates leadership and 
              dedication to the Asian Pacific Islander American (APIA) community, along with a $250 
              scholarship and plaque.
            </p>
            <p>
              Apply <a href="https://docs.google.com/forms/d/e/1FAIpQLScmeDUt54Wf_P_CFAfE1T6JZ80AtMtGZ82UHqa9pOR9915wcg/viewform">here</a>. The deadline is February 29th.
            </p>
          </li>
          <li>
            <Type variant='sub4'>Midwestern Star Award</Type>
            <p>
              Students nominated for the Midwestern Stars can be anyone who has made a great impact on their 
              APIA community through contributions of advisement, programming, leadership, or other means 
              that have uplifted a community higher than what has been previously.
            </p>
            <p>
              Apply with <a download href={`${process.env.PUBLIC_URL}/assets/files/2020_Midwestern_Star_Award_Application.pdf`}>this application</a>. The deadline is February 29th.
            </p>
          </li>
          <li>
            <Type variant='sub4'>BOA (Board of Advisors) Award</Type>
            <p>
              The MAASU BOA Award is an award that recognizes Asian Pacific Islander American student 
              organizations that have accomplished greatness on their campus and in the Midwest community. 
              The BOA Award and $100 prize is presented annually at the MAASU Spring Conference banquet to 
              one organization or school.
            </p>
            <p>
              Apply <a href="https://docs.google.com/forms/d/e/1FAIpQLSd_NV-M0QYTe31Ecx4dAjbag155xWM6c5m6ZnYgDNi7XyxPQw/viewform">here</a>. The deadline is February 29th.
            </p>
          </li>
        </ul>
        <p>See previous awards <a href='/pastawards'>here</a>.</p>
        <div className='footerSpace'></div>
      </Page>
    );
  }
}

export default Awards;
