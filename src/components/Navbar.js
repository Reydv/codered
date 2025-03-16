function Navbar() {
  return (
    <nav className="p-4 bg-black text-white w-full">
      <a className="p-1 inline" href="/">
        Codered
      </a>
      <ul className="flex justify-center space-x-6 text-xs uppercase">
        <li>
          <a href="/aturan">Aturan</a>
        </li>
        <li>
          <a href="/dashboard">Dashboard</a>
        </li>
        <li>
          <a href="/profil">Profil</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
