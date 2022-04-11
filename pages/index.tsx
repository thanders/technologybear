import Link from 'next/link';
import Paper from '@mui/material/Paper';
import styles from './index.module.scss';
import HeadStandard from '../components/HeadStandard/HeadStandard';
import HeroImage from '../components/HeroImage/HeroImage';

const Home = () => {

  const headData = {
    title: 'Home',
    description: 'Software engineering tips and tricks',
    keywords: 'TechnologyBear, home, software engineering, dev ops, frontend'
  };

  return (
    <div>
      <HeadStandard genericData={headData} />
      <HeroImage />
      <div className={styles.container}>
        <Link href='/posts' passHref>
          <a>
            <Paper sx={{ width: 200, textAlign: 'center', verticalAlign: 'center', padding: '20px 10px 20px 10px'}}>
                View All Posts
            </Paper>
          </a>
        </Link>
      </div>
    </div>
  )
}

export default Home
