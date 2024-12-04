import React, { useState } from "react";
import ArticleSection from "./_components/ArticleSection";
import RelatedArticles from "./_components/RelatedArticles";

const News = () => {
  const [activeSection, setActiveSection] = useState("section1");

  const sections = [
    { id: "section1", title: "Exploring Generative AI in Content Creation" },
    { id: "section2", title: "Steering Clear of Common AI Writing Pitfalls" },
    { id: "section3", title: "Understanding ChatGPT Capabilities - Define Your Style" },
    { id: "section4", title: "Understand Your Readers" },
    { id: "section5", title: "Creating Quality AI-powered Blogs that Stand Out" },
    { id: "section6", title: "Conclusion: Embracing AI in Blog Creation" },
    { id: "section7", title: "Afterword: The AI Behind This Article" },
  ];

  const scrollToSection = (id) => {
    setActiveSection(id);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-blue-50 to-white">
      <div className="container mx-auto px-6 py-12 grid lg:grid-cols-4 gap-8">
        {/* Left Content */}
        <div className="lg:col-span-3">
          {/* Banner Section */}
          <div className="mb-8">
            <img
              src="/src/assets/news.png"
              alt="Blog banner"
              className="rounded-lg shadow-md w-full"
            />
            <h1 className="text-2xl font-bold text-gray-900 mt-4">
              Exploring Essential Blog Creation: Do's and Don'ts
            </h1>
          </div>

          {/* Content Sections */}
          {sections.map((section) => (
            <div id={section.id} key={section.id} className="mb-8 scroll-mt-20">
              <h2 className="text-xl font-bold text-gray-800 mb-2">{section.title}</h2>
              <p className="text-gray-600 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.
                Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh
                elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed
                augue semper porta.
              </p>
            </div>
          ))}
        </div>

        {/* Right Sidebar */}
        <div className="lg:col-span-1 rounded-lg shadow-md p-4 sticky top-6 h-max">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">In This Article</h3>
          <ul className="space-y-3">
            {sections.map((section) => (
              <li key={section.id}>
                <button
                  onClick={() => scrollToSection(section.id)}
                  className={`text-sm w-full text-left px-2 py-1 rounded-md ${
                    activeSection === section.id
                      ? "text-blue-500 font-semibold border-l-4 border-blue-500 pl-2"
                      : "text-gray-700 hover:text-blue-500"
                  }`}
                >
                  {section.title}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <ArticleSection/>
      <RelatedArticles/>
    </div>
  );
};

export default News;
