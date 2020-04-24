import React from 'react'
import './duas.css'

const Duas = ({ fajr }) => {
	return (
		<div className="duas">
			{
				fajr ?
				<div>
					<p className="title">
						Saharlik duosi
					</p>
					<p className="arabic">
						وَبِصَوْمِ غَدٍ نَّوَيْتُ مِنْ شَهْرِ رَمَضَانَ
					</p>
					<p>
						<span className="waw">V</span>a bi<span className="sod">s</span>o<span className="waw">v</span>mi g'odan na<span className="waw">v</span>aytu min shahri roma<span className="dod">z</span>on.
					</p>
					<p className="title">
						(Imom Abu Dovud)
					</p>
				</div> :
				<div>
				<p className="title">
					Iftorlik duosi
				</p>
				<p className="arabic">
					اللَهُمَّ لَكَ صُمْتُ وَ بِكَ آمَنْتُ وَ عَلَيْكَ تَوَكَلْت وَ عَلَى رِزْقِكَ اَفْطَرْتُ فَاغْفِرْلِى يَا غَفَّارُ مَا قَدَّمْتُ وَ مَأ اَخَّرْتُ
				</p>
				<p>
					Allohumma laka <span className="sod">s</span>umtu <span className="waw">v</span>a bika amantu <span className="waw">v</span>a <span className="ayn">a</span>layka tavakkaltu <span className="waw">v</span>a <span className="ayn">a</span>la rizqika aftartu, fag'firli ya g'offaru ma qoddartu <span className="waw">v</span>a ma axxortu.
				</p>
				<p className="title">
						(Imom Abu Dovud)
					</p>
				</div>
			}
		</div>
	)
}

export default Duas