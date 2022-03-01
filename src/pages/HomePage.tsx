import { SearchMusic } from '../components';

export const HomePage = () => {
  return (
    <div className="home-container">

      <video autoPlay loop muted >
        <source src="./assets/bg.mp4" type="video/mp4" />
      </video>

      <SearchMusic />


    </div>
  )
}
