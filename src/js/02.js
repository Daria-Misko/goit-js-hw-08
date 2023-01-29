import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const STORAGE_KEY = 'videoplayer-current-time';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('timeupdate', throttle(saveTime, 1000));

function saveTime(data) {
	const time = data.seconds;
	localStorage.setItem(STORAGE_KEY, time);
}
function updateTime() {
	const currentTime = localStorage.getItem(STORAGE_KEY);
	console.log(currentTime);
	if (currentTime) {
	player.setCurrentTime(currentTime);
	}
}
updateTime();