import { Nominee, Nominator } from './pages';

const App = () => {
  return (
    // <BrowserRouter>
    //   <div className="min-h-screen">
    //     <Switch>
    //       <Route path="/" component={Nominee} exact />
    //       <Route path="/nominator" component={Nominator} exact />
    //     </Switch>
    //   </div>
    // </BrowserRouter>

    <div className="min-h-screen">
      <Nominee />
    </div>
  );
};

export default App;
