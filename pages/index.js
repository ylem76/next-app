import Profile from '../components/home/Profile';
import PostList from '../components/home/PostList';

import Link from 'next/link';
function HomePage() {
	return (
		<>
			<Profile />
			<PostList />
		</>
	);
}

export default HomePage;
