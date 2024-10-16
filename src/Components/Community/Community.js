
import mealIcon from '../../assets/icons/meal.png'
import communityIcon from '../../assets/icons/community.png';
import eventsIcon from '../../assets/icons/events.png'
import classes from './page.module.css';
import { Helmet } from 'react-helmet';
import Icon from '../../assets/logo.png';

export default function CommunityPage() {
  return (
    <>
     <Helmet>
        <title>Community</title>
        <link rel="Icon" type="image/png" href={Icon} />
      </Helmet>
      <header className={classes.header}>
        <h1>
          One shared passion: <span className={classes.highlight}>Food</span>
        </h1>
        <p>Join our community and share your favorite recipes!</p>
      </header>
      <main className={classes.main}>
        <h2>Community Perks</h2>
        <ul className={classes.perks}>
          <li>
            <img src={mealIcon} alt="A delicious meal" />
            <p>Share & discover recipes</p>
          </li>
          <li>
            <img src={communityIcon} alt="A crowd of people, cooking" />
            <p>Find new friends & like-minded people</p>
          </li>
          <li>
            <img
              src={eventsIcon}
              alt="A crowd of people at a cooking event"
            />
            <p>Participate in exclusive events</p>
          </li>
        </ul>
      </main>
    </>
  );
}
