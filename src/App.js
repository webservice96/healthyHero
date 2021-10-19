import './App.css';
import { ApplyAsDoctor, BookAppointment, ContactUs, Footer, Header, Login, Page404, Signup, SingleService } from './components';
import {
	BrowserRouter as Router,
	Switch,
	Route,
} from "react-router-dom";
import Home from './pages/Home/Home';
import AuthProvider from './context/AuthProvider';
import PrivateRoute from './PrivateRoute/PrivateRoute';

function App() {
	return (
		<>
			<AuthProvider>
				<Router>
					<Header />
					<Switch>
						<Route exact={true} path="/">
							<Home />
						</Route>
						<Route path="/home">
							<Home />
						</Route>
						<PrivateRoute path="/appointment">
							<BookAppointment />
						</PrivateRoute>
						<PrivateRoute path="/doctorapply">
							<ApplyAsDoctor />
						</PrivateRoute>
						<PrivateRoute path="/service/topic/:topicId">
							<SingleService />
						</PrivateRoute>
						<Route path="/login">
							<Login />
						</Route>
						<Route path="/signup">
							<Signup />
						</Route>
						<Route path="/contatus">
							<ContactUs />
						</Route>
						<Route path="*">
							<Page404 />
						</Route>
					</Switch>
					<Footer />
				</Router>
			</AuthProvider>
		</>
	);
}

export default App;
