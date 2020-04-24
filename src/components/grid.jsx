import React from 'react'
import './grid.css'

const Grid = props => {

	return (
		<div className="grid">
			<Day day="24" dayName="Juma" fajr="04:06" maghrib="19:13" />
			<Day day="25" dayName="Shanba" fajr="04:04" maghrib="19:14" />
			<Day day="26" dayName="Yakshanba" fajr="04:03" maghrib="19:15" />
			<Day day="27" dayName="Dushanba" fajr="04:01" maghrib="19:16" />
			<Day day="28" dayName="Seshanba" fajr="03:59" maghrib="19:17" />
			<Day day="29" dayName="Chorshanba" fajr="03:57" maghrib="19:18" />
			<Day day="30" dayName="Payshanba" fajr="03:56" maghrib="19:19" />
			<Day day="1" dayName="Juma" fajr="03:54" maghrib="19:21" />
			<Day day="2" dayName="Shanba" fajr="03:52" maghrib="19:22" />
			<Day day="3" dayName="Yakshanba" fajr="03:51" maghrib="19:23" />
			<Day day="4" dayName="Dushanba" fajr="03:49" maghrib="19:24" />
			<Day day="5" dayName="Seshanba" fajr="03:48" maghrib="19:25" />
			<Day day="6" dayName="Chorshanba" fajr="03:46" maghrib="19:26" />
			<Day day="7" dayName="Payshanba" fajr="03:44" maghrib="19:27" />
			<Day day="8" dayName="Juma" fajr="03:43" maghrib="19:28" />
			<Day day="9" dayName="Shanba" fajr="03:41" maghrib="19:29" />
			<Day day="10" dayName="Yakshanba" fajr="03:40" maghrib="19:30" />
			<Day day="11" dayName="Dushanba" fajr="03:38" maghrib="19:31" />
			<Day day="12" dayName="Seshanba" fajr="03:37" maghrib="19:32" />
			<Day day="13" dayName="Chorshanba" fajr="03:35" maghrib="19:33" />
			<Day day="14" dayName="Payshanba" fajr="03:34" maghrib="19:34" />
			<Day day="15" dayName="Juma" fajr="03:33" maghrib="19:35" />
			<Day day="16" dayName="Shanba" fajr="03:31" maghrib="19:36" />
			<Day day="17" dayName="Yakshanba" fajr="03:30" maghrib="19:37" />
			<Day day="18" dayName="Dushanba" fajr="03:29" maghrib="19:38" />
			<Day day="19" dayName="Seshanba" fajr="03:27" maghrib="19:39" />
			<Day day="20" dayName="Chorshanba" fajr="03:26" maghrib="19:40" />
			<Day day="21" dayName="Payshanba" fajr="03:25" maghrib="19:41" />
			<Day day="22" dayName="Juma" fajr="03:24" maghrib="19:42" />
			<Day day="23" dayName="Shanba" fajr="03:22" maghrib="19:42" />
		</div>
	)
}

const Day = ({ day, dayName, fajr, maghrib }) => {

	return (
		<div className="item">
			<div className="content">
				<span className="day">{day}</span>
				<span className="dayName">{dayName}</span>
				<span className="fajr">{fajr}</span>
				<span className="maghrib">{maghrib}</span>
			</div>
		</div>
	)
}

export default Grid