import React from 'react'
import './grid.css'

const Grid = props => {

	return (
		<div className="grid">
			<Day index="1" day="24" dayName="Juma" fajr="04:06" maghrib="19:13" />
			<Day index="2" day="25" dayName="Shanba" fajr="04:04" maghrib="19:14" />
			<Day index="3" day="26" dayName="Yakshanba" fajr="04:03" maghrib="19:15" />
			<Day index="4" day="27" dayName="Dushanba" fajr="04:01" maghrib="19:16" />
			<Day index="5" day="28" dayName="Seshanba" fajr="03:59" maghrib="19:17" />
			<Day index="6" day="29" dayName="Chorshanba" fajr="03:57" maghrib="19:18" />
			<Day index="7" day="30" dayName="Payshanba" fajr="03:56" maghrib="19:19" />
			<Day index="8" day="1" dayName="Juma" fajr="03:54" maghrib="19:21" />
			<Day index="9" day="2" dayName="Shanba" fajr="03:52" maghrib="19:22" />
			<Day index="10" day="3" dayName="Yakshanba" fajr="03:51" maghrib="19:23" />
			<Day index="11" day="4" dayName="Dushanba" fajr="03:49" maghrib="19:24" />
			<Day index="12" day="5" dayName="Seshanba" fajr="03:48" maghrib="19:25" />
			<Day index="13" day="6" dayName="Chorshanba" fajr="03:46" maghrib="19:26" />
			<Day index="14" day="7" dayName="Payshanba" fajr="03:44" maghrib="19:27" />
			<Day index="15" day="8" dayName="Juma" fajr="03:43" maghrib="19:28" />
			<Day index="16" day="9" dayName="Shanba" fajr="03:41" maghrib="19:29" />
			<Day index="17" day="10" dayName="Yakshanba" fajr="03:40" maghrib="19:30" />
			<Day index="18" day="11" dayName="Dushanba" fajr="03:38" maghrib="19:31" />
			<Day index="19" day="12" dayName="Seshanba" fajr="03:37" maghrib="19:32" />
			<Day index="20" day="13" dayName="Chorshanba" fajr="03:35" maghrib="19:33" />
			<Day index="21" day="14" dayName="Payshanba" fajr="03:34" maghrib="19:34" />
			<Day index="22" day="15" dayName="Juma" fajr="03:33" maghrib="19:35" />
			<Day index="23" day="16" dayName="Shanba" fajr="03:31" maghrib="19:36" />
			<Day index="24" day="17" dayName="Yakshanba" fajr="03:30" maghrib="19:37" />
			<Day index="25" day="18" dayName="Dushanba" fajr="03:29" maghrib="19:38" />
			<Day index="26" day="19" dayName="Seshanba" fajr="03:27" maghrib="19:39" />
			<Day index="27" day="20" dayName="Chorshanba" fajr="03:26" maghrib="19:40" />
			<Day index="28" day="21" dayName="Payshanba" fajr="03:25" maghrib="19:41" />
			<Day index="29" day="22" dayName="Juma" fajr="03:24" maghrib="19:42" />
			<Day index="30" day="23" dayName="Shanba" fajr="03:22" maghrib="19:42" />
		</div>
	)
}

const Day = ({ index, day, dayName, fajr, maghrib }) => {

	return (
		<div className="item">
			<div className="content">
				<span className="index">{index} - kun</span>
				<span className="day">{day}</span>
				<span className="dayName">{dayName}</span>
				<span className="fajr">{fajr}</span>
				<span className="maghrib">{maghrib}</span>
			</div>
		</div>
	)
}

export default Grid