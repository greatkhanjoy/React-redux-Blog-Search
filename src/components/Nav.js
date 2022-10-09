import React from 'react'

const Nav = () => {
  return (
    <nav className="bg-slate-100 shadow-md">
    <div
        className="max-w-7xl mx-auto px-5 lg:px-0 flex justify-between py-3 items-center"
    >
        <a href="/">
            <img
                className="h-10"
                src="https://e7.pngegg.com/pngimages/917/797/png-clipart-redux-react-npm-state-management-others-text-web-application.png"
                alt="React-Redux Blog"
            />
        </a>
    </div>
</nav>
  )
}

export default Nav