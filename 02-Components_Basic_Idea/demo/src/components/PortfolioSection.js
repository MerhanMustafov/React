import { PortfolioItem } from "./PortfolioItem";
function Portfolio(props) {
	return (
		<section id="tmPortfolio">
			<div className="container-fluid">
				<div className="row">
					<div className="col-12">
						<PortfolioItem
							name="Project Manager"
							description="New Company"
							small="(2019 January to Present)"
							text="Nullam a tellus ultricies, ornare purus vel,
							porttitor massa. Aliquam facilisis purus ac
							eros sollicidudin, in mollis neque
							facilisis. Duis malesuada, mi non elementum
							malesuada."
							class="tm-bg-green"
							classText="tm-text-green"
						/>
						<PortfolioItem
							name="Senior UX Designer"
							description="Studio One"
							small="(2017 April to 2018 Dec)"
							text="Phasellus ac nulla egestas, malesuada dolor
							quis, scelerisque arcu. Morbi aliquam, nunc
							vel blandit mattis, sapien nisl convallis
							sem, quis hendrerit nisl tellus in lectus.
							Proin at nibh bibendum, tincidunt mauris sit
							amet, porta risus. Integer id malesuada
							ligula."
							class="tm-bg-orange"
							classText="tm-text-orange"
						/>
						<PortfolioItem
							name="Graphic Designer"
							description="Digital Com"
							small="(2015 Jan to 2016 Dec)"
							text="Etiam porta est nisl, consectetur dapibus
							ante faucibus id. Nunc ullamcorper a quam
							eget tincidunt. Proin vehicula mauris ipsum,
							euismod dignissim dolor convallis ac."
							class="tm-bg-blue"
							classText="tm-text-blue"
						/>
						<PortfolioItem
							name="Design School"
							description="Art Design College"
							small="(2012 May to 2014 Dec)"
							text="Etiam porta est nisl, consectetur dapibus
							ante faucibus id. Nunc ullamcorper a quam
							eget tincidunt. Proin vehicula mauris ipsum,
							euismod dignissim dolor convallis ac."
							class="tm-bg-dark-gray"
							classText="tm-text-dark-gray"
						/>
					</div>
				</div>
			</div>
		</section>
	);
}

export { Portfolio };
