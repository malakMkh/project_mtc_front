import React from 'react'

const Sidebar = () => {
    const [isLoaded, setLoaded] = React.useState(false)

    React.useEffect(() => {
      const baliseScript = document.createElement("script")
      baliseScript.src = "assets/js/Sidebar.js"
      baliseScript.addEventListener("load", () => setLoaded(true))
      document.body.appendChild(baliseScript)
    }, [])
    
    React.useEffect(() => {
      if (isLoaded) {
        // ...
      }
    }, [isLoaded])
  return (
    <div>
<nav class="sidebar_c close">
        <header>
            <div class="image-text">
                <span class="image">
                    <img src="assets/images/logo.png" alt=""/>
                </span>
            </div>

            <i class='fa fa-angle-double-left toggle'></i>
        </header>

        <div class="menu-bar">
            <div class="menu">

                <li class="search-box">
                    <i class='	fa fa-search icon'></i>
                    <input type="text" placeholder= "       search"/>
                </li>

                <ul class="menu-links">
                    <li class="nav-link">
                        <a href="#">
                            <i class='fa fa-dashboard icon' ></i>
                            <span class="text nav-text">Dashboard</span>
                        </a>
                    </li>

                    <li class="nav-link">
                        <a href="#">
                            <i class='fa fa-clipboard icon' ></i>
                            <span class="text nav-text">All Courses</span>
                        </a>
                    </li>

                    <li class="nav-link">
                        <a href="#">
                        <i class='fa fa-calendar icon' ></i>
                            <span class="text nav-text">Schedules</span>
                        </a>
                    </li>

                    <li class="nav-link">
                        <a href="#">
                            <i class='fa fa-graduation-cap icon' ></i>
                            <span class="text nav-text">My Class</span>
                        </a>
                    </li>

                    <li class="nav-link">
                        <a href="#">
                            <i class='fa fa-cogs icon' ></i>
                            <span class="text nav-text">Settings</span>
                        </a>
                    </li>

                    

                </ul>
            </div>

            
        </div>

    </nav>










    </div>
  )
}

export default Sidebar