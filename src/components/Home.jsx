import MasterLayout from "../masterLayout/MasterLayout";
import Blog from "./Blog";
import Contact from "./Contact";

/* eslint-disable no-undef */
const Home = () => {
  return (
    <>
      <MasterLayout>
        <section className="bg-cover bg-center py-32 w-full">
          <div className="container mx-auto text-left text-white">
            <div className="flex items-center px-12">
              <div className="w-1/2">
                <h1 className="text-5xl font-medium mb-6">
                  Welcome to My Website
                </h1>
                <p className="text-xl mb-12">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                  viverra euismod odio, gravida pellentesque urna varius vitae.
                </p>
              </div>
              <div className="w-1/2 pl-16">
                <img
                  src="https://source.unsplash.com/random?ux"
                  className="h-64 w-full object-cover rounded-xl"
                  alt="Layout Image"
                />
              </div>
            </div>
          </div>
        </section>
        <Blog></Blog>
        <Contact></Contact>
      </MasterLayout>
    </>
  );
};

export default Home;
