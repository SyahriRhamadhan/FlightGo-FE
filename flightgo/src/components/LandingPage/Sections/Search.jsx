import React from 'react'
import '../Search/style.css'

export default function Search() {
  return (
    <div>
      	<div id="booking" className="section">
			<div className="section-center">
				<div className="container">
					<div className="row">
						<div className="booking-form">
							<form>
								<div className="form-group">
									<div className="form-checkbox">
										<label for="roundtrip">
											<input type="radio" id="roundtrip" name="flight-type"/>
											<span></span>Roundtrip
										</label>

										<label for="one-way">
											<input type="radio" id="one-way" name="flight-type"/>
											<span></span>One way
										</label>
									</div>
								</div>

								<div className="row">
									<div className="col-md-6">
										<div className="form-group">
											<span className="form-label">Flight from</span>
											<input className="form-control" type="text" placeholder="Jakarta"/>
										</div>
									</div>

									<div className="col-md-6">
										<div className="form-group">
											<span className="form-label">Going to</span>
											<input className="form-control" type="text" placeholder="Bali"/>
										</div>
									</div>
								</div>

								<div className="row">
									<div className="col-md-3">
										<div className="form-group">
											<span className="form-label">Departing</span>
											<input className="form-control" type="date" required/>
										</div>
									</div>

									<div className="col-md-3">
										<div className="form-group">
											<span className="form-label">Returning</span>
											<input className="form-control" type="date" required/>
										</div>
									</div>

									<div className="col-md-2">
										<div className="form-group">
											<span className="form-label">Passenger</span>
											<input className="form-control" type="text" placeholder="0"/>
										</div>
									</div>	
								</div>

								<div className="row">
									<div className="col-md-3">
										<div className="form-btn">
											<button className="submit-btn">Show flights</button>
										</div>
									</div>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
    </div>
  )
}
