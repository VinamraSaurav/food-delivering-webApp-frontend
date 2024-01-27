export default function About() {
  return (
    <div className="About m-4 p-4 rounded-lg mx-auto mt-[75px] ">
      <div className="About me">
        <div class="about-container bg-gradient-to-r from-yellow-400 rounded-lg p-4">
          <div class="project-section">
            <h2 class="section-heading font-serif font-bold text-2xl">About Foodigy Project😀</h2>
            <p class="section-content">
              "Foodigy" is a React based webApp that I created for practice. The
              website features a configuration-driven user interface and
              utilizes the Swiggy API to fetch restaurant and menu data. It is a
              demo website for a food delivering company, showcasing key
              features like a config-driven UI, routing.
              <ul>
                <strong>😎 Key Features :</strong>
                <li>📌 Shimmer UI for Better UserExperience</li>
                <li>📌 Search Feature</li>
                {/* <li>📌 Checking network connection</li> */}
                <li>📌 forms to contact</li>
                <li>📌 Single page application</li>
                {/* <li>
                  📌 Implemented Lazy Loading or OnDemand Loading on This Router
                </li> */}
              </ul>
              <ul>
                <strong>💻 Technologies Used :</strong>
                <li>📌 React </li>
                <li>📌 Redux for State Management</li>
                {/* <li>📌 Checking network connection</li> */}
                <li>📌 HTML, CSS, JavaScript</li>
                <li>📌 Tailwind CSS</li>
                {/* <li>
                  📌 Implemented Lazy Loading or OnDemand Loading on This Router
                </li> */}
              </ul>
              <div className="note m-2">
                <strong>Notice: Limited Menu Display</strong>
                <p>
                  If you encounter shimmering UI instead of menus when clicking
                  on restaurants, it's likely a CORS (Cross-Origin Resource
                  Sharing) issue. To overcome this, use a VPN like Proton VPN
                  for uninterrupted access. Simply download, connect, and
                  refresh the page for a seamless experience. Thank you for your
                  understanding.
                </p>
              </div>
            </p>
          </div>

          <div class="author-section">
            <h2 class="section-heading font-serif font-bold text-2xl">About the Author - Vinamra Saurav😎</h2>
            <p class="section-content">
              I'm Vinamra Saurav, a tech enthusiast fascinated by new
              technologies. My expertise spans languages such as C++, C, Python,
              JavaScript, React, HTML, CSS, and SQL. With touch typing skills
              and a typing speed of around 80+ words per minute, I am passionate
              about exploring and applying technology to solve real-world
              problems.
            </p>
            <div class="author-info">
              <strong>Technologies:</strong> C++, C, Python, JavaScript, React,
              HTML, CSS, SQL
              <br />
              <strong>Typing Speed:</strong> 80+ words per minute
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
