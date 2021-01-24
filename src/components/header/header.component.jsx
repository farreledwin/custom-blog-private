import React from 'react';


const Header = () => (
    <nav class="navbar navbar-expand-lg navbar-light bg-light font-family--proxima-nova"> 
			<a class="navbar-brand" href="#">
				Farrel's Blog
			</a>
			<button
				class="navbar-toggler"
				type="button"
				data-toggle="collapse"
				data-target="#navbarSupportedContent"
				aria-controls="navbarSupportedContent"
				aria-expanded="false"
				aria-label="Toggle navigation"
			>
				<span class="navbar-toggler-icon" />
			</button>
        
			<div class="collapse navbar-collapse" id="navbarSupportedContent">
				<ul class="navbar-nav margin-auto">
					<div className="row padding-left-8">
						<div className="col-sm-4">
							<li class="nav-item active">
								<a class="nav-link color-black" href="#">
									Home <span class="sr-only">(current)</span>
								</a>
							</li>
						</div>
						<div className="col-sm-4">
							<li class="nav-item">
								<a class="nav-link color-black" href="#">
									Posts
								</a>
							</li>
						</div>
						<div className="col-sm-4">
						<li class="nav-item">
								<a class="nav-link color-black" href="#">
									About
								</a>
							</li>
						</div>
					</div>
				</ul>
				<div className="row">
                        <button type="button" class="btn color-blue-283295 ml-3 mr-3 text-white">Log in</button>
                        <button type="button" class="btn color-blue-283295 ml-3 mr-3 text-white">Sign Up</button>
				</div>
			</div>
		</nav>
);

export default Header;