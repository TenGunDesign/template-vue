const core = class AppCore {
	constructor() {
		//eslint-disable-next-line
		if (!!AppCore.instance) {
			return AppCore.instance;
		}

		AppCore.instance = this;

		this.App = null;
		this.CurView = null;

		this.BuildTarget = process.env.VUE_APP_BUILD_TARGET;
		this.Content = window.app_localized_content;

		return this;
	}

	//Vue plugin registration hook
	install(vue) {
		//Attach this library to the global Vue instance
		vue.prototype.$core = this;

		//Also attach this library to the window while debugging so we can call it from the browser devtools
		if (process.env.NODE_ENV !== 'production') {
			window.$core = this;
		}
	}

	//Log messages to the console when not in production environment
	Log(msg) {
		if (process.env.NODE_ENV !== 'production') {
			//eslint-disable-next-line
			console.log(msg);
		}
	}

	//Non-UI-blocking delay
	/*
	Example use:
	myElement.classList.add('fancyMovement');

	//Wait for animation to complete
	await Wait(2500);

	//Do stuff with myElement after fancy animation
	*/
	async Wait(ms) {
		return new Promise((resolve) => setTimeout(resolve, ms));
	}

	//Throttles event listeners that fire rapid events like 'resize', 'mousemove', etc...
	//so that they only fire a maximum of once every <delay>ms.
	/*
	Example use: (processes the 'mousemove' event a maximum of once every 200ms)
	document.addEventListener('mousemove', Throttle((evt) => {
		//do stuff with evt.x & evt.y
	}, 200));
	*/
	Throttle(func, delay) {
		let prev = Date.now() - delay;
		return (...args) => {
			let cur = Date.now();
			if (cur - prev >= delay) {
				prev = cur;
				func.apply(null, args);
			}
		};
	}
	//Debounce event listeners that fire rapid events like 'resize', 'mousemove', etc...
	//so that they wait until <delay>ms time has passed before processing.
	/*
	Example use: (waits until the window is done with it's 'resize' events for at least 200ms before firing)
	window.addEventListener('resize', Debounce((evt) => {
		//do stuff with the new window size
	}, 200));
	*/
	Debounce(func, delay) {
		let timeout = null;
		return (...args) => {
			let later = (() => {
				timeout = null;
				func.apply(null, args);
			});
			if (timeout !== null) {
				clearTimeout(timeout);
			}
			timeout = setTimeout(later, delay);
		};
	}

	//Embeds a 'svg' inline from an 'img' to make it available for css manipulation
	//Note: This is an 'async' call, so be sure to 'await' it if you need to do any immediate manipulation
	/*
	Example use:
	EmbedSVG(document.getElementById('myImgTag'));

	before: <img id='myImgTag' src='./../assets/img/myImg.svg'>
	after: <svg id='myImgTag' class='embedded-svg' ...>...</svg>
	*/
	async EmbedSVG(imgEle) {
		let id = imgEle.getAttribute('id');
		let src = imgEle.getAttribute('src');
		let classes = imgEle.getAttribute('class');

		try {
			let response = await fetch(src, {
				method: 'GET'
			});
			let result = await response.text();
			//Insert the straight 'svg' code after the passed in 'img' tag
			imgEle.insertAdjacentHTML('afterend', result);
			let newEle = imgEle.nextElementSibling;

			//Remove the old img tag
			imgEle.remove();

			//Copy old 'id' & 'class' attributes to the new 'svg' tag
			if (id !== null) {
				newEle.setAttribute('id', id);
			}
			if (classes !== null) {
				classes += " ";
			} else {
				classes = "";
			}
			classes += "embedded-svg";
			newEle.setAttribute('class', classes);
		} catch (err) {
			this.Log(err);
		}
	}

	//Does a locale-inspecific case-insensitive string comparison ("a" === "A" === "ä" === "Ä" === "à" === "ã" etc...)
	StringEquals(searchFor, searchIn) {
		return (searchIn.localeCompare(searchFor, undefined, { sensitivity : 'base' }) === 0);
	}

	//Wrapper for updating Vuex store data
	SetStoreData(property, data) {
		this.App.$store.commit('update', {
			property: property,
			data: data
		});
	}

	//Loads & returns json data at the specified url
	/*
	Example use:
	let myJsonData = await FetchGetJson("/data/myData.json");
	*/
	async FetchGetJson(url) {
		try {
			let response = await fetch(url, {
				method: 'GET',
				headers: {
					'Accept': 'application/json'
				}
			});
			if (response.ok) {
				let result = {};
				if (response.status !== 204) {
					result = await response.json();
				}

				return result;
			} else {
				this.Log(`FetchGetJson call to: "${url}" returned: "${response.status}: ${response.statusText}`);

				return null;
			}
		} catch (err) {
			this.Log(err);

			return null;
		}
	}

	//Posts data to the specified url & returns json result data
	/*
	Example use:
	let myResult = await FetchPostJson("/login", { user: 'username', pass: 'password' });
	*/
	async FetchPostJson(url, data) {
		try {
			let response = await fetch(url, {
				method: 'POST',
				headers: {
					'Accept': 'application/json',
					'Content-type': 'application/json; charset=utf-8'
				},
				body: JSON.stringify(data)
			});
			if (response.ok) {
				let result = {};
				if (response.status !== 204) {
					result = await response.json();
				}

				return result;
			} else {
				this.Log(`FetchPostJson call to: "${url}" returned: "${response.status}: ${response.statusText}"`);

				return null;
			}
		} catch (err) {
			this.Log(err);

			return null;
		}
	}
};

export default new core;
