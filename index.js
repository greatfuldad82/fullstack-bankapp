function Spa() {

    const [users, setUsers] = React.useState([{name:'alex',email:'greatful_dad@icloud.com',password:'chortlethem',balance: 25, }]);
  
    return (
      <HashRouter>
        <NavBar/>
        <UserContext.Provider value={{users, setUsers}}>
          <div className="container" style={{padding: "20px"}}>
            <Route path="/" exact component={Home} />
            <Route path="/CreateAccount/" component={CreateAccount} />
            <Route path="/deposit/" component={Deposit} />
            <Route path="/withdraw/" component={Withdraw} />
            <Route path="/alldata/" component={AllData} />
          </div>
        </UserContext.Provider>      
      </HashRouter>
    );
  }
  
  ReactDOM.render(
    <Spa/>,
    document.getElementById('root')
  );