import index from './indexController';

const  controllerInit = {
	init(router) {
		router.get("/index/index", index.index());
		router.get("/index/update", index.update());
		router.get("/index/star", index.star());
		router.get("/index/hands", index.hands());
		router.get("/index/getAdv", index.getAdv());
	}
}

export default controllerInit;
