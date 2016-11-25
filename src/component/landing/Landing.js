/**
 * Created by Teerapat on 11/21/2016.
 */
import React, { Component } from 'react';
import styles from './landing.css';

class Landing extends Component {
	render() {
		return (
			<div>
				<div className={styles.introheader}>
					<div className="container">

						<div className="row">
							<div className="col-lg-12">
								<div className={styles.intromessage}>
									<h1>Landing Page</h1>
									<h3>A Template by Start Bootstrap</h3>
									<hr className={styles.introdivider}/>
									<ul className="list-inline intro-social-buttons">
										<li>
											<a href="https://twitter.com/SBootstrap" className="btn btn-default btn-lg"><i className="fa fa-twitter fa-fw"></i> <span className="network-name">Twitter</span></a>
										</li>
										<li>
											<a href="https://github.com/IronSummitMedia/startbootstrap" className="btn btn-default btn-lg"><i className="fa fa-github fa-fw"></i> <span className="network-name">Github</span></a>
										</li>
										<li>
											<a href="#" className="btn btn-default btn-lg"><i className="fa fa-linkedin fa-fw"></i> <span className="network-name">Linkedin</span></a>
										</li>
									</ul>
								</div>
							</div>
						</div>

					</div>
				</div>
			</div>
		);
	}
}


export default Landing;
