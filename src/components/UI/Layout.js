
const Layout = ({ children }) => {
    return (
        <>
            <div className="d-flex justify-content-center bg-dark text-light py-2">
                <h3>Rocket Control App</h3>
            </div>
            <div className="d-flex py-2 bg-light">
                {children}
            </div>
        </>
    )
}

export default Layout;