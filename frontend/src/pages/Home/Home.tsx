// import s from './Home.module.scss';

import Banner from './Banner/Banner';
import Categories from './Categories/Categories';
import Slogan from './Slogan/Slogan';

const Home = () => (
    <div>
        <Banner
            image="https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/w_1903,c_limit/0c86d358-5010-4629-82a3-5e6cc6069a6b/nike-just-do-it.jpg"
            link="/catalog/"
        />
        <Slogan
            title="THE SELEBRATION IS ON"
            preTitle="Nike Women's Week"
            description="Fresh voices, fire fits, and new kicks. Shop a brand new collection insipred by strong women"
        />
        <Categories categories={[]} title="Featured" />
        Main Page
    </div>
);

export default Home;
