import MasterLayout from "../masterLayout/MasterLayout";

const Contact = () => {
  return (
    <>
      <MasterLayout>
        <div className="h-[580px] flex">
          <div className="flex w-1/2 bg-gradient-to-tr from-blue-800 to-purple-700 i justify-around items-center">
            <div>
              <h1 className="text-white font-bold text-4xl font-sans">
                Contact Us
              </h1>
              <p className="text-white mt-1">Lorem ipsum dolor sit.</p>
              <button
                type="submit"
                className="block w-28 bg-white text-indigo-800 mt-4 py-2 rounded-2xl font-bold mb-2"
              >
                Read More
              </button>
            </div>
          </div>
          <div className="flex w-1/2 justify-center items-center bg-white">
            <form className="bg-white">
              <h1 className="text-gray-800 font-bold text-2xl mb-1">
                Hello Again!
              </h1>
              <p className="text-sm font-normal text-gray-600 mb-7">
                Welcome Back
              </p>
              <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
                <input
                  className="pl-2 outline-none border-none"
                  type="text"
                  name=""
                  id=""
                  placeholder="Your Name"
                />
              </div>
              <div className="flex items-center border-2 py-2 px-3 rounded-2xl">
                <input
                  className="pl-2 outline-none border-none"
                  type="text"
                  name=""
                  id=""
                  placeholder="Your Email"
                />
              </div>
              <button
                type="submit"
                className="block w-full bg-indigo-600 mt-4 py-2 rounded-2xl text-white font-semibold mb-2"
              >
                Login
              </button>
            </form>
          </div>
        </div>
      </MasterLayout>
    </>
  );
};

export default Contact;
