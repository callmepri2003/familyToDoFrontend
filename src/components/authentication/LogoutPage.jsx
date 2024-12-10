const LogoutPage = () => {
    const handleLogout = async () => {
      localStorage.removeItem("credentials");
    };

    handleLogout();
    return (
    <div>
      <p>You have been logged out.</p>
      <a href="/">Go home</a>
    </div>
        
    )
}

export default LogoutPage;