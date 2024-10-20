import { useState } from 'react'
import reactLogo from './assets/images/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Header } from './sections/Header.jsx'

import banner from './assets/images/banner.jpg'
import pic01 from './assets/images/pic01.jpg'
import pic02 from './assets/images/pic02.jpg'
import pic03 from './assets/images/pic03.jpg'

function App() {
  const [count, setCount] = useState(0)

	return (
		<div>
			<Header/>
			<div id="wrapper">

					<div id="main">

							<section id="one">
								<div class="image main" data-position="center">
									<img src={banner} alt="" />
								</div>
								<div class="container">
									<header class="major">
										<h2>Read Only</h2>
										<p>Just an incredibly simple responsive site<br />
										template freebie by <a href="http://html5up.net">HTML5 UP</a>.</p>
									</header>
									<p>Faucibus sed lobortis aliquam lorem blandit. Lorem eu nunc metus col. Commodo id in arcu ante lorem ipsum sed accumsan erat praesent faucibus commodo ac mi lacus. Adipiscing mi ac commodo. Vis aliquet tortor ultricies non ante erat nunc integer eu ante ornare amet commetus vestibulum blandit integer in curae ac faucibus integer non. Adipiscing cubilia elementum.</p>
								</div>
							</section>

							<section id="two">
								<div class="container">
									<h3>Things I Can Do</h3>
									<p>Integer eu ante ornare amet commetus vestibulum blandit integer in curae ac faucibus integer non. Adipiscing cubilia elementum integer lorem ipsum dolor sit amet.</p>
									<ul class="feature-icons">
										<li class="icon solid fa-code">Write all the code</li>
										<li class="icon solid fa-cubes">Stack small boxes</li>
										<li class="icon solid fa-book">Read books and stuff</li>
										<li class="icon solid fa-coffee">Drink much coffee</li>
										<li class="icon solid fa-bolt">Lightning bolt</li>
										<li class="icon solid fa-users">Shadow clone technique</li>
									</ul>
								</div>
							</section>

							<section id="three">
								<div class="container">
									<h3>A Few Accomplishments</h3>
									<p>Integer eu ante ornare amet commetus vestibulum blandit integer in curae ac faucibus integer non. Adipiscing cubilia elementum integer. Integer eu ante ornare amet commetus.</p>
									<div class="features">
										<article>
											<a href="#" class="image"><img src={pic01} alt="" /></a>
											<div class="inner">
												<h4>Possibly broke spacetime</h4>
												<p>Integer eu ante ornare amet commetus vestibulum blandit integer in curae ac faucibus integer adipiscing ornare amet.</p>
											</div>
										</article>
										<article>
											<a href="#" class="image"><img src={pic02} alt="" /></a>
											<div class="inner">
												<h4>Terraformed a small moon</h4>
												<p>Integer eu ante ornare amet commetus vestibulum blandit integer in curae ac faucibus integer adipiscing ornare amet.</p>
											</div>
										</article>
										<article>
											<a href="#" class="image"><img src={pic03} alt="" /></a>
											<div class="inner">
												<h4>Snapped dark matter in the wild</h4>
												<p>Integer eu ante ornare amet commetus vestibulum blandit integer in curae ac faucibus integer adipiscing ornare amet.</p>
											</div>
										</article>
									</div>
								</div>
							</section>


							<section id="four">
								<div class="container">
									<h3>Contact Me</h3>
									<p>Integer eu ante ornare amet commetus vestibulum blandit integer in curae ac faucibus integer non. Adipiscing cubilia elementum integer. Integer eu ante ornare amet commetus.</p>
									<form method="post" action="#">
										<div class="row gtr-uniform">
											<div class="col-6 col-12-xsmall"><input type="text" name="name" id="name" placeholder="Name" /></div>
											<div class="col-6 col-12-xsmall"><input type="email" name="email" id="email" placeholder="Email" /></div>
											<div class="col-12"><input type="text" name="subject" id="subject" placeholder="Subject" /></div>
											<div class="col-12"><textarea name="message" id="message" placeholder="Message" rows="6"></textarea></div>
											<div class="col-12">
												<ul class="actions">
													<li><input type="submit" class="primary" value="Send Message" /></li>
													<li><input type="reset" value="Reset Form" /></li>
												</ul>
											</div>
										</div>
									</form>
								</div>
							</section>



					</div>

					<section id="footer">
						<div class="container">
							<ul class="copyright">
								<li>&copy; Untitled. All rights reserved.</li><li>Design: <a href="http://html5up.net">HTML5 UP</a></li>
							</ul>
						</div>
					</section>

			</div>


	    </div>
	)
}

export default App
