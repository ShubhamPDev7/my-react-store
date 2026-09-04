const About = () => {
  return (
    <div className="about-container">
      <h1>About ShopZone</h1>
      <p>
        ShopZone is a modern e-commerce storefront built from the ground up to
        explore clean architecture, component composition, custom hooks, and
        state management in React.
      </p>

      <div className="about-card">
        <h3>🚀 Tech Stack & Architecture</h3>
        <ul>
          <li>
            <strong>Bundler:</strong> Parcel (HMR, Zero Config, Fast Builds)
          </li>
          <li>
            <strong>Routing:</strong> React Router DOM v6 (Client-side routing)
          </li>
          <li>
            <strong>UI Paradigm:</strong> Custom hooks & modular components
          </li>
          <li>
            <strong>API:</strong> FakeStore REST API
          </li>
        </ul>
      </div>
    </div>
  );
};

export default About;
