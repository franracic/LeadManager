import React, { useState } from "react";
const Products = [
  "Web Development",
  "App Development",
  "UX/UI Design",
  "Branding",
  "Site from scratch",
  "App from scratch",
  "Maintenance",
];
const Header = () => {
  const [selectedInterest, setSelectedInterest] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [about, setAbout] = useState("");
  const [honeypot, setHoneypot] = useState("");
  const [error, setError] = useState("");

  const handleInterestClick = (interest) => {
    if (selectedInterest.includes(interest)) {
      setSelectedInterest(selectedInterest.filter((item) => item !== interest));
    } else {
      setSelectedInterest([...selectedInterest, interest]);
    }
  };
  const validateForm = () => {
    if (!name || !email || !about) {
      setError("All fields are required");
      return false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address");
      return false;
    }
    return true;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (honeypot) {
      return;
    }
    if (validateForm()) {
      const formData = { name, email, about, selectedInterest };
      console.log(formData);
      setName("");
      setEmail("");
      setAbout("");
      setSelectedInterest([]);
      setError("");
    }
  };
  return (
    <div className="items-end flex fixed z-50 inset-0 flex-col backdrop-blur-sm grow overflow-x-hidden overflow-y-auto">
      <div className="max-w-4xl w-full bg-white grow flex-col flex transform duration-300">
        <div className="px-11 py-12 grow flex-col flex">
          <h2 className="text-6xl max-w-sm">Hey! Tell us all the things</h2>
          <form className="mt-10 grow flex-col flex" onSubmit={handleSubmit}>
            <div className="justify-between flex">
              <div className="w-96">
                <div className="w-full flex flex-col">
                  <header className="mb-4">
                    <h3>Name</h3>
                  </header>
                  <div className="rounded-md bg-slate-100 flex flex-col">
                    <input
                      className="px-4 min-h-14 bg-transparent outline-0 resize-none"
                      name="nameOrCompany"
                      placeholder="Fran Račić"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                </div>
              </div>
              <div className="w-96">
                <div className="w-full flex flex-col">
                  <header className="mb-4">
                    <h3>Your Email</h3>
                  </header>
                  <div className="rounded-md bg-slate-100 flex flex-col">
                    <input
                      className="px-4 min-h-14 bg-transparent outline-0 resize-none"
                      name="email"
                      placeholder="fran.racic@gmail.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-10">
              <h3 className="mb-4">I'm interested in...</h3>
              <ul className="flex-wrap flex ps-0">
                {Products.map((product) => (
                  <li
                    key={product}
                    className={
                      "mx-2 my-2 px-4 py-3 border-2 cursor-pointer rounded-lg"
                    }
                    style={{
                      borderColor: selectedInterest.includes(product)
                        ? "#048368"
                        : "",
                    }}
                    onClick={() => handleInterestClick(product)}
                  >
                    <p>{product}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-10 grow flex-col flex">
              <header className="mb-4">
                <h3>Tell us more about your project</h3>
              </header>
              <div className="cursor-text grow items-start flex rounded-md bg-slate-100">
                <textarea
                  className="p-4 grow min-h-14 bg-transparent outline-0 resize-none flex flex-col border-0 focus:ring-0 h-full"
                  name="about"
                  placeholder="Something about your great idea"
                  value={about}
                  onChange={(e) => setAbout(e.target.value)}
                ></textarea>
              </div>
            </div>
            <input
              type="text"
              name="honeypot"
              value={honeypot}
              onChange={(e) => setHoneypot(e.target.value)}
              style={{ display: "none" }}
            />
            <div className="pt-6 flex items-center justify-between">
              <p className="text-slate-300">
                My Email{" "}
                <a href="fran.racic@gmail.com">
                  <u>fran.racic@gmail.com</u>
                </a>
              </p>

              {error && <p className="text-red-500">{error}</p>}
              <button
                type="submit"
                className="flex items-center py-3 px-6 rounded-3xl overflow-hidden"
              >
                <span className="flex flex-col h-5 z-20">
                  Submit the request
                </span>
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                    />
                  </svg>
                </span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Header;
