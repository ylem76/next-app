import Image from 'next/image';
import classes from './profile.module.css';
export default function Profile() {
	return (
		<section className={classes.profile}>
			<div className={classes.image}>
				<Image src='/img/home/profile.jpg' alt='' layout='fill' />
			</div>
			<h1>welcome to my blog!</h1>
			<p>This blog is made by next.js!</p>
		</section>
	);
}
