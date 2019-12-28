const Header = () => {
  return (
    <nav>
      <div class="nav-wrapper">
        <a href="#" class="brand-logo center">
          Solid + Parcel + TypeScript
        </a>
        <ul id="nav-mobile" class="left hide-on-med-and-down">
          <li>
            <a href="https://github.com/ryansolid/solid">Solid</a>
          </li>
          <li>
            <a href="https://github.com/parcel-bundler/parcel">Parcel</a>
          </li>
          <li>
            <a href="https://github.com/microsoft/TypeScript">TypeScript</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;