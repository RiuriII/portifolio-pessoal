const Footer = () => {
  return (
    <footer className="flex h-16 w-full items-center justify-center bg-blue text-slate-50">
      <div className="text-base max-sm:text-sm">
        © {new Date().getFullYear()} Riuri Dev
      </div>
    </footer>
  );
};

export default Footer;
