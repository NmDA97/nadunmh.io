import React from "react";
import {
  Github,
  Mail,
  Globe,
  Twitter,
  Instagram,
  Dribbble,
} from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "./components/ui/Card";

const Portfolio = () => {
  // const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const stats = [
    { value: "+2", label: "YEARS OF\nEXPERIENCE" },
    { value: "+12", label: "PROJECTS\nCOMPLETED" },
    { value: "+20", label: "WORLDWIDE\nCLIENTS" },
  ];

  const skills = [
    {
      images: [
        "src/assets/anaconda-original.svg",
        "src/assets/docker-original.svg",
        "src/assets/python-original.svg",
        "src/assets/tensorflow-original.svg",
        "src/assets/scikitlearn-original.svg",
        "src/assets/pandas-original.svg",
        "src/assets/matplotlib-original.svg",
        "src/assets/numpy-original.svg",
        "src/assets/jupyter-original.svg",
        "src/assets/fastapi-original.svg",
        "src/assets/git-original.svg",
        "src/assets/javascript-original.svg",
        "src/assets/spss-original.svg",
        "src/assets/laravel-original.svg",
        "src/assets/mariadb-original.svg",
        "src/assets/mongodb-original.svg",
        "src/assets/mysql-original.svg",
        "src/assets/postgresql-original.svg",
        "src/assets/pytorch-original.svg",
        "src/assets/r-original.svg",
        "src/assets/react-original.svg",
        "src/assets/flask-original.svg",
      ],
    },
  ];

  const projects = [
    { name: "Plant Disease Detector", desc: "React Framer Template" },
    { name: "Advanced Weather Prediction ", desc: "React Framer Template" },
    { name: "Ruya", desc: "React Framer Template" },
  ];
  const areas = [
    {
      name: "Machine Learning",
      desc: "Building intelligent systems with data-driven models",
      images: ["src/assets/machine_learning.png"],
    },
    {
      name: "Deep Learning ",
      desc: "Developing neural networks for complex pattern recognition",
      images: ["src/assets/deep_learning.png"],
    },
    {
      name: "Data Analytics",
      desc: "Extracting insights and trends from raw data",
      images: ["src/assets/data_analytics.png"],
    },
    {
      name: "Model Deployment",
      desc: "Bringing ML models to life in real-world applications",
      images: ["src/assets/model_deployment.png"],
    },
    {
      name: "Data Modeling",
      desc: "Structuring data for efficient storage and analysis",
      images: ["src/assets/data_modeling.png"],
    },
    {
      name: "Hypothesis Testing",
      desc: "Validating ideas with statistical experiments",
      images: ["src/assets/hypothesis_testing.png"],
    },
  ];

  const ProfileSection = ({ className = "" }) => (
    <Card
      className={`w-full lg:max-w-md bg-orange-300 rounded-4xl overflow-hidden border-none motion-preset-slide-right ${className}`}
    >
      {/* Keep ProfileSection content the same */}
      <CardContent className="p-0">
        {/* Orange background with image */}
        <div className="aspect-square w-full ">
          <div className="relative h-full flex items-center justify-center">
            <img
              src="src/assets/nadun.jpeg"
              alt="Nadun Hettiarachchi"
              className="w-4/5 h-4/5 object-cover rounded-2xl"
            />
          </div>
        </div>

        {/* Content section */}
        <div className="px-8 py-6 text-center">
          <h2 className="text-4xl font-bold mb-4 text-gray-900">
            Nadun Hettiarachchi
          </h2>
          <p className="text-gray-800 text-lg mb-6">
            A Data Scientist who has developed countless innovative solutions
          </p>

          {/* Social icons */}
          <div className="flex justify-center gap-6">
            <Dribbble className="w-6 h-6 text-orange-800 cursor-pointer hover:text-orange-600" />
            <Twitter className="w-6 h-6 text-orange-800 cursor-pointer hover:text-orange-600" />
            <Instagram className="w-6 h-6 text-orange-800 cursor-pointer hover:text-orange-600" />
            <Mail className="w-6 h-6 text-orange-800 cursor-pointer hover:text-orange-600" />
          </div>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className="min-h-screen bg-zinc-950 text-white flex justify-center items-center">
      <div className="flex flex-col lg:flex-row w-full max-w-7xl">
        {/* Remove mobile menu button div */}

        {/* Left Column - Always visible */}
        <div className="w-full lg:w-96 lg:fixed lg:h-full p-8">
          <ProfileSection />
        </div>

        {/* Right Column - Adjusted for mobile */}
        <div className="flex-1 p-8 lg:ml-96 ml-0 lg:overflow-y-auto motion-preset-slide-left">
          <div className="max-w-full mx-auto">
            {/* Keep all existing content the same */}

            {/* Update first section with mobile-optimized text sizes */}
            <div className="mb-16">
              <h1 className="text-6xl lg:text-8xl font-bold mb-2">DATA</h1>
              <h2 className="text-6xl lg:text-8xl font-bold text-zinc-800">
                PROFESSIONAL
              </h2>
              <p className="text-zinc-400 mt-4 text-sm lg:text-base">
                Passionate about creating intuitive and engaging user
                experiences. Specialize in transforming ideas into beautifully
                crafted products.
              </p>
            </div>

            {/* Keep rest of the content the same but add responsive text sizes where needed */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-2 mb-20 ">
              {stats.map((stat, index) => (
                <div className="" key={index}>
                  <div className="flex flex-col">
                    <h3 className="text-4xl lg:text-6xl font-bold mb-2">
                      {stat.value}
                    </h3>
                    <p className="text-sm text-zinc-400 whitespace-pre-line">
                      {stat.label}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mb-20 ">
              <h1 className="text-6xl lg:text-8xl font-bold mb-2 ">AREAS</h1>
              <h2 className="text-6xl lg:text-8xl font-bold text-zinc-800 mb-2">
                OF INTEREST
              </h2>
              <h4 className="text-zinc-500">
                Take a look at some of the things I love working on
              </h4>
              <div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8 motion-scale-x-in-0">
                  {areas.map((areas, index) => (
                    <Card key={index} className="bg-zinc-900 border-none">
                      <CardContent className="p-6">
                        <div className="mb-4">
                          <img
                            src={areas.images}
                            className="w-16 h-16"
                            alt=""
                          />
                        </div>
                        <h4 className="text-xl font-bold mb-1">{areas.name}</h4>
                        <p className="text-sm text-zinc-400">{areas.desc}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>

            <div className="mb-20">
              <h1 className="text-6xl lg:text-8xl font-bold mb-2">
                TECH STACK
              </h1>
              <h2 className="text-6xl lg:text-8xl font-bold text-zinc-800 mb-8">
                & EXPERTISE
              </h2>

              {/* Scroll container */}
              <div className="relative w-full overflow-hidden">
                {/* Double-width container for seamless looping */}
                <div className="flex w-[200%] animate-infinite-scroll">
                  {/* Icon set - repeated twice for seamless loop */}
                  {[...skills[0].images, ...skills[0].images].map(
                    (image, index) => (
                      <div key={index} className="mx-8 flex-shrink-0">
                        <img
                          src={image}
                          className="w-16 h-16 object-contain"
                          alt="Technology icon"
                        />
                      </div>
                    )
                  )}
                </div>
              </div>
            </div>

            <div className="mb-16">
              <h1 className="text-6xl lg:text-8xl font-bold mb-2">RECENT</h1>
              <h2 className="text-6xl lg:text-8xl font-bold text-zinc-800 mb-8">
                PROJECTS
              </h2>
              <div className="space-y-4">
                {projects.map((project, index) => (
                  <Card key={index} className="bg-zinc-900 border-none">
                    <CardContent className="p-6">
                      <h4 className="text-xl font-bold mb-1">{project.name}</h4>
                      <p className="text-sm text-zinc-400">{project.desc}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
