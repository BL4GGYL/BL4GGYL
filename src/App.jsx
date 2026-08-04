import { useState } from "react";

function App() {

  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") !== "light"
  );

  const [menuOpen, setMenuOpen] = useState(false);


  const toggleTheme = () => {
    setDarkMode(!darkMode);

    localStorage.setItem(
      "theme",
      darkMode ? "light" : "dark"
    );
  };


  const projects = [
    {
      title: "Bank Management System",
      tech: "C# | Windows Forms | SQL Server",
      description:
        "Desktop banking application with customer management, account transactions, deposits, withdrawals, transfers and transaction history."
    },

    {
      title: "Carbon Credit Trading Management System",
      tech: "Java | Spring Boot | SQL Server | Tailwind CSS",
      description:
        "Role-based web system for managing carbon credit trading activities between government administrators, trade administrators and companies."
    },

    {
      title: "Employee Attendance Management System",
      tech: "PHP | MySQL | HTML | CSS | JavaScript",
      description:
        "Web attendance system with authentication, database management and location-based attendance features."
    }
  ];



  return (

    <div
      className={
        darkMode
          ? "bg-gray-950 text-white min-h-screen"
          : "bg-gray-100 text-gray-900 min-h-screen"
      }
    >



      {/* Navbar */}

      <nav
        className={
          darkMode
            ?
            "fixed top-0 w-full z-50 bg-gray-950/90 backdrop-blur p-4 shadow"
            :
            "fixed top-0 w-full z-50 bg-white/90 backdrop-blur p-4 shadow"
        }
      >

        <div className="flex justify-between items-center">

          <h1 className="text-xl font-bold">
            Kaung Khant Lin
          </h1>


          <button
            className="md:hidden text-2xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>



          <div className="hidden md:flex items-center gap-5">

            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>


            <button
              onClick={toggleTheme}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg"
            >
              {
                darkMode
                  ?
                  "☀️"
                  :
                  "🌙"
              }
            </button>

          </div>


        </div>


        {
          menuOpen &&

          <div className="md:hidden flex flex-col gap-4 mt-4">

            <a href="#about">
              About
            </a>

            <a href="#skills">
              Skills
            </a>

            <a href="#projects">
              Projects
            </a>

            <a href="#contact">
              Contact
            </a>


            <button
              onClick={toggleTheme}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg"
            >
              {
                darkMode
                  ?
                  "☀️ Light"
                  :
                  "🌙 Dark"
              }
            </button>


          </div>

        }


      </nav>




      {/* Hero */}


      <section
        className="h-screen flex flex-col justify-center items-center text-center px-5"
      >


        <img
          src="/profile.jpg"
          alt="Kaung Khant Lin"
          className="w-40 h-40 rounded-full object-cover mb-6 border-4 border-blue-500"
        />



        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-5">
          Kaung Khant Lin
        </h1>



        <h2 className="text-2xl text-blue-500 mb-5">
          Computer Science Student
        </h2>



        <p
          className={
            darkMode
              ?
              "max-w-xl text-gray-300"
              :
              "max-w-xl text-gray-700"
          }
        >

          Backend developer interested in ERP systems,
          enterprise software and database-driven applications.

        </p>



        <div className="mt-8">


          <a
            className="bg-blue-600 text-white px-6 py-3 rounded-lg mr-4"
            href="https://github.com/BL4GGYL"
            target="_blank"
          >

            Github

          </a>



          <a
            className="border border-blue-500 px-6 py-3 rounded-lg"
            href="#contact"
          >

            Contact

          </a>


        </div>


      </section>






      {/* About */}

      <section
        id="about"
        className="py-20 px-10"
      >

        <h2 className="text-3xl font-bold mb-8">
          About Me
        </h2>


        <div className="max-w-4xl">


          <p
            className={
              darkMode
                ?
                "text-gray-300 text-lg leading-relaxed"
                :
                "text-gray-700 text-lg leading-relaxed"
            }
          >

            I am a fifth-year Computer Science student at the{" "}
            <strong className="text-blue-500">
              University of Computer Studies Mandalay{" "}
            </strong>
            with a strong interest in{" "}
            <strong className="text-blue-500">
              backend development, enterprise software, and ERP systems.
            </strong>

          </p>


          <div className="grid md:grid-cols-3 gap-5 mt-8">


            <div
              className={
                darkMode
                  ?
                  "bg-gray-900 p-5 rounded-xl"
                  :
                  "bg-white p-5 rounded-xl shadow"
              }
            >

              <h3 className="font-bold text-blue-500 mb-2">
                💻 Development
              </h3>

              <p>
                Building database-driven applications and management systems.
              </p>

            </div>




            <div
              className={
                darkMode
                  ?
                  "bg-gray-900 p-5 rounded-xl"
                  :
                  "bg-white p-5 rounded-xl shadow"
              }
            >

              <h3 className="font-bold text-blue-500 mb-2">
                ⚙️ Experience
              </h3>

              <p>
                Worked with C#, Java Spring Boot, PHP, SQL Server and MySQL.
              </p>

            </div>




            <div
              className={
                darkMode
                  ?
                  "bg-gray-900 p-5 rounded-xl"
                  :
                  "bg-white p-5 rounded-xl shadow"
              }
            >

              <h3 className="font-bold text-blue-500 mb-2">
                🚀 Goal
              </h3>

              <p>
                Seeking opportunities to grow as a Software Engineer.
              </p>

            </div>


          </div>



        </div>


      </section>




      {/* Skills */}

      <section
        id="skills"
        className={
          darkMode
            ?
            "py-20 px-10 bg-gray-900"
            :
            "py-20 px-10 bg-gray-200"
        }
      >

        <h2 className="text-3xl font-bold mb-8">
          Technical Skills
        </h2>


        <div className="grid md:grid-cols-3 gap-6">


          {
            [
              {
                title: "Programming Languages",
                skills: [
                  "C#",
                  "Java",
                  "PHP",
                  "Python",
                  "JavaScript"
                ]
              },

              {
                title: "Backend Development",
                skills: [
                  "Spring Boot",
                  "REST API",
                  "ADO.NET",
                  "OOP"
                ]
              },

              {
                title: "Database",
                skills: [
                  "SQL Server",
                  "MySQL",
                  "PostgreSQL",
                  "Database Design"
                ]
              },

              {
                title: "Frontend",
                skills: [
                  "HTML",
                  "CSS",
                  "Tailwind CSS",
                  "Basic React"
                ]
              },

              {
                title: "Tools",
                skills: [
                  "Visual Studio",
                  "Eclipse",
                  "XAMPP",
                  "Docker",
                  "Git/GitHub"
                ]
              },

              {
                title: "Other Knowledge",
                skills: [
                  "Linux",
                  "Networking",
                  "Virtualization"
                ]
              }

            ].map(category => (


              <div
                key={category.title}
                className={
                  darkMode
                    ?
                    "bg-gray-800 p-6 rounded-xl"
                    :
                    "bg-white p-6 rounded-xl shadow"
                }
              >


                <h3 className="text-blue-500 font-bold text-lg mb-4">

                  {category.title}

                </h3>


                <div className="flex flex-wrap gap-2">


                  {
                    category.skills.map(skill => (

                      <span
                        key={skill}
                        className={
                          darkMode
                            ?
                            "bg-gray-700 px-3 py-1 rounded-full text-sm"
                            :
                            "bg-gray-200 px-3 py-1 rounded-full text-sm"
                        }
                      >

                        {skill}

                      </span>

                    ))
                  }


                </div>


              </div>


            ))

          }


        </div>


      </section>






      {/* Projects */}


      <section
        id="projects"
        className="py-20 px-10"
      >


        <h2 className="text-3xl font-bold mb-8">
          Projects
        </h2>



        <div className="grid md:grid-cols-3 gap-6">


          {

            projects.map(project => (


              <div
                key={project.title}
                className={
                  darkMode
                    ?
                    "bg-gray-900 p-6 rounded-xl"
                    :
                    "bg-white p-6 rounded-xl shadow"
                }
              >


                <h3 className="text-xl font-bold mb-3">

                  {project.title}

                </h3>



                <p className="text-blue-500 mb-3">

                  {project.tech}

                </p>



                <p
                  className={
                    darkMode
                      ?
                      "text-gray-300"
                      :
                      "text-gray-700"
                  }
                >

                  {project.description}

                </p>



              </div>


            ))


          }


        </div>


      </section>









      {/* Certificates */}



      <section
        className={
          darkMode
            ?
            "py-20 px-10 bg-gray-900"
            :
            "py-20 px-10 bg-gray-200"
        }
      >


        <h2 className="text-3xl font-bold mb-8">

          Certificates & Achievements

        </h2>




        <div className="grid md:grid-cols-2 gap-8">



          <div
            className={
              darkMode
                ?
                "bg-gray-800 rounded-xl p-6"
                :
                "bg-white rounded-xl p-6 shadow"
            }
          >


            <h3 className="text-xl font-bold mb-3">

              🏆 Myanmar Cyber Security Challenge 2025

            </h3>



            <p className="mb-5">

              Achieved 17th place in the Open Level,
              demonstrating cybersecurity knowledge,
              analytical thinking and problem-solving skills.

            </p>



            <a
              href="/CTF.jpg"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 text-white px-5 py-2 rounded-lg"
            >

              View Certificate

            </a>


          </div>






          <div
            className={
              darkMode
                ?
                "bg-gray-800 rounded-xl p-6"
                :
                "bg-white rounded-xl p-6 shadow"
            }
          >


            <h3 className="text-xl font-bold mb-3">

              🚗 Arduino Bluetooth Car Competition

            </h3>



            <p className="mb-5">

              Received a Consolation Prize for developing
              an Arduino-based Bluetooth-controlled car project.

            </p>



            <a
              href="/1stYear.jpg"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 text-white px-5 py-2 rounded-lg"
            >

              View Certificate

            </a>


          </div>



        </div>


      </section>








      {/* Contact */}


      <section
        id="contact"
        className="py-20 px-10"
      >


        <h2 className="text-3xl font-bold mb-5">

          Contact

        </h2>


        <p>
          📧 kaungkhantlin04@gmail.com
        </p>


        <p>
          📞 +959 977788873
        </p>


        <p>
          Github: github.com/BL4GGYL
        </p>



      </section>



    </div>


  )
}


export default App;